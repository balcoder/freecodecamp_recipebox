import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";

const css = require('./css/styles.scss');

//parse the JSON string given by the url and pass it to the callback fn
function getJSON(url, callback) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var myObj = JSON.parse(this.responseText);
      callback(myObj);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [{}]};
    // This binding is necessary to make `this` work in the callback
    this.updateRecent = this.updateRecent.bind(this);
    this.updateAlltime = this.updateAlltime.bind(this);

  }

  componentWillMount() {
    var url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    getJSON(url, (response) => {
      this.setState({data: response});
    });
  }

  updateRecent(btn_value) {
    var url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    getJSON(url, (response) => {
      this.setState({data: response});
    });
  }

  updateAlltime() {
    var url = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    getJSON(url, (response) => {
      this.setState({data: response});
    });
  }

  render(){

    var rows = this.state.data.map( (user, i) => {
      return(
       <tr>
        <td>{i + 1}</td>
        <td><img id="avatar" className="img-thumbnail" src={user.img} alt={user.username + "_pic"}/>{user.username}</td>
        <td>{user.alltime}</td>
        <td>{user.recent}</td>
      </tr>
      );
    });
    return(
      <div className="container">
        <div>
          <Header/>
        </div>
        <div>
          <button className="btn btn-success" value="30days" onClick={this.updateRecent}>Last 30 days</button>
         <button className="btn btn-success"  value="alltime" onClick={this.updateAlltime}>Alltime</button>
         </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <td>Rank #</td>
                <td>User</td>
                <td>Alltime</td>
                <td>Last 30 days</td>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
         </div>
      </div>

    );
  }
}

render(<App/>, window.document.getElementById('app'));
