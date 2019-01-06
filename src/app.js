
//react inforces the uppercase first letter, diferencia o react component de HTML elements

class IndecisionApp extends React.Component {
  render(){
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
      const options = ['Thing one', 'Thing Two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options = {options}/>
        <AddOption/>
      </div>
    );
  }
}



class Header extends React.Component {
  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
          <ol>
            {
              this.props.options.map((option) => <Option key={option} optionsText={option} /> )
            }
          </ol>
          <Option/>
        </div>
      );
    }
  }

  //Option -> Option component here
  class Option extends React.Component {
    render(){
      return(
        <div>
          Option: {this.props.optionsText}
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