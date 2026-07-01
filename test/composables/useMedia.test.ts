import { describe, expect, it } from 'vitest';

import { useMedia } from '../../app/composables/useMedia';
import {
  type Media,
  MediaItem,
  MediaKind,
  PhotoSize,
} from '../../shared/types/shared';

function makeMedia(
  id: string,
  categorie: MediaKind,
  sizes: PhotoSize[] = [],
): Media {
  return {
    Categorie: categorie,
    MediaItems: sizes.map((size) => ({
      Category: size,
      Url: `http://cdn.example.com/${id}-${size}.jpg`,
    })) as unknown as MediaItem[],
  } as Media;
}

const ALL_SIZES = [
  PhotoSize.Small,
  PhotoSize.Medium,
  PhotoSize.Large,
  PhotoSize.Largest,
];

describe('useMedia', () => {
  it('returns empty photos + undefined head when input is undefined', () => {
    const { photos, headPhoto, extraGalleryPhotos } = useMedia(undefined);
    expect(photos.value).toEqual([]);
    expect(headPhoto.value).toBeUndefined();
    expect(extraGalleryPhotos.value).toEqual([]);
  });

  it('filters out non-photo media', () => {
    const { photos } = useMedia([
      makeMedia('a', MediaKind.Brochure, ALL_SIZES),
    ]);
    expect(photos.value).toEqual([]);
  });

  it('maps photos to secure medium + large URLs', () => {
    const { photos, headPhoto } = useMedia([
      makeMedia('a', MediaKind.Photos, ALL_SIZES),
      makeMedia('b', MediaKind.Photos, ALL_SIZES),
    ]);
    expect(photos.value).toEqual([
      {
        medium: 'https://cdn.example.com/a-4.jpg',
        large: 'https://cdn.example.com/a-6.jpg',
      },
      {
        medium: 'https://cdn.example.com/b-4.jpg',
        large: 'https://cdn.example.com/b-6.jpg',
      },
    ]);
    expect(headPhoto.value).toEqual({
      medium: 'https://cdn.example.com/a-4.jpg',
      large: 'https://cdn.example.com/a-6.jpg',
    });
  });

  it('extraGalleryPhotos returns photos 1..4 (max 4 items)', () => {
    const items = ['a', 'b', 'c', 'd', 'e', 'f'].map((id) =>
      makeMedia(id, MediaKind.Photos, ALL_SIZES),
    );
    const { extraGalleryPhotos } = useMedia(items);
    expect(
      extraGalleryPhotos.value.map((p: { large: string }) => p.large),
    ).toEqual([
      'https://cdn.example.com/b-6.jpg',
      'https://cdn.example.com/c-6.jpg',
      'https://cdn.example.com/d-6.jpg',
      'https://cdn.example.com/e-6.jpg',
    ]);
  });
});
