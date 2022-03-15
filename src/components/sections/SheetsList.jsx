import React, {useEffect, useState} from 'react';
import Sheet from '../objects/Sheet';
import { collection, getDocs } from "firebase/firestore";
import firestoreDb from '../../firebase/firebaseConfig';

const SheetsList = props => {

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

  return (<div className="sheets-section">

            <div className="sheets-section-title">
              <h3>{props.filter}</h3>
            </div>

            <div className="sheets-section-sheets">
              <div className="sheets-section-sheets-list">
              {
                sheets.map(sheet => <Sheet key={sheet.id} name={sheet.name} anime={sheet.anime} imgSheet={sheet.img} path={sheet.path} pdf={sheet.pdf}/>)
              }
              </div>

              <div className='sheets-section-sheets-slide slide-left'><i className="bi bi-arrow-bar-left"></i></div> 
              <div className='sheets-section-sheets-slide slide-right'><i className="bi bi-arrow-bar-right"></i></div> 

            </div>
            
          </div>
  );
}

export default SheetsList;