import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './App.css';
import CardList from './components/CardList';

const firstState = {
  cardName: '',
  cardDescription: '',
  cardImage: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardRare: 'normal',
  cardTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...firstState,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      filter: {
        name: '',
        rare: '',
        trunfo: '',
        disabled: '',
      },
      data: [],
    };
  }

  handleTrunfo = () => {
    const { data } = this.state;
    const trunfo = data.some((state) => state.cardTrunfo === true);
    this.setState({ hasTrunfo: trunfo });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { data, hasTrunfo, filter, ...valueState } = this.state;
    this.setState((prevState) => ({
      ...firstState,
      isSaveButtonDisabled: true,
      data: [...prevState.data, valueState],
    }), this.handleTrunfo);
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
    const validateInput = cardName && cardDescription && cardImage;

    if (!validateInput
      || cardAttr1 > attrMax
      || cardAttr1 < 0
      || cardAttr2 > attrMax
      || cardAttr2 < 0
      || cardAttr3 > attrMax
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

  handleRemoveCard = (index) => {
    const { data } = this.state;
    const newData = data.filter((_card, i) => i !== index);
    this.setState({ data: newData }, this.handleTrunfo);
  }

  handleFilter = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.type === 'text') this.setState({ filter: { name: value } });
    if (target.type === 'select-one') this.setState({ filter: { rare: value } });
    if (target.type === 'checkbox') {
      this.setState({ filter: { trunfo: value, disabled: true } });
      const { filter: { trunfo } } = this.state;
      if (trunfo === true) this.setState({ filter: { disabled: false } });
    }
  }

  handleResearch = () => {
    const { filter: { name, rare, trunfo }, data } = this.state;
    if (name || rare || trunfo) {
      return (data.filter((card) => (
        JSON.stringify(card.cardName).includes(name)
        || card.cardRare === rare
        || card.cardTrunfo === trunfo
        || rare === 'todas')));
    }
    return data;
  }

  render() {
    const { hasTrunfo,
      isSaveButtonDisabled,
      filter: {
        disabled },
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />

        <Card { ...this.state } />

        <Filter
          disabled={ disabled }
          handleFilter={ this.handleFilter }
        />

        <CardList
          data={ this.handleResearch() }
          handleRemoveCard={ this.handleRemoveCard }
        />
      </div>
    );
  }
}

export default App;
