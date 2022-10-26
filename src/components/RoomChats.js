import React from "react"
import {CaretDown, Hash, SpeakerSimpleHigh, UserPlus, Chat} from 'phosphor-react'
import rooms from '../public/data/rooms.json'
import styles from '../styles/RoomChats.module.scss'

export function RoomChats () {
    return (
        <div className={styles.sectionContainer}>
            <section className={styles.leftPanel}>
                <header>
                    <span>Sala 1</span>
                    <CaretDown size={16} weight="bold" />
                </header>
                <main>
                    <div className={styles.channelGroup}>
                        <div className={styles.channelsTitle}>
                            <CaretDown size={10} weight="bold" />
                            <span>CANAIS DE TEXTO</span>
                        </div>
                        <div className={styles.textList}>
                            <div>
                                <div>
                                    <Hash size={24} color="#8E9297" weight="bold" />
                                    <span>geral</span>
                                </div>
                                <UserPlus className={styles.hiddenIcon} size={24} color="#8E9297" weight="fill"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.channelGroup}>
                        <div className={styles.channelsTitle}>
                            <CaretDown size={10} weight="bold" />
                            <span>CANAIS DE VOZ</span>
                        </div>
                    
                        <div>
                            <div className={styles.channelInfo}>
                                <div>
                                    <SpeakerSimpleHigh size={24} color="#8E9297" weight="fill" />
                                    <span>Geral</span>
                                </div>
                                <div className={styles.hiddenIcons}>
                                    <Chat size={24} color="#8E9297" weight="fill"/>
                                    <UserPlus size={24} color="#8E9297" weight="fill"/>
                                </div>
                            </div>
                            <div className={styles.voiceList}>
                                <div>
                                    <div className={styles.avatar}>
                                        <span>A</span>
                                    </div>
                                    <div>Adamantium</div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}