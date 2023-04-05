import React from 'react';
import './App.css';

function App() {
  return (
    <QuoteMachine />
  );
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [
        {
          quote: 'quote',
          author: 'author'
        },
        {
          quote: 'Dream big and dare to fail.',
          author: '- Norman Vaughan'
        }, 
        {
          quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
          author: '- Joshua J. Marine'
        },
        {
          quote:'Change your thoughts and you change your world.',
          author: '- Norman Vincent Peale'
        }
      ],
      quoteNumber: Math.floor(Math.random() * 4)
    }
  }

  // quoteNumber = Math.floor(Math.random() * quoteList.length);

  newQuote = () => {
    this.setState({
      quoteNumber: Math.floor(Math.random() * 4)
    });
  }

  render() {
    return (
      <div>
        <div id="quote-box">
          <p id="text">{this.state.quoteList[this.state.quoteNumber].quote}</p>
          <p id="author">{this.state.quoteList[this.state.quoteNumber].author}</p>
          <a href="#" id="tweet-quote">Tweet</a>
          <button id="new-quote" onClick={this.newQuote}>New quote</button>
        </div>
      </div>
    );
  }
}

export default App;
