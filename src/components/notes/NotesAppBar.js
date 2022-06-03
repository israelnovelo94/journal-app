import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  const {active} = useSelector( state => state.notes );
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch( startSaveNote(active) );
  }

  const handleClickPicture = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if(file){
      dispatch( startUploading(file) );
    }
  }

  return (
    <div className='notes__appbar'>
        <span>25 de mayo 2022</span>

        <input 
          type='file'
          name='fileSelector'
          id='fileSelector'
          style={ {display: 'none'} }
          onChange={handleFileChange}

        />

        <div>
            <button className='btn' onClick={handleClickPicture}>
                Picture
            </button>

            <button className='btn' onClick={handleSave}>
                Save
            </button>
        </div>
    </div>
  )
}
