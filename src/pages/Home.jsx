import { useState } from 'react';
import { config } from '../config/keys';

function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeWallet = async () => {
    if (!walletAddress) {
      setError('Please enter a wallet address');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.helius.xyz/v0/addresses/${walletAddress}/balances?api-key=${config.HELIUS_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch wallet data');
      }

      const data = await response.json();
      console.log('Wallet data:', data); // For debugging

      // Example scoring logic - replace with your actual scoring logic
      const calculatedScore = Math.floor(Math.random() * 1000);
      setScore(calculatedScore);
      
    } catch (error) {
      console.error('Error analyzing wallet:', error);
      setError('Failed to analyze wallet. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
          Analyze Your Wallet
        </h1>
        <p className="text-gray-300">Discover your Solana wallet's potential</p>
      </div>

      <div className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-purple-500/30 shadow-lg backdrop-blur-sm">
        <div className="relative">
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter Solana wallet address"
            className="w-full p-4 bg-gray-800/50 text-white border border-purple-500/30 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-purple-400">SOL</span>
          </div>
        </div>

        <button
          onClick={analyzeWallet}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4 rounded-xl font-bold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h8v0z"></path>
              </svg>
              Analyzing...
            </span>
          ) : 'Analyze Wallet'}
        </button>

        {score && (
          <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-purple-500/30 animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">Your Score</h2>
            <div className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              {score}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home; 