import { describe, expect, it } from 'vitest'

import { extractPhotos } from '~/utils/photos'
import { type Media, MediaKind, PhotoSize } from '~~/shared/types/funda-shared'

function makeMedia(id: string, categorie: MediaKind, sizes: PhotoSize[] = []): Media {
  return {
    Categorie: categorie,
    MediaItems: sizes.map((size) => ({
      Category: size,
      Url: `http://cdn.example.com/${id}-${size}.jpg`,
    })),
  }
}

const ALL_SIZES = [PhotoSize.Small, PhotoSize.Medium, PhotoSize.Large, PhotoSize.Largest]

describe('extractPhotos', () => {
  it('returns null hero when no photo-kind media exists', () => {
    expect(extractPhotos(undefined)).toEqual({ heroImage: null, thumbnailImages: [] })
    expect(extractPhotos([makeMedia('a', MediaKind.Brochure, ALL_SIZES)])).toEqual({
      heroImage: null,
      thumbnailImages: [],
    })
  })

  it('builds hero from first photo and thumbnails from rest as medium URLs', () => {
    const result = extractPhotos([
      makeMedia('a', MediaKind.Photos, ALL_SIZES),
      makeMedia('b', MediaKind.Photos, ALL_SIZES),
      makeMedia('c', MediaKind.Photos, ALL_SIZES),
    ])
    expect(result.heroImage).toEqual({
      small: 'https://cdn.example.com/a-1.jpg',
      medium: 'https://cdn.example.com/a-4.jpg',
      large: 'https://cdn.example.com/a-6.jpg',
      largest: 'https://cdn.example.com/a-7.jpg',
    })
    expect(result.thumbnailImages).toEqual([
      'https://cdn.example.com/b-4.jpg',
      'https://cdn.example.com/c-4.jpg',
    ])
  })
})
