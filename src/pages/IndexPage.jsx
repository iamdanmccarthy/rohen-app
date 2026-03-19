import { useState, useCallback } from 'react';
import animals from '../data/animals';
import AnimalCard from '../components/AnimalCard';
import SearchBar from '../components/SearchBar';

const MARQUEE_EMOJIS = ['🦁', '🐘', '🐬', '🦋', '🐼', '🦒', '🐙', '🦈', '🦅', '🐯', '🦓', '🐧', '🦜', '🦏', '🐊', '🦩'];

export default function IndexPage() {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((q) => setQuery(q), []);

  const filtered = animals.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-jungle to-emerald-700 py-10 px-4 text-center shadow-inner">
        <h1 className="font-nunito font-black text-4xl sm:text-5xl text-white mb-2 drop-shadow">
          🌍 Welcome to Animal World!
        </h1>
        <p className="font-nunito font-semibold text-emerald-100 text-lg mb-6">
          Discover {animals.length} amazing animals from around the globe
        </p>

        {/* Emoji marquee */}
        <div className="overflow-hidden max-w-2xl mx-auto mb-6">
          <div className="flex gap-3 text-3xl justify-center flex-wrap">
            {MARQUEE_EMOJIS.map((emoji, i) => (
              <span key={i} className="hover:scale-125 transition-transform duration-200 cursor-default select-none">{emoji}</span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <p className="font-nunito font-bold text-stone-500 text-sm">
          {query
            ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${query}"`
            : `${animals.length} animals, A–Z`}
        </p>
      </div>

      {/* Animal grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-6xl">🤔</span>
            <p className="font-nunito font-black text-2xl text-stone-400 mt-4">
              No animals found for &ldquo;{query}&rdquo;
            </p>
            <p className="font-nunito text-stone-400 mt-2">Try a different search!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((animal) => (
              <AnimalCard key={animal.slug} animal={animal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
