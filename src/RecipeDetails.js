import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class RecipeDetails extends Component {
  static navigationOptions = {
    title: 'Recipe Details'
  }
  render() {
    const { recipe } = this.props.navigation.state.params
    return (
      <View>
        <Text>{recipe.recipeName}</Text>
        <Text>Ingredients:</Text>
        {
          recipe.ingredients.map((ingredient, index) => <Text key={index}>{ingredient}</Text>)
        }
        <Text>Instructions:</Text>
        <Text>{recipe.instructions}</Text>
      </View>)
  }
}

