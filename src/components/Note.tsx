import React from 'react'

interface NoteProps {
    id: number
    title: string,
    content: String,
    onDelete: (id: number) => void
  }

const Note: React.FC<NoteProps> = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }
    
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Note
