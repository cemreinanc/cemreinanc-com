This is a [Next.js](https://nextjs.org/) project bootstrapped with [`kraftend/next-tailwind-starter`](https://github.com/kraftend/next-tailwind-starter).

## Getting Started

Use Node.js 24.20.0 and Bun 1.4.2. With fnm installed, select the project's Node version and install dependencies:

```bash
fnm use --install-if-missing
bun install --frozen-lockfile
```

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `bun check` for TypeScript and lint checks. For a local production build, supply the site's public URL:

```bash
NEXT_PUBLIC_SITE_URL=https://cemreinanc.com bun run build
```

On Vercel, the app also accepts the automatically supplied `VERCEL_PROJECT_PRODUCTION_URL`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
