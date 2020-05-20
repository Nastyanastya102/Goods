import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Сonfirmation } from '../components/Сonfirmation';
import { closeModalAction, addToCard, removeFromCard } from '../../redux/ducks/goodsDuck';

const mapStateToProps = ({ modalReducer: { modal, item }, goodsApp: { basket, discounts } }) => ({
  modal,
  item,
  basket,
  discounts
});

const mapDispatchToProps = dispatch => bindActionCreators({
  closeModalAction,
  addToCard,
  removeFromCard
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Сonfirmation);
