import React from 'react'
import Stock from '../assets/stock.png'
import Card from '../components/Card'

const MobileStock = () => {
    return (
        <section className='container mx-auto p-4'>
            <div>
                <div className='flex flex-col items-center mt-10'>
                    <img className='w-[400px]' src={Stock} alt="" />
                    <p className='text-center text-[20px] font-semibold mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia totam quo quisquam mollitia <br />      exercitationem dolor? Iste at atque enim vitae.</p>
                </div>
                <div className='mt-16 flex justify-between gap-2 flex-wrap'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default MobileStock
