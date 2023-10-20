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
type PropsType = {
    title:string
    man:ManType
    car:string
    food:string
}
export const Desctructuring = ({title,man, ...props}:PropsType) => {
    return (
        <div>
                <h1>{title}</h1>
            <h2>{man.age}</h2>
            <h3>{props.food}</h3>
        </div>
    );
};

