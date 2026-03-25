/**
 * usePrices — landing page version
 *
 * Fetches live Pro prices from the Spendable get-prices Edge Function.
 * Amounts are in minor units (cents/pence). Cached in module memory.
 * Falls back to known prices if the fetch fails.
 */

import { useState, useEffect } from 'react';

export type CurrencyKey = 'usd' | 'gbp' | 'eur' | 'cad' | 'aud';

export interface PriceMap {
  usd: number | null;
  gbp: number | null;
  eur: number | null;
  cad: number | null;
  aud: number | null;
}

// Fallback in minor units if fetch fails
const FALLBACK: PriceMap = { usd: 1000, gbp: 800, eur: 1000, cad: 1300, aud: 1500 };

const SYMBOLS: Record<CurrencyKey, string> = {
  usd: '$', gbp: '£', eur: '€', cad: 'C$', aud: 'A$',
};

export function formatPrice(amount: number | null, currency: CurrencyKey): string {
  if (amount === null) return '—';
  const major = amount / 100;
  return `${SYMBOLS[currency]}${major % 1 === 0 ? major.toFixed(0) : major.toFixed(2)}`;
}

// Module-level cache — fetches once per page load
let _cache: PriceMap | null = null;
let _promise: Promise<PriceMap> | null = null;

const PRICES_URL = 'https://wrzvsnejifvhjtyaupyj.supabase.co/functions/v1/get-prices';

function fetchPrices(): Promise<PriceMap> {
  if (_cache) return Promise.resolve(_cache);
  if (_promise) return _promise;

  _promise = fetch(PRICES_URL)
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then((data: PriceMap) => { _cache = data; return data; })
    .catch(() => { _promise = null; return FALLBACK; });

  return _promise;
}

export function usePrices() {
  const [prices, setPrices] = useState<PriceMap>(_cache ?? FALLBACK);
  const [loading, setLoading] = useState(!_cache);

  useEffect(() => {
    if (_cache) return;
    fetchPrices().then(p => { setPrices(p); setLoading(false); });
  }, []);

  return {
    prices,
    loading,
    /** Formatted price e.g. "$10" */
    format: (c: CurrencyKey) => formatPrice(prices[c], c),
    /** Price per month label e.g. "$10/mo" */
    label:  (c: CurrencyKey) => `${formatPrice(prices[c], c)}/mo`,
    /** USD price as a plain number for display e.g. 10 */
    usdAmount: prices.usd !== null ? prices.usd / 100 : null,
  };
}
