import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import '../index.css';
import PageLayout from '../layouts/PageLayout';
import Message from '../components/ui/Message';
import getLocalStorageData from '../utils/getLocalStorageData';

const AddNoteForm = () => {
    // state untuk menyimpan data berupa object dengan props title dan note
    const [state, setState] = useState({ title: '', note: '' });
    const [isSuccess, setIsSuccess] = useState(false);
    // event handler untuk menyimpan data dari form input ke dalam state
    const handleTitleChange = (e) => {
        setState({ ...state, title: e.target.value });
    };
    const handleNoteChange = (e) => {
        setState({ ...state, note: e.target.value });
    };
    // untuk handle add new data To Do List ke localStorage

    const handleSubmit = (e) => {
        // mengambil data
        const notes = getLocalStorageData('notes');
        // generate id
        const noteId = uuidv4();
        // tambahkan noteId ke notes
        notes.push({ ...state, id: noteId });
        // simpan notes ke localStorage
        localStorage.setItem('notes', JSON.stringify(notes));
        setIsSuccess(true);
        e.preventDefault();
    };
    const { title, note } = state;

    return (
        <div className="flex h-[500px] justify-center items-center p-3">
            {isSuccess && <Message text="Data berhasil ditambahkan" />}
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
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};
const AddPage = () => {
    return (
        <PageLayout>
            <div className="text-center">
                <p className="mt-5">
                    <Link to="/" className="hover:text-emerald-500">
                        Home
                    </Link>{' '}
                    / Add{' '}
                </p>
                <p className="font-bold text-[20px] mt-[50px]">Add New To Do</p>
                <AddNoteForm />
            </div>
        </PageLayout>
    );
};

export default AddPage;
