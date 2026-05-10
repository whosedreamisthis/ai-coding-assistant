import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { Copy } from 'lucide-react';

interface GeneratedCodeProps {
  code: string;
  language?: string;
}

const GeneratedCode = ({ code, language }: GeneratedCodeProps) => {
  return (
    <div>
      <p className="text-xl font-bold mb-6 mt-8">Generated Code</p>
      <Card className="p-0">
        <CardHeader className="bg-slate-800 h-12 relative flex justify-between items-center">
          <p>{language}</p>
          <Copy size={16} />
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto">
            <code className="font-mono text-sm text-zinc-200 leading-relaxed">
              {code ||
                "// Your generated code will appear here\nconst hello = 'world';"}
            </code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneratedCode;
