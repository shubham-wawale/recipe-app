import React from "react";
import style from "./recipe.module.css"

function Recipe(props) {
    return (
        <div className={style.recipe}>
           <h1 className={style.title}>{props.title}</h1>
           <ol>
           {props.ingredients.map(ingredient => {
               return (
                   <li className={style.ingredients}>{ingredient}</li>
               )
           })}
           </ol>
           <img className={style.image} src={props.img}></img>
        </div>
    );
}

export default Recipe;