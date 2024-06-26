import { applicationMockData } from '@/data/applicationMockData'
import { OptionCard } from "@/components"
import React, { useState } from 'react'

export const ExpandedOptions = () => {
    const [searchText, setSearchText] = useState("")
    return (
        <>
            <div className="flex flex-col bg-red-500 w-full min-h-screen absolute p-8 lg:p-16 ">
                {/* Search and Collapse Button */}
                <div className="flex w-full justify-end mb-8 lg:mb-16">
                    <input type="text" placeholder='Search for application' value={searchText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearchText(e.target.value) }} className='py-2 pl-2 text-sm lg:text-lg lg:w-[25%] w-[70%] text-white bg-transparent placeholder-slate-200 border border-white rounded-md active:outline-none outline-none' />
                </div>
                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-20 gap-4 w-full place-content-between justify-items-center ">
                    {applicationMockData.map((application, index) => (application.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) && <OptionCard application={application} isSelected={false} onOptionClick={() => { }} key={index + application.title} />))}

                </div>
            </div>
        </>
    )
}
