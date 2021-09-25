import React from "react";

interface IPros{
    Name?:string
}

export const Child:React.FunctionComponent<IPros>=(props:IPros):JSX.Element=>{

    return (
        <React.Fragment>
            <div>
                {props.Name}
            </div>
        </React.Fragment>
    )
}