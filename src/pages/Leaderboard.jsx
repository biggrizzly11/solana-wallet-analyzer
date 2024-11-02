function Leaderboard() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Wallet Score Leaderboard
      </h1>
      <div className="bg-gray-900/50 rounded-xl border border-purple-500/30 shadow-lg backdrop-blur-sm overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800/50 text-gray-300">
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Rank</th>
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Wallet Address</th>
              <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-500/20">
            <tr className="text-gray-300 hover:bg-purple-900/20 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-cyan-400 font-bold">#1</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">Example Wallet</td>
              <td className="px-6 py-4 whitespace-nowrap font-bold text-purple-400">1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard; 