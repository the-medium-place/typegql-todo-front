import {
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export default class Todo extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    todoContent: string;

    @Field(() => Boolean)
    @Column({ default: false })
    isComplete: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;
}