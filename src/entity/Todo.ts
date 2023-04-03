import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Todo {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  text!: string

  @Column()
  completed!: number
  
}