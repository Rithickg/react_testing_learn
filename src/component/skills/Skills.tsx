import React, { useEffect, useState } from 'react'
import { SkillProps } from './Skills.types'

export const Skills = (props: SkillProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1500)
    }, [])
    return (
        <div>
            <h1>Skills</h1>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn ? (<button>Start Learning</button>) : (<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
        </div>
    )
}
