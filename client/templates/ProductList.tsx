import React, { useContext } from "react";

import { templates, Context } from "@reactivated";

// controllers
import { updateCart } from "@controllers/add_to_cart";

// components
import { Scaffold } from "@components/Scaffold";
import { Card } from "@components/Card";


import { incremented, updateName } from './ProductList.slice'
import { useAppDispatch } from "@client/store/storeHook";



export default (props: templates.ProductList) => {

    return (
        <Scaffold title="Home">
            <Prod products={props.products} />
        </Scaffold>
    )
}


const Prod = (props: templates.ProductList) => {

    const dispatch = useAppDispatch()

    const listProducts = props.products.map(product => {
        return (
            <>
                <Card
                    key={product.pk}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    onClick={() => dispatch(incremented())}
                />
                <Card
                    key={product.pk}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    onClick={() => dispatch(updateName())}
                />
            </>
        )

    });

    return (
        <div>
            <div className="grid grid-cols-4 gap-3 p-3">
                {listProducts}
            </div>
        </div>
    )
}