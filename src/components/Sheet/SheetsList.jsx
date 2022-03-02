import React, {useEffect, useState} from 'react';
import Sheet from './Sheet';
import { collection, getDocs } from "firebase/firestore";
import firestoreDb from '../../firebase/firebaseConfig';

const SheetsList = (filter) => {
    const [sheets, setSheets] = useState([]);

    useEffect(() => {
        const getSheets = async() => {
            const sheetsFirestore = await getDocs(collection(firestoreDb, "sheets"));
            const sheetsList = [];

            sheetsFirestore.forEach((sheet) => { 
                sheetsList.push(sheet.data())
            });

            setSheets(sheetsList);
        }

        getSheets();

    }, []);

    return (<div className="sheets-list">
    
    {
      sheets.map(sheet => <Sheet key={sheet.id} name={sheet.name} anime={sheet.anime} imgSheet={sheet.img}/>)
    }
  
  </div>
  );
}

export default SheetsList;