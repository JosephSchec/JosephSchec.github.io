import React from 'react';
import img from '../Images/cardphoto.png'
import styles from '../Styles/Card.module.css'



export default function Card() {
    return (
        <>
            <div className={styles.card } >
                <figure >
                    <img src={img} className='m-auto' alt="..." />
                    <figcaption className={styles.about}>
                        <h1> Hello I'm Joseph, I am Currently A Student At Agudah PCS for Full Stack (MERN) Developement</h1>
                        <p>I enjoy solving complex problems as well as learning about new and up and coming technologies.</p>
                    </figcaption>
                </figure>
            </div>
        </>

    )
}
