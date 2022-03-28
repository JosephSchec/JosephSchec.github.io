import React from 'react';
import img from '../Images/cardphoto.png'
import styles from '../Styles/Card.module.css'



export default function Card() {
    return (
        <>
            <div className={styles.card} >
                {<figure >
                    <img src={img} className='m-auto' alt="..." />
                    <figcaption className={styles.about}>
                    <p><span>(Function about(){'\t{'}</span><span> {`return 'Hello I'm Joseph, I am 
                       Currently A Student At Agudah PCS`}</span><span> for Full Stack Web (MERN) and Software Developement
                         I enjoy solving complex problems as well as learning about new and up and coming technologies.'</span>
                       <span> )();</span></p>
                    </figcaption>
                </figure>} 
                   </div>

            
        </>

    )
}
