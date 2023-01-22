import React from 'react'
import DropDown from './DropDown'
import useScroll from '../../HelperFunctions/useScroll';
import Tldr from '../Tldr'
export default function Skills() {
    const opacity = useScroll(250)
    return (<>

        <div className={opacity ? 'newSection' : ' newSection opacity-100'} id='skills'>
            <h1> Skills:</h1>
            <div className='@apply grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <DropDown language='Java' skills={['OOP', 'Database Connection with JDBC', 'File Creation']} />
                <DropDown language='SQL' skills={['Creating/Designing Databases', 'Execute CRUD Operations', 'Frameworks like swagger / Apollo for graphQl']} />
                <DropDown language='Python' skills={['Familiar with Libraries', 'Familiar with Automation']} />
                <DropDown language='HTML / CSS' skills={['Flexbox', 'CSS Grid', 'Bootstrap and Tailwind Frameworks', 'Familiar With Sass']} />
                <DropDown language='JavaScript / Typescript' skills={['Vanilla JS', 'Node JS', 'React', 'Familiar With Angular and React Native Frameworks']} /> 
            </div>
        </div>
        
        <Tldr opacity={opacity}/>
      
    </>
    )
}
