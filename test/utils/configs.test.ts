import { describe, expect, it } from 'vitest';

import {
  generatGoogleMapUrl,
  secureImageUrl,
} from '../../app/utils/configs.ts';

describe('secureImageUrl', () => {
  it('rewrites http to https', () => {
    expect(secureImageUrl('http://cdn.example.com/x.jpg')).toBe(
      'https://cdn.example.com/x.jpg',
    );
  });

  it('leaves https untouched', () => {
    expect(secureImageUrl('https://cdn.example.com/x.jpg')).toBe(
      'https://cdn.example.com/x.jpg',
    );
  });

  it('leaves protocol-relative untouched', () => {
    expect(secureImageUrl('//cdn.example.com/x.jpg')).toBe(
      '//cdn.example.com/x.jpg',
    );
  });
});

describe('generatGoogleMapUrl', () => {
  it('builds embed url from lat/lng', () => {
    expect(generatGoogleMapUrl(52.37, 4.89)).toBe(
      'https://maps.google.com/maps?q=52.37,4.89&z=15&output=embed',
    );
  });
});
