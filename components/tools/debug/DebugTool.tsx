'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import DebuggedCode from './DebuggedCode';
import DebugButton from './DebugButton';
import BuggyCode from './BuggyCode';
import BuggyCodeError from '@/components/tools/debug/BuggyCodeError';
import { Button } from '@/components/ui/button';
import { sampleBuggyCode } from '@/data/examples';

const DebugTool = () => {
  const [buggyCode, setBuggyCode] = useState('');
  const [error, setError] = useState('');
  const [debuggedCode, setDebuggedCode] = useState('');

  return (
    <Card className="p-5 text-white">
      <CardHeader className="space-y-2 p-0">
        <CardTitle className="text-xl font-bold flex items-center justify-between">
          <p>Debug Code</p>
          <Button
            className=" bg-slate-700 hover:bg-slate-500 text-white px-5 py-4 rounded-sm "
            onClick={() => {
              setBuggyCode(sampleBuggyCode);
            }}
          >
            Try Sample
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground relative p-0">
        <BuggyCode value={buggyCode} onValueChange={setBuggyCode} />
        <BuggyCodeError value={error} onValueChange={setError} />
      </CardContent>

      <DebugButton
        onResult={(result: string) => {
          console.log('RESULT', result);
          setDebuggedCode(result);
        }}
        code={buggyCode}
        error={error}
      />

      <DebuggedCode debuggedCode={debuggedCode} />
    </Card>
  );
};

export default DebugTool;
