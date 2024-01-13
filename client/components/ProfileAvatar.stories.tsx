import { ProfileAvatar } from "./ProfileAvatar";
import type { Meta, StoryObj } from '@storybook/react'


export default {
    component: ProfileAvatar,
    parameters: {
        layout: "centered"
    }

} satisfies Meta<typeof ProfileAvatar>;

type Story = StoryObj<typeof ProfileAvatar>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {},
};


