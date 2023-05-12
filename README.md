This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
```bash
npm install
```
create db on https://cloud.mongodb.com/v2

update url in DATABASE_URL in .env or prisma/prisma if throwing any error

push your model into your db
```bash
npm prisma db push
```

First, run the development server:

```bash

npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Used Tech
# A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup
1. tailwind

# extened the tailwind with this plugin to using class in css
2. tailwindcss/forms

# With React-icons we can use icons
3. react-icons

# With React-icons we can use icons
4. react-hook-form
5. clsx
6. prisma
7. next-auth
8. @prisma/client
9. @next-auth/prisma-adapter
10. bcrypt
11. @type/bcrypt
12. axios
14. react-hot-toast



