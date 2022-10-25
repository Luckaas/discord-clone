import React from "react";
import { User, Backpack, CrownSimple, Plus, MinusCircle, Circle, Moon, X, Strategy } from 'phosphor-react'
import directs from '../public/data/directs.json'
import styles from '../styles/Directs.module.scss'

export function Directs() {
    const statusStrategy = {
        Ocupado: <MinusCircle size={20} className={styles.icon} color="#ED4245" weight="fill" />,
        'Disponível': <Circle size={20} className={styles.icon} color="#3BA55D" weight="fill" />,
        Ausente: <Moon size={20} className={styles.icon} color="#FAA81A" weight="fill" />,
        Default: <Circle size={20} className={styles.icon} color="#808080" weight="bold" />,
    }

    return (
        <div className={styles.sectionContainer}>
            <section className={styles.leftPanel}>
                <header>
                    <input placeholder="Encontre ou comece uma conversa" />
                </header>
                <main>
                    <div className={styles.fixedItems}>
                        <div>
                            <User size={24} color="#95989B" weight="fill" />
                            <span>Amigos</span>
                        </div>
                        <div>
                            <Backpack size={24} color="#95989B" weight="fill" />
                            <span>Biblioteca</span>
                        </div>
                        <div>
                            <CrownSimple size={24} color="#95989B" weight="fill" />
                            <span>Nitro</span>
                        </div>
                    </div>

                    <div className={styles.directMessages}>
                        <div className={styles.title}>
                            <span>MENSAGENS DIRETAS</span>
                            <Plus className={styles.plusIcon} size={24} weight="bold" />
                        </div>
                        {
                            directs.map(direct => (
                                <div key={direct.id} className={styles.chatCard}>
                                    <div>
                                        <div className={styles.profile}>
                                            <span>{direct.name.charAt(0)}</span>
                                            { statusStrategy[direct.status] ?? statusStrategy.Default }
                                        </div>
                                        <div className={styles.userInfo}>
                                            <span className={styles.name}>{direct.name}</span>
                                            <span className={styles.status}>{direct.status}</span>
                                        </div>
                                    </div>
                                    <X className={styles.xBtn} size={20} color="#95989B" />
                                </div>
                            ))
                        }

                    </div>
                </main>
            </section>
        </div>
    )
}