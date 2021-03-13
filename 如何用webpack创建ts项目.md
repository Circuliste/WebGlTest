# 如何用webpack创建ts项目

环境配置

```
npm init -y
npm install webpack webpack-cli --save-dev

npm install -g typescript
npm install typescript ts-loader -D
tsc --init

npm install --save-dev webpack-dev-server
npm install three
npm install @types/three --save
npm install three-orbitcontrols
```

webpack.config

```
const path = require('path');

module.exports = {
    mode: "development",
  entry: './src/index.ts',
    devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
        {test:/\.ts$/,exclude: /node_modules/,use:['ts-loader']}
    ],
  },
  resolve: {
    extensions:['.js','.ts']
},
};
```

导入包的ts版本

```
npm install @types/包名 --save
```

```
…or create a new repository on the command line
echo "# WebGlTest" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Circuliste/WebGlTest.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Circuliste/WebGlTest.git
git branch -M main
git push -u origin main
```

