import styles from "./styles.module.scss";

export default function About(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <p>Hey, this is Hiba!
                <br />
                {`'Almost' is a space very close to my heart; something I've been meaning to build for myself for years now. It's also so because there's probably no other word I relate to as much as 'almost'. I mean I'm an almost writer, an almost engineer, an almost designer, an almost lover, an almost everything; not quite, but very nearly though. It's a daunting struggle to not be able to cross the 'almost' benchmark in almost all aspects of life. It's an even bigger struggle to embrace all the 'almost' pieces of you. It's a confusing battle between accepting and pushing oneself harder. Everything out here in this tiny little corner of the internet is a self-attempt at this super confusing battle.`}
                <br />
                {`I absolutely enjoyed building this baby up- from mulling over the word 'almost' for years now to tying everything together. All art pieces here are original (unless mentioned otherwise) and almost complete- from the header piece of this section to all literary pieces and more. I often see myself as an exaggeration of confusion brewing inside this human frame. Over the years, I’ve learned that perhaps confusion is a permanent state of our minds. This little virtual journal is just an extension of this confusion. I hope you enjoy journeying through this mess :)`}
                <p>You can write to me <a href = "mailto: hiba.hf123@gmail.com">here</a> :)</p>
                <br /><br />
                <span>Expression header art piece inspired by <a href="https://www.ginakiel.com/">Gina Kiel</a>
                </span>
                </p>
            </div>
            
        </div>
    )
}