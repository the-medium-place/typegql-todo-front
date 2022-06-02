import React, { useState } from 'react'
import { useAllTodosQuery, useGetOneTodosQuery, useAddTodoMutation, useUpdateCompleteMutation, useDeleteTodoMutation } from '../../graphql/generated';

export default function AddTodoForm() {

    const [addTodoMutation, { data: addData, loading: addLoading, error: addError }] = useAddTodoMutation();
    if (addError) { console.log(JSON.stringify(addError)) }

    const [formData, setFormData] = useState('')


    async function handleAddTodo() {
        if (!formData.length) {
            return alert('please enter content for the todo!')
        }

        try {
            const { data } = await addTodoMutation({
                variables: {
                    input: formData
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
