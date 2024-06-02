import { Application } from '@/types'
import React, { useRef } from 'react'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { OptionCard } from "@/components"



interface OptionCarouselProps {
    applications: Application[];
    onOptionClick: (option: Application) => void;
    imageIndex: number
}

export const OptionCarousel = ({ applications, onOptionClick, imageIndex }: OptionCarouselProps) => {
    const optionRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (optionRef.current) {
            optionRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
        }
    };

    const handleScrollRight = () => {
        if (optionRef.current) {
            optionRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
        }
    };
    return (
        <>
            <div className="flex items-center justify-between px-4">

                <button
                    className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 mr-2"
                    onClick={handleScrollLeft}
                >
                    <MdNavigateBefore className='text-black' />
                </button>
                <div
                    ref={optionRef}
                    className="flex overflow-x-scroll py-4 no-scrollbar">
                    {applications.map((application, index) => (
                        <OptionCard key={index} onOptionClick={onOptionClick} application={application} isSelected={imageIndex === index} />
                        // <div
                        //     key={index}
                        //     className="flex-shrink-0 mx-2 bg-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-300"
                        //     onClick={() => onOptionClick(application)}
                        // >
                        //     {application.title}
                        // </div>
                    ))}
                </div>
                <button
                    className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 ml-2"
                    onClick={handleScrollRight}
                >
                    <MdNavigateNext className='text-black' />
                </button>
            </div>
        </>
    )
}

