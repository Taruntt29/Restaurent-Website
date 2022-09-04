import { Fragment } from 'react';

import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  const dummyItems = [
    {
        dishName:'Sushi',
        description:'Finest Fish and Vegies',
        amount:'$29.99',
        id: Math.random().toString()
    },
    {
        dishName:'Dosa',
        description:'Dharwad Speciality',
        amount:'$10.99',
        id: Math.random().toString()
    },
    {
        dishName:'Idli',
        description:'Begluru Speciality',
        amount:'$9.99',
        id: Math.random().toString()
    },
    {
        dishName:'Biriyani',
        description:'BVB Speciality',
        amount:'$15.99',
        id: Math.random().toString()
    }
]
  return (
    <Fragment>
      <Header />
      <MealsSummary/>
      <AvailableMeals Items = {dummyItems}/>
    </Fragment>
  );
}
export default App;