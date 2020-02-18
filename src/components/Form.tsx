//import React, { useState, useRef } from 'react';
import * as React from 'react';
import { useRef } from 'react';

interface TodoFormProps {
    onAdd(date:string,distance:string):void
}

export const Form: React.FC<TodoFormProps> = (props) => {
    // useRef
    const ref = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const addButtonClick = (event: React.MouseEvent) => {
            props.onAdd(ref.current!.value,ref2.current!.value);
            ref.current!.value = '';
            ref2.current!.value = '';
            // setItem('');

    }
    // end useRef
    return (
        <div className="add-form">
            <label htmlFor="date">Date</label>
            <input
                ref={ref}
                type="text"
                id="date"
                placeholder="Введите дату"
            />
            <label htmlFor="distance">Distance</label>
            <input
                ref={ref2}
                type="text"
                id="distance"
                placeholder="Введите дистанцию"
            />
            <button  onClick={addButtonClick}>
                Add
            </button>

        </div>
    )
}
