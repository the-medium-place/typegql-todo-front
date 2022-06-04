import React, { useState } from 'react'
import { useLoginMutation, useAllTodosQuery, useGetOneTodosQuery, useAddTodoMutation, useUpdateCompleteMutation, useDeleteTodoMutation, useCreateUserMutation } from '../../graphql/generated';
import Auth from '../../utils/auth'

export default function Login() {
    const [loginFormState, setLoginformState] = useState({
        username: '',
        password: ''
    })

    const [loginUser, { data, loading, error }] = useLoginMutation()
    if (error) {
        console.log(JSON.stringify(error))
    }

    function handleInput(e: React.FormEvent<HTMLInputElement>) {
        const { name, value } = e.currentTarget;

        console.log({ name, value })

        setLoginformState({
            ...loginFormState,
            [name]: value
        })
    }

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            const { data } = await loginUser({
                variables: loginFormState
            })
            console.log(data)
            Auth.login(data)

        } catch (err) {
            console.error(err)
        }

        console.log(loginFormState)
    }

    return (
        <div style={{ margin: '40px 0px 40px 0px' }}>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Username" name="username" onChange={handleInput} value={loginFormState.username} />
                <input type="password" placeholder="Password" name="password" onChange={handleInput} value={loginFormState.password} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
