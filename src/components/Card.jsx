import React from 'react'
import Cardimg from '../assets/cardimg.png'

const Card = () => {
    return (
        <div class=" rounded-lg bg-gradient-to-tr from-blue-300 to-green-500 p-0.5 shadow-lg w-[304px]">
            <div class="bg-white p-5 rounded-md w-[300px] text-center">
                <div className='flex justify-center'>
                    <img className='w-[50px]' src={Cardimg} alt="" />
                </div>
                <div className='leading-[10px]'>
                    <h1 class="font-bold text-xl mb-2">Iphone 14 Pro Max</h1>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    )
}

export default Card