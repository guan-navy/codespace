import React from "react";

class Question extends React.Component{

  
    render() {
        console.log('子组件更新');
        
        return (
            <div>
                <h2>父组件更新，子组件一起更新</h2>
            </div>
        )

    }

}
export default Question;