import React, {Component,  Fragment} from 'react';
// import Cardlist from './Cardlist';
import CardList from './Components/CardList/Cardlist';
import { robots } from './robots';
 
class App extends Component{
  constructor(){
    super();
    this.state = {
      searchBox: '',
      newRobots: robots
    }
  }

  onSearchChange = (event) =>{
    event.preventDefault();
    this.setState({ searchBox: event.target.value})
  }
  
  
  render() {
    const filteredRobots = this.state.newRobots.filter((item) => {
      return (
        item.name.toLowerCase().includes(this.state.searchBox.toLowerCase())
      )
    })
    console.log(filteredRobots);
    return (
      <Fragment>
      <input  type='text'placeholder='search' onChange={this.onSearchChange} />
        <CardList robots={ filteredRobots }/>
      </Fragment>
    )
  }
}
        
export default App;
