import {
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToMany,
    ManyToOne
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import User from "./User";

@Entity()
@ObjectType()
export default class Todo extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: string;

    @Field(() => String)
    @Column()
    todoContent!: string;

    @Field(() => Boolean)
    @Column({ default: false })
    isComplete!: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User, (user) => user.todos)
    user: User
}