import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => {
  console.log('OrderCheckbox', values, currentValue, setOptionValue);

  return <div className={styles.checkboxes}>
    {values.map(
      value =>
        <label key = {value.id}> 
          <input type="checkbox" 
            value={value.id} checked={(currentValue.indexOf(value.id) !== -1) ? true : false} 
            onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/>
          {value.name}{' ' + formatPrice(value.price)}
        </label>)}</div>;
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
  currentValue: PropTypes.node,
};
export default OrderOptionCheckboxes;