import React from 'react'
import useGitHub from '../useGitHub'
import styles from '../../Styles/Projects/Project.module.css'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
const QRCode = require('qrcode.react');

export default function Project(props) {
    const { projectTitle, qrCodeTo, github, repository } = props;

    const readMe = useGitHub(repository)

    return (
        <div>
            <h3 className='underline'>{projectTitle}:</h3>

            <div className={styles.project}>

                {qrCodeTo && <QRCode value={qrCodeTo} />}
                <div className={styles.links}>
                    {
                        qrCodeTo &&
                        <a href={qrCodeTo} target={'_blank'} rel="noreferrer" className={styles.siteButton}><FiExternalLink size={40} /></a>
                    }
                    <a href={github} target={'_blank'} rel="noreferrer" className={styles.github}><AiFillGithub size={40} /></a>
                </div>
                <article className={styles.readMe}>{readMe}</article>

            </div>

        </div>
    )
}
