import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './index';
import { applicationMockData } from '@/data/applicationMockData';
import { fn } from '@storybook/test';


const meta: Meta<typeof NavBar> = {
    title: 'Components/NavBar',
    component: NavBar,

    tags: ['autodocs'],
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },

}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {

    },
};



