import React from 'react';

class Form extends React.Component {
  render() {
    /* const { cardName, cardImage, cardDescription, cardAttr1 } = this.props;
    const { cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.props;
    const { onSaveButtonClick, onInputChange, isSaveButtonDisabled } = this.props; */
    return (
      <form className="form">
        <label htmlFor="cardName">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            /* value={ cardName }
            onChange={ onInputChange() } */
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            /* value={ cardDescription }
            onChange={ onInputChange } */
          />
        </label>

        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            /* value={ cardAttr1 }
            onChange={ onInputChange } */
          />
        </label>

        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            /* value={ cardAttr2 }
            onChange={ onInputChange } */
          />
        </label>

        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            /* value={ cardAttr3 }
            onChange={ onInputChange } */
          />
        </label>

        <label htmlFor="cardImage">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            /* value={ cardImage }
            onChange={ onInputChange } */
          />
        </label>

        <label htmlFor="cardRare">
          <select
            data-testid="rare-input"
            name="cardRare"
            /* value={ cardRare }
            onChange={ onInputChange } */
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            /* value={ cardTrunfo }
            onChange={ onInputChange } */
          />
        </label>

        <button
          data-testid="save-button"
          type="submit"
          /* disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick } */
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
