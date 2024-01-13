import React from "react";
import { templates } from "@reactivated";


export default (props: templates.HelloWorld) => {
    return (
        <>
        <h1>hello {props.name}</h1>
        </>
    )
}