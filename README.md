# 需求
```
开发一个在线文档任务管理工具
```

# 技术栈
```
框架：Koa
对象关系映射：TypeORM
数据库：MySQL
```

# 组织结构
```
src
  constants             --- 常量
  controller            --- 控制器
  entity                --- 实体类
  middlewares           --- 中间件
  router                --- 路由
  utils                 --- 工具
  data-source.ts        --- ORM配置
  server.ts             --- 入口文件
test
.env                    --- 环境变量
.eslintrc
package.json
tsconfig.json
```

> 使用TypeORM之后，直接根据entity创建表结构

# swagger接口文档
中间件

# 常见错误
Client does not support authentication protocol requested by server;
```
解决: 
  select user, host, plugin from mysql.user;
  alter user 'root'@'localhost' identified with mysql_native_password by 'root';
  flush privileges;
  select user, host, plugin from mysql.user;
```

# 登录鉴权
```
jsonwebtoken
koa-jwt
```
