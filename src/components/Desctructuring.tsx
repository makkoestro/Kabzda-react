import React from 'react';
export type ManType = {
    name: string
    age: number
    lessons: Array<{title:string}>
    address: {
        street: {
            title:string
        }
    }
}

export const Desctructuring = (props:ManType) => {
    const {name, age}=props
    return (
        <div>
                <h1>{name}</h1>
            <h2>{age}</h2>
        </div>
    );
};

