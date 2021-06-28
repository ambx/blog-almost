import styles from "./styles.module.scss";

export default function About(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <p>{`Hey, this is Hiba! 'Almost' is a project that is very close to my heart; something I've been meaning to do for years now. There's probably no other word I relate to as much as 'almost'. I'm an almost writer, an almost engineer, an almost designer, an almost lover, an almost everything; not quite, but very nearly though. It's a daunting struggle to not be able to cross the 'almost' benchmark in almost all aspects of life. It's an even bigger struggle to embrace all the 'almost' pieces of you. It's a confusing battle between accepting and pushing oneself harder. 
                Everything out here in this tiny little corner of the internet is a self-attempt at this super confusing battle. `}
                <br />
                {`I absolutely enjoyed building this baby up- from mulling over the word 'almost' for weeks to tying everything together. All art pieces here are original (unless mentioned otherwise) and almost complete- from the header piece of this section to the 'player' divider (showing whatever is being played is almost over) to all literary pieces and more. I often see myself as an exaggeration of confusion brewing inside this human frame. Over the years, I’ve learned that perhaps confusion is a permanent state of our minds. This little virtual jounal is just an extension of this confusion. I hope you enjoy journeying through this mess :) `}
                <br /><br />
                <span>Expression header art piece inspired by <a href="https://www.ginakiel.com/">Gina Kiel</a>
                </span>
                </p>
            </div>
            
        </div>
    )
}