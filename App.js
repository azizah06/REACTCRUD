import React, { Component } from 'react';
import './App.css';
import Table7 from './Components2/table1';

 
var data = [
  {id: 1, name: 'tomat', value: '2'},
  {id: 2, name: 'lombok', value: '5'},
  {id: 3, name: 'tahu', value: '4'}
];
 
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Table-header">DAFTAR BELANJA</h1>
        <Table7 data={data}/>
      </div>
    );
  }
}
 
export default App;