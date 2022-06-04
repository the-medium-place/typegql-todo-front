import { Resolver, Query, Mutation, Arg, Ctx, Int, ID } from "type-graphql";
import Todo from '../entities/Todo';
import User from "../entities/User";
import { AuthenticationError } from "apollo-server-express";


@Resolver(Todo)
export default class TodoResolver {
    @Query((_returns) => [Todo])
    async allTodos(): Promise<Todo[]> {
        return await Todo.find({ relations: ["user"] });
    }

    @Query((_returns) => Int)
    async countTodos(): Promise<number> {
        return await Todo.count();
    }

    @Query((_returns) => Todo)
    async oneTodo(@Arg("id") id: string) {
        return await Todo.findOne({ where: { id }, relations: ["user"] });
    }

    // @Query((_returns) => [Todo])
    // async todosByUser(@Arg("user") user: User) {
    //     return await Todo.findBy({user})
    // }

    @Mutation((_returns) => [Todo])
    async addTodo(@Arg("input") input: string, @Arg("userid") userid: string, @Ctx() ctx: { username: string, id: number } | number) {
        // console.log({ ctx })
        if (ctx === 404) {
            throw new AuthenticationError("Token not found")
        }
        else if (ctx === 403) {
            throw new AuthenticationError("Invalid Token")
        }
        const todo = await Todo.create({ todoContent: input });
        const currentUser = await User.findOneBy({ id: userid })
        if (!currentUser) {
            throw new AuthenticationError("Who are you?")
        }
        todo.user = currentUser;
        await todo.save();
        const allTodos = await Todo.find()
        return allTodos;
    }

    @Mutation((_returns) => [Todo])
    async updateComplete(@Arg("id") id: string, @Ctx() ctx: { username: string, id: number } | number) {
        if (ctx === 404) {
            throw new AuthenticationError("Token not found")
        }
        else if (ctx === 403) {
            throw new AuthenticationError("Invalid Token")
        }
        const todo = await Todo.findOneBy({ id });
        if (!todo) throw new Error("Todo not found!");
        Object.assign(todo, { isComplete: !todo.isComplete });
        await todo.save();
        const allTodos = await Todo.find()
        return allTodos;
    }

    @Mutation(() => [Todo])
    async deleteTodo(@Arg("id") id: string, @Ctx() ctx: { username: string, id: number } | number) {
        if (ctx === 404) {
            throw new AuthenticationError("Token not found")
        }
        else if (ctx === 403) {
            throw new AuthenticationError("Invalid Token")
        }
        const todo = await Todo.findOneBy({ id });
        if (!todo) throw new Error("Todo not found!");
        await todo.remove();
        const allTodos = await Todo.find()
        return allTodos;
    }
}