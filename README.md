# 🚀🚀 11ty tai11base

Tai11base is [11ty-base](https://github.com/danfascia/11ty-base) + [TailwindCSS](https://tailwindcss.com).

It has the following feature set

* Tailwind 1.4 for build in PurgeCSS goodness 👍🏼
* CSS minification using [css-nano](https://cssnano.co/) 👍🏼

+ the features inherited from [11ty-base](https://github.com/danfascia/11ty-base)

* [Eleventy Navigation](https://github.com/11ty/eleventy-navigation) plugin module included
* .env file support to change build environment locally
* Good baseline SEO headers (meta tags, schema.org, twitter cards, facebook openGraph)
* Global `site.json` data file for sitewide defaults and parameters
* `<body class="home $bodyClass">` implementation
* Eleventy Config defaults
  - Default layout alias for `base.njk` master template
  - A well formatted readable date filter
  - Conditional HTML minification for `NODE_ENV='production'` environment

Please feel free to fork and mutate / improve.

## Getting Started

Clone or fork repository then install relevant node_modules using yarn or NPM

```
yarn
```

### Dev mode
To run a local development server based on 11ty's built in `--serve` parameter. This will firstly build TailwindCSS based on the `tailwind.config.css` file in the project root folder.

```
yarn dev
```

To build to production

```
yarn build
```
Build will compile TailwindCSS, run PurgeCSS on the `./dist` folder and then minify the HTML and the CSS. It does not contain any Javascript build pipeline.

Deploy the `dist` folder to a host of choice.

[Daniel Fascia](https://twitter.com/danfascia)