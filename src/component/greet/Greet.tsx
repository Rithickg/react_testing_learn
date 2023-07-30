import React from 'react'

type GreetProps = {
    name?: string
}
export const Greet = (props: GreetProps) => {
    return (
        <div><h1>
            Hello, Greetings</h1>
            <h2>Hello {props.name}</h2></div>

    )
}
