import React, { useState } from "react";

const Recipe = ()=>{
    const [name, setname]=useState([]);
    const [recipename, setrecipename]=useState("");
    const [recipe, setrecipe]=useState("");
    const [date, setdate]=useState(new Date());

    const createRecipe = ()=>{
        const oldrecipe = [...Recipe];
        const  newRecipe = {
            nameofcan: name,
            nameofrecipe: recipename,
            recipedescription: recipe,
            recipedate: date,
        };
        oldrecipe.push(newRecipe);
        setrecipe(oldrecipe);
    };
    return(
        <>
            <div className="heading"><h1> Save your Recipe </h1></div>
            <div>
                <label>Your name: </label>
                <input 
                value={name}
                onChange={(e)=>setname(e.target.value)}
                type="text"
                placeholder="Enter your Name"
                />
            </div>
            <div>
                <label>Your Recipe name: </label>
                <input
                value={recipename}
                onChange={(e)=>setrecipename(e.target.value)}
                type="text"
                placeholder="Enter your Recipe Name"
                />
            </div>
            <div>
                <label>Your Recipe: </label>
                <input 
                value={ recipe}
                onChange={(e)=>setrecipe(e.target.value)}
                type="text"
                placeholder="Enter your Recipe Description"
                />
            </div>
            <div>
                <label>Date: </label>
                <input 
                value={date}
                onChange={(e)=>setdate(e.target.value)}
                type="date"
                placeholder="Enter your Recipe Date"
                />
            </div>
            <div>
            <button
            className="btn1" 
            onClick={()=> createRecipe()}> Create Recipe</button>
            </div>
            {Recipe.map((v, i)=>{
                return(
                    <div>
                        <h3> New Recipe</h3>
                        <ul>
                            <li>Name:{v.nameofcan}</li>
                            <li>Recipe Name:{v.nameofrecipe}</li>
                            <li>Recipe:{v.recipedescription}</li>
                            <li>Date:{v.recipedate}</li>
                        </ul>
                        <button onClick={()=>
                        setrecipe((oldrecipe)=> oldrecipe.filter((v, index)=> index !== i))
                        } type="button">Delete</button>
                    </div>
                );
            })};
        </>
    );
}

export default Recipe;