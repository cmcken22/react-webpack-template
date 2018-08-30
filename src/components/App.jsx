import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{background: 'red'}}>
        <div className="row" style={{background: 'blue', height: '100%'}}>
          <div className="col-3" style={{background: 'green', height: '50%'}}>

          </div>
          <div className="col-3" style={{background: 'green', height: '50%'}}>

          </div>
          <div className="col-6" style={{background: 'green', height: '50%'}}>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
