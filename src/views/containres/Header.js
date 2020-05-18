import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = ({ goodsApp: { total } }) => ({
  total
});

export default connect(
  mapStateToProps,
  null
)(Header);