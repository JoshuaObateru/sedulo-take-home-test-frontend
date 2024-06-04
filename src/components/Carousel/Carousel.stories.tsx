import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './index';


const meta: Meta<typeof Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],

}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {

    },
};


