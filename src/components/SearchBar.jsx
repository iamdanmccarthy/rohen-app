import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => onSearch(value), 200);
    return () => clearTimeout(timer);
  }, [value, onSearch]);

  return (
    <div className="relative w-full max-w-md">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search animals..."
        className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-amber-200 bg-white font-nunito font-semibold text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 shadow-sm text-base transition-all"
      />
      {value && (
        <button
          onClick={() => setValue('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-100 transition-colors"
        >
          ×
        </button>
      )}
    </div>
  );
}
