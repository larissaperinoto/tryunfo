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
    if (trunfo === true) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { data, hasTrunfo, filter, ...valueState } = this.state;
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
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

  handleRemoveCard = (index) => {
    const { data } = this.state;
    const newData = data.filter((_card, i) => i !== index);
    this.setState({ data: newData }, this.handleTrunfo);
  }

  handleResearch = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.type === 'text') this.setState({ filter: { name: value } });
    if (target.type === 'select-one') this.setState({ filter: { rare: value } });
    if (target.type === 'checkbox') {
      this.setState({ filter: { trunfo: value, disabled: true } });
      const { filter: { trunfo } } = this.state;
      if (trunfo === true) this.setState({ filter: { disabled: false } });
    }
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
      isSaveButtonDisabled,
      filter,
      data } = this.state;

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

        <label htmlFor="name-filter">
          Filtro de buscas
          <input
            data-testid="name-filter"
            type="text"
            disabled={ filter.disabled }
            onChange={ (event) => this.handleResearch(event) }
          />
          <select
            data-testid="rare-filter"
            onChange={ (event) => this.handleResearch(event) }
            disabled={ filter.disabled }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

          <label htmlFor="trunfo-filter">
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              onChange={ (event) => this.handleResearch(event) }
            />
            Super Trunfo
          </label>
        </label>
        { (filter.name || filter.rare || filter.trunfo)
          ? (
            <ul>
              {data
                .filter((card) => JSON.stringify(card.cardName).includes(filter.name)
                  || card.cardRare === filter.rare
                  || card.cardTrunfo === filter.trunfo
                  || filter.rare === 'todas')
                .map((card, index) => (
                  <div key={ index }>
                    <Card
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescription }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardImage={ card.cardImage }
                      cardRare={ card.cardRare }
                      cardTrunfo={ card.cardTrunfo }
                    />
                    <button
                      data-testid="delete-button"
                      type="button"
                      onClick={ () => this.handleRemoveCard(index) }
                    >
                      Excluir
                    </button>
                  </div>
                )) }
            </ul>
          )
          : (
            <ul>
              { data.map((card, index) => (
                <div key={ index }>
                  <Card
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardImage={ card.cardImage }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <button
                    data-testid="delete-button"
                    type="button"
                    onClick={ () => this.handleRemoveCard(index) }
                  >
                    Excluir
                  </button>
                </div>
              )) }
            </ul>
          ) }
      </div>
    );
  }
}

export default App;
