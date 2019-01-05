
//react inforces the uppercase first letter, diferencia o react component de HTML elements

class IndecisionApp extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
      </div>
    );
  }
}



class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options component here
  class Options extends React.Component {
    render(){
      return(
        <div>
          <ul>
            <li>Option component here</li>
            <Option/>
          </ul>
        </div>
      );
    }
  }

  //Option -> Option component here
  class Option extends React.Component {
    render(){
      return(
        <div>
          <p>Option Component ONE</p>
        </div>
      );
    }
  }

// addOptions -> AddOption component here (form)
  class AddOption extends React.Component {
    render(){
      return(
        <div>
          Add a option component here
        </div>
      );
    }
  }


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));