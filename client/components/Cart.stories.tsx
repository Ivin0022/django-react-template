import { Cart } from "./Cart";
import type { Meta, StoryObj } from '@storybook/react'


export default {
    component: Cart,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Cart>;

type Story = StoryObj<typeof Cart>;

export const basic: Story = {
    args: {
        count: 4
    },
};

