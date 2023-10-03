import React, { useEffect, useState } from 'react'
import Card from './card'
import { BsArrowRight } from 'react-icons/bs'
import { BiSolidHourglassTop } from 'react-icons/bi'
import data from '../data.json';

const Cards = () => {
    const [index, setIndex] = useState(1);
    const [curLoc, setCurLoc] = useState();
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setCurLoc(data.locations.find(
            (location) => location.id === index
        ).houses)
        console.log(curLoc);
    }, [curLoc, index]);
    const locations = [
        {
            index: 1,
            name: 'New York'
        },
        {
            index: 2,
            name: 'Mumbai'
        },
        {
            index: 3,
            name: 'Paris'
        },
        {
            index: 4,
            name: 'London'
        }
    ]
    const curLoc1 = curLoc?.slice(0, 3);
    const curLoc2 = curLoc?.slice(3, 6);
    const curLoc3 = curLoc?.slice(6, 9);

    return (
        <div>
            <div className='flex justify-between my-4'>
                <div className='flex gap-3'>
                    {locations.map((button) => (
                        <div className={`${index === button.index ? "bg-[#455ad1] text-white" : "bg-[#e2e0e0]"} w-max h-max px-5 py-2 rounded-3xl cursor-pointer`}
                            onClick={() => setIndex(button.index)}
                        >
                            {button.name}
                        </div>
                    ))}
                </div>
                <div>
                    <div>
                        <div className={` border-[2px] border-[#3c52cc] text-[#3c52cc] font-semibold w-max h-max px-5 py-2 rounded-3xl flex gap-3 items-center`}>
                            <div>
                                View All
                            </div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col items-center gap-5'>
                <div className='flex gap-6'>
                    {curLoc1?.map((card) => (
                        <Card pincode={card.pinCode} address={card.address} price={card.monthlyPrice} ids={card.id} img2={card.img}/>
                    ))}
                </div>
                <div className='flex gap-6'>
                    <div className='flex gap-6'>
                        {curLoc2?.map((card) => (
                            <Card pincode={card.pinCode} address={card.address} price={card.monthlyPrice} ids={card.id} img2={card.img}/>
                        ))}
                    </div>
                </div>
                <div className={`${hidden ? "hidden" : ""} flex gap-6`}>
                    <div className='flex gap-6'>
                        {curLoc3?.map((card) => (
                            <Card pincode={card.pinCode} address={card.address} price={card.monthlyPrice} ids={card.id} img2={card.img}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-full py-5'>
                <div className={`bg-[#455ad1] text-white w-max h-max px-5 py-2 rounded-3xl cursor-pointer`}
                    onClick={() => setHidden(!hidden)}
                >
                    {hidden ? (<div className='flex gap-2 items-center'><BiSolidHourglassTop/> Show More</div>) : (<div className='flex gap-2 items-center'><BiSolidHourglassTop/> Show Less</div>)}
                </div>
            </div>
        </div>
    )
}

export default Cards
