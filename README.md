# Product Hunt
Product Hunt demo in Vue.js and GraphQL, using Vue Apollo, Vue Router and Vuex.

## Client-side setup
```
yarn install
```

Create an environment file with default values:  
```
cp .env.example .env
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

## Server-side setup
```
yarn install
```

Create an environment file with default values:  
```
cp .env.example .env
```

Replace `PRODUCT_HUNT_DEVELOPER_TOKEN` in the `.env` file with your own [Product Hunt Developer Token](https://api.producthunt.com/v1/oauth/applications).

### Start GraphQL server
```
yarn start
```
