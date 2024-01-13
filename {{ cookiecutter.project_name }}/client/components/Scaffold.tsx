import React, { useContext } from "react";

import { Context } from "@reactivated";
import { Helmet } from "react-helmet-async";



interface IScaffoldProps {
    title: string;
    children: React.ReactNode;
}


export const Scaffold = ({ title, children }: IScaffoldProps) => {
    const { STATIC_URL } = useContext(Context);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href={`${STATIC_URL}dist/index.css`}
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
                <script
                    defer
                    crossOrigin="anonymous"
                    src={`${STATIC_URL}dist/index.js`}
                />
            </Helmet>


            {children}
        </>
    );
};
