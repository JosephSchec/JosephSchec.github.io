import React from 'react'
import DropDown from './DropDown'
import useScroll from '../useScroll';

export default function Skills() {
    const opacity = useScroll(312)
    return (<>

        <div className={opacity ? 'newSection' : ' newSection @apply opacity-100'} id='skills'>
            <h2> Skills:</h2>
            <div className='@apply grid w-full md:grid-cols-2 lg:grid-cols-3'>
                <DropDown language='Java' skills={['OOP', 'Database Connection with JDBC', 'File Creation']} />
                <DropDown language='SQL' skills={['Creating/Designing Databases', 'Execute Queries', 'Execute Updates']} />
                <DropDown language='Python' skills={['Familiar with Libraries', 'Familiar with Automation']} />
                <DropDown language='HTML / CSS' skills={['Flexbox', 'CSS Grid', 'Bootstrap and Tailwind Frameworks', 'Familiar With Sass']} />
                <DropDown language='JavaScript' skills={['Vanilla JS', 'Node JS', 'React', 'Familiar With Angular and React Native Frameworks']} />
            </div>
        </div></>
    )
}
