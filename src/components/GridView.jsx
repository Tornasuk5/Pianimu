import React, { useEffect, useState, useRef } from 'react';
import Sheet from 'models/Sheet';
import AnimeVN from 'models/AnimeVN';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import firestoreDb from 'firebaseConfig';

const GridView = props => {

  const [listViews, setListViews] = useState([]);

  const isTitle = props.title !== "";

  const [anime, setAnime] = useState('');

  const [searchText, setSearchText] = useState('');

  const searchInputRef = useRef();

  const getViews = async(searching, searchTextLength = 0) => {

    let viewQuery = null;
    
    if (!searching){
      switch (props.filter){
        case "animePath":
          viewQuery = query(collection(firestoreDb, props.view), where("animePath", "in", [`/animes/${props.filterValue}`, `/visual-novels/${props.filterValue}`]));
          break;
  
        default:
          viewQuery = query(collection(firestoreDb, props.view), orderBy("name", "asc"));
          break;
      }
    } else {
        if (searchTextLength > 0){
          if (props.section == "anime-sheets")
              viewQuery = query(collection(firestoreDb, props.view), where("anime", "==", anime.name), where("name", ">=", searchText), where("name", "<=", searchText + '\uf8ff'));
          else 
              viewQuery = query(collection(firestoreDb, props.view), where("name", ">=", searchText), where("name", "<=", searchText + '\uf8ff'));
        }

        else if(props.section == "anime-sheets")
            viewQuery = query(collection(firestoreDb, props.view), where("animePath", "in", [`/animes/${props.filterValue}`, `/visual-novels/${props.filterValue}`]));
    
        else viewQuery = query(collection(firestoreDb, props.view), orderBy("name", "asc"));
    }

    let viewsFirestore = await getDocs(viewQuery);
    const listViewsFirestore = [];

    viewsFirestore.forEach((view) => { 
      listViewsFirestore.push(view.data())
    });
    
    setListViews(listViewsFirestore);
}

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

      getViews(false);

  }, []);

  document.title = anime.name == undefined ? "Pianimu" : anime.name;

  const pagSection = props.section;
  const pagClass = `list-${pagSection}-section`;

  const listClass = `${pagSection}-all`;

  let mapViews = null;
  
  if (pagSection === "sheets" || pagSection === "anime-sheets")
      mapViews = listViews.map (
        view =>
          <Sheet key={view.id} name={view.name} anime={view.anime} sheetImg={view.sheetImg}
          path={view.path} pdf={view.pdf} animeLogo = {view.animeLogo} animeImg = {view.animeImg}/>
      )
  else
      mapViews = listViews.map (
        view => <AnimeVN key={view.id} name={view.name} img={view.img} path={view.path}/>
      )

  return (<div>
              <section className={`front-${pagSection}`}>
                  <div className={`front-${pagSection}-container`}>
                      <h2>{!isTitle ? anime.name : props.title}</h2>
                      <div className='front-search'>
                          <div className='front-search-bar'>
                              <input ref={searchInputRef} id="searcher" type="text" placeholder={`${props.searchType}...`} 
                                    onChange={() => searchViews(searchInputRef.current, setSearchText, getViews)}
                              />
                          </div>
                          <div className='front-search-icon' onClick={() => { onClickSearch(searchInputRef.current, setListViews) }}>
                              <i className="bi bi-search"></i>
                          </div>
                      </div>
                  </div>
              </section>
              <section className={pagClass}>
                  <div className={listClass}> {mapViews} </div>     
              </section>
          </div>
        
  ); 
}

function onClickSearch(searchInputRef){
    if (window.getComputedStyle(searchInputRef).display == "none")
        searchInputRef.style.display = "flex";

    searchInputRef.focus();
}

function searchViews(searchInputRef, setSearchText, getViews){

    let seachText = searchInputRef.value;

    if (seachText.length > 0){
      let searchTextArray = seachText.split("");

      searchTextArray[0] = searchTextArray[0].toUpperCase();
      
      seachText = searchTextArray.join("");
    }

    setSearchText(seachText);

    getViews(true, seachText.length);
}

export default GridView;