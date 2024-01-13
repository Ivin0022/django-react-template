import React, { MouseEventHandler } from "react";

interface CardProps {
    name: string
    description: string
    image: string
    onClick: MouseEventHandler<HTMLButtonElement>
}


export const Card = (props: CardProps) => {
    const base_url = `http://localhost:8000/media/${props.image}`;

    return (
        <div className="card bg-base-300 shadow-xl rounded-none">
            <figure>
                <img
                    src={base_url}
                    alt={props.name}
                />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end mt-10">
                    <button
                        className="btn btn-primary btn-sm "
                        onClick={props.onClick}
                    >
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}