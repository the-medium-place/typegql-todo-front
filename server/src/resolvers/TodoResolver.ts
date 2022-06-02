import { Resolver, Query, Mutation, Arg, Ctx, Int, ID } from "type-graphql";
import Todo from '../entities/Todo';

@Resolver(Todo)
export default class TodoResolver {
    @Query((_returns) => [Todo])
    async allTodos(): Promise<Todo[]> {
        return await Todo.find();
    }

    @Query((_returns) => Int)
    async countTodos(): Promise<number> {
        return await Todo.count();
    }

    @Query((_returns) => Todo)
    async oneTodo(@Arg("id") id: string) {
        return await Todo.findOne({ where: { id } });
    }

    @Mutation((_returns) => [Todo])
    async addTodo(@Arg("input") input: string) {
        const todo = await Todo.create({ todoContent: input });
        await todo.save();
        const allTodos = await Todo.find()
        return allTodos;
    }

    @Mutation((_returns) => [Todo])
    async updateComplete(@Arg("id") id: string) {
        const todo = await Todo.findOneBy({ id });
        if (!todo) throw new Error("Todo not found!");
        Object.assign(todo, { isComplete: !todo.isComplete });
        await todo.save();
        const allTodos = await Todo.find()
        return allTodos;
    }

    @Mutation(() => [Todo])
    async deleteTodo(@Arg("id") id: string) {
        const todo = await Todo.findOneBy({ id });
        if (!todo) throw new Error("Todo not found!");
        await todo.remove();
        const allTodos = await Todo.find()
        return allTodos;
    }
}