import React from 'react'
import { useAllTodosQuery, useGetOneTodosQuery, useAddTodoMutation, useUpdateCompleteMutation, useDeleteTodoMutation } from '../../graphql/generated';

export default function TodoList() {

    const { data, loading, error } = useAllTodosQuery()
    if (error) { console.log(JSON.stringify(error)) }

    if (loading) {
        return <p>Loading...</p>
    }

    if (data) {
        return (
            <ul>
                {
                    data.allTodos.map(todo => {
                        return (
                            <li key={todo.id}>
                                {todo.todoContent} -- <span>&times;</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <div>TodoList</div>
    )
}
