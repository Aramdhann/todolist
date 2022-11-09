import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-use-history';
import '../index.css';
import PageLayout from '../layouts/PageLayout';
import { Link } from 'react-router-dom';
import getLocalStorageData from '../utils/getLocalStorageData';

const EditNoteForm = () => {
    // untuk dapat alamat dari page yg diakses
    const location = useLocation();
    // untuk delete
    const history = useHistory();
    // state untuk menyimpan data
    const [allNotes, setAllNotes] = useState(null);
    const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
    // pengambilan data dilakukan setelah DOM diupdate shg pakai useEffect()
    useEffect(() => {
        const notes = getLocalStorageData('notes');
        setAllNotes(notes);
        // mengambil noteId dari location
        const noteId = location.pathname.replace('/edit/', '');
        // mengambil data note yang akan diedit
        const currentNote = notes.filter((note) => note.id === noteId);
        // simpan data note ke state
        setCurrentNote(currentNote[0]);
    }, []);
    const handleTitleChange = (e) => {
        setCurrentNote({ ...currentNote, title: e.target.value });
    };
    const handleNoteChange = (e) => {
        setCurrentNote({ ...currentNote, note: e.target.value });
    };
    const handleSubmit = (e) => {
        const newNotes = allNotes.map((note) => {
            if (note.id === currentNote.id) {
                return {
                    ...note,
                    title: currentNote.title,
                    note: currentNote.note,
                };
            } else {
                return note;
            }
        });
        localStorage.setItem('notes', JSON.stringify(newNotes));
        e.preventDefault();
        history.push('/');
    };
    const handleDeleteNote = (e) => {
        const newNotes = allNotes.filter((note) => note.id !== currentNote.id);
        setCurrentNote(null);
        setAllNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
        history.push('/');
    };

    const { title, note } = currentNote;

    return (
        <div className="flex h-[500px] justify-center items-center p-3">
            <form
                className="w-[320px] rounded-lg border-2 p-3"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col justify-center">
                    <label className="text-emerald-500 font-semibold">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="border-2 rounded-lg text-center p-3 mt-2 hover:border-emerald-400 w-auto"
                    />
                </div>
                <div className="flex flex-col items-center mt-[20px]">
                    <label className="text-emerald-500 font-semibold">
                        Description
                    </label>
                    <textarea
                        rows="5"
                        cols="30"
                        name="note"
                        value={note}
                        onChange={handleNoteChange}
                        className="border-2 rounded-lg p-3 m-2 hover:border-emerald-400 resize-none w-auto"
                    />
                </div>
                <div className="flex justify-center mt-[20px]">
                    <button
                        className="bg-emerald-400 ml-4 p-3 rounded-lg text-white hover:bg-emerald-500 transition duration-300"
                        type="submit"
                    >
                        Save
                    </button>
                    <button
                        className="bg-red-500 ml-4 p-3 rounded-lg text-white hover:bg-red-600 hover:text-white transition duration-300"
                        onClick={handleDeleteNote}
                    >
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
};
const EditPage = () => {
    return (
        <PageLayout>
            <div className="text-center">
                <p className="mt-5">
                    <Link to="/" className="hover:text-emerald-500">
                        Home
                    </Link>{' '}
                    / Edit{' '}
                </p>
                <p className="font-bold text-[20px] mt-[50px]">Edit To Do</p>
                <EditNoteForm />
            </div>
        </PageLayout>
    );
};

export default EditPage;
