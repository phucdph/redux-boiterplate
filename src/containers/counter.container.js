import { Counter } from '../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterAction from '../actions/counter.action';

const mapStateToProps = state => {
    return {
        value: state.counter.value
    };
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(counterAction, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter);