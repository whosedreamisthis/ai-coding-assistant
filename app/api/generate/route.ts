import { GoogleGenerativeAI } from '@google/generative-ai';
import { GenerateRequest } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable is not set');
}

const genAI = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
  try {
    const { description, language }: GenerateRequest = await req.json();

    if (!description) {
      return NextResponse.json(
        { error: 'Description is required' },
        { status: 400 },
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    let prompt = `Please generate ${language || 'javascript'} code for the following description: \n\n${description}\n\n:`;

    prompt += 'Code suggestion: ';

    const result = await model.generateContent(prompt);
    const response = result.response;
    const generatedCode = response.text();
    return NextResponse.json({ data: { generatedCode } }, { status: 200 });
  } catch (error) {
    console.log('Error: ', error);
    return NextResponse.json(
      { error: 'Failed to generate code' },
      { status: 500 },
    );
  }
};
