import { useWikipediaImage } from '../hooks/useWikipediaImage';

export default function AnimalImage({ wikipediaTitle, emoji, alt, className = '', imgClassName = '' }) {
  const { imageUrl, isLoading } = useWikipediaImage(wikipediaTitle);

  if (isLoading) {
    return (
      <div className={`bg-amber-100 animate-pulse flex items-center justify-center ${className}`}>
        <span className="text-6xl opacity-30">{emoji}</span>
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div className={`bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center ${className}`}>
        <span className="text-7xl">{emoji}</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-amber-50 ${className}`}>
      <img
        src={imageUrl}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${imgClassName}`}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-7xl">${emoji}</div>`;
        }}
      />
    </div>
  );
}
