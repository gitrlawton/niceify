# Niceify

Built by [Ryan Lawton](https://www.linkedin.com/in/rlawton714/) for the [Nosu AI Hackathon](https://nosu-ai-hackathon.devpost.com/).

## Overview

Niceify is an AI-powered web application that helps users craft kinder, more empathetic social media comments. Using advanced natural language processing, Niceify analyzes your comments and suggests improved versions that maintain your original meaning while being more positive and constructive.

## Features

- **Comment Analysis**: Get a niceness score and feedback for your social media comments
- **AI Rewriting**: Automatically rewrite comments to be kinder and more empathetic
- **Multiple Platforms**: Simulate different social media platforms (Twitter, Instagram, LinkedIn, etc.)
- **Real-time Editing**: Replace AI-generated social media content with actual posts to test your comments against
- **Interactive UI**: Beautiful, responsive design with smooth animations

## How It Works

1. **Post Generation**: The AI creates realistic social media posts
2. **Write a Comment**: You type your response to the post
3. **Get Feedback**: Receive a niceness score and constructive feedback on what you wrote
4. **Improve Your Comment**: Use the Niceify button to get a nicer version
5. **Post or Retry**: Post your improved comment or try again

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS, React
- **Backend**: Next.js API Routes
- **AI**: Groq API with LLaMA 3 70b
- **Animation**: React Confetti, CSS animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Groq API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gitrlawton/niceify.git
   ```
2. Install dependencies:
   ```bash
   cd niceify
   npm install
   ```
3. Create a `.env.local` file:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (example: `git checkout -b feature/AmazingFeature`)
3. Commit your changes (example: `git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (example: `git push origin feature/AmazingFeature`)
5. Open a Pull Request
