import { Action, configureStore } from "@reduxjs/toolkit";

import productReducer from "../templates/ProductList.slice";

const middlewareConfiguration = { serializableCheck: false };

export const store = configureStore({
    reducer: {
        product: productReducer,
        //   articleList: articlesReducer,
        //   auth: authReducer,
        //   comments: commentsReducer,
        //   common: commonReducer,
        //   profile: profileReducer,
        //   tags: tagsReducer,
        // router: connectRouter(history),
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch