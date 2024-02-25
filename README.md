# Next.js Skeleton / Starter Pack

Look at the [Next.js documentaion](https://nextjs.org/) to learn more.

## Getting Started

**Important Note**: this project use pnpm for package manager. Make sure to install it first:

```bash
npm install -g pnpm
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

- :globe_with_meridians: [Axios](https://axios-http.com/) for HTTP request
- :art: [TailwindCSS](https://tailwindcss.com/) for CSS framework
- :star2: [Animate.css](https://animate.style/) for CSS animation
- :open_file_folder: [Zustand](https://zustand-demo.pmnd.rs/) for state management
- :trollface: [React Icons](https://react-icons.github.io/react-icons/) for icons
- :memo: [React Hook Form](https://react-hook-form.com/) for validation form
- :white_check_mark: [Yup](https://www.npmjs.com/package/yup) for validation schema
- :calendar: [Air Datepicker](https://air-datepicker.com/) for datepicker
- :spiral_notepad: [React Select](https://react-select.com/home) for input select

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

| Props       | Type            |
| :---------- | :-------------- |
| name        | String          |
| label       | String          |
| placeholder | String          |
| icon        | Component       |
| error       | String          |
| primary     | Boolean         |
| disabled    | Boolean         |
| control     | React Hook Form |
| passValue   | function        |

**NB**: Props "name" is a required props
