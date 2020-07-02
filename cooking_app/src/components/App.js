import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReach.recipes'


function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  
  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])
  
  useEffect(()=>{
    console.log('Rendered');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd(){
      const newRecipe = {
        id: uuidv4(),
        name: 'New',
        servings: 1,
        cookTime: '1:00',
        instructions: 'Instr.',
        ingredients:[
          { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
        ]
      }
      setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe=> recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes}/> 
        <RecipeEdit/>
    </RecipeContext.Provider>
  )
}



const sampleRecipes = [
  {
    id:1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. put salt on Chicken\n2.put chicken in oven\n3. eat chicken',
    ingredients: [
      {
        id:1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id:2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id:2,
    name: 'Plain Pork',
    servings: 3,
    cookTime: '0:45',
    instructions: '1. put paprika on pork\n2.put pork in oven\n3. eat pork',
    ingredients: [
      {
        id:1,
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id:2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;
