import React, { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

type GenreCardProps = {
    cardTitle?: string,
}

type SongCardProps = {
    image?: string,
    songTitle?: any,
    subTitle?: string,
    link?: string, 
}

interface IProps {
    cardTitle?: string,
    cardDescription?: string,
    type: string,
    image?: string,
    songTitle?: any,
    subTitle?: string,
    link?: string, 
  }


const GenreCard = ({cardTitle}: GenreCardProps) => {
 
    // const colors = {
    //     blue: styles.bgGradientBlue,
    //     green: styles.bgGradientGreen,
    // }
    return (
        <div className={`${styles.card}`}>
            <h2>{cardTitle}</h2>
            {/* <p>{cardDescription}</p> */}
          </div>
    )
  
}
const SongCard = ({image, songTitle, subTitle, link}: SongCardProps) => {
 
    // const colors = {
    //     blue: styles.bgGradientBlue,
    //     green: styles.bgGradientGreen,
    // }
    return (
        <div className={`${styles.songCard}`} onClick={() => window.open(link, '_blank')}>
            <img className={styles.songImage} src={image}/>
            <div className={styles.songInfo}>
                <h2 className={styles.songName}>{songTitle}</h2>
                <p className={styles.songArtist}>{subTitle}</p>
                {/* <p>{cardDescription}</p> */}
            </div>
          </div>
    )
  
}

const Card: React.FC<IProps> = (props) => {
    const {cardTitle, cardDescription, songTitle, subTitle, image, type, link} = props
    // const colors = {
    //     blue: styles.bgGradientBlue,
    //     green: styles.bgGradientGreen,
    // }
    const typeHandler:any = {
        genre: <GenreCard cardTitle={cardTitle}/>,
        song: <SongCard songTitle={songTitle} subTitle={subTitle} link={link} image={image}/>
    }
    
    return (
    <>
     {typeHandler[type]}
     </>
    )
}

export default Card
