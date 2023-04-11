import { DataSource } from "typeorm"
import Todo from "./entity/Todo"

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