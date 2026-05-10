import React from 'react';

interface CodeToExplainProps {
  value: string;
  onValueChange: (v: string) => void;
}

const CodeToExplain = ({ value, onValueChange }: CodeToExplainProps) => {
  return (
    <div className="mt-4 text-white">
      <p>Code to explain </p>
      <textarea
        className="font-mono  w-full h-40 p-2 border rounded-md mt-2 border-white/50"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};

export default CodeToExplain;
