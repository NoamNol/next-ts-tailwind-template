# next-ts-tailwind-template

Next.js template with TypeScript, Tailwind, best linters and more.

## Features

- ✅️ Next.js 14 (with the new [`app`](https://nextjs.org/docs/app) folder)
- ✅️ React 18
- ✅️ Tailwind CSS 3
- ✅️ TypeScript
- ✅️ SCSS
- ✅️ CSS Modules (Next.js built-in)
- ✅️ ESLint — Find and fix problems in your code
- ✅️ Stylelint — Find and fix problems in your CSS
- ✅️ Prettier — Format your CSS and assets
- ✅️ No Prettier on JS/TS code! — Use ESLint + [Airbnb Style](https://github.com/airbnb/javascript) instead and
  get full control over the code style
- ✅️ Path Mapping — Import components or images using the @ prefix
- ✅️ Useful libs — [clsx](https://github.com/lukeed/clsx) and [lodash](https://lodash.com)
- ✅️ Docker Ready
- ✅️ VSCode Ready
- ✅️ EditorConfig — Consistent indents across editors and IDEs
- ✅️ API Ready — Request and cache your API with axios and SWR

## Steps

- [Steps to recreate this template](docs/steps.md)

_Next steps you may do:_

- [Testing](docs/next-steps/testing.md)
- [Component Libraries](docs/next-steps/component-libraries.md)
- [Data Fetching Management](docs/next-steps/fetching-management.md)
- [State Management](docs/next-steps/state-management.md)
- [Storybook](docs/next-steps/storybook.md)
- [SEO](docs/next-steps/seo.md)
- [Translation](docs/next-steps/translation.md)
- [Commit Convention](docs/next-steps/commit-convention.md)
- [Deployment](docs/next-steps/deployment.md)
- [Keep Dependencies Up-To-Date](docs/next-steps/keep-dependencies-up-to-date.md)
- [More VSCode Extensions](docs/next-steps/vscode-extensions.md)
- [Upgrading Next.js](https://nextjs.org/docs/app/building-your-application/upgrading)

## More Resources

- [Create T3 App](https://create.t3.gg/)
- [superplate](https://pankod.github.io/superplate/) (and [refine](https://refine.dev/) optionally)
- [Vercel: Next.js App Playground](https://vercel.com/templates/next.js/app-directory)

<br />
<br />

---

# My App Title

Some description about my app.

## Main Technologies

- [Next.js](https://nextjs.org) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [SCSS](https://sass-lang.com/) +
  [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)

## Build Setup

### Requirements

- Minimum Node.js version: 18.17

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

Auto-fix lint problems (be careful):

```bash
npm run lint:fix
```

## API

[Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) can be accessed on `/api/*`, see [`/api/posts`](http://localhost:3000/api/posts) for example.  
This endpoint can be edited in `src/app/api/posts/route.ts`.

## Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine
2. Build your container: `docker build -t nextjs-app:latest . -f docker/Dockerfile`
3. Run your container: `docker run -d -p 3001:3000 --name the-nextjs-app nextjs-app:latest`

Or build and run with [Docker Compose](https://docs.docker.com/compose/):

```bash
docker-compose -f docker/docker-compose.yml --env-file docker/docker-compose.env -p nextjs-app up -d
```

And visit [localhost:3001](http://localhost:3001)

## Development Tools

### VSCode extensions

Use the `Extensions: Show Recommended Extensions` command to see the recommended extensions in VSCode.

### Browser extension

[React Developer Tools](https://react.dev/learn/react-developer-tools)

## Debugging

### VSCode Debugging

Select `Next: Full` in the debugger drop-down menu, and start debugging by clicking on
the green arrow or pressing `F5` (don't run `npm run dev` in the same time).
<br />
<br />
If your server is already running (with `npm run dev`), you can start the client-only debugger by selecting `Next: Chrome` in the drop-down menu.

## Contributing

Don't (:
