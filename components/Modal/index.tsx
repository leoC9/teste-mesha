import React, { useEffect } from 'react'
import Button from '../Button';
import Card from '../Card';
import styles from './styles.module.css'

type ModalProps = {
   type: string,
   options?: any,
  }


const GenreModal = () => {
    const genres = [{
        title: 'POP'
      }, {
        title: 'ROCK'
      },{
        title: 'LO-FI'
      },{
        title: 'CLASSICA'
      }]
    return(
        <div className={styles.genreModal}>
            <div className={styles.cardGrid}>
                {genres.map((item, i) => (
                    <Card type='genre' key={i} cardTitle={item.title}/>
                    ))}
            </div>
        <Button link='/songs' title='Clique aqui'/>
        <Button link='/songs' title='Clique aqui'/>
        </div>
    )
}

const SongModal = ({options}: {options: any}) => {
    useEffect(() => {
        console.log(options);
        
    }, [options])
    return(
        <div className={styles.songModal}>
            <h1 className={styles.title}>Seus sons Climatizados!</h1>
            <div className={styles.cardGrid}>
                {options?.tracks?.hits?.map((item: any) => (
                    <Card type='song' songTitle={item.track.title} subTitle={item.track.subtitle} link={item.track.url} image={item.track.images.background}/>
                ))}       
            </div>
        {/* <Button link='/songs' title='Clique aqui'/>
        <Button link='/songs' title='Clique aqui'/> */}
        </div>
    )
}

const Modal = ({type, options}: ModalProps) => {

    useEffect(() => {
        console.log(type);
        
    }, [])
    const modalHandler:any = {
        genre: <GenreModal/>,
        song: <SongModal options={options}/>,
    }
    return (
        <div className={styles.modalBg}>
                {modalHandler[type]}
        </div>
    )
}

export default Modal;
