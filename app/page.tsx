'use client';

import { useState } from 'react';
import { config } from '@/config/keys';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const analyzeWallet = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.helius.xyz/v0/addresses/${walletAddress}/balances?api-key=${config.HELIUS_API_KEY}`
      );
      const data = await response.json();
      // Implement scoring logic
      setScore(100); // Example score
    } catch (error) {
      console.error('Error analyzing wallet:', error);
    }
    setIsLoading(false);
  };

  // Rest of your component code...
} 