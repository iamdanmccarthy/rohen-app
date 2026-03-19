import { useState } from 'react';

export default function ShuffleButton({ onClick }) {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 400);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-nunito font-black text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-150 hover:shadow-xl"
    >
      <span className={`text-2xl transition-transform duration-400 ${spinning ? 'rotate-180' : ''}`}
        style={{ transition: spinning ? 'transform 0.4s ease' : 'transform 0.4s ease', transform: spinning ? 'rotate(360deg)' : 'rotate(0deg)' }}
      >
        🎲
      </span>
      Shuffle!
    </button>
  );
}
