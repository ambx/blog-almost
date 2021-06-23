import styles from "./styles.module.scss";

export default function About(){
    return(
        <div className={styles.container}>
            <p className={styles.title}>About</p>
            <div className={styles.content}>
                <p>Hey, this is Hiba Fathima! There's probably no other word I relate to as much as 'almost'. I'm an almost engineer, an almost writer, an almost aesthete, an almost lover, an almost everything; not quite, but very nearly though. It's a daunting struggle to not be able to cross the 'almost' benchmark in almost all aspects of life. It's an even bigger struggle to embrace all the 'almost' pieces of you. It's a confused battle between embracing and pushing oneself harder. I often see myself as an exaggeration of confusion brewing inside this human frame. Over the years, I’ve learnt that perhaps confusion is a permanent state of our minds. This little virtual almost rant room of mine, is just an extension of this confusion.
                <br /><br />
                <span>*Expressions header art piece inspired by <a href="https://www.ginakiel.com/">Gina Kiel</a>
                </span>
                </p>
            </div>
        </div>
    )
}