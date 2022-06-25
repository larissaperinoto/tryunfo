import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  callback = () => {
    console.log('teste');
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.callback }
          onInputChange={ this.callback }
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          hasTrunfo={ false }
          cardTrunfo={ false }
          isSaveButtonDisabled={ false }
        />

        <Card
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
