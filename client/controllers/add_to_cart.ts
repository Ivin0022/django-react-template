import {interfaces, Context} from '@reactivated';

export const updateCart = async (pk: number) => {

    const response = await fetch(`http://localhost:8000/products/${pk}`, {
        headers: {
            Accept: "application/json",
        },
    });

    const data: interfaces.CartDetail = await response.json();
    const { cart } = data;
}
