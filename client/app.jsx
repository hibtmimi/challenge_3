class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      position: 0,
      current: this.f1
    }

    this.f1 = this.f1.bind(this);
    this.f2 = this.f2.bind(this);
    this.f3 = this.f3.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    var updateCurrent = this.state.position + 1;
    var arr = [this.f1, this.f2, this.f3];
    var url = '/checkout';

    console.log('something')

    try{
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({test: 0}),
        headers: {'Content-Type': 'application/json'}
      });
    } catch(err){
      console.log('Error: ', err);
    }

    if(updateCurrent > 2){
      console.log('handle soemthing')
    } else {
      this.setState({position: updateCurrent, current: arr[updateCurrent]});
    }

    event.preventDefault();
  }

  handleChange(event){

  }

  f1() {
    return(
      <div>
        <div>
          <ul><label>Name: <input type='text' name='name'/></label></ul>
          <ul><label>Email: <input type='text' name='email'/></label></ul>
          <ul><label>Password: <input type='text' name='password'/></label></ul>
        </div>
        <div><input type='submit' value='Next' onClick={this.handleOnClick}/></div>
      </div>
    );
  }

  f2() {
    return(
      <div>
        <div>
          <ul><label>line 1: <input type='text' name='line1'/></label></ul>
          <ul><label>line 2: <input type='text' name='line2'/></label></ul>
          <ul><label>City: <input type='text' name='city'/></label></ul>
          <ul><label>State: <input type='text' name='state'/></label></ul>
          <ul><label>Zip Code: <input type='text' name='zip'/></label></ul>
        </div>
        <div><input type='submit' value='Next'/></div>
      </div>
    );
  }

  f3() {
    return(
      <div>
        <div>
          <ul><label>Credit Card #: <input type='text' name='line1' /></label></ul>
          <ul><label>Expiry Date: <input type='text' name='line2'/></label></ul>
          <ul><label>CCV: <input type='text' name='city'/></label></ul>
          <ul><label>State: <input type='text' name='state'/></label></ul>
          <ul><label>Zip Code: <input type='text' name='zip'/></label></ul>
        </div>
        <div><input type='submit' value='Submit'/></div>
      </div>
    );
  }

  render(){
    return (
      <div>
        <h1>Check Out</h1>
        <form onClick={this.handleOnClick}>
          {this.state.current()}
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));