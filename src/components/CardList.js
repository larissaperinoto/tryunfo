import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { data, handleRemoveCard } = this.props;
    return (
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
              onClick={ () => handleRemoveCard(index) }
            >
              Excluir
            </button>
          </div>
        )) }
      </ul>
    );
  }
}

CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
};

export default CardList;
