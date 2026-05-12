'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { tabs } from '@/data/tabs';

interface ExplainButtonProps {
  code: string;
  onResult: (code: string) => void;
}

const ExplainButton = ({
  code,

  onResult,
}: ExplainButtonProps) => {
  const [loading, setLoading] = useState(false);

  const gradient =
    tabs.find((tab) => tab.id === 'explain')?.gradient ||
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';

  return (
    <Button
      disabled={loading}
      className={`transition-all hover:scale-102 cursor-pointer text-white mt-7 rounded-md bg-linear-to-r ${gradient}`}
      onClick={async () => {
        try {
          setLoading(true);
          const response = await fetch('/api/explain', {
            method: 'POST', // Must match your export const POST
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              code, // The text from your textarea/input
            }),
          });

          const result = await response.json();

          if (result.data) {
            console.log('Explanation:', result.data.explanation);
            onResult(result.data.explanation);
            // Update a state here to display the code in your UI
          }
        } catch (err) {
          console.error('Fetch error:', err);
        } finally {
          setLoading(false);
        }
      }}
    >
      {loading ? 'Explaining...' : 'Explain Code'}
    </Button>
  );
};

export default ExplainButton;
