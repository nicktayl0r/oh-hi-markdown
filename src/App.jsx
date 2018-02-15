import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor() {
    super();
    this.state = { input: '' };

  }
  toMarkdown() {
    var markdown = marked(this.state.input, {sanitize: true });
    return { __html: markdown };
  }


  updateInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <h1><img src="https://tshirt-image.tshirtxy.com/styles/flexslider_full/s3/tshirt-image-new/main/disaster-artist-t-shirt-for-men-oh-hi-mark-tommy-wiseau-tee-short-sleeve-225251.jpg?yU43VH1OhdNnMiGnh_gdfYaG7qfFG0pA&itok=fO0HZ8s4" alt="oh hi Markdown"/>oh hi markdown </h1>
        <div className="App">
            <textarea placeholder="write Markdown here...."
              className="column"
              onChange={this.updateInput}
              value={this.state.input}>
            </textarea>
            <div className="column" dangerouslySetInnerHTML={this.toMarkdown()}>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
