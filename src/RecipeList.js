import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableHighlight, AsyncStorage } from 'react-native'

import recipes from '../data/recipes.json'


//When user clicks,
const ListItem = ({ recipe, handleClick }) =>
  <TouchableHighlight onPress={() => handleClick(recipe)}>
    <Text>{recipe.recipeName}</Text>
  </TouchableHighlight>


export default class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes
    }
  }

  // componentDidMount() {
  //   AsyncStorage.getItem('recipebook')
  //     .then(recipes => this.setState({ recipes: JSON.parse(recipes) || [] }))
  //     .catch(error => console.error(error))
  // }

  static navigationOptions = {
    title: 'Recipe List'
  }

  _handlePress = (recipe) => {
    this.props.navigation.navigate('RecipeDetails', { recipe })
  }

  _addRecipe = (recipe) => {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    }, this._saveRecipes)
  }

  _saveRecipes = () => {
    AsyncStorage.setItem('recipebook', JSON.stringify(this.state.recipes))
  }

  render() {
    const { recipes } = this.state
    return (
      <View
        style={styles.container}>
        {recipes.length ?
          recipes.map(recipe =>
            <ListItem
              key={recipe.id}
              recipe={recipe}
              handleClick={this._handlePress}
            />
          ) :

          <Text style={styles.centered}>No recipes!</Text>
        }
        <Button title='Add Recipe' onPress={ev => this.props.navigation.navigate('AddRecipe', { saveRecipe: this._addRecipe })} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 100,
    // justifyContent: 'space-between'
  },
  centered: {
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center'
  }
})
