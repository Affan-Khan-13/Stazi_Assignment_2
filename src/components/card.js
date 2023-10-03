import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BiBuildings } from 'react-icons/bi'
import { BiBed } from 'react-icons/bi'
import { BiBath } from 'react-icons/bi'
import { BsArrowsMove } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'


const Card = ({ pincode, address, price, ids, img2 }) => {
    const { id } = useParams();
    console.log(img2);
    const backgroundImageClass = img2 ? img2 : "/images/1.jpg";
    return (
        <div className='p-2 bg-[#fff] w-[28vw] rounded-2xl'>
            <div style={{ backgroundImage: `url('${backgroundImageClass}')` }}
            className={`h-[20rem] w-[27vw] flex items-start pt-4 px-4 rounded-2xl bg-no-repeat bg-cover`}>
                <div className='flex justify-between w-full text-[#3c52cc]'>
                    <div className='bg-white w-max h-max py-1.5 px-4 rounded-3xl font-semibold '>For Rent</div>
                    <div className='bg-white w-max h-max p-2 text-[1rem] rounded-3xl'><AiOutlineHeart /></div>
                </div>
            </div>

            <div className='px-4 my-3'>
                <div className='flex gap-2 py-2 items-center text-[#d4b253]'>
                    <CiLocationOn />
                    <div className=' font-medium text-[#5c5b5b]'>
                        {pincode}
                    </div>
                </div>

                <div className='font-bold text-[#414141] text-[1.2rem] max-w-[85%]'>
                    {address}
                </div>

                <div className='flex justify-between my-3 font-bold text-[#7e7d7d]'>
                    <div>
                        <BiBuildings />
                        3 Room
                    </div>
                    <div>
                        <BiBed />
                        4 Bed
                    </div>
                    <div>
                        <BiBath />
                        1 Bath
                    </div>
                    <div>
                        <BsArrowsMove />
                        732ft
                    </div>
                </div>

                <div className='flex items-center justify-between text-[#3c52cc] my-4'>
                    <div className='flex items-end'>
                        <div className='text-[1.2rem] font-semibold'>
                            {`$${price}`}
                        </div>
                        <div className='text-[#5c5b5b]'>
                            /month
                        </div>
                    </div>
                    <div className={`${id ? 'hidden' : ''}`}>
                    <Link to={`/property/${ids}`}>
                        <div className={` border-[2px] border-[#3c52cc] font-semibold w-max h-max px-5 py-2 rounded-3xl flex gap-3 items-center`}>
                            Read More
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
