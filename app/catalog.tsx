export type Category =
  | 'All tools'
  | 'Writing & chat'
  | 'Image & design'
  | 'Research'
  | 'Video & audio'
  | 'Productivity'
  | 'Marketing & SEO'
  | 'Coding'
  | 'Automation';

export type ToolId =
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'midjourney'
  | 'perplexity'
  | 'canva'
  | 'runway'
  | 'elevenlabs'
  | 'microsoft-copilot'
  | 'grok'
  | 'deepseek'
  | 'meta-ai'
  | 'poe'
  | 'mistral-vibe'
  | 'notion-ai'
  | 'gemini-notebook'
  | 'grammarly'
  | 'quillbot'
  | 'jasper'
  | 'copy-ai'
  | 'writesonic'
  | 'wordtune'
  | 'gamma'
  | 'beautiful-ai'
  | 'otter'
  | 'fireflies'
  | 'fathom'
  | 'elicit'
  | 'consensus'
  | 'scite'
  | 'scispace'
  | 'jenni'
  | 'surfer'
  | 'frase'
  | 'semrush'
  | 'adobe-firefly'
  | 'leonardo'
  | 'ideogram'
  | 'recraft'
  | 'magnific'
  | 'krea'
  | 'clipdrop'
  | 'photoroom'
  | 'remove-bg'
  | 'topaz-photo'
  | 'heygen'
  | 'synthesia'
  | 'kling'
  | 'pika'
  | 'luma'
  | 'google-flow'
  | 'invideo'
  | 'veed'
  | 'capcut'
  | 'descript'
  | 'opusclip'
  | 'suno'
  | 'udio'
  | 'murf'
  | 'speechify'
  | 'hailuo'
  | 'pixverse'
  | 'cursor'
  | 'github-copilot'
  | 'devin'
  | 'replit'
  | 'v0'
  | 'lovable'
  | 'bolt'
  | 'claude-code'
  | 'junie'
  | 'amp'
  | 'cline'
  | 'coderabbit'
  | 'kiro'
  | 'n8n'
  | 'make'
  | 'zapier'
  | 'lindy'
  | 'gumloop'
  | 'bardeen'
  | 'browse-ai'
  | 'taskade'
  | 'motion'
  | 'reclaim'
  | 'napkin'
  | 'gitmind'
  | 'codex'
  | 'manus'
  | 'genspark'
  | 'chatbase'
  | 'monica'
  | 'merlin'
  | 'sider'
  | 'botpress'
  | 'qwen'
  | 'kimi'
  | 'chatpdf'
  | 'character-ai'
  | 'read-ai'
  | 'higgsfield'
  | 'flux'
  | 'pictory'
  | 'fliki'
  | 'julius'
  | 'relevance-ai'
  | 'adcreative'
  | 'predis'
  | 'framer'
  | 'fotor';

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
  'Productivity',
  'Marketing & SEO',
  'Coding',
  'Automation',
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
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    maker: 'Microsoft',
    category: 'Writing & chat',
    description: 'Ask questions, draft content, and create documents with an AI assistant for everyday work.',
    shortDescription: 'Bring your next task a little closer.',
    features: ['Draft content and documents', 'Work through questions in chat', 'Create images and presentations'],
    accent: '#b7c6fb',
    tag: 'Work companion',
  },
  {
    id: 'grok',
    name: 'Grok',
    maker: 'SpaceXSI',
    category: 'Writing & chat',
    description: 'Explore questions, analyze uploaded files, and create images with a conversational assistant.',
    shortDescription: 'Questions, ideas, and fresh perspectives.',
    features: ['Brainstorm through conversation', 'Analyze and summarize files', 'Create images with Grok Imagine'],
    accent: '#d0d4df',
    tag: 'Explore the question',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    maker: 'DeepSeek',
    category: 'Writing & chat',
    description: 'Work through questions, reasoning, and coding tasks with DeepSeek\'s AI chat assistant.',
    shortDescription: 'Room to think through the details.',
    features: ['Explore questions in chat', 'Reason through complex problems', 'Get help with coding tasks'],
    accent: '#a9c5ff',
    tag: 'Think it through',
  },
  {
    id: 'meta-ai',
    name: 'Meta AI',
    maker: 'Meta',
    category: 'Writing & chat',
    description: 'Ask questions, research ideas, and create images with Meta\'s everyday AI assistant.',
    shortDescription: 'A creative spark for everyday ideas.',
    features: ['Research and explain topics', 'Draft captions and messages', 'Create and edit images'],
    accent: '#a5c8f9',
    tag: 'Everyday inspiration',
  },
  {
    id: 'poe',
    name: 'Poe',
    maker: 'Quora',
    category: 'Writing & chat',
    description: 'Explore AI assistants from different providers in one place for writing and conversation.',
    shortDescription: 'More perspectives in one conversation.',
    features: ['Chat with different AI models', 'Explore specialized AI bots', 'Collaborate in group chats'],
    accent: '#e5b8d9',
    tag: 'Explore more models',
  },
  {
    id: 'mistral-vibe',
    name: 'Mistral Vibe',
    maker: 'Mistral AI',
    category: 'Writing & chat',
    description: 'Formerly Le Chat, Mistral\'s assistant helps with research, writing, and connected work.',
    shortDescription: 'Turn a conversation into finished work.',
    features: ['Research topics with web sources', 'Draft documents and reports', 'Work across connected tools'],
    accent: '#f1c097',
    tag: 'From idea to action',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    maker: 'Notion',
    category: 'Productivity',
    description: 'Write, search workspace knowledge, and capture meeting notes inside your Notion workspace.',
    shortDescription: 'Give your workspace a thoughtful helper.',
    features: ['Draft and edit workspace pages', 'Find answers across connected apps', 'Capture meeting notes and actions'],
    accent: '#d9d7d0',
    tag: 'Workspace companion',
  },
  {
    id: 'gemini-notebook',
    name: 'Gemini Notebook',
    maker: 'Google',
    category: 'Research',
    description: 'Formerly NotebookLM, turn your sources into answers, study guides, and Audio Overviews.',
    shortDescription: 'Make more sense of your own sources.',
    features: ['Ask questions about your sources', 'Create study guides and reports', 'Generate source-based Audio Overviews'],
    accent: '#c2c8f6',
    tag: 'Study with your sources',
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    maker: 'Superhuman',
    category: 'Writing & chat',
    description: 'Polish grammar, rephrase ideas, and adjust your writing for your audience and tone.',
    shortDescription: 'Clearer words, with your voice intact.',
    features: ['Check grammar and spelling', 'Rephrase and refine your writing', 'Get feedback for your audience'],
    accent: '#9fdbc0',
    tag: 'Polish every sentence',
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    maker: 'Learneo',
    category: 'Writing & chat',
    description: 'Rephrase text, check grammar, and summarize information with a suite of AI writing tools.',
    shortDescription: 'Find a better way to put it.',
    features: ['Paraphrase sentences and passages', 'Check grammar and spelling', 'Summarize long text'],
    accent: '#bddea7',
    tag: 'Make every word work',
  },
  {
    id: 'jasper',
    name: 'Jasper',
    maker: 'Jasper',
    category: 'Marketing & SEO',
    description: 'Create brand-aligned content and manage AI-powered marketing workflows for your campaigns.',
    shortDescription: 'Give your next campaign a head start.',
    features: ['Draft marketing content', 'Keep a consistent brand voice', 'Build campaign workflows'],
    accent: '#c1aff1',
    tag: 'Built for marketing',
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    maker: 'Copy.ai',
    category: 'Marketing & SEO',
    description: 'Build AI workflows for content, prospecting, and sales research across your go-to-market work.',
    shortDescription: 'Move your marketing ideas forward.',
    features: ['Create content workflows', 'Research leads and accounts', 'Draft sales outreach'],
    accent: '#a5d9c5',
    tag: 'Campaign companion',
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    maker: 'Writesonic',
    category: 'Marketing & SEO',
    description: 'Track AI search visibility and create content that supports your SEO and marketing goals.',
    shortDescription: 'Find the gaps. Shape the next article.',
    features: ['Track visibility in AI search', 'Draft and refresh articles', 'Find content and citation gaps'],
    accent: '#bcb4f4',
    tag: 'Content that gets found',
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    maker: 'AI21 Labs',
    category: 'Writing & chat',
    description: 'Rewrite sentences, refine your tone, and condense long text into useful summaries.',
    shortDescription: 'Say what you mean, a little better.',
    features: ['Rewrite and rephrase text', 'Refine tone and phrasing', 'Summarize documents and articles'],
    accent: '#cbb9ef',
    tag: 'Find the right words',
  },
  {
    id: 'gamma',
    name: 'Gamma',
    maker: 'Gamma',
    category: 'Productivity',
    description: 'Turn ideas into visual presentations, documents, and websites with an AI creative partner.',
    shortDescription: 'From a first thought to a polished deck.',
    features: ['Generate presentation outlines', 'Create visual decks and documents', 'Refine content and design in chat'],
    accent: '#d5b4ef',
    tag: 'Present your ideas',
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    maker: 'Beautiful.ai',
    category: 'Productivity',
    description: 'Build presentations with AI, auto-aligning slide layouts, and consistent brand styling.',
    shortDescription: 'Make every slide feel considered.',
    features: ['Create presentations with AI', 'Arrange content with Smart Slides', 'Apply consistent brand themes'],
    accent: '#acd6ed',
    tag: 'Ideas worth presenting',
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    maker: 'Otter.ai',
    category: 'Productivity',
    description: 'Turn meetings into searchable transcripts, clear summaries, and actionable follow-ups.',
    shortDescription: 'Stay in the conversation. Keep the notes.',
    features: ['Transcribe meetings and recordings', 'Summarize decisions and action items', 'Search and ask about past meetings'],
    accent: '#abc9ef',
    tag: 'Remember the meeting',
  },
  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    maker: 'Fireflies.ai',
    category: 'Productivity',
    description: 'Record, transcribe, and summarize team conversations with searchable meeting insights.',
    shortDescription: 'Keep the ideas that happen in meetings.',
    features: ['Capture meeting transcripts', 'Create summaries and action items', 'Search conversations with AskFred'],
    accent: '#cab5f0',
    tag: 'Meeting memory',
  },
  {
    id: 'fathom',
    name: 'Fathom',
    maker: 'Fathom',
    category: 'Productivity',
    description: 'Capture meeting notes, searchable transcripts, and next steps without breaking your focus.',
    shortDescription: 'Be present. Leave with clear next steps.',
    features: ['Record and transcribe meetings', 'Generate summaries and action items', 'Ask questions across past calls'],
    accent: '#a5d9e7',
    tag: 'Focus on the conversation',
  },
  {
    id: 'elicit',
    name: 'Elicit',
    maker: 'Elicit',
    category: 'Research',
    description: 'Find academic evidence, extract useful details, and build cited research reports.',
    shortDescription: 'Bring the evidence into focus.',
    features: ['Find relevant academic papers', 'Extract and compare research details', 'Build cited reports and reviews'],
    accent: '#c7b7e6',
    tag: 'Built around evidence',
  },
  {
    id: 'consensus',
    name: 'Consensus',
    maker: 'Consensus',
    category: 'Research',
    description: 'Search scientific literature and explore AI summaries linked to the supporting research.',
    shortDescription: 'See what the research has to say.',
    features: ['Find relevant scientific papers', 'Explore cited research summaries', 'Compare findings across studies'],
    accent: '#b8c9ef',
    tag: 'Ask the research',
  },
  {
    id: 'scite',
    name: 'Scite',
    maker: 'Research Solutions',
    category: 'Research',
    description: 'Explore research with citation context showing how later studies discuss a finding.',
    shortDescription: 'Look closer at the evidence behind it.',
    features: ['Search scholarly literature', 'Explore supporting and contrasting citations', 'Ask research-grounded questions'],
    accent: '#a6d9e3',
    tag: 'Put citations in context',
  },
  {
    id: 'scispace',
    name: 'SciSpace',
    maker: 'SciSpace',
    category: 'Research',
    description: 'Search papers, chat with research PDFs, and develop literature reviews in one workspace.',
    shortDescription: 'A little clarity for complex papers.',
    features: ['Chat with research PDFs', 'Find and review academic papers', 'Extract data and create citations'],
    accent: '#b8b9ed',
    tag: 'Explore the literature',
  },
  {
    id: 'jenni',
    name: 'Jenni AI',
    maker: 'Jenni',
    category: 'Research',
    description: 'Read, write, and cite academic work with AI assistance grounded in your research sources.',
    shortDescription: 'Turn your sources into a clearer draft.',
    features: ['Draft with source-based autocomplete', 'Add and format inline citations', 'Ask questions across your library'],
    accent: '#cfbcec',
    tag: 'Write with your sources',
  },
  {
    id: 'surfer',
    name: 'Surfer',
    maker: 'Surfer',
    category: 'Marketing & SEO',
    description: 'Plan, write, and optimize content for search engines while tracking AI search visibility.',
    shortDescription: 'Give your content a clearer direction.',
    features: ['Plan and outline SEO content', 'Optimize articles with live guidance', 'Track AI search visibility'],
    accent: '#c9dca4',
    tag: 'Shape your search strategy',
  },
  {
    id: 'frase',
    name: 'Frase',
    maker: 'Frase',
    category: 'Marketing & SEO',
    description: 'Research, draft, and optimize content with AI tools for SEO and AI search visibility.',
    shortDescription: 'Start with a brief. Build a better page.',
    features: ['Research content opportunities', 'Draft and optimize articles', 'Monitor rankings and AI mentions'],
    accent: '#b1dbbf',
    tag: 'From brief to article',
  },
  {
    id: 'semrush',
    name: 'Semrush',
    maker: 'Semrush',
    category: 'Marketing & SEO',
    description: 'Research keywords, analyze competitors, and measure brand visibility in search and AI answers.',
    shortDescription: 'See the opportunities behind the search.',
    features: ['Research keywords and competitors', 'Measure SEO performance', 'Track brand visibility in AI answers'],
    accent: '#edbf9f',
    tag: 'Make your next move informed',
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    maker: 'Adobe',
    category: 'Image & design',
    description: 'Generate and edit images, explore visual directions, and develop creative concepts.',
    shortDescription: 'Bring your creative direction to life.',
    features: ['Generate images from prompts', 'Remove objects and expand images', 'Build moodboards and storyboards'],
    accent: '#ffc2ad',
    tag: 'Creative studio',
  },
  {
    id: 'leonardo',
    name: 'Leonardo.Ai',
    maker: 'Leonardo.Ai',
    category: 'Image & design',
    description: 'Create images, refine visual concepts, and enhance artwork in a creative AI workspace.',
    shortDescription: 'Build the visuals you have in mind.',
    features: ['Generate concept art and illustrations', 'Edit images with creative controls', 'Upscale and enhance your visuals'],
    accent: '#cebaff',
    tag: 'Visual creator',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    maker: 'Ideogram',
    category: 'Image & design',
    description: 'Create and edit images with readable typography for posters, campaigns, and visual ideas.',
    shortDescription: 'Make images with words that work.',
    features: ['Create images with readable text', 'Develop posters and campaign visuals', 'Edit and refine generated images'],
    accent: '#f3c9e4',
    tag: 'Type meets image',
  },
  {
    id: 'recraft',
    name: 'Recraft',
    maker: 'Recraft',
    category: 'Image & design',
    description: 'Generate images, scalable vectors, and design assets in one visual workspace.',
    shortDescription: 'From a prompt to a polished asset.',
    features: ['Generate illustrations and images', 'Create scalable vector graphics', 'Preview designs on product mockups'],
    accent: '#d2e9a6',
    tag: 'Design assets',
  },
  {
    id: 'magnific',
    name: 'Magnific (Freepik)',
    maker: 'Magnific',
    category: 'Image & design',
    description: 'Generate, edit, and upscale images with the creative platform formerly known as Freepik.',
    shortDescription: 'More room for your visual ideas.',
    features: ['Generate images from visual ideas', 'Retouch and refine existing images', 'Upscale images and recover detail'],
    accent: '#a9ccff',
    tag: 'Formerly Freepik',
  },
  {
    id: 'krea',
    name: 'Krea',
    maker: 'Krea',
    category: 'Image & design',
    description: 'Explore visual concepts with AI image creation, editing, and enhancement tools.',
    shortDescription: 'Explore the next version of your idea.',
    features: ['Generate images from prompts', 'Experiment with visual directions', 'Enhance and upscale your images'],
    accent: '#bce5da',
    tag: 'Visual exploration',
  },
  {
    id: 'clipdrop',
    name: 'Clipdrop',
    maker: 'Jasper',
    category: 'Image & design',
    description: 'Clean up images, replace backgrounds, and improve product visuals with AI editing tools.',
    shortDescription: 'A cleaner finish for every image.',
    features: ['Remove unwanted objects', 'Remove and replace backgrounds', 'Relight and upscale photos'],
    accent: '#c5dbff',
    tag: 'Image cleanup',
  },
  {
    id: 'photoroom',
    name: 'Photoroom',
    maker: 'Photoroom',
    category: 'Image & design',
    description: 'Create product photos, remove backgrounds, and prepare consistent visuals for your store.',
    shortDescription: 'Give every product its best shot.',
    features: ['Remove product photo backgrounds', 'Create lifestyle product scenes', 'Batch edit store imagery'],
    accent: '#d4c3f5',
    tag: 'Product photography',
  },
  {
    id: 'remove-bg',
    name: 'remove.bg',
    maker: 'remove.bg',
    category: 'Image & design',
    description: 'Remove image backgrounds and prepare clean cutouts for products, portraits, and designs.',
    shortDescription: 'Keep the subject. Clear the background.',
    features: ['Remove backgrounds automatically', 'Create transparent image cutouts', 'Prepare images for new backgrounds'],
    accent: '#f2dfaa',
    tag: 'Clean cutouts',
  },
  {
    id: 'topaz-photo',
    name: 'Topaz Photo',
    maker: 'Topaz Labs',
    category: 'Image & design',
    description: 'Sharpen, denoise, and enhance photos with AI tools for image quality and detail.',
    shortDescription: 'Bring the details back into focus.',
    features: ['Reduce noise in photographs', 'Sharpen soft or blurry images', 'Enhance and upscale photo detail'],
    accent: '#b9d6ff',
    tag: 'Photo enhancement',
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    maker: 'HeyGen',
    category: 'Video & audio',
    description: 'Create presenter videos with AI avatars, voice tools, and video translation.',
    shortDescription: 'Put a face to your next message.',
    features: ['Create videos with AI avatars', 'Turn scripts into presenter videos', 'Translate and dub video content'],
    accent: '#c3b8f1',
    tag: 'Avatar videos',
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    maker: 'Synthesia',
    category: 'Video & audio',
    description: 'Turn scripts and documents into avatar videos for training, explainers, and communication.',
    shortDescription: 'Turn your message into a video.',
    features: ['Make narrated avatar videos', 'Create training and explainer content', 'Translate and dub existing videos'],
    accent: '#bac9ff',
    tag: 'Training and explainers',
  },
  {
    id: 'kling',
    name: 'Kling AI',
    maker: 'Kuaishou',
    category: 'Video & audio',
    description: 'Generate videos from text and images and explore motion for creative visual stories.',
    shortDescription: 'Turn a still idea into a moving scene.',
    features: ['Generate videos from text', 'Animate images into video', 'Explore creative motion concepts'],
    accent: '#c2ed9a',
    tag: 'AI video generation',
  },
  {
    id: 'pika',
    name: 'Pika',
    maker: 'Pika',
    category: 'Video & audio',
    description: 'Generate creative videos, extend footage, and experiment with visual effects and motion.',
    shortDescription: 'Make your ideas move a little further.',
    features: ['Generate videos from references', 'Extend existing video clips', 'Experiment with motion and effects'],
    accent: '#f2c3f0',
    tag: 'Creative motion',
  },
  {
    id: 'luma',
    name: 'Luma Dream Machine',
    maker: 'Luma Labs',
    category: 'Video & audio',
    description: 'Create and modify videos with tools for image animation, visual storytelling, and shot control.',
    shortDescription: 'Explore the scene beyond the image.',
    features: ['Animate images into video', 'Modify and refine video scenes', 'Explore character and shot references'],
    accent: '#c7d6ed',
    tag: 'Visual storytelling',
  },
  {
    id: 'google-flow',
    name: 'Google Flow',
    maker: 'Google',
    category: 'Video & audio',
    description: 'Create and refine cinematic clips and scenes with Google’s generative creative models.',
    shortDescription: 'Find the flow of your next story.',
    features: ['Generate video clips with Veo', 'Build scenes from reference images', 'Refine shots and creative directions'],
    accent: '#b6dccf',
    tag: 'AI filmmaking',
  },
  {
    id: 'invideo',
    name: 'InVideo AI',
    maker: 'InVideo',
    category: 'Video & audio',
    description: 'Develop videos from ideas with AI generation, voiceovers, and tools for editing your story.',
    shortDescription: 'Take the idea all the way to video.',
    features: ['Generate videos from prompts', 'Add voiceovers to your story', 'Edit videos for social content'],
    accent: '#c1c1f5',
    tag: 'Idea to video',
  },
  {
    id: 'veed',
    name: 'VEED',
    maker: 'VEED',
    category: 'Video & audio',
    description: 'Create and edit social videos with AI captions, avatars, voice tools, and video generation.',
    shortDescription: 'Get your next video ready to share.',
    features: ['Add automatic video captions', 'Generate videos and voiceovers', 'Clean audio and edit social clips'],
    accent: '#e6e99c',
    tag: 'Social video studio',
  },
  {
    id: 'capcut',
    name: 'CapCut',
    maker: 'CapCut',
    category: 'Video & audio',
    description: 'Edit videos with AI tools for captions, visual effects, and content creation.',
    shortDescription: 'Shape your clips into something worth sharing.',
    features: ['Edit videos for social platforms', 'Generate and style captions', 'Explore AI effects and video tools'],
    accent: '#b9e7e4',
    tag: 'Creator editing',
  },
  {
    id: 'descript',
    name: 'Descript',
    maker: 'Descript',
    category: 'Video & audio',
    description: 'Edit video and podcasts through text with AI tools for transcripts, captions, and clear audio.',
    shortDescription: 'Edit your story as easily as your words.',
    features: ['Edit recordings through transcripts', 'Remove filler words and background noise', 'Create captions and short clips'],
    accent: '#bfcaf4',
    tag: 'Text-based editing',
  },
  {
    id: 'opusclip',
    name: 'OpusClip',
    maker: 'OpusClip',
    category: 'Video & audio',
    description: 'Find highlights in longer videos and turn them into captioned clips for social platforms.',
    shortDescription: 'Find the standout moments in your footage.',
    features: ['Turn long videos into short clips', 'Add captions to selected highlights', 'Reframe clips for social platforms'],
    accent: '#d6bdf2',
    tag: 'Long video to clips',
  },
  {
    id: 'suno',
    name: 'Suno',
    maker: 'Suno',
    category: 'Video & audio',
    description: 'Explore music ideas and generate songs from prompts for your next creative project.',
    shortDescription: 'Give the idea in your head a soundtrack.',
    features: ['Generate songs from text prompts', 'Explore musical styles and moods', 'Develop song and soundtrack ideas'],
    accent: '#f1be9e',
    tag: 'Music creation',
  },
  {
    id: 'udio',
    name: 'Udio',
    maker: 'Udio',
    category: 'Video & audio',
    description: 'Explore AI music generation and develop new song ideas from creative prompts.',
    shortDescription: 'Explore where your next song could go.',
    features: ['Generate music from creative prompts', 'Explore different musical directions', 'Develop new song ideas'],
    accent: '#e5b9d2',
    tag: 'Song ideas',
  },
  {
    id: 'murf',
    name: 'Murf AI',
    maker: 'Murf',
    category: 'Video & audio',
    description: 'Turn scripts into AI voiceovers and refine narration for videos, lessons, and presentations.',
    shortDescription: 'Find the right voice for your script.',
    features: ['Generate voiceovers from text', 'Adjust voice timing and delivery', 'Sync narration with visual content'],
    accent: '#d5c1f1',
    tag: 'Voiceover studio',
  },
  {
    id: 'speechify',
    name: 'Speechify',
    maker: 'Speechify',
    category: 'Video & audio',
    description: 'Listen to written content with AI text-to-speech tools for documents, articles, and study.',
    shortDescription: 'Take your reading into listening.',
    features: ['Listen to documents and articles', 'Turn written text into speech', 'Adjust your listening experience'],
    accent: '#b9d0f8',
    tag: 'Listen and learn',
  },
  {
    id: 'hailuo',
    name: 'Hailuo AI',
    maker: 'MiniMax',
    category: 'Video & audio',
    description: 'Generate videos from creative prompts and visual references with MiniMax’s video tools.',
    shortDescription: 'Explore a new take on your next scene.',
    features: ['Generate videos from text', 'Create motion from image references', 'Explore visual storytelling ideas'],
    accent: '#f1c09c',
    tag: 'Video concepts',
  },
  {
    id: 'pixverse',
    name: 'PixVerse',
    maker: 'PixVerse',
    category: 'Video & audio',
    description: 'Create videos from text and images and experiment with motion, transitions, and effects.',
    shortDescription: 'Give your next visual idea some motion.',
    features: ['Generate videos from text prompts', 'Animate images and visual references', 'Explore creative video effects'],
    accent: '#c4b5f1',
    tag: 'Motion and effects',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    maker: 'Anysphere',
    category: 'Coding',
    description: 'An AI coding workspace for building, editing, and understanding software.',
    shortDescription: 'A coding partner inside your editor.',
    features: ['Explore your codebase through chat', 'Make edits across project files', 'Delegate development tasks to agents'],
    accent: '#d4d6d2',
    tag: 'AI code editor',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    maker: 'GitHub',
    category: 'Coding',
    description: 'AI assistance for writing, explaining, reviewing, and shipping code.',
    shortDescription: 'A little help with your next commit.',
    features: ['Get contextual code suggestions', 'Work on development tasks with agents', 'Review pull requests with AI'],
    accent: '#b8c9ee',
    tag: 'Developer companion',
  },
  {
    id: 'devin',
    name: 'Devin Desktop',
    maker: 'Cognition',
    category: 'Coding',
    description: 'Coordinate coding agents in an AI development workspace formerly known as Windsurf.',
    shortDescription: 'A workspace for your coding agents.',
    features: ['Coordinate multiple coding agents', 'Work with an integrated code editor', 'Run development tasks in parallel'],
    accent: '#b3d6e3',
    tag: 'Formerly Windsurf',
  },
  {
    id: 'replit',
    name: 'Replit',
    maker: 'Replit',
    category: 'Coding',
    description: 'Build and publish working apps by describing what you want to create.',
    shortDescription: 'Describe it. Build your next app.',
    features: ['Generate apps from your ideas', 'Edit code in an integrated workspace', 'Publish and host your applications'],
    accent: '#efb393',
    tag: 'Idea to app',
  },
  {
    id: 'v0',
    name: 'v0',
    maker: 'Vercel',
    category: 'Coding',
    description: 'Turn prompts into interfaces and web applications with AI.',
    shortDescription: 'Put your next interface into words.',
    features: ['Generate interfaces from prompts', 'Prototype websites and user flows', 'Build and iterate on full-stack apps'],
    accent: '#deddd6',
    tag: 'Interface builder',
  },
  {
    id: 'lovable',
    name: 'Lovable',
    maker: 'Lovable',
    category: 'Coding',
    description: 'Create websites and full-stack applications through conversation.',
    shortDescription: 'Turn a conversation into a product.',
    features: ['Build applications through chat', 'Connect apps to backend services', 'Publish projects with managed hosting'],
    accent: '#edb7cf',
    tag: 'Conversational building',
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    maker: 'StackBlitz',
    category: 'Coding',
    description: 'Build websites, applications, and prototypes with natural-language prompts.',
    shortDescription: 'A quick start for your next build.',
    features: ['Create websites from prompts', 'Develop interactive app prototypes', 'Iterate on code and functionality'],
    accent: '#bbc5f4',
    tag: 'Prompt to prototype',
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    maker: 'Anthropic',
    category: 'Coding',
    description: 'A coding agent that helps build and change software in your development workflow.',
    shortDescription: 'Think through code. Move it forward.',
    features: ['Explore and understand codebases', 'Implement changes across your project', 'Work with terminal development tools'],
    accent: '#dfac8b',
    tag: 'Coding agent',
  },
  {
    id: 'junie',
    name: 'Junie',
    maker: 'JetBrains',
    category: 'Coding',
    description: 'A coding agent for planning and implementing development tasks.',
    shortDescription: 'Plan the change. Build the solution.',
    features: ['Plan structured development tasks', 'Implement changes from your terminal', 'Work on tasks connected to GitHub'],
    accent: '#c6db9a',
    tag: 'Development planning',
  },
  {
    id: 'amp',
    name: 'Amp',
    maker: 'Amp',
    category: 'Coding',
    description: 'An AI coding agent and development environment for working across projects.',
    shortDescription: 'Bring more momentum to your code.',
    features: ['Delegate work to coding agents', 'Coordinate parallel development tasks', 'Continue tasks across remote workflows'],
    accent: '#e3c39f',
    tag: 'Agentic development',
  },
  {
    id: 'cline',
    name: 'Cline',
    maker: 'Cline',
    category: 'Coding',
    description: 'An open-source coding agent for your editor, desktop, and terminal.',
    shortDescription: 'A hands-on agent for your project.',
    features: ['Plan tasks before implementation', 'Make project edits with an agent', 'Run commands in development workflows'],
    accent: '#c9d8ce',
    tag: 'Open-source agent',
  },
  {
    id: 'coderabbit',
    name: 'CodeRabbit',
    maker: 'CodeRabbit',
    category: 'Coding',
    description: 'AI code reviews that help teams understand changes and catch problems.',
    shortDescription: 'Give your next change a closer look.',
    features: ['Review pull request changes', 'Explain changes in your code', 'Triage and address review feedback'],
    accent: '#edbc9b',
    tag: 'AI code review',
  },
  {
    id: 'kiro',
    name: 'Kiro',
    maker: 'AWS',
    category: 'Coding',
    description: 'An AI development agent that turns ideas into specs and working software.',
    shortDescription: 'From a specification to a solution.',
    features: ['Plan projects with specifications', 'Implement code with an AI agent', 'Work through IDE and CLI tools'],
    accent: '#cabaf3',
    tag: 'Spec-driven coding',
  },
  {
    id: 'n8n',
    name: 'n8n',
    maker: 'n8n',
    category: 'Automation',
    description: 'Build visual AI workflows that connect your apps, models, and data.',
    shortDescription: 'Connect your tools. Automate the rest.',
    features: ['Build workflows on a visual canvas', 'Create connected AI agents', 'Connect custom APIs and services'],
    accent: '#eca5b5',
    tag: 'Visual AI workflows',
  },
  {
    id: 'make',
    name: 'Make',
    maker: 'Make',
    category: 'Automation',
    description: 'Connect applications and create AI-powered workflows on a visual canvas.',
    shortDescription: 'A visual home for your automations.',
    features: ['Build visual app automations', 'Connect the tools you already use', 'Add AI agents to your workflows'],
    accent: '#c6aff0',
    tag: 'Connect and automate',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    maker: 'Zapier',
    category: 'Automation',
    description: 'Automate business tasks by connecting apps, data, and AI assistants.',
    shortDescription: 'Make your everyday apps work together.',
    features: ['Connect apps into automated workflows', 'Build AI agents for business tasks', 'Create customer-facing chatbots'],
    accent: '#f1ba9a',
    tag: 'App automation',
  },
  {
    id: 'lindy',
    name: 'Lindy',
    maker: 'Lindy',
    category: 'Automation',
    description: 'An AI teammate that helps carry out tasks across your workplace tools.',
    shortDescription: 'A little less busywork in your day.',
    features: ['Draft and organize email responses', 'Coordinate meeting scheduling', 'Automate recurring team tasks'],
    accent: '#d5c4ed',
    tag: 'AI teammate',
  },
  {
    id: 'gumloop',
    name: 'Gumloop',
    maker: 'Gumloop',
    category: 'Automation',
    description: 'Build AI agents that use your apps and handle recurring work.',
    shortDescription: 'Give repeatable work a smarter flow.',
    features: ['Connect apps to your AI agents', 'Automate recurring tasks', 'Create browser-based agent workflows'],
    accent: '#efbacc',
    tag: 'Connected AI agents',
  },
  {
    id: 'bardeen',
    name: 'Bardeen',
    maker: 'Bardeen',
    category: 'Automation',
    description: 'Automate lead research, enrichment, and repetitive sales workflows.',
    shortDescription: 'Move from research to your next lead.',
    features: ['Discover and research sales leads', 'Update and enrich CRM records', 'Extract useful data from websites'],
    accent: '#b9c3f1',
    tag: 'Sales automation',
  },
  {
    id: 'browse-ai',
    name: 'Browse AI',
    maker: 'Browse AI',
    category: 'Automation',
    description: 'Extract website data and monitor pages for changes without coding.',
    shortDescription: 'Turn the web into usable information.',
    features: ['Extract data from web pages', 'Monitor pages for changes', 'Schedule recurring data collection'],
    accent: '#c0d79b',
    tag: 'Web data workflows',
  },
  {
    id: 'taskade',
    name: 'Taskade',
    maker: 'Taskade',
    category: 'Automation',
    description: 'Create business apps, AI agents, and connected workflows in one workspace.',
    shortDescription: 'Bring your agents and tasks together.',
    features: ['Build AI-powered business apps', 'Create agents for specific tasks', 'Connect and automate team workflows'],
    accent: '#dfb7de',
    tag: 'AI workspaces',
  },
  {
    id: 'motion',
    name: 'Motion',
    maker: 'Motion',
    category: 'Productivity',
    description: 'Plan projects, prioritize tasks, and organize your calendar with AI.',
    shortDescription: 'Make room for your most useful work.',
    features: ['Prioritize tasks across projects', 'Schedule tasks on your calendar', 'Plan and manage team projects'],
    accent: '#d0d8e5',
    tag: 'Plan your day',
  },
  {
    id: 'reclaim',
    name: 'Reclaim AI',
    maker: 'Reclaim',
    category: 'Productivity',
    description: 'An AI calendar assistant that schedules priorities and protects focus time.',
    shortDescription: 'A little more space to focus.',
    features: ['Protect time for focused work', 'Schedule recurring habits', 'Find time for smarter meetings'],
    accent: '#bbc8f3',
    tag: 'Smarter scheduling',
  },
  {
    id: 'napkin',
    name: 'Napkin AI',
    maker: 'Napkin AI',
    category: 'Productivity',
    description: 'Turn your text into editable diagrams and presentation visuals.',
    shortDescription: 'Give your ideas a visual shape.',
    features: ['Turn text into clear diagrams', 'Edit and customize your visuals', 'Export visuals for slides and documents'],
    accent: '#e2d2a8',
    tag: 'Text to visuals',
  },
  {
    id: 'gitmind',
    name: 'GitMind',
    maker: 'GitMind',
    category: 'Productivity',
    description: 'Turn documents and ideas into structured mind maps and clear summaries.',
    shortDescription: 'Map the ideas worth connecting.',
    features: ['Generate AI-powered mind maps', 'Summarize document content', 'Create flashcards for studying'],
    accent: '#bfc8f1',
    tag: 'Map your thinking',
  },
  {
    id: 'codex',
    name: 'OpenAI Codex',
    maker: 'OpenAI',
    category: 'Coding',
    description: 'Build, review, and improve software with an AI agent in your development workflow.',
    shortDescription: 'From an idea to working code.',
    features: ['Implement features and fix bugs', 'Review changes and repositories', 'Work through desktop, editor, and CLI'],
    accent: '#acd7bd',
    tag: 'Software development agent',
  },
  {
    id: 'manus',
    name: 'Manus',
    maker: 'Manus AI',
    category: 'Automation',
    description: 'Delegate research, presentations, and website projects to a general-purpose AI agent.',
    shortDescription: 'Take your next task from idea to done.',
    features: ['Research topics across the web', 'Create slides and documents', 'Build websites from your ideas'],
    accent: '#dad6c9',
    tag: 'General-purpose agent',
  },
  {
    id: 'genspark',
    name: 'Genspark',
    maker: 'Genspark',
    category: 'Productivity',
    description: 'Bring AI agents, research, documents, slides, and spreadsheets into one workspace.',
    shortDescription: 'One workspace for your next big task.',
    features: ['Delegate multi-step research tasks', 'Create slides and documents', 'Build and edit AI-assisted spreadsheets'],
    accent: '#bed9ed',
    tag: 'AI workspace',
  },
  {
    id: 'chatbase',
    name: 'Chatbase',
    maker: 'Chatbase',
    category: 'Automation',
    description: 'Build customer-facing AI agents connected to your knowledge and business tools.',
    shortDescription: 'A smarter first conversation.',
    features: ['Create agents from your knowledge', 'Connect business tools and procedures', 'Deploy agents for customer support'],
    accent: '#bdc6ef',
    tag: 'Customer-facing agents',
  },
  {
    id: 'monica',
    name: 'Monica',
    maker: 'Monica',
    category: 'Writing & chat',
    description: 'Chat, write, translate, and summarize content with an AI assistant across your devices.',
    shortDescription: 'Everyday assistance, wherever you work.',
    features: ['Chat with multiple AI models', 'Summarize web pages and videos', 'Draft, rewrite, and translate text'],
    accent: '#c2b6f3',
    tag: 'All-in-one assistant',
  },
  {
    id: 'merlin',
    name: 'Merlin',
    maker: 'Merlin',
    category: 'Writing & chat',
    description: 'Work with AI chat, web summaries, writing, and research from your browser.',
    shortDescription: 'A useful sidekick for the web.',
    features: ['Summarize web pages and videos', 'Draft emails and social content', 'Chat with uploaded documents'],
    accent: '#d8bbec',
    tag: 'Browser assistant',
  },
  {
    id: 'sider',
    name: 'Sider',
    maker: 'Sider',
    category: 'Writing & chat',
    description: 'Use a browser AI sidebar for chat, writing, translation, and understanding web content.',
    shortDescription: 'Keep a little AI by your side.',
    features: ['Chat with AI from your browser', 'Summarize and translate web content', 'Work with document and page context'],
    accent: '#b8c7f1',
    tag: 'AI browser sidebar',
  },
  {
    id: 'botpress',
    name: 'Botpress',
    maker: 'Botpress',
    category: 'Automation',
    description: 'Build and deploy AI agents for customer support and connected business workflows.',
    shortDescription: 'Build your next helpful conversation.',
    features: ['Design customer support agents', 'Connect knowledge and business tools', 'Deploy conversational AI workflows'],
    accent: '#c1c2f3',
    tag: 'AI agent platform',
  },
  {
    id: 'qwen',
    name: 'Qwen',
    maker: 'Alibaba',
    category: 'Writing & chat',
    description: 'Explore writing, reasoning, web research, and creative ideas with the Qwen AI assistant.',
    shortDescription: 'Ask a question. Explore the possibilities.',
    features: ['Brainstorm and write through chat', 'Summarize and explore documents', 'Research topics with web search'],
    accent: '#bdb3f3',
    tag: 'Chat and reasoning',
  },
  {
    id: 'kimi',
    name: 'Kimi',
    maker: 'Moonshot AI',
    category: 'Writing & chat',
    description: 'Chat, research, work with documents, and create presentations with an AI assistant.',
    shortDescription: 'A partner for your next deep dive.',
    features: ['Search and research complex topics', 'Explore uploaded documents', 'Create presentations from ideas'],
    accent: '#bfc9e1',
    tag: 'Knowledge work',
  },
  {
    id: 'chatpdf',
    name: 'ChatPDF',
    maker: 'ChatPDF',
    category: 'Research',
    description: 'Ask questions about documents and explore summaries with references to the original content.',
    shortDescription: 'Have a conversation with your documents.',
    features: ['Ask questions about uploaded PDFs', 'Summarize documents and research papers', 'Explore answers with source references'],
    accent: '#c8b9ee',
    tag: 'Document conversations',
  },
  {
    id: 'character-ai',
    name: 'Character.AI',
    maker: 'Character.AI',
    category: 'Writing & chat',
    description: 'Create AI characters and explore imaginative conversations, voices, and storytelling.',
    shortDescription: 'A new character for your next story.',
    features: ['Create and customize AI characters', 'Explore interactive conversations', 'Develop character voices and greetings'],
    accent: '#d4c9df',
    tag: 'Creative conversations',
  },
  {
    id: 'read-ai',
    name: 'Read AI',
    maker: 'Read AI',
    category: 'Productivity',
    description: 'Turn meetings and recordings into searchable transcripts, summaries, and action items.',
    shortDescription: 'Keep the useful parts of every meeting.',
    features: ['Generate meeting summaries', 'Create transcripts from recordings', 'Capture action items and key discussions'],
    accent: '#b6d9d4',
    tag: 'Meeting intelligence',
  },
  {
    id: 'higgsfield',
    name: 'Higgsfield',
    maker: 'Higgsfield',
    category: 'Video & audio',
    description: 'Create videos and explore cinematic effects, motion, and creative visual directions.',
    shortDescription: 'Take your next scene somewhere new.',
    features: ['Generate videos from visual ideas', 'Explore cinematic effects and camera motion', 'Develop creative video variations'],
    accent: '#c9dfb1',
    tag: 'Cinematic creation',
  },
  {
    id: 'flux',
    name: 'FLUX Playground',
    maker: 'Black Forest Labs',
    category: 'Image & design',
    description: 'Generate and edit images with FLUX models in a browser-based creative playground.',
    shortDescription: 'A playground for your next visual idea.',
    features: ['Generate images from text prompts', 'Edit images with natural language', 'Combine multiple visual references'],
    accent: '#dfcbb6',
    tag: 'FLUX image creation',
  },
  {
    id: 'pictory',
    name: 'Pictory',
    maker: 'Pictory',
    category: 'Video & audio',
    description: 'Turn scripts, articles, and presentations into videos with captions and AI narration.',
    shortDescription: 'Put your written ideas into motion.',
    features: ['Convert scripts and blog posts into videos', 'Turn presentations into narrated videos', 'Add captions and create highlight clips'],
    accent: '#d0b8ed',
    tag: 'Content to video',
  },
  {
    id: 'fliki',
    name: 'Fliki',
    maker: 'Fliki',
    category: 'Video & audio',
    description: 'Create narrated videos from text, blog posts, and presentations with AI voices.',
    shortDescription: 'A voice and a visual for your idea.',
    features: ['Turn text and blogs into videos', 'Generate AI voiceovers', 'Translate and dub video content'],
    accent: '#c5c1f4',
    tag: 'Narrated video',
  },
  {
    id: 'julius',
    name: 'Julius AI',
    maker: 'Julius AI',
    category: 'Research',
    description: 'Explore data and spreadsheets through conversation and turn your findings into reports.',
    shortDescription: 'Ask your data a better question.',
    features: ['Ask questions about uploaded data', 'Analyze spreadsheets in plain language', 'Turn data findings into reports'],
    accent: '#a9d6cf',
    tag: 'AI data analysis',
  },
  {
    id: 'relevance-ai',
    name: 'Relevance AI',
    maker: 'Relevance AI',
    category: 'Automation',
    description: 'Build AI agents and connect them into workflows for recurring business tasks.',
    shortDescription: 'Put a useful agent on the task.',
    features: ['Build specialized AI agents', 'Automate recurring business workflows', 'Coordinate teams of connected agents'],
    accent: '#c6b7eb',
    tag: 'AI agent teams',
  },
  {
    id: 'adcreative',
    name: 'AdCreative.ai',
    maker: 'AdCreative.ai',
    category: 'Marketing & SEO',
    description: 'Generate ad images, video creatives, and copy while exploring campaign variations.',
    shortDescription: 'Give your next campaign a new angle.',
    features: ['Generate ad images and video creatives', 'Draft copy for advertising campaigns', 'Explore creative variations and insights'],
    accent: '#ecb5c5',
    tag: 'Advertising creative',
  },
  {
    id: 'predis',
    name: 'Predis.ai',
    maker: 'Predis.ai',
    category: 'Marketing & SEO',
    description: 'Create ads and social posts, schedule content, and explore campaign ideas.',
    shortDescription: 'Bring your social content together.',
    features: ['Generate image and video ads', 'Create social posts and carousels', 'Schedule and publish social content'],
    accent: '#c5b6ee',
    tag: 'Social content',
  },
  {
    id: 'framer',
    name: 'Framer AI',
    maker: 'Framer',
    category: 'Coding',
    description: 'Create and refine editable websites with AI assistance on Framer’s visual canvas.',
    shortDescription: 'A visual canvas for your next website.',
    features: ['Generate website sections from prompts', 'Refine layouts, copy, and interactions', 'Create and update website content'],
    accent: '#b5c9f2',
    tag: 'AI website design',
  },
  {
    id: 'fotor',
    name: 'Fotor AI',
    maker: 'Fotor',
    category: 'Image & design',
    description: 'Generate images from text prompts and explore visual styles for creative projects.',
    shortDescription: 'See your next idea in a new style.',
    features: ['Generate images from text prompts', 'Explore artistic visual styles', 'Develop illustrations and creative concepts'],
    accent: '#b8d4f2',
    tag: 'Image generation',
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
    default: {
      const name = tools.find((tool) => tool.id === id)?.name ?? id;
      const words = name.split(/[\s.-]+/).filter(Boolean);
      const initials = (words.length > 1 ? words.slice(0, 2).map((word) => word[0]).join('') : name.slice(0, 2)).toUpperCase();
      mark = (
        <g>
          <rect x="5" y="5" width="38" height="38" rx="11" strokeWidth="1.4" />
          <text x="24" y="25" textAnchor="middle" dominantBaseline="middle" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="600" fill="currentColor" stroke="none">{initials}</text>
        </g>
      );
      break;
    }
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
