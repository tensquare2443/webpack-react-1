import React from 'react';

class Main extends React.Component {
  render() {
    return(
      <div className="d-flex justify-content-center main-cont">Section {this.props.section}</div>
    );
  }
}

export default Main;
