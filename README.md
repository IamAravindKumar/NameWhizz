# NameWhizz

![NameWhizz Logo](./src/assets/light_logo.png)

NameWhizz is a random name picker tool with various functions & customization. Just enter inputs, choose the random picker type and get your random result.

- In some situations, our brain just can't make a decision, so why not let the tool like NameWhizz to making the small decision.

- By just inserting your inputs and spin the list, you will immediately get a random result.

- NameWhizz will give you the fairest result by using the advanced algorithm behind it.

## Tech Stack

- React (18)
- Sass
- CSS Modules
- Node (20.18.0)
- pnpm (9.15.0)
- Vite

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can start this project based by doing the following:

1. Clone the project

```bash
git clone git@github.com:IamAravindKumar/NameWhizz.git
```

2. Move into the Folder

```bash
cd NameWhizz
```

3. Install Dependencies

```bash
pnpm install
```

4. Start the Dev Server

```bash
pnpm dev
```

## Tips for Expanding the ESLint configuration[Keeping for contributors future reference]

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
