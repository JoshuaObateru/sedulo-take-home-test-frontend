import { applicationMockData } from '@/data/applicationMockData';
import { Application } from '@/types';
import React, { useState } from 'react'
import { CarouselBackground, ExpandedOptions, OptionCarousel } from "@/components"



export const Carousel = () => {
    const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);
    const [isApplicationOptionsExpanded, setIsApplicationOptionsExpanded] = useState(false);

    const handleExpand = () => {
        setIsApplicationOptionsExpanded(!isApplicationOptionsExpanded)
    }
    const handleOptionClick = (option: Application) => {
        const newIndex = applicationMockData.indexOf(option);
        setBackgroundImageIndex(newIndex);
    };
    return (
        <>
            <div className="relative">
                <CarouselBackground applications={applicationMockData} currentImageIndex={backgroundImageIndex} />
                <div className={`absolute inset-x-0   ${isApplicationOptionsExpanded ? 'bottom-40' : 'bottom-0'}`}>
                    <div className="flex justify-end">
                        <button className='hover:px-3 text-white border border-white rounded-sm px-2 py-1 my-4 lg:my-8 mx-4 text-sm font-bold' onClick={handleExpand}>{isApplicationOptionsExpanded ? "Collapse" : "See all"} </button>
                    </div>

                    {isApplicationOptionsExpanded ? <ExpandedOptions /> : <OptionCarousel applications={applicationMockData} onOptionClick={handleOptionClick} imageIndex={backgroundImageIndex} />}
                </div>
            </div>
        </>
    )
}

