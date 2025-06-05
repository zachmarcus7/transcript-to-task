## Overview

This project was inspired by the need to streamline the process of turning hastily typed meeting notes into a clear, structured task list. The goal was also to automate the integration of those tasks into a project management UI where they could be efficiently tracked and assigned. It features a straightforward task management board, along with the ability to upload meeting notes or transcripts, which are then parsed into actionable tasks by an AI. The main technologies used were Next.js, Prisma, Postgres, and the Groq AI API.

## Features

- Ability to upload meeting notes or transcripts
- AI-powered parsing into tasks using Groq
- Organize tasks by project
- Add/edit/archive tasks and projects manually
- Basic priority handling for task and project sorting
- Full-stack TypeScript with server actions (Next.js App Router)

### Project Structure

<pre> <code>```text ├── app/ │ ├── lib/ │ │ ├── actions/ # Data actions │ │ ├── data/ # Data fetching │ │ └── types/ # Type definitions │ ├── prisma/ # Database schema and client setup │ ├── projects/ # Project-related routes and UI (Root page after authentication) │ ├── ui/ # UI components │ ├── layout.tsx # Root layout component │ └── page.tsx # Home / sign-in page │ ├── public/ # Static assets │ ├── auth.ts # Authentication logic ├── middleware.ts # Middleware for routing/auth ├── package.json ├── README.md └── tsconfig.json ```</code> </pre>
## Environment Variables

Add the following variables to your `.env` file (replace `********` with your actual values):

```env
# Database connection (Postgres with Prisma on Vercel/Neon)
POSTGRES_PRISMA_URL=********

# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=************
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=************
STACK_SECRET_SERVER_KEY=************

# App authentication secret
AUTH_SECRET="************"

# Groq API Access
GROQ_API_KEY="************"
GROQ_API_BASE="https://api.groq.com/openai/v1/chat/completions"