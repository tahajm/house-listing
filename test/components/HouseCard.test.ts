import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import HouseCard from '../../app/components/HouseCard.vue';
import type { ListingCard } from '../../shared/types/api';
import type { PromoLabel } from '../../shared/types/upstream';

function makeHouse(overrides: Partial<ListingCard> = {}): ListingCard {
  return {
    Id: 'abc-123',
    Adres: '1 Test Street',
    Woonplaats: 'Testtown',
    Postcode: '1000 AA',
    Koopprijs: 750000,
    AantalKamers: 4,
    Woonoppervlakte: 120,
    Perceeloppervlakte: 80,
    Foto: 'http://cloud.example.com/a-small.jpg',
    FotoMedium: 'http://cloud.example.com/a-medium.jpg',
    FotoLarge: 'http://cloud.example.com/a-large.jpg',
    FotoLargest: 'http://cloud.example.com/a-largest.jpg',
    PromoLabel: makePromoLabel(),
    MakelaarNaam: 'Test Makelaars',
    ...overrides,
  };
}

function makePromoLabel(photos: string[] = []): PromoLabel {
  return { PromotionPhotos: photos } as PromoLabel;
}

describe('HouseCard', () => {
  it('shows the address and location the user reads', async () => {
    const wrapper = await mountSuspended(HouseCard, {
      props: { house: makeHouse() },
    });

    const heading = wrapper.get('h2').text();
    expect(heading).toContain('1 Test Street');
    expect(heading).toContain('1000 AA Testtown');
  });

  it('lets user navigate to the detail page for this listing', async () => {
    const wrapper = await mountSuspended(HouseCard, {
      props: { house: makeHouse() },
    });

    expect(wrapper.find('a[href="/detail/abc-123"]').exists()).toBe(true);
  });

  it('renders promo photos when the listing has them', async () => {
    const house = makeHouse({
      PromoLabel: makePromoLabel([
        'http://cloud.example.com/promo-1.jpg',
        'http://cloud.example.com/promo-2.jpg',
      ]),
    });
    const wrapper = await mountSuspended(HouseCard, { props: { house } });

    const alts = wrapper.findAll('img').map((img) => img.attributes('alt'));
    expect(alts).toEqual([
      'Hero photo of 1 Test Street',
      'Photo 1 of 1 Test Street',
      'Photo 2 of 1 Test Street',
    ]);
  });

  it('renders only the hero image when there are no promo photos', async () => {
    const wrapper = await mountSuspended(HouseCard, {
      props: { house: makeHouse() },
    });

    const images = wrapper.findAll('img');
    expect(images).toHaveLength(1);
    expect(images[0].attributes('alt')).toBe('Hero photo of 1 Test Street');
  });
});
