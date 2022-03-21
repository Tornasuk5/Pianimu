import React, {useEffect, useState} from 'react';
import { useLocation  } from "wouter";
import { collection, getDocs, query, where, orderBy, limit} from "firebase/firestore";
import firestoreDb from '../firebase/firebaseConfig';

const SheetInfo = props => {
    const [sheet, setSheet] = useState('');
    const sheetPath = useLocation()[0].substring(1);

    useEffect(() => {
        const getSheet = async() => {
            const sheetQuery = query(collection(firestoreDb, "sheets"), where("path", "==", sheetPath));
            const sheetFirestore = await getDocs(sheetQuery);
            
            sheetFirestore.forEach((sheet) => {
                setSheet(sheet.data());
            });
              
        }

        getSheet();
  
    }, []);

    return <div className="sheet-info-page">
            <main className="main-container">
                <div className="sheet-layout">
                    <div className="sheet-layout-img">
                        <img src={sheet.sheetImg}/>
                    </div>
                    <div className="sheet-layout-info">
                        <div className="sheet-layout-info-container">
                            <h3>Name: {sheet.name}</h3>
                            <h3>Anime: {sheet.anime}</h3>
                            <h3>Level: {sheet.level}</h3>
                            <h3>Pags: {sheet.pags}</h3>
                        </div>
                    </div>
                </div>
            </main>
        </div>
};

export default SheetInfo;