import React from "react";

interface IPros{
}

export const Parent:React.FunctionComponent<React.PropsWithChildren<IPros>>=(props:React.PropsWithChildren<IPros>):JSX.Element=>{

    return (
        <React.Fragment>
            <div>
                {props.children}
            </div>
        </React.Fragment>
    )
}