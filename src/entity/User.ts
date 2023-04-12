import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import Todo from "./Todo"

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  profile!: string

  @Column(type => Todo)
  todos!: Todo[]
}