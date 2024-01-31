import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { PostServices } from "../../services/apiServices";

const Albums = () => {
    const albums = useSelector((store)=>store.albumsReducer.albums);
    const dispatch = useDispatch();
  
    useEffect(() => {
        PostServices.getAlbums(dispatch);
    }, []);
  
    return (
      <div>
        <h2>Albums</h2>
        {albums?.map((album)=> {
                return  (
                        <div key={album.id} style={{border: '1px solid black', margin: '10px'}}>
                            <p>{album.id}</p>
                            <h4>{album.title}</h4>
                        </div>
                    )
            })}
      </div>
    );
  }

  export default Albums;