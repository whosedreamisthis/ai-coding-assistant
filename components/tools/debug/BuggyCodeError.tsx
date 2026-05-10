import React from 'react';

interface BuggyCodeErrorProps {
  value: string;
  onValueChange: (v: string) => void;
}

const BuggyCodeError = ({ value, onValueChange }: BuggyCodeErrorProps) => {
  return (
    <div className="mt-4 text-white">
      <p>Error Message (Optional) </p>
      <textarea
        className="w-full h-24 p-2 border rounded-md mt-2"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};

export default BuggyCodeError;
