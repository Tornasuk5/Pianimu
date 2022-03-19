import React, {useEffect, useState, useRef, createRef} from 'react';
import Sheet from '../objects/Sheet';
import { collection, getDocs } from "firebase/firestore";
import firestoreDb from '../../firebase/firebaseConfig';
import SlideButton from './items/SlideButton';

const SheetsList = props => {

  const [sheets, setSheets] = useState([]);

  const listRef = useRef();

  const [buttonState, setButtonState] = useState(true);

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

  const listFilter = props.filter != "";
  const listClass = listFilter ? 'sheets' : 'sheets-all';

  return (<div className='list-sheets-section'>

            {listFilter ? <div className="list-sheets-section-title"><h3>{props.filter}</h3></div> : null }
            
            <div className="list-sheets-section-sheets">
              <div ref={listRef} className={listClass}>
                {
                  sheets.map(sheet => <Sheet key={sheet.id} name={sheet.name} anime={sheet.anime} imgSheet={sheet.img} path={sheet.path} pdf={sheet.pdf}/>)
                }
              </div>

              {listFilter ? <SlideButton side="left" state={!buttonState} onClick={() => {onSlide(listRef.current, "left", buttonState, setButtonState)} }/> : null }
              {listFilter ? <SlideButton side="right" state={buttonState} onClick={() => {onSlide(listRef.current, "right", buttonState, setButtonState)} }/>  : null }
              
            </div>
            
          </div>
  );

}

function onSlide(listRef, side, buttonState, setButtonState){
  let slideWidth = listRef.scrollWidth - listRef.offsetWidth;
  if (side == "right") listRef.style.left = `${-slideWidth}px`;
  else listRef.style.left = "0px";
  setButtonState(!buttonState);
}

export default SheetsList;