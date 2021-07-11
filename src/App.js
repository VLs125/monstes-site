import React from 'react'
import './app.css';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {

  constructor(){
    super();
    //this.handleChangeSearchField = this.handleChangeSearchField.bind(this);
    this.monsterList = this.monsterList.bind(this);
    this.state={
      monsters:[],
      searchField:'',
    }
  }
  monsterList(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return filteredMonsters
  }
  handleChangeSearchField=(e)=>{
    this.setState({
      searchField:e.target.value
    })
    
  }
 componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(users=>this.setState({monsters:users}))
}
  
  render() {
    const monsters = this.monsterList();
    return (<div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange ={this.handleChangeSearchField} placeholder="search monsters"/>
      <CardList monsters={monsters}/>   
    </div>
    )
  }
}
export default App;
