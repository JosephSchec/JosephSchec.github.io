import React from 'react'
import Card from '../Components/Card'
import Connect from '../Components/Connect'
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills'

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
