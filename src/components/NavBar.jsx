import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-jungle shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-3xl">🌍</span>
          <div>
            <span className="text-white font-nunito font-black text-xl tracking-tight group-hover:text-amber-300 transition-colors">
              Rohen&apos;s Animal World
            </span>
            <p className="text-emerald-200 text-xs font-nunito font-semibold -mt-0.5 hidden sm:block">
              100 Amazing Animals
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="bg-amber-400 hover:bg-amber-300 text-stone-900 font-nunito font-bold px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
        >
          All Animals
        </Link>
      </div>
    </nav>
  );
}
