import React, {useEffect, useState, useRef} from 'react';
import Sheet from '../objects/Sheet';
import AnimeVN from '../objects/AnimeVN';
import { collection, getDocs, query, where, orderBy} from "firebase/firestore";
import firestoreDb from '../../firebase/firebaseConfig';

const GridView = props => {

  const [listViews, setListViews] = useState([]);

  const listRef = useRef();

  useEffect(() => {
      const getViews = async() => {

          let viewQuery = null;

          switch (props.filter){
            case "animePath":
              viewQuery = query(collection(firestoreDb, props.view), where("animePath", "==", props.filterValue));
              break;

            default:
              viewQuery = query(collection(firestoreDb, props.view), orderBy("name", "asc"));
              break;
          }

          let viewsFirestore = await getDocs(viewQuery);
          const listViewsFirestore = [];

          viewsFirestore.forEach((view) => { 
            listViewsFirestore.push(view.data())
          });
          
          setListViews(listViewsFirestore);
      }

      getViews();

  }, []);

  const pagSection = props.section;
  const pagClass = `list-${pagSection}-section`;

  const listClass = `${pagSection}-all`;

  let mapViews = null;
  

  if (pagSection === "sheets" || pagSection === "anime-sheets")
      mapViews = listViews.map (
        view =>
          <Sheet key={view.id} name={view.name} anime={view.anime} imgSheet={view.sheetImg} 
          path={view.path} pdf={view.pdf} animeLogo = {view.animeLogo} animeImg = {view.animeImg}/>
      )
  else
      mapViews = listViews.map (
        view => <AnimeVN key={view.id} name={view.name} img={view.img} path={view.path}/>
      )

  /*
  switch (pagClass){
    case "Home":
      mapViews = listViews.map(view => 
                  <Sheet key={view.id} name={view.name} anime={view.anime} imgSheet={view.img} path={view.path} pdf={view.pdf}/>
                 )
      break;
      case "Sheets":
      mapViews = listViews.map(view => 
                  <Sheet key={view.id} name={view.name} anime={view.anime} imgSheet={view.img} path={view.path} pdf={view.pdf}/>
                 )
      break;
      case "Animes":
      mapViews = listViews.map(view => 
                  <AnimeVs key={view.id} name={view.name} imgSheet={view.img} path={view.path}/>
                 )
      break;
      case "Visual Novels":
      mapViews = listViews.map(view => 
                  <AnimeVs key={view.id} name={view.name} imgSheet={view.img} path={view.path}/>
                 )
      break;
  }
  */

  return (<div className={pagClass}>
            
            <div className={`${pagClass}-${listClass}`}>
              
              <div ref={listRef} className={listClass}> {mapViews} </div>
              
            </div>
            
        </div>
  ); 
}

export default GridView;