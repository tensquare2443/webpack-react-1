import React from 'react';

class TopNav extends React.Component {
  render() {

    const navButtons = ['I', 'II', 'III', 'IV'].map((button, index) => {
      switch (this.props.section) {
        case button:
        return (<div key={index} className="nav-link top-nav-link text-primary">{button}</div>);
        break;
        default:
        return (<div key={index} onClick={this.props.changeSection.bind(this)} className="nav-link top-nav-link text-white">{button}</div>);
      }
    })

    return(
      <div>
        <nav className="nav justify-content-center bg-dark">
          {navButtons}
        </nav>
      </div>
    );
  }
};

export default TopNav;
