
//react inforces the uppercase first letter, diferencia o react component de HTML elements

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
          </ul>
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

const jsx = (
  <div>
    <Header/>
    <Action/>
    <Options/>
    <AddOption/>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));