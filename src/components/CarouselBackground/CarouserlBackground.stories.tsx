import type { Meta, StoryObj } from '@storybook/react';
import { CarouselBackground } from './index';
import { applicationMockData } from '@/data/applicationMockData';



const meta: Meta<typeof CarouselBackground> = {
    title: 'Components/CarouselBackground',
    component: CarouselBackground,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],

}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        applications: applicationMockData,
        currentImageIndex: 0,

    },
};



