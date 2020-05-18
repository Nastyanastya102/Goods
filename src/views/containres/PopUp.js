import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PopUp from '../components/PopUp';
import { addToCard, removeFromCard } from '../../redux/ducks/goodsDuck';

const mapStateToProps = ({ goodsApp: { basket, sum } }) => ({
  basket,
  sum
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCard,
  removeFromCard
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUp);
