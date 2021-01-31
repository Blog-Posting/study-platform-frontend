# study-platform-frontend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### setup

#### add eslint prettier

```
npm i eslint-config-prettier eslint-plugin-prettier --save-dev
```

.eslintrc.js
rules에 'prettier/prettier': 'off', 추가

#### add husky

- 커밋하기전에 eslint 검사

```
// packages.json
  "husky": {
    "hooks": {
      "pre-commit": "eslint app.js --fix"
    }
  }
```

- 변경된 파일만 검사

```
npm i lint-staged --save-dev
//packages.json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": "eslint --fix"
  },
```
