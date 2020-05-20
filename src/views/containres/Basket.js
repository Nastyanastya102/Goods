import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Basket from '../components/Basket';
import { minus, plus, removeFromCard } from '../../redux/ducks/goodsDuck';

const mapStateToProps = ({ goodsApp: { basket, sum } }) => ({
  basket,
  sum
});

const mapDispatchToProps = dispatch => bindActionCreators({
  minus,
  plus, 
  removeFromCard
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
