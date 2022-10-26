import { DiscordLogo, Path } from 'phosphor-react'
import styles from '../styles/LeftPanelStyle.module.scss'
import { useRouter } from 'next/router'
import rooms from '../public/data/rooms.json'

export function LeftPanel () {
    const router = useRouter()
    const routerGo = (pathname, rid) => {
        const toPush = {pathname}
        // '/'
        // '/room/rid'

        if (pathname !== '/')
            toPush.query = { rid }
        
        router.push(toPush)
    }

    const isActive = (id) => parseInt(router.query.rid) === id
    const noActive = !('rid' in router.query)


    return (
        <section className={styles.sectionContainer}>
            <div onClick={() => {routerGo('/')}} className={noActive ? styles.avatarActive : styles.avatar}>
                {
                    router.asPath === '/' 
                        ? (<span className={styles.selected} />)
                        : ''
                }
                <DiscordLogo size={30} weight="fill" />
            </div>

            <div className={styles.separator} />

            {
                rooms.map(room => (
                    <div onClick={() => {routerGo('/room/[rid]', room.id)}} key={room.id} className={isActive(room.id) ? styles.avatarActive : styles.avatar}>
                        {
                            isActive(room.id) 
                                ? (<span className={styles.selected} />)
                                : ''
                        }
                        
                        <span>{ room.name.charAt(0) }</span>
                    </div>
                ))
            }

        </section>
    )
}