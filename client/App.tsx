import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store/store";

interface IProps {
    children: React.ReactNode;
}

export default ({ children }: IProps) => {
    return (
        <>
            <h3>hello world</h3>
            {children}
        </>
    )
}

