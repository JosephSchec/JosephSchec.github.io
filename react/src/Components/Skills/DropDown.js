import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from '../../Styles/Skills/Dropdown.module.css'
export default function DropDown(props) {
    const { language, skills } = props;

    const [show, setShow] = useState(false)

    const displaySkills = skills.map((skill, index) => {
        return <li key={index} >{skill}</li>
    })
    const showSkills = () => setShow(!show);
    return (
        <>
            <div className={styles.dropDown} onClick={showSkills}>
                <div className={styles.title}>
                    <h3> {language} </h3>
                    {!show ? <IoIosArrowDown /> : <IoIosArrowDown className='rotate-180 transition  duration-300' />}
                </div>
                {show ? <div className={styles.list}>
                    <ul >{displaySkills}</ul></div> : <ul className='hidden'></ul>}
            </div>
        </>
    )
}
