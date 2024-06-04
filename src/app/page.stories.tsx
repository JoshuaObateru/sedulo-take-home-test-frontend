import type { Meta, StoryObj } from '@storybook/react';
import Home from './page';
import { applicationMockData } from '@/data/applicationMockData';
import { fn } from '@storybook/test';


const meta: Meta<typeof Home> = {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],

}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {

    },
};



