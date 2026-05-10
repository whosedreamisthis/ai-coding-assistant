'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { Copy } from 'lucide-react';

const DebuggedCode = ({ debuggedCode }: { debuggedCode: string }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(debuggedCode);
  };

  return (
    <div>
      <p className="text-xl font-bold mb-6 mt-8">Debugged Code</p>
      <Card className="p-0">
        <CardHeader className="bg-slate-800 h-12 relative flex justify-end items-center">
          <Copy
            size={16}
            onClick={handleCopy}
            className="transition hover:-translate-y-0.5 cursor-pointer"
          />
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto">
            <code className="font-mono text-sm text-zinc-200 leading-relaxed">
              {debuggedCode ||
                "// Your debugged code will appear here\nconst hello = 'world';"}
            </code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default DebuggedCode;
