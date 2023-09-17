import React from 'react'
import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'

const MainPage = () => {
    return (
        <div>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                {/* <Education /> */}
                <Contact />
        </div>
    )
}

export default MainPage
