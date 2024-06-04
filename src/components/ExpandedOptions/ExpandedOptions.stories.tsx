import type { Meta, StoryObj } from '@storybook/react';
import { ExpandedOptions } from './index';
import { applicationMockData } from '@/data/applicationMockData';
import { fn } from '@storybook/test';


const meta: Meta<typeof ExpandedOptions> = {
    title: 'Components/ExpandedOptions',
    component: ExpandedOptions,

    tags: ['autodocs'],

}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {

    },
};



