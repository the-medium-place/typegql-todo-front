import React from 'react'
import { useAllTodosQuery, useGetOneTodosQuery, useAddTodoMutation, useUpdateCompleteMutation, useDeleteTodoMutation } from '../../graphql/generated';

export default function TodoList() {

    const { data, loading, error } = useAllTodosQuery()
    const [updateCompleteTodo, { data: completeData, loading: completeLoading, error: completeError }] = useUpdateCompleteMutation()
    const [deleteTodoMutation, { data: deleteData, loading: deleteLoading, error: deleteError }] = useDeleteTodoMutation()


    async function handleDeleteTodo(id: string) {
        try {
            const { data } = await deleteTodoMutation({
                variables: { id }
            })

            console.log(data)
            window.location.reload()
        } catch (err) {
            console.error(err)
            console.log(JSON.stringify(err))
        }
    }

    async function handleUpdateComplete(id: string) {
        try {
            const { data } = await updateCompleteTodo({
                variables: { id }
            })

            console.log(data)
        } catch (err) {
            console.error(err)
            console.log(JSON.stringify(err))
        }
    }

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
                                {todo.todoContent} --
                                <button
                                    onClick={() => handleUpdateComplete(todo.id)}
                                    style={{ background: todo.isComplete ? 'green' : 'red' }}
                                >
                                    {todo.isComplete ? 'Complete' : 'Not Complete'}
                                </button> --
                                <button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                >
                                    delete
                                </button>
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
