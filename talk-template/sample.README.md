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
# webpack-dev-server --port=3100 --hot --config webpack.config.js
```

### Deployment

```sh
# create a new build of the slides
yarn run build
# alias for
# rm -rf ./build && builder run build-webpack-base -- --config webpack.config.js

# deploy the new build to gh-pages
yarn run deploy
# alias for
# gh-pages -d build
```
