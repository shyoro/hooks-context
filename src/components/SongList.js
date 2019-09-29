import React, {useEffect, useContext} from 'react';
import NewSongForm from './NewSongForm';
import { MyContext } from '../context/MyContext';


const SongList = () => {
    const { songs, deleteSong } = useContext(MyContext);
    useEffect(() => console.log('use effect', songs), [songs]);

    return (  
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id} onClick={deleteSong.bind(this, song.id)}>{song.title}</li>)}
            </ul>
            <NewSongForm />
        </div>
    );
}
 
export default SongList;