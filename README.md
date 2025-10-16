# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# AI Idea Generator

Type a topic → get 5 startup ideas (mock by default; switch to real AI via .env).

## Stack
Vite + React, CSS Modules, (optional) OpenAI chat completions

## Run
npm install
npm run dev

## Configure
Copy `.env.example` to `.env`.  
- Keep `VITE_AI_MODE=mock` to try it quickly.
- Set `VITE_AI_MODE=real` + `VITE_OPENAI_API_KEY` to use OpenAI.

## Deploy
- Netlify: drag & drop `dist` or connect repo (build: `npm run build`, publish: `dist`)
- Vercel: `npm run build` → set framework: Vite

