
import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
//const { data:images, loading } = useFetchGifs( category );
//import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const {data: images,loading} = useFetchGifs( category);

    return (
        <>

        <h3>     { category}      </h3>  

        <div className="card-grid">              


        

        {loading && <p className="animate__animated animate__wobble">Loading</p >}

             
                <ol className="olis">
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img }/>
                                //img={img}/>

                        ))
                    }
                </ol> 

                
       </div>
       </>
    )
}
