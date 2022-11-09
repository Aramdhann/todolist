import React from 'react';
import '../index.css';
import PageLayout from '../layouts/PageLayout';
import { Link } from 'react-router-dom';
import getLocalStorageData from '../utils/getLocalStorageData';

const NoteList = () => {
    // get data dari localStorage, fungsinya disimpan di utils biar lebih mudah dipakai lagi
    const notes = getLocalStorageData('notes');
    const listItems = notes.map((note) => {
        return (
            <li className="m-[0.5rem]" key={note.id}>
                <p className="font-bold text-emerald-500 text-[20px]">
                    <Link to={`/edit/${note.id}`}>{note.title}</Link>
                </p>
                <p>{note.note.slice(0, 50)}</p>
                <hr className="m-2"/>
            </li>
        );
    });

    return (
        <div className="flex flex-col items-center mt-5">
            <p className="text-[20px] font-semibold">Note List</p>
            <div className="flex flex-col border-2 rounded-lg min-w-[30vw] text-left mt-3 p-[1rem]">
                <ul className="list-none">{listItems}</ul>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <PageLayout>
                <div className="flex justify-center mt-3">
                    <Link to="/add">
                        <button className="bg-emerald-400 p-3 rounded-lg text-white hover:bg-emerald-500 transition duration-300">
                            <div className="flex items-center">
                                <span className="text-[30px] leading-none">
                                    +
                                </span>
                                <span className="leading-none float-right ml-2">
                                    Add New To Do
                                </span>
                            </div>
                        </button>
                    </Link>
                </div>
                <NoteList />
            </PageLayout>
        </>
    );
};

export default Home;
