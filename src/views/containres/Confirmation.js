import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Сonfirmation from '../components/Сonfirmation';
import { addToCard } from '../../redux/ducks/goodsDuck';

const mapStateToProps = ({ goodsApp: { basket } }) => ({
  basket
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCard
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Сonfirmation);
