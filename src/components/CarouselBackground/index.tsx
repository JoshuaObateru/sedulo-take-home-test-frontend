import React, { useState } from 'react'
import { Application } from '@/types'
import Image from "next/image"
import { FaUntappd } from "react-icons/fa";

interface CarouselBackgroundProps {
    applications: Application[],
    currentImageIndex: number
}

export const CarouselBackground = ({ applications, currentImageIndex }: CarouselBackgroundProps) => {

    return (
        <>
            <div className="relative lg:h-[90vh] h-[80vh] w-full">
                {applications.map((application, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 w-full  ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >

                        <Image

                            src={application.imageUrl}
                            alt={`Background Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className='absolute inset-0 w-full h-full flex flex-col justify-center lg:px-16 px-8 bg-carousel-bg mb-8'>
                            <div className='flex flex-col lg:w-[50%] h-full lg:pt-32 pt-24'>
                                <FaUntappd className='text-6xl lg:text-8xl' />
                                <h1 className='text-2xl lg:text-4xl font-bold'>{application.title}</h1>
                                <p className='text-sm line-clamp-3 lg:text-lg my-4 lg:my-8'>{application.description}</p>
                                <button className='bg-white hover:bg-slate-400 w-fit text-red-500 font-bold lg:px-16 px-12 lg:py-4 py-2 rounded-sm'>Launch</button>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
