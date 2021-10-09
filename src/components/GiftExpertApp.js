import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['matrix']);

    // const handleAdd = () => {
    //     const rnd = Math.floor(Math.random() * 100);
    //     setCategories( cat => [...cat, `val ${rnd}`]);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            {/* <hr /> */}
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}
