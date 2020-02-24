<!-- To be used for creating new talk overviews -->

# TODO_talk_title

These are the slides from my talk at [Event](TODO_event_url) on TODO_eventDate.

In this talk, I cover TODO_description.

## Just Looking for Slides?

You could check out this [PDF of my slides](TODO_exported_slide_url), or the [hosted deck](TODO_hosted_deck_url).

## Further Reading

## Acknowledgements

---

### Development

```sh
# install all dependencies
yarn

# run development server
yarn run dev
# alias for
# react-scripts start
```

### Deployment

```sh
# create a new build of the slides
yarn run build
# alias for
# rm -rf ./build && react-scripts build

# deploy the new build to gh-pages
yarn run deploy
# alias for
# gh-pages -d build
```

### `package.json`

The following scripts and dependencies are standard for most of my new spectacle presentations.

```json
{
  "name": "TODO_talk_title",
  "version": "1.0.0",
  "author": "Kylie Stewart <kylie@kyliestewart.tech>",
  "dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.1.1",
    "spectacle": "^6.0.0"
  },
  "scripts": {
    "build": "npm run clean && react-scripts build",
    "clean": "rm -rf ./build",
    "dev": "react-scripts start",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^2.1.1"
  }
}
```
