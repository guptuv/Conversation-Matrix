# Conversation Matrix

A unified platform combining intelligent chatbots and real-time CRM communication.  
Built with React, TypeScript, and Supabase integration — featuring secure authentication, real-time updates,  
and a modern UI powered by Shadcn/ui components.

## Demo

[![Conversation Matrix Demo](https://img.youtube.com/vi/mTERsF9CvlA/maxresdefault.jpg)](https://youtu.be/mTERsF9CvlA)

Watch the demo video above to see Conversation Matrix in action. Click the image to play the video on YouTube.

The demo showcases:

- Real-time chat interactions
- AI-powered historical responses
- Seamless UI interactions
- Message history and threading

## Features

- 🤖 **AI History Chatbot**  
  Interactive conversations about historical events, figures, and eras using advanced AI models.

- 💬 **Real-Time Messaging**  
  Instant message updates and seamless conversation management.

- 🎨 **Modern UI Components**  
  Built with Shadcn/ui and Tailwind CSS for a beautiful, responsive interface.

- 🚀 **Edge Functions**  
  Serverless chat processing using Supabase Edge Functions.

- 🔒 **Secure Authentication**  
  Built-in authentication and authorization via Supabase.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **UI:** Tailwind CSS, Shadcn/ui components
- **Backend:** Supabase (Database, Auth, Edge Functions)
- **State Management:** React Query
- **Build Tool:** Vite
- **Package Manager:** npm/yarn

## Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- AI provider account (OpenAI/similar)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/guptuv/Conversation-Matrix.git
   cd Conversation-Matrix
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   ```bash
   # Copy the example env file
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:

   ```env
   VITE_SUPABASE_PROJECT_ID="your-project-id"
   VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-key"
   VITE_SUPABASE_URL="https://your-project.supabase.co"
   ```

4. **Supabase Edge Function Setup**

   - Navigate to Supabase Dashboard → Edge Functions
   - Deploy the chat function from `supabase/functions/chat/`
   - Set your AI provider's API key in the function's environment variables

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Visit http://localhost:8080

## Development Guidelines

- 📝 **Environment Variables**

  - Never commit `.env` files
  - Keep `.env.example` updated with required variables
  - Use appropriate environment-specific files (.env.local, .env.production)

- 🔧 **Code Quality**

  - Run ESLint before commits: `npm run lint`
  - Follow TypeScript strict mode guidelines
  - Use consistent code formatting (configured in `.eslintrc`)

- 📦 **Package Management**

  - Use one package manager consistently (npm or yarn)
  - Keep dependencies updated regularly
  - Review security vulnerabilities with `npm audit`

- 🏗️ **Project Structure**
  - Components go in `src/components/`
  - Pages in `src/pages/`
  - Hooks in `src/hooks/`
  - Types in `src/types/`
  - Utils in `src/lib/`

## Production Deployment

1. Build the project:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Preview the build:

   ```bash
   npm run preview
   # or
   yarn preview
   ```

3. Deploy the `dist` folder to your hosting provider

## Troubleshooting

- **Missing Environment Variables**: Ensure all variables in `.env.example` are set in your `.env`
- **Build Errors**: Check Node.js version (18+ required) and package manager compatibility
- **API Errors**: Verify Supabase and AI provider credentials
- **Type Errors**: Run `tsc --noEmit` to check for type issues

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
