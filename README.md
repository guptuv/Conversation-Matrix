# Conversation Matrix

> LLM-powered historical chat app built with Wikipedia data, React & Supabase

Conversation Matrix makes learning history engaging through AI-powered conversations, powered by a Large Language Model (LLM) specifically fine-tuned on Wikipedia's historical data. This specialized training means you get accurate, well-sourced responses about any historical event, person, or era, delivered through a modern chat interface.

### AI Implementation
The chat interface is backed by a fine-tuned LLM that:
- Was trained on Wikipedia's comprehensive historical articles
- Provides citations and sources for historical claims
- Excels at historical context and connections
- Maintains academic accuracy while being conversational
- Updates responses based on verified historical sources

## Live Demonstration

[![Conversation Matrix Demo](./public/Screenshot%202025-11-06%20010440.png)](https://youtu.be/mTERsF9CvlA)

Click the image above to watch the demo on YouTube!

## Quick Start

```bash
# Install dependencies
npm install

# Set up your env file
cp .env.example .env

# Start dev server
npm run dev
```

Visit `http://localhost:8080` and start chatting!

## What's Inside

Built with modern tools for a great developer experience:

- Specialized Historical LLM trained on Wikipedia data
- Context-aware chat processing with source attribution
- React 18 + TypeScript + Vite for the frontend
- Supabase handling auth and real-time updates
- Edge Functions for serverless AI processing
- Shadcn/ui + Tailwind CSS for the UI
- React Query for state management

## Setting Up Your Dev Environment

1. You'll need Node.js 18+ and a package manager (npm/yarn)

2. Clone and install:

   ```bash
   git clone https://github.com/guptuv/Conversation-Matrix.git
   cd Conversation-Matrix
   npm install
   ```

3. Set up your `.env`:

   ```env
   VITE_SUPABASE_PROJECT_ID="your-project-id"
   VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-key"
   VITE_SUPABASE_URL="https://your-project.supabase.co"
   ```

4. Deploy the chat function to Supabase Edge Functions:
   - Copy `supabase/functions/chat/` to your Supabase project
   - Add your AI provider's API key in the function settings
   - Deploy and you're ready to go

## Development Tips

Keep your code clean:

- Run `npm run lint` before commits
- Check types with `tsc --noEmit`
- Use ESLint and Prettier (configs included)

Project structure is straightforward:

```
src/
  components/     # React components
  hooks/         # Custom hooks
  integrations/  # External services
  lib/          # Utilities
  pages/        # Route components
```

## Deployment

Build for production:

```bash
npm run build
npm run preview  # Test the build locally
```

The `dist` folder is ready to deploy to your favorite host.

## Contributing

Found a bug or want to help? PRs welcome! Just:

1. Fork it
2. Create your feature branch
3. Make your changes
4. Push and open a PR

## License

MIT © [guptuv](LICENSE)

Need help? Open an issue or reach out directly.
