import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ images: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { images, searchField } = this.state;
    const filteredImages = images.filter((image) =>
      image.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App container-fluid">
        <div className="container mt-5">
          <h1>Picture Roll</h1>
        </div>
        <SearchBox
          placeholder="search images"
          handleChange={this.handleChange}
        />
        <CardList images={filteredImages} />
      </div>
    );
  }
}

export default App;
