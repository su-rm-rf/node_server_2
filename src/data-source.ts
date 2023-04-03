// import path from 'path'
// import { PlatformTools } from "typeorm/platform/PlatformTools";
// // 也不知道脑瘫的 TypeORM为什么要强制把/变成\ 导致无法正则匹配 暂时没有解决办法 先覆盖方法
// PlatformTools.pathNormalize = pathStr => {
//   let normalizedPath = path.normalize(pathStr);
//   if (process.platform === "win32") {
//     // Replace `\` with `/`
//     pathStr = pathStr.replace(/\\/g, "/");
//     // 如果匹配到了盘符 就把盘符去掉
//     const pathRoot = path.parse(pathStr).root;
//     if (pathRoot.match(/.*:.*/)) {
//       pathStr = pathStr.substring(pathRoot.length - 1)
//     }
//     normalizedPath = path.posix.normalize(pathStr);
//   }
//   return normalizedPath;
// }

import { DataSource } from "typeorm"
import Todo from "./entity/Todo"

// const entitiesString = __dirname + 
//   (process.env.NODE_ENV === 'production' ?
//   'dist/entity/**/*.js' : '/entity/**/*.ts')

// console.log(entitiesString.replace(/\\/g, '/'))

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "todo",
  synchronize: true,
  logging: false,
  entities: [Todo],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"]
})