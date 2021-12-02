import React ,{createContext} from 'react'
import ComponentB from './ComponentB'
import { useContext } from 'react'

const Name = createContext();
const ComponentA = () => {
    
    return (
        <Name.Provider value = {"Sara Dhingra. Welcome "}>
            <ComponentB/>
        </Name.Provider>
    )
}

export default ComponentA
export { Name };

