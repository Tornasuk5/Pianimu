import React, {useEffect, useState} from 'react';
import { useLocation  } from "wouter";
import { collection, getDocs, query, where } from "firebase/firestore";
import firestoreDb from '../firebase/firebaseConfig';

const SheetInfo = props => {
    const [sheet, setSheet] = useState('');

    useEffect(() => {
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
                        <a href='' target="_blank" style={{ backgroundImage: `url(${sheet.sheetImg})` }}>
                            <img src={sheet.sheetImg}/>
                        </a>
                    </div>
                    <div className="sheet-layout-info">
                        <div className="sheet-layout-info-container">
                            <h2>{sheet.name}</h2>
                            <div className="sheet-layout-info-container-grid">
                                <div className="sheet-layout-info-container-grid-text">
                                    <p><strong>Anime:</strong> {sheet.anime}</p>
                                    <p><strong>Level:</strong> {sheet.level}</p>
                                    <p><strong>Pages:</strong> {sheet.pags}</p>
                                </div>
                                <div className="sheet-layout-info-container-grid-img">
                                    <img src={sheet.animeImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sheet-options'>
                    <div className='sheet-options-list'>
                        <a href={sheet.pdf} target='_blank'>
                            <div className='sheet-preview'>
                                <i className="bi bi-eye"></i>
                                <p>Preview</p>
                            </div>
                        </a>

                        <a href='#' target='_blank'>
                            <div className='sheet-download'>
                                <i className="bi bi-download"></i>
                                <p>Download</p>
                            </div>
                        </a>

                        <a href='#' target='_blank'>
                            <div className='sheet-download'>
                                <i className="bi bi-file-text"></i>
                                <p>Anime sheets</p>
                            </div>
                        </a>

                    </div>
                </div>
            </main>
};

export default SheetInfo;