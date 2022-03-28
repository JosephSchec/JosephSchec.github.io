import React, { useState } from 'react';
import { BsCardChecklist, BsLaptop, BsChat, BsDownload } from 'react-icons/bs'
import styles from '../Styles/Navbar.module.css'
import monogram from '../Images/Monogram.svg'
import resume from '../Resume.pdf'
import { saveAs } from 'file-saver';
import Switch from "react-switch";

const download = () => saveAs(resume, 'JosephSchechterResume.pdf')


export default function Navbar() {
    const [dark, setDark] = useState(false);
    const setDarkFunc = () => {
        setDark(!dark)
        const test = document.getElementById('root')
        test.classList.toggle('dark-mode');
    }
    return (


        <div className={styles.topCenter} id='top' >
            <div className={styles.details}>
                <a href='#top' className={styles.initials} onClick={() => document.documentElement.scrollTop = 0}><img src={monogram} alt=''></img></a>


                <ul className={styles.list}>
                    <li className={styles.link}>
                        <div className='flex items-center text-sm '><p className='mr-2'>Dark  </p><Switch checkedIcon={false} uncheckedIcon={false} onColor='#000' onChange={setDarkFunc} checked={dark} /></div>

                    </li>
                    <li className={styles.link}>

                        <BsCardChecklist />
                        <a href='#skills'><p> Skills</p></a>

                    </li>
                    <li className={styles.link}>
                        <BsLaptop />
                        <a href='#projects'> <p> Projects</p></a>
                    </li>

                    <li className={styles.link}>
                        <BsChat />
                        <a href='#connect'> <p> Connect</p></a>
                    </li>
                    <li className={styles.link}>
                        <BsDownload className='animate-bounce' />
                        <button onClick={download}><p>Resume</p></button>
                    </li>

                </ul>
            </div>
        </div>
    )
}
