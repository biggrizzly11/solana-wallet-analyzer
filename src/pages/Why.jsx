function Why() {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Why Analyze Your Wallet?
      </h1>
      
      <div className="space-y-8">
        <section className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Understanding Your Solana Activity</h2>
          <p className="text-gray-300 leading-relaxed">
            Our advanced analytics engine provides deep insights into your Solana blockchain activity,
            helping you understand your engagement and participation in the ecosystem.
          </p>
        </section>

        <section className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">How Scoring Works</h2>
          <p className="text-gray-300 mb-4">
            We analyze various factors using cutting-edge algorithms:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              Transaction history and patterns
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              Token holdings and diversity
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              NFT collections and rarity
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              DeFi participation and yield
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Why; 