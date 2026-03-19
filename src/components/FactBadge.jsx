const FACT_CONFIG = {
  diet: { icon: '🍽️', label: 'Diet', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
  location: { icon: '📍', label: 'Location', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
  habitat: { icon: '🌿', label: 'Habitat', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
  lifespan: { icon: '⏳', label: 'Lifespan', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800' },
  size: { icon: '📏', label: 'Size', bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' },
};

const CONSERVATION_CONFIG = {
  'Least Concern': { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-800', dot: 'bg-green-500' },
  'Near Threatened': { bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-800', dot: 'bg-lime-500' },
  'Vulnerable': { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'Endangered': { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-800', dot: 'bg-orange-500' },
  'Critically Endangered': { bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-800', dot: 'bg-red-500' },
  'Data Deficient': { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', dot: 'bg-gray-400' },
  'Not Evaluated': { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', dot: 'bg-gray-400' },
};

export function ConservationBadge({ status }) {
  const config = CONSERVATION_CONFIG[status] || CONSERVATION_CONFIG['Not Evaluated'];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold border ${config.bg} ${config.border} ${config.text}`}>
      <span className={`w-2 h-2 rounded-full ${config.dot}`} />
      {status}
    </span>
  );
}

export default function FactBadge({ factKey, value }) {
  const config = FACT_CONFIG[factKey];
  if (!config) return null;
  return (
    <div className={`flex items-start gap-3 p-4 rounded-2xl border ${config.bg} ${config.border}`}>
      <span className="text-2xl flex-shrink-0 mt-0.5">{config.icon}</span>
      <div>
        <p className={`text-xs font-black uppercase tracking-widest ${config.text} opacity-70 mb-0.5`}>{config.label}</p>
        <p className={`text-sm font-bold ${config.text}`}>{value}</p>
      </div>
    </div>
  );
}
