import { expectAssignable } from 'tsd';
import type { Model } from '../target/number/index';

declare global {
  export namespace PNumberJson {
    type Price = 100 | 200 | 300;
    type NullablePrice = 50 | 100;
    type FloatPrice = 1.5 | 2.5 | 3.5;
    type Config = { tier: string; enabled: boolean };
  }
}

// Test basic model type
expectAssignable<Model>({
  id: 0,
  price: 100 as PNumberJson.Price,
  nullablePrice: null,
  floatPrice: 1.5 as PNumberJson.FloatPrice,
  config: { tier: 'basic', enabled: true }
});

// Test with nullablePrice value
expectAssignable<Model>({
  id: 0,
  price: 200 as PNumberJson.Price,
  nullablePrice: 50 as PNumberJson.NullablePrice,
  floatPrice: 2.5 as PNumberJson.FloatPrice,
  config: null
});
