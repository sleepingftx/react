//import React, { useState, useRef } from 'react';
import * as React from 'react';
import { useRef } from 'react';

interface TodoEditFormProps {
    onEdit():void
}

export const EditForm: React.FC<TodoEditFormProps> = (props) => {
    // useRef
    const ref = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const editButtonClick = (event: React.MouseEvent) => {
            props.onEdit();
            ref.current!.value = '';
            ref2.current!.value = '';
            // setItem('');

    }
    // end useRef
    return (
        <div className="edit-form">
            <label htmlFor="edit-date">Date</label>
            <input
                ref={ref}
                type="text"
                id="edit-date"
                placeholder="Введите дату"
            />
            <label htmlFor="edit-distance">Distance</label>
            <input
                ref={ref2}
                type="text"
                id="edit-distance"
                placeholder="Введите дистанцию"
            />
            <button  onClick={editButtonClick}>
                Save
            </button>

        </div>
    )
}
