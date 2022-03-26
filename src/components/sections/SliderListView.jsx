import React, {useEffect, useState, useRef} from 'react';
import Sheet from '../objects/Sheet';
import { collection, getDocs, query, where, orderBy, limit} from "firebase/firestore";
import firestoreDb from '../../firebase/firebaseConfig';
import SlideButton from './items/SlideButton';

const SliderListView = props => {

  const [listViews, setListViews] = useState([]);

  const listRef = useRef();

  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
      const getViews = async() => {

          let viewQuery = null;

          switch (props.filter){
            case "id":
              viewQuery = query(collection(firestoreDb, props.view), orderBy("id", "desc"), limit(props.limit));
              break;

            case "level":
              viewQuery = query(collection(firestoreDb, props.view), where("level", "==", props.filterValue), limit(props.limit));
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
  const pagClass = `${pagSection}-section`;

  return (<section className={pagClass}>

            <div className={`${pagClass}-title`}><h3>{props.title}</h3></div>
            
            <div className={`${pagClass}-sheets`}>
              
              <div ref={listRef} className={pagSection}> 
                {
                    listViews.map (view =>

                    <Sheet key={view.id} name={view.name} anime={view.anime} sheetImg={view.sheetImg} 
                    path={view.path} pdf={view.pdf} animeLogo = {view.animeLogo} animeImg = {view.animeImg}/>

                    )
                }
              </div>

              <SlideButton side="left" state={!buttonState} onClick={() => {onSlide(listRef.current, "left", buttonState, setButtonState)}} /> 
    
              {listViews.length > 7 ? <SlideButton side="right" state={buttonState} onClick={() => {onSlide(listRef.current, "right", buttonState, setButtonState)} }/> : null}
              
            </div>
            
          </section>
  ); 
}

function onSlide(listRef, side, buttonState, setButtonState){
  let slideWidth = listRef.scrollWidth - listRef.offsetWidth;
  if (side === "right") listRef.style.left = `${-slideWidth}px`;
  else listRef.style.left = "0px";
  setButtonState(!buttonState);
}

export default SliderListView;