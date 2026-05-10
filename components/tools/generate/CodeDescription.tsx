import React from 'react';

interface CodeDescriptionProps {
  value: string;
  onValueChange: (v: string) => void;
}

const CodeDescription = ({ value, onValueChange }: CodeDescriptionProps) => {
  return (
    <div className="mt-4 text-white">
      <p>Describe what you want to code: </p>
      <textarea
        className="w-full h-24 p-2 border rounded-md mt-2 border-white/50"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};

export default CodeDescription;
