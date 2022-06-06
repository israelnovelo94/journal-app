import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNote } from "../helpers/loadNote";
import { types } from "../types/types";

export const startNewNote = () => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));

        dispatch(addNewNote(doc.id, newNote));
    }
}



export const activeNote = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id: id,
            ...note,
        }
    }
}

export const addNewNote = (id,note) => {
    return {
        type: types.notesAddNew,
        payload: {
            id: id,
            ...note,
        }
    }
}

export const startLoadNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNote( uid );
        dispatch( setNotes(notes) );
    }
}


export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

export const startSaveNote = ( note ) => {

    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;

        if(!note.url){
            delete note.url;
        }

        const notesFirestore = {...note};
        delete notesFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(notesFirestore);

        dispatch( refreshNote(note.id, notesFirestore) );

        Swal.fire({
            title: 'Saved!',
            text: 'Your note has been saved',
            icon: 'success',
        })
    }
}

export const refreshNote = (id, note) => {
    return {
        type: types.notesUpdated,
        payload: {
            id,
            ...note
            
        }
    }
}

export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {
        const { active: note } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait',
            allowOutsideClick: false,
        });
        
        Swal.showLoading();
        const fileUrl = await fileUpload(file);

        const updatedNote = {...note, url:fileUrl}

        dispatch(activeNote(updatedNote.id, updatedNote));

        dispatch( startSaveNote(updatedNote) );

        Swal.close();
    }
}

export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch( deleteNote(id) );
    }
}

export const deleteNote = (id) => {
    return {
        type: types.notesDeleteFile,
        payload: id
    }
}

export const startLogoutCleaning = () => {
    return {
        type: types.notesLogoutCleaning
    }
}