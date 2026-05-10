import React from 'react';

interface BuggyCodeProps {
  value: string;
  onValueChange: (v: string) => void;
}

const BuggyCode = ({ value, onValueChange }: BuggyCodeProps) => {
  return (
    <div className="mt-4 text-white">
      <p>Code with issues </p>
      <textarea
        className="w-full h-40 p-2 border rounded-md mt-2 border-white/50"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};

export default BuggyCode;
