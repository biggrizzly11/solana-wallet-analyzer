import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-violet-800 to-purple-900 text-white border-b border-purple-500/30 shadow-lg shadow-purple-500/20">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">
          SOLANA SCORER
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              <span className="relative z-10">Leaderboard</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/why" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              <span className="relative z-10">Why</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 