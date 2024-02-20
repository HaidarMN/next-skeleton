# Next.js Skeleton / Starter Pack

Look at the [Next.js documentaion](https://nextjs.org/) to learn more.

## Getting Started

**Important Note**: this project use pnpm for package manajer. Make sure to install it first:

```bash
npm i -g pnpm
```

Don't forget to install the package:

```bash
pnpm install
# or
pnpm i
```

Next step is to run the development server on [http://localhost:3000](http://localhost:3000):

```bash
pnpm run dev
# or
pnpm dev
```

## Packages List

- [Axios](https://axios-http.com/) for HTTP request
- [Tailwind](https://tailwindcss.com/) for CSS framework
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [React Hook Form](https://react-hook-form.com/) for validation form
- [Yup](https://www.npmjs.com/package/yup) for validation schema

## How To Use A Component

### Text Input

```bash
import InputText from "@/components/global/input/Text"; // Component
import { MdOutlineEmail } from "react-icons/md"; // Icons

<InputText
  name="username"
  icon={<MdOutlineEmail />}
  label="Username"
  placeholder="Enter your username"
  primary
/>
```

### Props

| Props       |            Type |
| :---------- | :-------------- |
| name        |          String |
| label       |          String |
| placeholder |          String |
| icon        |       Component |
| error       |          String |
| primary     |         Boolean |
| disabled    |         Boolean |
| register    | React Hook Form |
| passValue   |   any(function) |

**NB**: Props "name" is a required props
