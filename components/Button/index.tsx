import React from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'

const Button = ({title, link}: {title: string, link: string}) => {
    const router = useRouter()
    function linkTo() {
        router.push(link)
    }
    return (
        <button onClick={linkTo} className={styles.btn}>
            {title}
        </button>
    )
}

export default Button
