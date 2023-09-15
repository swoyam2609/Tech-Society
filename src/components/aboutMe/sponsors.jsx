import React, { Component } from 'react';

class SponsorTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsors: [
        'Sponsor 1',
        'Sponsor 2',
        'Sponsor 3',
        'Sponsor 4',
      ],
    };
  }

  componentDidMount() {
    this.startTicker();
  }

  componentWillUnmount() {
    clearInterval(this.tickerInterval);
  }

  startTicker() {
    this.tickerInterval = setInterval(() => {
      this.setState((prevState) => ({
        sponsors: [...prevState.sponsors.slice(1), prevState.sponsors[0]],
      }));
    }, 2000); 
  }

  render() {
    return (
      <div className="bg-black text-white w-full h-32 overflow-hidden  flex justify-center items-center">
        <div className="flex animate-ticker">
        <div className='border-r text-lg border-gray-300'></div>
          {this.state.sponsors.map((sponsor, index) => (
            
            <div
              className=" py-2 px-20 border-r text-lg border-gray-300 text-center whitespace-nowrap overflow-hidden overflow-ellipsis"
              key={index}
            >
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SponsorTicker;
