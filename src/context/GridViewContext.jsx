import React, {useEffect, useState, useRef} from 'react';

const GridViewContext = React.createContext({});

export function GridViewContextProvider({gridView}){
    const [listViews, setListViews] = useState([]);

    return <GridViewContext.Provider value={{listViews, setListViews}}>
        {gridView}
    </GridViewContext.Provider>
}

export default GridViewContext;

