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
        if (!data.allTodos.length) {
            return <h1>No TODO's yet! Use the input to create your first one!</h1>
        }
        return (
            <div style={{ display: 'flex', justifyContent: 'center', width: '50%', margin: '40px auto' }}>
                <ul style={{ padding: '1.3rem', borderRadius: '8px', boxShadow: '0px 0px 20px rgba(0,0,0,0.4)', listStyle: 'none', width: '100%' }}>
                    {
                        data.allTodos.map(todo => {
                            return (
                                <li style={{ position: 'relative', border: '1px slid gray', background: todo.isComplete ? 'lightblue' : 'lightpink', padding: '1.3rem', marginTop: 5 }} key={todo.id}>
                                    {todo.todoContent}
                                    <div>
                                        <button
                                            onClick={() => handleUpdateComplete(todo.id)}
                                        // style={{ background: todo.isComplete ? 'green' : 'red' }}
                                        >
                                            {todo.isComplete ? 'Complete' : 'Not Complete'}
                                        </button>
                                        <button
                                            style={{ position: 'absolute', top: 5, right: 5, background: 'red', border: 'none', padding: '.3rem', color: 'white', fontWeight: 'bold' }}
                                            onClick={() => handleDeleteTodo(todo.id)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    return (
        <div>TodoList</div>
    )
}
