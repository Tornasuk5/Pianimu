import React, {useEffect, useState} from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import firestoreDb from 'firebaseConfig';

const Front = props => {

    const isTitle = props.title !== "";

    const [anime, setAnime] = useState('');

    useEffect(() => {
        if (!isTitle){
            const getAnime = async() => {

                const animeFirestore = await getDocs(query(collection(firestoreDb, "animes"), where("path", "==", props.animePath)));

                if (animeFirestore.docs.length == 0){
                    const vnFirestore = await getDocs(query(collection(firestoreDb, "visual-novels"), where("path", "==", props.animePath)));

                    vnFirestore.forEach((vnFs) => { 
                        setAnime(vnFs.data());
                    });

                } else 
                    animeFirestore.forEach((animeFs) => { 
                        setAnime(animeFs.data());
                    });
            }
        
            getAnime();
        }
    }, []);
    

    return <div className={`front-${props.pagKey}`}>
        <div className={`front-${props.pagKey}-container`}>
            <h2>{!isTitle ? anime.name : props.title}</h2>
        </div>
    </div>
};

export default Front;