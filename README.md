# 技术栈
koa + typeorm + mysql

# 建表语句
```
create table if not exists todo (
  id int unsigned auto_increment,
  text varchar(1024) not null,
  completed tinyint(1) not null,
  primary key (id)
) engine=InnoDB default charset=utf8;
```

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
