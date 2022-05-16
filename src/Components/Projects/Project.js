import React from 'react'
import useGitHub from '../../HelperFunctions/useGitHub'
import styles from '../../Styles/Projects/Project.module.css'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { saveAs } from 'file-saver';
import { BsDownload } from 'react-icons/bs'

const QRCode = require('qrcode.react');

export default function Project(props) {
    const { projectTitle, qrCodeTo, github, repository, downloadApk, downloadLinkName } = props;
    const download = () => saveAs(downloadApk, downloadLinkName)
    const readMe = useGitHub(repository)

    return (
        <div>
            <h3 className='underline'>{projectTitle}:</h3>

            <div className={styles.project}>

                {qrCodeTo && <QRCode value={qrCodeTo} className='rounded-xl' />}
                <div className={styles.links}>
                    {
                        qrCodeTo &&
                        <a href={qrCodeTo} target={'_blank'} rel="noreferrer" className={styles.siteButton}><FiExternalLink size={40} /></a>
                    }
                    <a href={github} target={'_blank'} rel="noreferrer" className={styles.github}><AiFillGithub size={40} /></a>



                    {downloadApk && downloadLinkName &&

                        <button className={`animate-bounce clickable ${styles.siteButton}`} onClick={download}>   <BsDownload size={40} /></button>
                    }</div>

                <article className={styles.readMe}>{readMe}</article>

            </div>

        </div>
    )
}
