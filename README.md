# testnuxt

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deploy to GAE

gcloudがインストールされてる前提
### GCPプロジェクトの指定
```
$ gcloud config set project {project ID}
```

### デプロイ
GCPプロジェクトの指定が必須
```
# nuxt のビルド
$ yarn build

# GAEにデプロイ
$ gcloud app deploy app.yaml
```
