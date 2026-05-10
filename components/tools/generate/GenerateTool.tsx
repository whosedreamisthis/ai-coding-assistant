'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SelectLanguage from './SelectLanguage';
import CodeDescription from './CodeDescription';
import GeneratePrompts from './GeneratePrompts';
import GenerateButton from './GenerateButton';
import GeneratedCode from './GeneratedCode';

const detectLanguage = (text: string) => {
  const lowercaseText = text.toLowerCase();

  const mappings = {
    javascript: 'javascript',
    js: 'javascript',
    ts: 'typescript',
    python: 'python',
    java: 'java',
    'c++': 'cpp', // common value for C++
    typescript: 'typescript',
    rust: 'rust',
    go: 'go',
    swift: 'swift',
    php: 'php',
    ruby: 'ruby',
  };

  for (const [keyword, langValue] of Object.entries(mappings)) {
    // Escape special characters for Regex (like ++)
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');

    if (regex.test(lowercaseText)) {
      return langValue;
    }
  }
  return null;
};
const GenerateTool = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [description, setDescription] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleDescriptionChange = (newText: string) => {
    setDescription(newText);

    // Auto-detect language from the text
    const detected = detectLanguage(newText);

    // Only update if we found a match AND it's different from the current selection
    if (detected && detected !== selectedLanguage) {
      setSelectedLanguage(detected);
    }
  };

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
        <CodeDescription
          value={description}
          onValueChange={handleDescriptionChange}
        />
      </CardContent>
      <GeneratePrompts
        onValueChange={(prompt) => {
          handleDescriptionChange(prompt.text);
          setSelectedLanguage(prompt.language);
        }}
      />

      <GenerateButton
        onResult={(result: string) => {
          console.log('RESULT', result);
          setGeneratedCode(result);
        }}
        selectedLanguage={selectedLanguage}
        description={description}
      />

      <GeneratedCode code={generatedCode} language={selectedLanguage} />
    </Card>
  );
};

export default GenerateTool;
