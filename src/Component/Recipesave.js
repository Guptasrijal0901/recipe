import React, { useState } from "react";

const Recipeji = ()=>{
    const [Name, setName]=useState("");
    const [Recipename, setRecipename]=useState("");
    const [Recipe, setRecipe]=useState([]);
    const [date, setdate]=useState([new Date()]);

    const createRecipe = ()=>{
        const oldRecipe = [...Recipe];
        const  newRecipe = {
            nameofcan: Name,
            nameofRecipe: Recipename,
            recipedescription: Recipe,
            Recipedate: date,
        };
        oldRecipe.push(newRecipe);
        setRecipe(oldRecipe);
    };
    return(
        <>
            <div className="heading"><h1> Save your Recipe </h1></div>
            <br></br>
            <div className="name">
                <label >Your name: </label>
                <input 
                value={Name}
                onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="Enter your Name"
                />
            </div>
            <br></br>
            <div className="recipe-name">
                <label>Your Recipe Name: </label>
                <input
                value={Recipename}
                onChange={(e)=>setRecipename(e.target.value)}
                type="text"
                placeholder="Enter your Recipe Name"
                />
            </div>
            <br></br>
            <div className="recipedes">
                <label>Your Recipe: </label>
                <input 
                type="text"
                value={Recipe}
                onChange={(e)=>setRecipe(e.target.value)} 
                placeholder="Enter Description"
                />
            </div>
            <br></br>
            <div className="date">
                <label>Date: </label>
                <input 
                value={date}
                onChange={(e)=>setdate(e.target.value)}
                type="date"
                placeholder="Enter your Recipe Date"
                />
            </div>
            <br></br>
            <div>
            <button
            className="btn1" 
            onClick={()=> createRecipe()}> Create Recipe</button>
            </div>
            <br></br>
            {Recipe.map((v, i)=>{
                return(
                    <div className="one">
                        <h3> New Recipe</h3>
                        <ol>
                            <li> Your Name:  {v.nameofcan}</li>
                            <li> Your Recipe Name:  {v.nameofRecipe}</li>
                            <li> Your Recipe:  {v.recipedescription}</li>
                            <li> Date:  {v.Recipedate}</li>
                        </ol>
                        <button onClick={()=>
                        setRecipe((oldRecipe)=> oldRecipe.filter((v, index)=> index !== i))
                        } type="button">Delete</button>
                    </div>
                )
            })}
        </>
    );
}

export default Recipeji;