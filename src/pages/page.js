import React, { useEffect } from 'react'
import data from '../data.json';
import Card from '../components/card';
import { useParams } from 'react-router-dom';

const Page = () => {
    const { id } =useParams() // Retrieves "value1"
    console.log(id)
    console.log(data.locations);

    function getDataById(innerId) {
        for (const location of data.locations) {
            for (const house of location.houses) {
                if (house.id == innerId) {
                    return house; // Return the found house object
                }
            }
        }
        return null; // Return null if no matching ID is found
    }

    const house = getDataById(id);


    return (
        <>
        <div className='flex flex-col items-center'>
            <div>MORE DETAILS</div>
            <Card address={house.address} price={house.monthlyPrice} pincode={house.pinCode} img2={house.img}/>
        </div>
        </>
    )
}

export default Page
