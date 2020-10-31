import React, { useState } from 'react'

interface CreateAreaProps {
    onAdd : (note: {title : string, content: string}) => void
}

const CreateArea: React.FC<CreateAreaProps> = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        props.onAdd(note)
        setNote({
            title: '',
            content: ''
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input name='title' value={note.title} onChange={handleChange} placeholder='Enter title' />
                <textarea name='content' value={note.content} onChange={handleChange} placeholder='Enter content' rows={3} />
                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}

export default CreateArea
