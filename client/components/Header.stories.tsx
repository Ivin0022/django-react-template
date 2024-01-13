import { Header } from "./Header";
import type { Meta, StoryObj } from '@storybook/react'


export default {
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const basic: Story = {
    args: {
        count: 4
    },
};

