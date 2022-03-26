import React, {useEffect, useState} from 'react';
import { useLocation  } from "wouter";
import { collection, getDocs, query, where } from "firebase/firestore";
import firestoreDb from '../firebase/firebaseConfig';

const SheetInfo = props => {
    const [sheet, setSheet] = useState('');

    useEffect(() => {
        console.log(props.sheetPath);
        const getSheet = async() => {
            const sheetQuery = query(collection(firestoreDb, "sheets"), where("path", "==", props.sheetPath));
            const sheetFirestore = await getDocs(sheetQuery);
            
            sheetFirestore.forEach((sheet) => {
                setSheet(sheet.data());
            });
              
        }

        getSheet();
  
    }, []);

    return <main className="sheet-info-page">
                <div className="sheet-layout">
                    <div className="sheet-layout-img">
                        <a href={sheet.pdf} target="_blank" style={{ backgroundImage: `url(${sheet.sheetImg})` }}>
                            <img src={sheet.sheetImg}/>
                        </a>
                    </div>
                    <div className="sheet-layout-info" style={{ backgroundImage: `url(${sheet.animeImg})` }}>
                        <div className="sheet-layout-info-background"></div>
                        <div className="sheet-layout-info-container">
                            <h2>{sheet.name}</h2>
                            <div className="sheet-layout-info-container-grid">
                                <div className="sheet-layout-info-container-grid-text">
                                    <p>Anime: {sheet.anime}</p>
                                    <p>Level: {sheet.level}</p>
                                    <p>Pages: {sheet.pags}</p>
                                </div>
                                <div className="sheet-layout-info-container-grid-img">
                                    <img src={sheet.animeImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
};

export default SheetInfo;