import { DiscordLogo } from 'phosphor-react'
import LeftPanelStyle from '../styles/LeftPanelStyle.module.scss'

export function LeftPanel(){
    return(
        <section className={LeftPanelStyle.sectionContainer}>
            <div className={LeftPanelStyle.avatar}>
                <DiscordLogo size={30} weight="fill"/>
            </div>

            <div className={LeftPanelStyle.separator} />

            <div className={LeftPanelStyle.avatar}>
                <span>A</span>
            </div>

            <div className={LeftPanelStyle.avatar}>
                <span>B</span>
            </div>

            <div className={LeftPanelStyle.avatar}>
                <span>C</span>
            </div>

        </section>
    )
}