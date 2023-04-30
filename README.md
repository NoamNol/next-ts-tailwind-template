# next-ts-tailwind-template
Next.js template with TypeScript and Tailwind CSS

## Features
* Next.js 13 (with the new [`app`](https://beta.nextjs.org/docs/app-directory-roadmap) folder!)
* React 18
* Tailwind CSS 3
* TypeScript
* SCSS
* ESLint — Find and fix problems in your code
* Stylelint — Find and fix problems in your CSS
* No Prettier! — Use [Airbnb Style](https://github.com/airbnb/javascript) instead and get full control over the code style
* Path Mapping — Import components or images using the @ prefix
* API Ready — Request and cache your API with axios and SWR
* Docker Ready

## Requirements
* Minimum Node.js version: 14.18.0

## Steps

See: [Steps to recreate this template](docs/steps.md)

## More resources
* [Vercel: Next.js App Router Playground](https://github.com/vercel/app-playground)


---

# App Title

Some description about the app.

## Main Technologies
* [Next.js](https://nextjs.org)
  > React framework for production.
* [Tailwind CSS](https://tailwindcss.com)
  > Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

## Build Setup
### Installation
Install dependencies:
```bash
npm ci
```
Or install and update dependencies (update package-lock):
```bash
npm install
```

### Launch development server
Serve with hot reload at [localhost:3000](http://localhost:3000)
```bash
npm run dev
```

### Lint
Find lint problems:
```bash
npm run lint
```

## API
[Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers) can be accessed on `/api/*`, like [/api/posts](http://localhost:3000/api/posts).  
This endpoint can be edited in `src/app/api/posts/route.ts`.

## Docker
Build and run docker (listen on port 3001):
```bash
docker build -t nextjs-app:latest . -f docker/Dockerfile
docker run -d -p 3001:3000 --name the-nextjs-app nextjs-app:latest
```

Or with docker-compose:
```bash
docker-compose -f docker/docker-compose.yml --env-file docker/docker-compose.env -p nextjs-app up -d
```

## Development Tools
### VSCode extensions
Use the `Extensions: Show Recommended Extensions` command to see the recommended extensions in VSCode.

### Browser extension
[React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
