import { Link } from 'react-router-dom';
import AnimalImage from './AnimalImage';
import { ConservationBadge } from './FactBadge';

export default function AnimalCard({ animal }) {
  return (
    <Link
      to={`/${animal.slug}`}
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-200 flex flex-col"
    >
      <AnimalImage
        wikipediaTitle={animal.wikipediaTitle}
        emoji={animal.emoji}
        alt={animal.name}
        className="h-48 w-full"
        imgClassName="group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h2 className="font-nunito font-black text-lg text-stone-800 leading-tight">{animal.name}</h2>
        <ConservationBadge status={animal.facts.conservation} />
      </div>
    </Link>
  );
}
