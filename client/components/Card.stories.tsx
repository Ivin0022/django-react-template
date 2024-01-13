import { Card } from "./Card";
import type { Meta, StoryObj } from '@storybook/react'


export default {
    component: Card,
    parameters: {
        layout: "centered"
    }

} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const basic: Story = {
    args: {
        name: "Product 1",
        description: "this is a really good product",
        image: "https://fastly.picsum.photos/id/219/400/300.jpg?hmac=63OS99m_jP0dr6utcsVLXEBKh20NXhZb-3dKwLP9u20",
    },
};

