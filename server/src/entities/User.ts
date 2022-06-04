import {
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import bcrypt from 'bcrypt'
import Todo from "./Todo";

@Entity()
@ObjectType()
export default class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: string;

    @Field(() => String)
    @Column({ unique: true, length: 50 })
    username!: string;

    @Field(() => String)
    @Column()
    password!: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => Todo, todo => todo.user)
    @Field(() => [Todo])
    todos: Todo[];


    /**
     * validatePassword
     * @param pw password input to be compared to saved user password
     * @returns Boolean
     */
    public validatePassword(pw: string) {
        return bcrypt.compare(pw, this.password)
    };
}

@ObjectType({ description: 'Auth object containt JWT and User info' })
export class AuthType {
    @Field(type => User)
    user!: User

    @Field()
    token!: string
}