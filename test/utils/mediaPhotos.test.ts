import { describe, expect, it } from 'vitest';

import { extractPhotos } from '../../app/utils/mediaPhotos';
import { type Media, MediaKind, PhotoSize } from '../../shared/types/shared';

function makePhoto(id: string): Media {
  return {
    Categorie: MediaKind.Photos,
    MediaItems: [
      { Category: PhotoSize.Medium, Url: `http://cdn.example.com/${id}-4.jpg` },
      { Category: PhotoSize.Large, Url: `http://cdn.example.com/${id}-6.jpg` },
    ],
  } as Media;
}

describe('extractPhotos', () => {
  it('returns empty shape when input is undefined', () => {
    expect(extractPhotos(undefined)).toEqual({
      photos: [],
      headPhoto: undefined,
      extraGalleryPhotos: [],
    });
  });

  it('picks head + up to 4 extras from photo media', () => {
    const media = ['a', 'b', 'c', 'd', 'e', 'f'].map(makePhoto);
    const { headPhoto, extraGalleryPhotos } = extractPhotos(media);

    expect(headPhoto?.medium).toBe('https://cdn.example.com/a-4.jpg');
    expect(extraGalleryPhotos.map((p) => p.medium)).toEqual([
      'https://cdn.example.com/b-4.jpg',
      'https://cdn.example.com/c-4.jpg',
      'https://cdn.example.com/d-4.jpg',
      'https://cdn.example.com/e-4.jpg',
    ]);
  });
});
