import { useParams, useNavigate, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import animals from '../data/animals';
import AnimalImage from '../components/AnimalImage';
import FactGrid from '../components/FactGrid';
import ShuffleButton from '../components/ShuffleButton';
import { ConservationBadge } from '../components/FactBadge';

export default function DetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = animals.findIndex((a) => a.slug === slug);
  const animal = animals[currentIndex];

  // Scroll to top when animal changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Update document title
  useEffect(() => {
    if (animal) {
      document.title = `${animal.name} — Rohen's Animal World`;
    }
    return () => {
      document.title = "Rohen's Animal World";
    };
  }, [animal]);

  if (!animal) return <Navigate to="/" replace />;

  const prevAnimal = animals[(currentIndex - 1 + animals.length) % animals.length];
  const nextAnimal = animals[(currentIndex + 1) % animals.length];

  const handleShuffle = () => {
    let randomIndex;
    do { randomIndex = Math.floor(Math.random() * animals.length); }
    while (randomIndex === currentIndex);
    navigate(`/${animals[randomIndex].slug}`);
  };

  return (
    <div className="min-h-screen bg-amber-50 animate-fade-in">
      {/* Hero Image */}
      <AnimalImage
        wikipediaTitle={animal.wikipediaTitle}
        emoji={animal.emoji}
        alt={animal.name}
        className="w-full h-72 sm:h-96"
        imgClassName="w-full h-full object-cover"
      />

      {/* Main content card */}
      <div className="max-w-3xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl flex-shrink-0">{animal.emoji}</span>
            <div>
              <h1 className="font-nunito font-black text-3xl sm:text-4xl text-stone-800 leading-tight">
                {animal.name}
              </h1>
              <div className="mt-2">
                <ConservationBadge status={animal.facts.conservation} />
              </div>
            </div>
          </div>

          {/* TLDR Summary */}
          <p className="font-nunito font-semibold text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
            {animal.summary}
          </p>

          {/* Facts Grid */}
          <h2 className="font-nunito font-black text-xl text-stone-700 mb-3">Quick Facts</h2>
          <FactGrid facts={animal.facts} />

          {/* Fun Fact Callout */}
          {animal.facts.funFact && (
            <div className="mt-6 bg-amber-50 border-2 border-amber-300 rounded-2xl p-5">
              <p className="font-nunito font-black text-amber-700 text-sm uppercase tracking-wider mb-2">
                ⭐ Did you know?
              </p>
              <p className="font-nunito font-bold text-stone-700 text-base leading-relaxed">
                {animal.facts.funFact}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          {/* Prev */}
          <Link
            to={`/${prevAnimal.slug}`}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-nunito font-bold px-6 py-3 rounded-full shadow-md transition-all duration-150 hover:shadow-lg w-full sm:w-auto justify-center"
          >
            <span>←</span>
            <span className="max-w-[140px] truncate">{prevAnimal.name}</span>
          </Link>

          {/* Shuffle */}
          <ShuffleButton onClick={handleShuffle} />

          {/* Next */}
          <Link
            to={`/${nextAnimal.slug}`}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-nunito font-bold px-6 py-3 rounded-full shadow-md transition-all duration-150 hover:shadow-lg w-full sm:w-auto justify-center"
          >
            <span className="max-w-[140px] truncate">{nextAnimal.name}</span>
            <span>→</span>
          </Link>
        </div>

        {/* Animal counter */}
        <p className="text-center font-nunito font-semibold text-stone-400 text-sm pb-8">
          Animal {currentIndex + 1} of {animals.length}
        </p>
      </div>
    </div>
  );
}
