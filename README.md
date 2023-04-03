# 技术栈
```
框架：Koa
对象关系映射：TypeORM
数据库：MySQL
```

# 组织结构
```
src
  constants
  controller
  db                          --- deprecate
  entity
  migration
  model
  router
  subscriber
  utils
  data-source.ts
  server.ts
test
.env
```

# 建表语句
```
create table if not exists todo (
  id int unsigned auto_increment,
  text varchar(1024) not null,
  completed tinyint(1) not null,
  primary key (id)
) engine=InnoDB default charset=utf8;
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
