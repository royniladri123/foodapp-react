import React from "react";
import "./style.css";

const Todo = () => {
  return (
    <>
    <div className="main-div">
      	<div className="child-div">
      	<figure>
      		<img src="./images/favicon.ico" alt="" />
      		<figcaption>Add your List Here</figcaption>
      		<div className="addItems">
      			<input type="text" placeholder="Add Items"/>
      		</div>
      	</figure>
      	</div>
    </div>
    </>

    )
};


export default Todo;