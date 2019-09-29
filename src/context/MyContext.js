import React,{createContext, useState} from 'react';
import uuid from 'uuid/v1';

export const MyContext = createContext();

const MyContextProvider = (props) => {
    const [songs, setSongs] = useState([
        {title:'The wild darkness', id:uuid()},
        {title:'blue bay blues', id:uuid()},
        {title:'name of the rose', id:uuid()}
    ]);

    const addSong = (title) => {
        setSongs([...songs, {title:title, id:uuid()}]);
    }

    const deleteSong = (id) => {
        const newArr = songs.filter(song => song.id !== id);
        setSongs(newArr);
    }

    return  ( 
        <MyContext.Provider value={{songs, addSong:addSong, deleteSong:deleteSong}}>
            {props.children}
        </MyContext.Provider>
     );
}
 
export default MyContextProvider;