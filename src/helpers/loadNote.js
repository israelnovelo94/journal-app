import { db } from "../firebase/firebase-config"


export const loadNote = async (uid) => {
    const noteSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    noteSnap.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })
    })
    return notes;
}