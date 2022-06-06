import React from 'react'
import { useAllTodosQuery, useGetOneTodosQuery, useAddTodoMutation, useUpdateCompleteMutation, useDeleteTodoMutation, useGetOneTodosLazyQuery, useGetOneUserQuery } from '../../graphql/generated';
import AddTodoForm from '../AddTodoForm';
import Auth from '../../utils/auth'

type MyToken = {
    exp: number,
    iat: number,
    data: {
        username: string,
        id: number
    }
}

type CurrentUser = {
    exp: string
    iat: string
    data: {
        username: string
        id: string
    }
}


export default function TodoList() {

    // const { data, loading, error } = useAllTodosQuery()
    const [updateCompleteTodo, { data: completeData, loading: completeLoading, error: completeError }] = useUpdateCompleteMutation()
    const [deleteTodoMutation, { data: deleteData, loading: deleteLoading, error: deleteError }] = useDeleteTodoMutation()

    const { data: { id: userid } } = Auth.getProfile() as MyToken

    const { data, loading, error } = useGetOneUserQuery({
        variables: { id: "" + userid }
    })
    if (error) {
        console.log(JSON.stringify(error))
        return (
            <>
                <h1>There was a problem!</h1>
                <a href="/">Return Home</a>
            </>
        )
    }
    if (data) {

        console.log(data)
    }

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
        if (!data.oneUser.todos.length) {
            return (
                <>
                    <Welcome />
                    <h1>No TODO's yet! Use the input to create your first one!</h1>
                    <AddTodoForm />
                </>
            )
        }
        console.log({ data })
        return (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px auto', flexDirection: 'column', alignItems: 'center' }}>
                <Welcome />
                <AddTodoForm />

                <ul style={{ padding: '1.3rem', borderRadius: '8px', listStyle: 'none', width: '100%', filter: 'drop-shadow(20px 20px 5px rgba(0,0,0,0.3)' }}>
                    {
                        data.oneUser.todos.map((todo, i) => {
                            return (
                                <li
                                    style={{
                                        position: 'relative',
                                        border: '1px slid gray',
                                        background: todo.isComplete ? 'lightblue' : 'lightpink',
                                        padding: '1.3rem',
                                        marginTop: 5,
                                        borderTopLeftRadius: i === 0 ? 15 : 0,
                                        borderBottomRightRadius: i === data.oneUser.todos.length - 1 ? 15 : 0,
                                        boxShadow: 'inset 10px 10px 30px rgba(250,250,250,0.9)'
                                    }}
                                    key={todo.id}
                                >
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

function Welcome() {

    function logout(): void {
        Auth.logout();
    }

    const userInfo = Auth.getProfile() as CurrentUser || null
    return (
        <>
            {Auth.loggedIn() ? (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: 40 }}>
                    <h3>Welcome {userInfo.data.username}</h3>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : null}
        </>
    )
}
