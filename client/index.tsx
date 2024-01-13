import React, { StrictMode } from "react";

import { Provider as DjangoProvider, getServerData, getTemplate } from "@reactivated";
import { HelmetProvider } from "react-helmet-async";

import { createRoot, hydrateRoot } from "react-dom/client";

import "@reactivated/tailwind.css"

const { props, context } = getServerData();

const Template = getTemplate(context);


hydrateRoot(document.getElementById("root")!,
    <StrictMode>
        <HelmetProvider>
            <DjangoProvider value={context}>
                <Template {...props} />
            </DjangoProvider>
        </HelmetProvider>,
    </StrictMode>
);
