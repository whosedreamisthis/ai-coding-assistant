'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SelectLanguage from './SelectLanguage';
import CodeDescription from './CodeDescription';
import GeneratePrompts from './GeneratePrompts';
import { Button } from '@/components/ui/button';
import GenerateButton from '@/components/tools/generate/GenerateButton';

const GenerateTool = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [description, setDescription] = useState('');

  return (
    <Card className="p-5">
      <CardHeader className="space-y-2 p-0">
        <CardTitle className="text-xl font-bold">Generate Code</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground relative p-0">
        <div>Programming Language</div>
        <SelectLanguage
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
        />
        <CodeDescription value={description} onValueChange={setDescription} />
      </CardContent>
      <GeneratePrompts onValueChange={setDescription} />

      <GenerateButton
        onResult={(result: string) => {
          console.log('RESULT', result);
        }}
        selectedLanguage={selectedLanguage}
        description={description}
      />
    </Card>
  );
};

export default GenerateTool;
