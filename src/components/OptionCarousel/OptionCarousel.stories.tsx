import type { Meta, StoryObj } from '@storybook/react';
import { OptionCarousel } from './index';
import { applicationMockData } from '@/data/applicationMockData';
import { fn } from '@storybook/test';


const meta: Meta<typeof OptionCarousel> = {
    title: 'Components/OptionCarousel',
    component: OptionCarousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        applications: applicationMockData,
        imageIndex: 0,
        onOptionClick: fn()
    },
};



