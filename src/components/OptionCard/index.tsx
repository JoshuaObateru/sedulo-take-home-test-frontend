import { Application } from '@/types'
import React from 'react'
import Image from "next/image"
import { FaUntappd } from 'react-icons/fa';

interface OptionCardProps {
    application: Application
    onOptionClick: (option: Application) => void;
    isSelected: boolean
}

export const OptionCard = ({ application, onOptionClick, isSelected }: OptionCardProps) => {
    return (
        <>
            <div className={`relative lg:mx-4 mx-1 hover:h-[8rem]  lg:hover:h-[10rem] hover:w-[16rem] rounded-lg shadow-lg shadow-[rgba(0,0,0,0.5)] ${isSelected ? 'lg:h-[10rem] h-[8rem] min-w-[11rem] lg:min-w-[15rem] border border-white' : 'min-w-[10rem] lg:min-w-[14rem] lg:h-[8rem] h-[6rem]'}`} onClick={() => onOptionClick(application)}>
                <Image

                    src={application.imageUrl}
                    alt={`${application.title} image`}
                    layout="fill"
                    objectFit="cover"
                    className='absolute inset-0 rounded-lg'

                />
                <div className='absolute inset-0 bg-[RGBA(0,0,0,0.3)] flex flex-col items-center justify-center rounded-lg'>
                    <FaUntappd className='text-2xl lg:text-3xl' />
                    <h3 className='  font-bold text-center'>{application.title}</h3>
                </div>

            </div>
        </>
    )
}

