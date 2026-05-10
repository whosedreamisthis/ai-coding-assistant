export const samplePrompts = [
  {
    text: 'Create a function that reverses a string',
    language: 'javascript',
  },
  {
    text: 'Write a TypeScript interface for a User profile with name, email, and age',
    language: 'typescript',
  },
  {
    text: 'Generate a React hook that handles window resizing',
    language: 'javascript',
  },
  {
    text: 'Create a Python script to scrape titles from a webpage using BeautifulSoup',
    language: 'python',
  },
];

export const sampleCode = `function getFibonacci(n) {
  const sequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  
  return sequence.slice(0, n);
}

// Example: getFibonacci(8) -> [0, 1, 1, 2, 3, 5, 8, 13]`;

export const sampleBuggyCode = `function calculateAverage(numbers) {
  let total = 0;
  
  // BUG: The loop goes one index too far (<=)
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i]; 
    // This will result in NaN because numbers[length] is undefined
  }

  return total / numbers.length;
}

const scores = [80, 90, 100];
console.log(calculateAverage(scores));`;

export const languages = [
  'Javascript',
  'Python',
  'Java',
  'C++',
  'TypeScript',
  'Rust',
  'Go',
  'Swift',
  'PHP',
  'Ruby',
];
