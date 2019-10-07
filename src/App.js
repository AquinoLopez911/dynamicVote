import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function bSort(arr, key) {
  for(let i = 0; i < arr.length; i++ ) {
    for(let j = 0; j < arr.length-i-1; j++) {
      if(arr[j][key] < arr[j+1][key]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
}


function reverseBSort(arr, key) {
  for(let i = 0; i < arr.length; i++ ) {
    for(let j = 0; j < arr.length-i-1; j++) {
      if(arr[j][key] > arr[j+1][key]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
}






class App extends Component {
  constructor(props) {
    super();
    this.state = {
      languages : [
        {lan : 'java', count : 0},
        {lan : 'JavaScript', count : 0 },
        {lan :'python', count : 0},
        {lan : 'c#', count : 0}
      ],
      reverse : false,
    }
  }//end constructor

  increment(i) {
    //added code
    let temp = [...this.state.languages];
    temp[i].count++;

    if(this.state.reverse) {
      reverseBSort(temp, 'count');
    }
    else{
      bSort(temp, 'count');
    }
    this.setState({languages : temp});
  }//end increment

  reverse = () => {
    let temp = [...this.state.languages];
    this.setState({reverse : !this.state.reverse}, () => {
      if(this.state.reverse) {
        reverseBSort(temp, 'count');
      }
      else{
        bSort(temp, 'count');
      }
      this.setState({languages : temp});
    });
    
  }


  render() {

    return (
      <>
      <div className="main">
        <h1>VOTE YOUR JS LIBRARY</h1>
        <button className="reverse" onClick={this.reverse}>reverse Order</button>
        <table>
          <thead>
          </thead>
          <tbody>
            {
            this.state.languages.map((language, i) => (
              <tr key={i}>
                <td>{language.count}</td>
                <td>{language.lan}</td>
                <td><button className='butts' onClick={this.increment.bind(this, i)}></button></td>
              </tr>
              ))
            }
          </tbody>  
        </table>  
      </div>

      </>
    )}
}

export default App;
