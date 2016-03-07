var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <p>Welcome to react</p>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
