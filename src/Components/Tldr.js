import React from "react";
import { motion } from "framer-motion";
import styles from '../Styles/Tldr.module.css'
import { IconContext } from "react-icons";
import {
    SiTailwindcss, SiFramer, SiBootstrap, SiCss3, SiHtml5,
    SiJava, SiJavascript, SiNodedotjs, SiPython, SiAngularjs, SiMongodb, SiMysql, SiReact,
} from 'react-icons/si'

export default function Tldr() {
    const icons = {
        size: 60,
        className: " bg-violet-500 text-slate-200 p-2 m-2 rounded-lg"
    }

    const front = {
        animate: {
            x: [100,window.innerWidth-500 ],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10,
                    ease: "circInOut",
                },
            },
        },
    };
    const back = {
        animate: {
            x: [window.innerWidth-500 ,-500],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration:10,
                    ease: 'circInOut',
                },
            },
        },
    };

    return (
        <>
            <div className={styles.marquee}>
                <motion.div
                    className={styles.track}
                    variants={front}
                    animate="animate"

                >
                    <h1 className={icons.className}>  FrontEnd:</h1>
                    <IconContext.Provider value={icons}>
                        <SiFramer />
                        <SiTailwindcss />
                        <SiBootstrap />
                        <SiCss3 />
                        <SiHtml5 />
                        <SiJavascript />
                        <SiAngularjs />
                        <SiReact />
                    </IconContext.Provider>
                </motion.div>
            </div>



            <div className={styles.marquee}>
                <motion.div
                    className={styles.track}
                    variants={back}
                    animate="animate"
                >
                    <h1 className={icons.className}>Backend:</h1>
                    <IconContext.Provider value={icons}>
                        <SiJava />
                        <SiPython />
                        <SiNodedotjs />
                        <SiMysql />
                        <SiMongodb />
                    </IconContext.Provider>
                </motion.div>
            </div>
        
        </>
    );
};
