var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <center>Welcome to react</center>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
