import FactBadge from './FactBadge';

export default function FactGrid({ facts }) {
  const factKeys = ['diet', 'location', 'habitat', 'lifespan', 'size'];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {factKeys.map((key) =>
        facts[key] ? <FactBadge key={key} factKey={key} value={facts[key]} /> : null
      )}
    </div>
  );
}
