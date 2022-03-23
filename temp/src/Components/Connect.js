import React from 'react'
import { IconContext } from "react-icons";
import { FaRegEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from '../Styles/Connect.module.css'
export default function Connect() {
    return (
        <div className={'newSection @apply opacity-100 mb-4'} id='connect'>
            <h1 className='@apply mt-0 '>Connect</h1>
            <ul className={styles.list}>
                <IconContext.Provider value={{ size: 60, className: "@apply text-fuchsia-600 " }}>
                    <li>
                        <a href="https://github.com/JosephSchec" target="_blank"
                            rel="noreferrer"> <FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jschec/" target="_blank"
                            rel="noreferrer">   <FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="mailto: shecky522@gmail.com" target="_blank"
                            rel="noreferrer"> <FaRegEnvelope />      </a>
                    </li>
                </IconContext.Provider>
            </ul>
        </div>
    )
}
