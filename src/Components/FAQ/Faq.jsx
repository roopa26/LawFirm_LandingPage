import React from "react";
import styles from "./Faq.module.css";
import AccordionForFaq from "./Accordion/Accordion";

const Faq = () => {
    const summary = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    return(
        <>
            <div className={styles.header}>
                <h1>FAQ</h1>
            </div>
            <div className={styles.faqWrapper}>
                    <div className={styles.leftDiv}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
                    <div className={styles.accordWrapper}>
                        <AccordionForFaq header="Do I need a personal injury report?" summary={summary}/>
                        <AccordionForFaq header="How much is my case worth?" summary={summary}/>
                        <AccordionForFaq header="What should I do right after car accidect" summary={summary}/>
                        <AccordionForFaq header="How much is my case worth?" summary={summary}/>
                    </div>
            </div>
        </>
    )
}

export default Faq;