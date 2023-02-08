import React from 'react';
import {Note} from "../App";
import {Navigate, Outlet, useOutletContext, useParams} from "react-router-dom";

type NoteLayoutProps = {
    notes: Note[]
}

export const NoteLayout = ({ notes }: NoteLayoutProps) => {
    const { id } = useParams()
    const note = notes.find(item => item.id === id)

    if (note == null) return <Navigate to='/' replace/>


    return (
        <Outlet context={note}/>
    );
};

export function useNote() {
    return useOutletContext<Note>()
}