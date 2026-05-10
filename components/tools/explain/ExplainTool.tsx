'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import ExplainedCode from './ExplainedCode';
import ExplainButton from './ExplainButton';
import CodeToExplain from './CodeToExplain';

import { Button } from '@/components/ui/button';
import { sampleCode } from '@/data/examples';

const DebugTool = () => {
  const [code, setCode] = useState('');
  const [explainedCode, setExplainedCode] = useState('');

  return (
    <Card className="p-5 text-white">
      <CardHeader className="space-y-2 p-0">
        <CardTitle className="text-xl font-bold flex items-center justify-between">
          <p>Explain Code</p>
          <Button
            className=" bg-slate-700 hover:bg-slate-500 text-white px-5 py-4 rounded-sm "
            onClick={() => {
              setCode(sampleCode);
            }}
          >
            Try Sample
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground relative p-0">
        <CodeToExplain value={code} onValueChange={setCode} />
      </CardContent>

      <ExplainButton
        onResult={(result: string) => {
          setExplainedCode(result);
        }}
        code={code}
      />

      <ExplainedCode code={explainedCode} />
    </Card>
  );
};

export default DebugTool;
