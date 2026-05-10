import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10">
      <h1 className="text-3xl font-bold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        CodeCraft AI
      </h1>
      <p className="mt-5 text-sm text-center">
        Your intelligent companion. Explain, debug, and generate code with
        AI-powered assistance.
      </p>
    </div>
  );
};

export default Header;
