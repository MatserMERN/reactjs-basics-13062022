import React from "react"

const Hello = () => {
    // return  (
    //     <div className="container" id="parent">
    //         <h1 className="header" id="child">Hello Scott</h1>
    //     </div>
    // )

    return React.createElement("div", 
                                {id: "parent", className: "container"}, 
                                React.createElement("h1", 
                                                    {id: "child", className: "header"}, 
                                                    "Hello Scott"))
    
}

export default Hello