// test branch checkout -b version
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Accordian } from "./components/Accordian";
import { MyModal } from "./components/MyModal";


const css = require('./css/styles.scss');



class App extends React.Component {
  constructor() {
    super();

    // bind the this contex to the updateRecipes function
    this.addRecipes = this.addRecipes.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

    this.state = {
      recipes: [
        {id: 0,
          "name": "Egg Fried Rice",
        "ingredients": ["eggs","rice","spring onions","oil"]
        },
         {id: 1,
           "name": "Pasta Pesto",
        "ingredients": ["spaghetti","basil","pine nuts","olive oil"]
        },
         {id: 2,
           "name": "Kale & Eggs",
        "ingredients": ["eggs","kale","garlic","oil"]
        }
      ]
    };
  }
  // This method will be sent to MyModal component
    addRecipes(newRecipe) {
      let newList = this.state.recipes;
      newList.push(newRecipe);
         this.setState({
            recipes: newList
        });
    }
  //This method will be sent to the accordian component
  deleteRecipe(name) {
    let index = this.state.recipes.findIndex(x => x.name == name );
    let newList = this.state.recipes;
    newList.splice(index,1);
    console.log(newList);
    this.setState({ recipes: newList });
    console.log(index);
  }

  render(){
    return(
      <div className="container">
        <Header />
        <Accordian recipes={this.state.recipes}
                    deleteRecipe={this.deleteRecipe}/>
        <MyModal add={this.addRecipes}
                recipes={this.state.recipes}/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
