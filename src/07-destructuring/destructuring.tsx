import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: '1'}>
    address: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: ManType
    car: {model: string}
}

function useDimychState(m: string) {
    return [m, function (){}]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    const [message, setMessage] useState('hello')
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}