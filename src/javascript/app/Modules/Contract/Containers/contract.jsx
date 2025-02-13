import PropTypes         from 'prop-types';
import React             from 'react';
import { withRouter }    from 'react-router';
import { CSSTransition } from 'react-transition-group';
import { localize }      from '_common/localize';
import routes            from 'Constants/routes';
import ErrorComponent    from 'App/Components/Elements/Errors';
import { connect }       from 'Stores/connect';
import ContractReplay    from './contract-replay.jsx';

class Contract extends React.Component {
    componentWillUnmount() {
        if (this.props.has_error) this.props.clearError();
    }

    render () {
        return (
            <React.Fragment>
                {
                    this.props.has_error ?
                        <ErrorComponent
                            message={this.props.error_message}
                            redirect_label={localize('Go back to trading')}
                            redirectOnClick={() => this.props.history.push(routes.trade)}
                            should_show_refresh={false}
                        />
                        :
                        <CSSTransition
                            in={!this.props.has_error}
                            timeout={400}
                            classNames={{
                                enter    : 'contract--enter',
                                enterDone: 'contract--enter-done',
                                exit     : 'contract--exit',
                            }}
                            unmountOnExit
                        >
                            <ContractReplay
                                contract_id={+this.props.match.params.contract_id}
                                key={+this.props.match.params.contract_id}
                            />
                        </CSSTransition>
                }
            </React.Fragment>
        );
    }
}

Contract.propTypes = {
    clearError   : PropTypes.func,
    error_message: PropTypes.string,
    has_error    : PropTypes.bool,
    history      : PropTypes.object,
    is_mobile    : PropTypes.bool,
    match        : PropTypes.object,
    symbol       : PropTypes.string,
};

export default withRouter(connect(
    ({ modules, ui }) => ({
        clearError   : modules.contract.clearError,
        error_message: modules.contract.error_message,
        has_error    : modules.contract.has_error,
        is_mobile    : ui.is_mobile,
        symbol       : modules.contract.contract_info.underlying,
    }),
)(Contract));
