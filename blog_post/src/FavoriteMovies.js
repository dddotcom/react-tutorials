import React, {Component} from 'react';

class FavoriteMovies extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  componentDidMount(){
    let url = 'http://netflixroulette.net/api/api.php?title=a%20fistful%20of%20dollars';

  }

  handleChange(e) {
    this.setState(
      {value: e.target.value}
    );
  }

  render(){
    return (
      <div>
        <form>
          <label>Name:
            <input type="text" name="name" value={this.state.value} onChange={(e) => {this.handleChange(e)}} />
          </label>
          <input type="submit" value="Get this movie!" />
        </form>
      </div>
    );
  }
}

export default FavoriteMovies;
