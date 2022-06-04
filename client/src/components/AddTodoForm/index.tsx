import React, { useState } from 'react'
import { useAllTodosQuery, useGetOneTodosQuery, useAddTodoMutation, useUpdateCompleteMutation, useDeleteTodoMutation } from '../../graphql/generated';
import Auth from '../../utils/auth'

type MyToken = {
    exp: number,
    iat: number,
    data: {
        username: string,
        id: number
    }
}

export default function AddTodoForm() {

    const [addTodoMutation, { data: addData, loading: addLoading, error: addError }] = useAddTodoMutation();
    if (addError) { console.log(JSON.stringify(addError)) }
    const { data: { id: userid } } = Auth.getProfile() as MyToken

    // console.log({ userid })

    // try {
    //     console.log(Auth.getProfile().data.id)

    // } catch (err) {
    //     console.log(err)
    // }
    const [formData, setFormData] = useState('')



    async function handleAddTodo() {
        if (!formData.length) {
            return alert('please enter content for the todo!')
        }

        try {
            const { data } = await addTodoMutation({
                variables: {
                    input: formData,
                    userid: "" + userid
                }
            })
            console.log(data)
            window.location.reload()
        } catch (err) {

        }
    }


    return (
        <div>
            <input name="todoContent" id="todoContent" type="text" placeholder='Todo Text' onChange={(e) => setFormData(e.target.value)} value={formData} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}
