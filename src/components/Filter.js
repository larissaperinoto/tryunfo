import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { disabled, handleFilter } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          Filtro de buscas
          <input
            data-testid="name-filter"
            name="name-filter"
            type="text"
            disabled={ disabled }
            onChange={ (event) => handleFilter(event) }
          />
          <select
            data-testid="rare-filter"
            onChange={ (event) => handleFilter(event) }
            disabled={ disabled }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

          <label htmlFor="trunfo-filter">
            <input
              data-testid="trunfo-filter"
              name="trunfo-filter"
              type="checkbox"
              onChange={ (event) => handleFilter(event) }
            />
            Super Trunfo
          </label>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  disabled: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
