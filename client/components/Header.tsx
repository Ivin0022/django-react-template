import React, { useContext } from "react";

// reactivated
import { Context } from "@reactivated";

// local
import { Cart } from "./Cart";
import { ProfileAvatar } from "./ProfileAvatar";
import { useAppSelector } from "@client/store/storeHook";

export const Header = () => {
    const name = useAppSelector((state) => state.product.name)

    return (
        <div>
            <p>{name}</p>
            <div className="navbar bg-primary text-primary-content px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost text-4xl normal-case font-dancing">
                        Giftable
                    </a>
                </div>
                <div className="flex-none">
                    <Cart count={0} />
                    <ProfileAvatar />
                </div>
            </div>
        </div>
    )
}