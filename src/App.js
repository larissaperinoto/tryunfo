import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onSaveButtonClick = ({ target }) => {
    const { value } = target;
    this.setState({
      data: [value],
    });

    const { data } = this.state;

    console.log(data);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  handleSubmit = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const totalAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const attrMax = 90;
    const totalAttrMax = 210;

    if (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardAttr1 > attrMax
      || cardAttr1.length === 0
      || cardAttr1 < 0
      || cardAttr2 > attrMax
      || cardAttr2.length === 0
      || cardAttr2 < 0
      || cardAttr3 > attrMax
      || cardAttr3.length === 0
      || cardAttr3 < 0
      || totalAttr > totalAttrMax) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }), this.handleSubmit);
  }

  render() {
    const { cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
