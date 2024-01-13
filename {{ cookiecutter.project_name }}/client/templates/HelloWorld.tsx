import React from "react";
import { templates } from "@reactivated";
import { Scaffold } from "@client/components/Scaffold";


export default (props: templates.HelloWorld) => {
    return (
        <Scaffold title="Home">
            <h1>hello {props.name}</h1>
        </Scaffold>
    )
}