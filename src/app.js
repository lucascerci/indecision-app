
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
  handlepick() {
    alert('handlepick')
  }
  // we just wanna reference it so dont call it with () because it gonna be called when you cliuck
  render(){
    return (
      <div>
        <button onClick={this.handlepick}>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options component here
  class Options extends React.Component {
    handleRemoveAll() {
      alert('all removed')
    }
    render(){
      return(
        <div>
          <ol>
            {
              this.props.options.map((option) => <Option key={option} optionsText={option} /> )
            }
          </ol>
          <button onClick={this.handleRemoveAll}>Remove</button>
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
    handleAddOption(e){
      
      e.preventDefault();
      
      const option = e.target.elements.option.value.trim();
      
      if(option){
        alert('adding a new option')
      }

    }
    
    render(){
      return(
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));