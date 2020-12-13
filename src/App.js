import React from "react";
import "./App.css";
import Jumbotron from "./components/jumbotron";
import Wrapper from "./components/wrapper";
import Card from "./components/friendCard";
import friends from "./friends.json";
import "./style.css"

class App extends React.Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
  };


  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((y, i) => {
      if (y.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 1)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
  return(
    <Wrapper>
  <Jumbotron score={this.state.score} highScore={this.state.highScore}>Clicky Game</Jumbotron>
{
 
  this.state.friends.map( card => (
    <Card
      clickCount={this.clickCount}
      id={card.id}
      key={card.id}
      image={card.image}
    />
  ))
}
  </Wrapper >
  
  );
}
}
export default App;