import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import RecipeList from './src/RecipeList';
import AddRecipe from './src/AddRecipe';
import RecipeDetails from './src/RecipeDetails';

const App = StackNavigator({
  Home: { screen: RecipeList },
  AddRecipe: { screen: AddRecipe },
  RecipeDetails: { screen: RecipeDetails },
});

export default App;
