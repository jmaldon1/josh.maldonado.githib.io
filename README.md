# josh.maldonado.githib.io

My personal site

# Table of Contents

- [josh.maldonado.githib.io](#joshmaldonadogithibio)
- [Table of Contents](#table-of-contents)
- [Development](#development)
  - [Start server](#start-server)
  - [Start watch](#start-watch)
- [Adding items/events](#adding-itemsevents)
- [CI/CD (Deployment to Github Pages)](#cicd-deployment-to-github-pages)

# Development

## Start server

```sh
$ npm run start
```

## Start watch

In a seperate terminal than the server, run the following.

[watch](https://github.com/mikeal/watch) will check for any [item](#adding-itemsevents) changes and update a dynamic import file accordingly.

```sh
$ npm run watch
```

# Adding items/events

These are the items that populate the grid layout within the web site.

```sh
$ cd ./src/app/containers/HomePage/items/itemDetails
```

Within this folder you will see many items seperated by the year and month.

Add any new items following the format set in place.

# CI/CD (Deployment to Github Pages)

Github actions is used to build and deploy to Github Pages.

Only versioned tags (tags that start with a 'v') are actually built and deployed to Github Pages.
