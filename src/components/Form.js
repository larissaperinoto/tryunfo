import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="firstAttribute">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="firstAttribute"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="secondAttribute">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="secondAttribute"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="thirdAttribute">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="thirsAttribute"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muitoRaro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            value={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
