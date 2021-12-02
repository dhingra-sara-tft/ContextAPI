import React, { useContext } from 'react'
import { Name } from './ComponentA'

const ComponentC = () => {
     const FullName = useContext(Name);
    return (
       
        <div>
            <h1>Hello {FullName}</h1>
        </div>
    )
}

export default ComponentC
