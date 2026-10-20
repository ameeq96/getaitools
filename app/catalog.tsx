export type Category =
  | 'All tools'
  | 'Writing & chat'
  | 'Image & design'
  | 'Research'
  | 'Video & audio';

export type ToolId =
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'midjourney'
  | 'perplexity'
  | 'canva'
  | 'runway'
  | 'elevenlabs';

export type Tool = {
  id: ToolId;
  name: string;
  maker: string;
  category: Exclude<Category, 'All tools'>;
  description: string;
  shortDescription: string;
  features: string[];
  accent: string;
  tag: string;
};

export const categories: Category[] = [
  'All tools',
  'Writing & chat',
  'Image & design',
  'Research',
  'Video & audio',
];

export const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    maker: 'OpenAI',
    category: 'Writing & chat',
    description: 'Turn a blank page into a first draft, work through ideas, and get help with everyday tasks.',
    shortDescription: 'A little help for your next big idea.',
    features: ['Brainstorm and develop ideas', 'Draft and refine your writing', 'Explore code and solve problems'],
    accent: '#9fe0c1',
    tag: 'Everyday essential',
  },
  {
    id: 'claude',
    name: 'Claude',
    maker: 'Anthropic',
    category: 'Writing & chat',
    description: 'Find the right words, untangle complex documents, and think through your next project.',
    shortDescription: 'Thoughtful writing. Clearer thinking.',
    features: ['Shape and polish long-form writing', 'Summarize documents and notes', 'Work through coding questions'],
    accent: '#dfac8b',
    tag: 'Pick for writing',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    maker: 'Google',
    category: 'Writing & chat',
    description: 'Explore fresh perspectives, make sense of information, and move your ideas forward.',
    shortDescription: 'Fresh perspectives, fewer blank pages.',
    features: ['Explore ideas through conversation', 'Explain unfamiliar concepts', 'Draft content for everyday work'],
    accent: '#a9b5ff',
    tag: 'Idea starter',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    maker: 'Midjourney',
    category: 'Image & design',
    description: 'Turn a visual direction into evocative images, from early concepts to imaginative worlds.',
    shortDescription: 'Make the image in your imagination.',
    features: ['Explore visual concepts', 'Create moodboard imagery', 'Experiment with artistic directions'],
    accent: '#d1c2f3',
    tag: 'Creative favorite',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    maker: 'Perplexity',
    category: 'Research',
    description: 'Follow your curiosity with web research, useful context, and sources you can explore.',
    shortDescription: 'Follow the question a little further.',
    features: ['Explore questions with web sources', 'Compare ideas and perspectives', 'Build context for a new topic'],
    accent: '#91d7da',
    tag: 'For curious minds',
  },
  {
    id: 'canva',
    name: 'Canva',
    maker: 'Canva',
    category: 'Image & design',
    description: 'Bring your content together with visual designs for presentations, social posts, and more.',
    shortDescription: 'Give your ideas a visual identity.',
    features: ['Design social media content', 'Build visual presentations', 'Explore layouts and brand ideas'],
    accent: '#94ded7',
    tag: 'Design made simple',
  },
  {
    id: 'runway',
    name: 'Runway',
    maker: 'Runway',
    category: 'Video & audio',
    description: 'Explore moving images and develop visual stories with creative AI tools for video.',
    shortDescription: 'Put your next story in motion.',
    features: ['Experiment with video concepts', 'Explore image-to-video ideas', 'Develop visual storytelling'],
    accent: '#cddd96',
    tag: 'Made for motion',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    maker: 'ElevenLabs',
    category: 'Video & audio',
    description: 'Give written ideas a voice and explore audio for videos, stories, and creative projects.',
    shortDescription: 'A voice for the stories you create.',
    features: ['Create voiceovers for your content', 'Explore narration styles', 'Develop spoken audio projects'],
    accent: '#e6cfaa',
    tag: 'Find your voice',
  },
];

export function ToolLogo({ id, className }: { id: ToolId; className?: string }) {
  let mark;

  switch (id) {
    case 'chatgpt':
      mark = (
        <g strokeWidth="2.4" strokeLinejoin="round">
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <path
              key={angle}
              transform={`rotate(${angle} 24 24)`}
              d="M24 8c5.6-3.2 12.6.7 12.6 7.1v12.4l-7.7 4.4-10.7-6.2v-8.9L29 10.6"
            />
          ))}
        </g>
      );
      break;
    case 'claude':
      mark = (
        <g strokeWidth="2.5" strokeLinecap="round">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <path key={angle} transform={`rotate(${angle} 24 24)`} d="M24 6v36" />
          ))}
          <path d="m12 10 24 28M8 16l32 16M9 35 39 13" />
        </g>
      );
      break;
    case 'gemini':
      mark = <path fill="currentColor" stroke="none" d="M24 3c2.3 13 8 18.7 21 21-13 2.3-18.7 8-21 21C21.7 32 16 26.3 3 24 16 21.7 21.7 16 24 3Z" />;
      break;
    case 'midjourney':
      mark = (
        <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6v29M21 9 7 31h14V9ZM27 12v19h14L27 12ZM6 35h36l-8 7H14l-8-7Z" />
          <path d="M3 44c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0 5-2 10 0" />
        </g>
      );
      break;
    case 'perplexity':
      mark = (
        <g strokeWidth="1.8" strokeLinejoin="round">
          <path d="M24 3v42M10 8l28 26H10L38 8v32L24 27 10 40V8Z" />
          <path d="M5 16h38v18H5V16Z" />
        </g>
      );
      break;
    case 'canva':
      mark = (
        <g strokeWidth="3" strokeLinecap="round">
          <path d="M33 11c-2-5-10-4-16 2-7 7-10 18-6 23 5 7 15 2 23-7" />
          <path d="M29 9c-1 6-5 10-9 11" strokeWidth="1.8" />
        </g>
      );
      break;
    case 'runway':
      mark = (
        <g strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 38V10h15c8 0 12 4 12 10s-4 10-12 10H10M25 30l12 8" />
          <path d="M16 15h9c4 0 6 2 6 5s-2 5-6 5h-9V15Z" strokeWidth="2.5" />
        </g>
      );
      break;
    case 'elevenlabs':
      mark = (
        <g fill="currentColor" stroke="none">
          <rect x="12" y="7" width="8" height="34" rx="1" />
          <rect x="28" y="7" width="8" height="34" rx="1" />
        </g>
      );
      break;
  }

  return (
    <svg
      className={`tool-logo${className ? ` ${className}` : ''}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {mark}
    </svg>
  );
}
