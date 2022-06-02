import { InputType, Field } from "type-graphql";

@InputType()
export default class AddTodoInput {
    @Field()
    todoContent: string

    @Field({ nullable: true })
    isComplete: boolean
}