import React, {useEffect, useState, useRef} from 'react';
import Sheet from '../objects/Sheet';
import AnimeVN from '../objects/AnimeVN';
import { collection, getDocs, query, where, orderBy, limit} from "firebase/firestore";
import firestoreDb from '../../firebase/firebaseConfig';
import SlideButton from './items/SlideButton';

const GridView = props => {

  const [listViews, setListViews] = useState([]);

  const listRef = useRef();

  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
      const getViews = async() => {

          let viewQuery = null;

          switch (props.filter){
            case "date":
              viewQuery = query(collection(firestoreDb, props.view), orderBy("date", "desc"), limit(props.limit));
              break;

            case "level":
              viewQuery = query(collection(firestoreDb, props.view), where("level", "==", props.value), limit(props.limit));
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

  const listFilter = props.filter !== "";
  const listClass = listFilter ? pagSection : `${pagSection}-all`;

  let mapViews = null;

  if (pagSection === "sheets")
      mapViews = listViews.map (
        view =>
        <Sheet key={view.id} name={view.name} anime={view.anime} imgSheet={view.sheetImg} path={view.path} pdf={view.pdf} animeLogo = {view.animeLogo} animeImg = {view.animeImg}/>
      )
  else
      mapViews = listViews.map (
        view => 
        <AnimeVN key={view.id} name={view.name} img={view.img} path={view.path}/>
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

            { listFilter ? <div className={`${pagClass}-title`}><h3>{props.title}</h3></div> : null }
            
            <div className={`${pagClass}-${listClass}`}>
              
              <div ref={listRef} className={listClass}> {mapViews} </div>

              { listFilter && listViews.length > 7 ? <SlideButton side="left" state={!buttonState} onClick={() => {onSlide(listRef.current, "left", buttonState, setButtonState)} }/> : null }
              { listFilter && listViews.length > 7 ? <SlideButton side="right" state={buttonState} onClick={() => {onSlide(listRef.current, "right", buttonState, setButtonState)} }/>  : null }
              
            </div>
            
          </div>
  ); 
}

function onSlide(listRef, side, buttonState, setButtonState){
  let slideWidth = listRef.scrollWidth - listRef.offsetWidth;
  if (side === "right") listRef.style.left = `${-slideWidth}px`;
  else listRef.style.left = "0px";
  setButtonState(!buttonState);
}

export default GridView;