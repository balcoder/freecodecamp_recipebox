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
    this.updateRecipes = this.updateRecipes.bind(this);

    this.state = {
      recipes: [
        {"name": "Egg Fried Rice",
        "ingredients": ["eggs","rice","spring onions","oil"]
        },
         {"name": "Pasta Pesto",
        "ingredients": ["spaghetti","basil","pine nuts","olive oil"]
        },
         {"name": "Kale & Eggs",
        "ingredients": ["eggs","kale","garlic","oil"]
        }
      ]
    };
  }
  // This method will be sent to MyModal component
    updateRecipes(newRecipe) {
      let newList = this.state.recipes;
      newList.push(newRecipe);

         this.setState({
            recipes: newList
        });
    }

  render(){
    return(
      <div className="container">
        <Header />
        <Accordian recipes={this.state.recipes}
                   update={this.updateRecipes}/>
        <MyModal update={this.updateRecipes}/>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
