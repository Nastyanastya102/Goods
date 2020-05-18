import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../components/Card';
import { addToCard, removeFromCard } from '../../redux/ducks/goodsDuck';

const mapStateToProps = ({ goodsApp: { shop, basket } }) => ({
  shop,
  basket
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCard,
  removeFromCard
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
