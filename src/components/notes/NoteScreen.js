import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>

            <input 
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                autoComplete='off'
            />

            <textarea
                placeholder='What happend today'
                className='notes__textarea'
            ></textarea>

            <div className='notes__image'>
                <img 
                    src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300'
                    alt='img'
                />
            </div>

        </div>
    </div>
  )
}
