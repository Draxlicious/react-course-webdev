import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'

export const ThemeContext = React.createContext()

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
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
