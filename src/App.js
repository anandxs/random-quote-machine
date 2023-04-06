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
          quote: 'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
          author: '- Michael Jordan'

        },
        {
          quote: 'You may be disappointed if you fail, but you are doomed if you don’t try.',
          author: '- Beverly Sills'
        },
        {
          quote: 'Our lives begin to end the day we become silent about things that matter.',
          author: '- Martin Luther King Jr.'
        },
        {
          quote: 'Build your own dreams, or someone else will hire you to build theirs.',
          author: '- Farrah Gray'
        },
        {
          quote: 'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
          author: '- Abigail Van Buren'
        },
        {
          quote: 'Winning isn’t everything, but wanting to win is.',
          author: '- Vince Lombardi'
        },
        {
          quote: 'Definiteness of purpose is the starting point of all achievement.',
          author: '- W. Clement Stone'
        },
        {
          quote: 'A person who never made a mistake never tried anything new.',
          author: '- Albert Einstein'
        },
        {
          quote: 'I have learned over the years that when one’s mind is made up, this diminishes fear.',
          author: '- Rosa Parks'
        },
        {
          quote: 'If you do what you’ve always done, you’ll get what you’ve always gotten.',
          author: '- Tony Robbins'
        },
        {
          quote: 'If you want to lift yourself up, lift up someone else.',
          author: '- Booker T. Washington'
        },
        {
          quote: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
          author: '- Leonardo da Vinci'
        },
        {
          quote: 'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.',
          author: '- John Lennon'
        },
        {
          quote: 'Life is what happens to you while you’re busy making other plans.',
          author: '- John Lennon'
        },
        {
          quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
          author: '- Aristotle'
        },
        {
          quote: 'There are no traffic jams along the extra mile.',
          author: '- Roger Staubach'
        },
        {
          quote: 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
          author: '- Jesse Owens'
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
      quoteNumber: Math.floor(Math.random() * 4),
      colors: [
        '#FF0000',
        '#FF0000',
        '#008000',
        '#bfc213',
        '#FFA500',
        '#c913d6',
        '#1cc9b8',
        '#808080',
        '#9ACD32',
        '#A52A2A'
      ],
      colorNumber: Math.floor(Math.random() * 10)
    }
  }

  // quoteNumber = Math.floor(Math.random() * quoteList.length);

  newQuote = () => {
    this.changeStyle();
    this.setState(prevState => {
      let tempQuoteNumber = Math.floor(Math.random() * 20);
      while(tempQuoteNumber == prevState.quoteNumber) {
        tempQuoteNumber = Math.floor(Math.random() * 20);
      }
      return {
        quoteNumber: tempQuoteNumber
      }
    })
  }

  changeStyle = () => {
    this.setState(prevState => {
      let tempColorNumber = Math.floor(Math.random() * 10);
      while(tempColorNumber === prevState.colorNumber) {
        tempColorNumber = Math.floor(Math.random() * 10);
      }
      return {
        colorNumber: tempColorNumber
      }
    });
    document.documentElement.style.setProperty('--color-1', this.state.colors[this.state.colorNumber]);
  }

  render() {
    const link = 'https://twitter.com/intent/tweet?hashtags=quotes&text=%20"' + this.state.quoteList[this.state.quoteNumber].quote.split(' ').join("%20") + '"%20' + this.state.quoteList[this.state.quoteNumber].author + "%20";

    return (
      <div id="wrapper">
        <div id="quote-box">
          <p id="text"><i className='fa fa-quote-left'></i>{` ${this.state.quoteList[this.state.quoteNumber].quote}`}</p>
          <p id="author">{this.state.quoteList[this.state.quoteNumber].author}</p>
          <div id="buttons">
            <a href={link} target='_blank' id="tweet-quote"><i className="fa-brands fa-square-twitter"></i></a>
            <button id="new-quote" onClick={this.newQuote}>New quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
