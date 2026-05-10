'use client';

import React from 'react';
import { samplePrompts } from '@/data/examples';
import { Button } from '@/components/ui/button';

interface GeneratePromptsProps {
  onValueChange: (value: string) => void;
}

const GeneratePrompts = ({ onValueChange }: GeneratePromptsProps) => {
  return (
    <div>
      <p className="text-lg mb-4">Quick Prompts</p>
      <div className="grid grid-cols-2 gap-3">
        {samplePrompts.map((prompt, index) => (
          <button
            key={index}
            className="text-start text-sm font-normal bg-slate-700/50 text-white/80"
            onClick={() => onValueChange(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GeneratePrompts;
