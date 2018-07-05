const changeSection = function(e) {
  const section = e.currentTarget.innerText;

  this.setState({section});
};

export default changeSection;
