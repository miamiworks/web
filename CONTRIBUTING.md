# CONTRIBUTING

## Installation

1. The project ias developed using the Gabtsby.js.
2. After cloning you can install packages by doing `npm install`.
3. Create a `.env.development` file that the same variables that you can find on the `.env.example`, make sure to replace the `values` with their corresponding real life values, for example:

```txt
API_KEY=<firebase key>
```

Needs to be replaced with the real firebase key, ask your project leader for that. This is similar to how it should look:

```txt
API_KEY=adsA45DS3SD3df32dfgdf32342sjksdf23
```

4. You can start coding by running the development server: `$ npm run start`.

## File organization:

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


## Deploy the application

1. Login into firebase `$ firebase login --no-localhost`
2. Run de deploy script: `$ npm run build`
3. Upload to firebase: `$ firebase deploy --only hosting`