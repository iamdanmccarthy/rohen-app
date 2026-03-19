import { useState, useEffect } from 'react';

const CACHE_TTL = 30 * 24 * 60 * 60 * 1000; // 30 days

export function useWikipediaImage(wikipediaTitle) {
  const cacheKey = `wiki_img_v1_${wikipediaTitle}`;

  const getCached = () => {
    try {
      const raw = localStorage.getItem(cacheKey);
      if (!raw) return null;
      const { url, fetchedAt } = JSON.parse(raw);
      if (Date.now() - fetchedAt > CACHE_TTL) {
        localStorage.removeItem(cacheKey);
        return null;
      }
      return url;
    } catch {
      return null;
    }
  };

  const [imageUrl, setImageUrl] = useState(() => getCached());
  const [isLoading, setIsLoading] = useState(() => !getCached());

  useEffect(() => {
    const cached = getCached();
    if (cached) {
      setImageUrl(cached);
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);
    setImageUrl(null);

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikipediaTitle)}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const url = data?.thumbnail?.source || null;
        if (url) {
          localStorage.setItem(cacheKey, JSON.stringify({ url, fetchedAt: Date.now() }));
        }
        setImageUrl(url);
        setIsLoading(false);
      })
      .catch(() => {
        if (!cancelled) {
          setImageUrl(null);
          setIsLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [wikipediaTitle]);

  return { imageUrl, isLoading };
}
