# DLakes - Radiks fix
>**HEADS UP:** 最小化测试版本

### Setup

- 请使用yarn （可以配置taobao npm 源）

```terminal
yarn install
```
> 如果下载缓慢可能是因为@prisma/sdk 下载构建导致的，可以 npm -g 全局下载一下

### 开发配置

- 由于CORS，开发环境需要在 node_modules/@redwoodjs/core/config/webpack.development.js 中的devServer添加以下配置：


```js
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
```
## 仅需启动web端

```terminal
cd web && yarn webpack-dev-server --config ../node_modules/@redwoodjs/core/config/webpack.development.js
```

