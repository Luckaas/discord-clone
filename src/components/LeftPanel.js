import { DiscordLogo } from 'phosphor-react'
import LeftPanelStyle from '../styles/LeftPanelStyle.module.scss'
import rooms from '../public/data/rooms.json'

export function LeftPanel() {
    return (
        <section className={LeftPanelStyle.sectionContainer}>
            <div className={LeftPanelStyle.avatar}>
                <DiscordLogo size={30} weight="fill" />
            </div>

            <div className={LeftPanelStyle.separator} />

            {
                rooms.map(room => (
                    <div key={room.id} className={LeftPanelStyle.avatar}>
                        <span>{ room.name.charAt(0) }</span>
                    </div>
                ))
            }

        </section>
    )
}