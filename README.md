# 🚀🚀 Tai11base

Take [11ty-base](https://github.com/danfascia/11ty-base), add [TailwindCSS](https://tailwindcss.com) and you have **Tai11base** which is an [Eleventy](https://github.com/11ty) starter theme.

Additional features it includes on top of [11ty-base](https://github.com/danfascia/11ty-base) are:

* Tailwind 1.4 for build in PurgeCSS goodness 👍🏼
* CSS minification using [css-nano](https://cssnano.co/) 👍🏼

Please feel free to fork and mutate / improve.

## Getting Started

Clone or fork repository then install relevant node_modules using yarn or NPM

```
yarn
```

### Dev mode
To run a local development server based on 11ty's built in `--serve` parameter. This will firstly build TailwindCSS based on the `tailwind.config.css` file in the project root folder. 

_NB: It will build from the tailwind.config.js once each time the following command is invoked, but it will not watch the config file for changes due to the overhead of rebuilding TailwindCSS

```
yarn dev
```

### Build to production

```
yarn build
```
Build will compile TailwindCSS, run PurgeCSS on the `./dist` folder and then minify the HTML and the CSS. It does not contain any Javascript build pipeline.

Deploy the `dist` folder to a host of choice. 

If you are using a host such as [Netlify](https://netlify.com), use `yarn build` as your build command in the continuous integration and choose `./dist` as the folder to deploy

[Daniel Fascia](https://twitter.com/danfascia)
