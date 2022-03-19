import React, {useEffect, useState} from 'react';
import Sheet from '../objects/Sheet';
import { collection, getDocs } from "firebase/firestore";
import firestoreDb from '../../firebase/firebaseConfig';

const GridView = props => {

  const [listViews, setListViews] = useState([]);

  useEffect(() => {
      const getViews = async() => {
          const viewsFirestore = await getDocs(collection(firestoreDb, props.view));
          const listViewsFiretore = [];

          viewsFirestore.forEach((view) => { 
            listViewsFiretore.push(view.data())
          });

          setListViews(listViewsFiretore);
      }

      getViews();

  }, []);

  const listFilter = props.filter != "";
  const listClass = listFilter ? `${props.view}-section-list`'sheets-section-sheets-list' : 'sheets-section-sheets-list-all';

  return (<div className='sheets-section'>

            {listFilter ? <div className="sheets-section-title"><h3>{props.filter}</h3></div> : null }
            
            <div className="sheets-section-sheets">
              <div className={listClass}>
              {
                sheets.map(sheet => <Sheet key={sheet.id} name={sheet.name} anime={sheet.anime} imgSheet={sheet.img} path={sheet.path} pdf={sheet.pdf}/>)
              }
              </div>

              {listFilter ? <div className='sheets-section-sheets-slide slide-left'><i className="bi bi-arrow-bar-left"></i></div> : null }
              {listFilter ? <div className='sheets-section-sheets-slide slide-right'><i className="bi bi-arrow-bar-right"></i></div>  : null }
              
            </div>
            
          </div>
  );
  */
}


export default GridView;