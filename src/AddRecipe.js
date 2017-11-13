import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet, } from 'react-native'

export default class AddRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Math.trunc(Math.random() * 1000000),
      recipeName: '',
      ingredients: [],
      instructions: ''
    }
  }

  static navigationOptions = {
    title: 'Add Recipe'
  }

  _addIngredient = () => {
    this.setState({ ingredients: [...this.state.ingredients, ''] })
  }

  _changeIngredient = (index, newIngredient) => {
    const ingredients = this.state.ingredients.map((ingredient, ingIndex) =>
      ingIndex === index ?
        newIngredient :
        ingredient
    )
    this.setState({ ingredients })
  }

  _saveRecipe = () => {
    this.props.navigation.state.params.saveRecipe(this.state)
    this.props.navigation.goBack()
  }
  render() {
    const { recipeName, ingredients, instructions } = this.state
    return (
      <View>
        <Text>RecipeName: </Text>
        <TextInput style={styles.textInput} onChangeText={recipeName => this.setState({ recipeName })} />
        <Text>Ingredients:</Text>
        <Button onPress={this._addIngredient} title='+' />
        {
          ingredients
            ? ingredients.map((ingredient, index) =>
              <TextInput
                style={styles.textInput}
                key={index}
                onChangeText={ingredient => this._changeIngredient(index, ingredient)}
              />)
            : <Text>No Ingredients</Text>
        }
        <Text>Instructions:</Text>
        <TextInput style={styles.textInput} multiline onChangeText={instructions => this.setState({ instructions })} />
        <Button title='Save Recipe' onPress={this._saveRecipe} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
  }
})