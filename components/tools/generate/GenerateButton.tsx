'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { tabs } from '@/data/tabs';

interface GenerateButtonProps {
  description: string;
  selectedLanguage: string;
  onResult: (code: string) => void;
}

const GenerateButton = ({
  description,
  selectedLanguage,
  onResult,
}: GenerateButtonProps) => {
  const [loading, setLoading] = useState(false);

  const gradient =
    tabs.find((tab) => tab.id === 'generate')?.gradient ||
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';

  return (
    <Button
      disabled={loading}
      className={`transition-all hover:scale-102 cursor-pointer text-white mt-7 rounded-md bg-linear-to-r ${gradient}`}
      onClick={async () => {
        try {
          setLoading(true);
          const response = await fetch('/api/generate', {
            method: 'POST', // Must match your export const POST
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              description: description, // The text from your textarea/input
              language: selectedLanguage, // The state from your Select component
            }),
          });

          const result = await response.json();

          if (result.data) {
            console.log('Generated Code:', result.data.generatedCode);
            onResult(result.data.generatedCode);
            // Update a state here to display the code in your UI
          }
        } catch (err) {
          console.error('Fetch error:', err);
        } finally {
          setLoading(false);
        }
      }}
    >
      {loading ? 'Generating...' : 'Generate Code'}
    </Button>
  );
};

export default GenerateButton;
