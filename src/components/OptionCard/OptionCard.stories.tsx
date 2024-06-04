import type { Meta, StoryObj } from '@storybook/react';
import { OptionCard } from './index';
import { applicationMockData } from '@/data/applicationMockData';
import { fn } from '@storybook/test';


const meta: Meta<typeof OptionCard> = {
    title: 'Components/OptionCard',
    component: OptionCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        application: applicationMockData[0],
        isSelected: false,
        onOptionClick: fn()
    },
};
export const Selected: Story = {
    args: {
        application: applicationMockData[0],
        isSelected: true,
        onOptionClick: fn()
    },
};


