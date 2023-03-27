# node_stack

http
express
koa
nest

进程、线程
浏览器，Nodejs服务端，CSS，前端框架，工程化，算法数据结构，SSRBFF，可视化

要从理论和应用的角度出发，而不是从背诵

# 重点KOA
koa + typeorm + mysql

# 建表语句
create table if not exists todo (
  id int unsigned auto_increment,
  text varchar(1024) not null,
  completed tinyint(1) not null,
  primary key (id)
) engine=InnoDB default charset=utf8;

# 常见错误
Client does not support authentication protocol requested by server;
解决: 
  select user, host, plugin from mysql.user;
  alter user 'root'@'localhost' identified with mysql_native_password by 'root';
  flush privileges;
  select user, host, plugin from mysql.user;

# 登录鉴权
jsonwebtoken
koa-jwt
