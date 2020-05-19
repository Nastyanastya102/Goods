import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../components/Card';
import { openModalAction } from '../../redux/ducks/goodsDuck';

const mapStateToProps = ({ goodsApp: { shop } }) => ({
  shop
});

const mapDispatchToProps = dispatch => bindActionCreators({
  openModalAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
