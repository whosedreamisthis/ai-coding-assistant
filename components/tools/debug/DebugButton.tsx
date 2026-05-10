'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { tabs } from '@/data/tabs';

interface DebugButtonProps {
  code: string;
  error: string;
  onResult: (solution: string) => void;
}

const DebugButton = ({ code, error, onResult }: DebugButtonProps) => {
  const [loading, setLoading] = useState(false);

  const gradient =
    tabs.find((tab) => tab.id === 'debug')?.gradient ||
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';

  return (
    <Button
      disabled={loading}
      className={`text-white mt-7 rounded-md bg-linear-to-r ${gradient}`}
      onClick={async () => {
        try {
          setLoading(true);
          const response = await fetch('/api/debug', {
            method: 'POST', // Must match your export const POST
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              code, // The text from your textarea/input
              error, // The state from your Select component
            }),
          });

          const result = await response.json();

          if (result.data) {
            console.log('Debugged Code:', result.data.debugging);
            onResult(result.data.debugging);
            // Update a state here to display the code in your UI
          }
        } catch (err) {
          console.error('Fetch error:', err);
        } finally {
          setLoading(false);
        }
      }}
    >
      {loading ? 'Debugging...' : 'Debug Code'}
    </Button>
  );
};

export default DebugButton;
