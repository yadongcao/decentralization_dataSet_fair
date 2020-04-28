# DLakes - Redwood Edition
>**HEADS UP:** 基于Redwood.js 开发，目前使用了部分核心设计
api端并未使用，后续考虑结合lambda 重构 radiks-server等


### Setup

- 请使用yarn （可以配置taobao npm 源）

```terminal
yarn install
```
> 如果下载缓慢可能是因为@prisma/sdk 下载构建导致的，可以 npm -g 全局下载一下

### 开发配置

- 由于CORS，开发环境需要在 node_modules/@redwoodjs/core/config/webpack.development.js 中添加以下配置：

```js
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
```

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.

## Development

### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```


## 参考文档
- [Redwoodjs.com](https://redwoodjs.com): home to all things RedwoodJS.
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.

##
**Features:**
 - 问题域管理（群组）
 - 数据集管理 (包括下载、评论)
 - 定向隐私分享
 - 数据使用情况统计（TODO）
 - 数据模板（TODO）
 - 解析插件化等（TODO）
