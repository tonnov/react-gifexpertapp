import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import PropTypes from 'prop-types';
import 'animate.css'

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            
            { loading  && <p className='animate__animated animate__flash'>Cargando...</p> }

            <div className='card-grid'>
                {
                    images.map((item) => (
                        <GifGridItem 
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
                    
            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}