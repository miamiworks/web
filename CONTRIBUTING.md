# CONTRIBUTING

Table of contents.

- [Pick your task (contribution).](#pick-your-contribution)
- [Start Coding (installation)](#start-coding).

## How to start?

### What are we about?

First get familiar with [what this project is about](https://github.com/miamiworks/web/wiki).

### Pick your contribution

All contributions are organized in github issues.

Not all contributions are about coding, the project also needs help documenting and maintaining.

A. **First timers**: If this will be your first contribution I strongly recommend choosing one of the issues labled with `good-first-issue`, [here is a filtered list](https://github.com/miamiworks/web/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).

B. **Experienced** If you have already contributed or you feel confident about your skills and the project tecnologies you can issues with the `help wanted` label, [here is a filtered list](https://github.com/miamiworks/web/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

## Start Coding

### Installation

1. The project ias developed using the Gabtsby.js.
2. After cloning you can install packages by doing `npm install`.
3. Create a `.env.development` file that the same variables that you can find on the `.env.example`, make sure to replace the `values` with their corresponding real life values, for example:

```txt
GATSBY_API_KEY=<firebase key>
```

Needs to be replaced with the real firebase key, ask your project leader for that. This is similar to how it should look:

```txt
GATSBY_API_KEY=adsA45DS3SD3df32dfgdf32342sjksdf23
```

4. You can start coding by running the development server: `$ npm run start`.

### File organization:

#### 1) The folder `src/pages`:

Contains all the entry files, depending on what page you want to update, for example: 

| Page name | Page path (slug) | File Path |
| --- | --------- | ------- |
| Home page | `/` | `src/pages/index.js` |
| Terms and conditions | `/terms` | `src/pages/terms.js` |

> As you can see, the file name matches exactly the page slug you want.

#### The folder `src/components` 

Contains all the react.js components.

#### The folder `src/store`

Contains all the FLUX actions and the main shared store among the entire web app.


### Deploy the application

Only meant for the lead developers.

1. Login into firebase `$ firebase login --no-localhost`
2. Run de deploy script: `$ npm run build`
3. Upload to firebase: `$ firebase deploy --only hosting`
