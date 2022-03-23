import React from 'react'
import Card from './Card'
import Connect from './Connect'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

export default function PageLayout() {
    return (
        <>

            <Card />
            <Skills />

            <Projects />
            <Connect />
        </>
    )
}
