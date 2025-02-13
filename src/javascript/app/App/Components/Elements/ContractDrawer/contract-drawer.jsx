import classNames            from 'classnames';
import PropTypes             from 'prop-types';
import React, { Component }  from 'react';
import { withRouter }        from 'react-router';
import { CSSTransition }     from 'react-transition-group';
import { localize }          from '_common/localize';
import Icon                  from 'Assets/icon.jsx';
import routes                from 'Constants/routes';
import Localize              from 'App/Components/Elements/localize.jsx';
import { UnderlyingIcon }    from 'App/Components/Elements/underlying-icon.jsx';
import Button                from 'App/Components/Form/button.jsx';
import ContractAudit         from 'App/Components/Elements/ContractAudit';
import ContractTypeCell      from 'App/Components/Elements/PositionsDrawer/contract-type-cell.jsx';
import ProgressSlider        from 'App/Components/Elements/PositionsDrawer/ProgressSlider';
import ProfitLossCardContent from 'Modules/Reports/Components/profit-loss-card-content.jsx';
import ContractCardBody      from './contract-card-body.jsx';
import ContractCardFooter    from './contract-card-footer.jsx';
import ContractCardHeader    from './contract-card-header.jsx';
import ContractCard          from './contract-card.jsx';

import {
    getCurrentTick,
    getDurationPeriod,
    getDurationTime,
    getDurationUnitText }    from '../../../../Stores/Modules/Portfolio/Helpers/details';
import {
    getIndicativePrice,
    getEndTime,
    isUserSold,
    isValidToSell       }    from '../../../../Stores/Modules/Contract/Helpers/logic';
import Money                 from '../money.jsx';

class ContractDrawer extends Component {
    state = {
        is_shade_on: false,
    }

    handleShade = (shade) => {
        this.setState({ is_shade_on: shade });
    }

    redirectBackToReports = () => {
        // history.goBack() will go to the wrong location if user goes to contract by pasting it in the url.
        if (this.props.history.location.state) {
            this.props.history.goBack();
        } else {
            this.props.history.push(routes.reports);
        }
    };

    getBodyContent () {
        const {
            buy_price,
            currency,
            exit_tick,
            is_sold,
            payout,
            profit,
        } = this.props.contract_info;
        const { contract_info, is_dark_theme, is_sell_requested, onClickSell } = this.props;
        const exit_spot = isUserSold(contract_info) ? '-' : exit_tick;
        const getTick = () => {
            if (!contract_info.tick_count) return null;
            let current_tick = getCurrentTick(contract_info);
            current_tick = (current_tick > getCurrentTick(contract_info)) ?
                current_tick : getCurrentTick(contract_info);
            return current_tick;
        };

        return (
            <React.Fragment>
                <ContractCard
                    contract_info={contract_info}
                    profit_loss={+profit}
                    is_sold={!!(is_sold)}
                >
                    <ContractCardHeader>
                        <div className={classNames(
                            'contract-card__grid',
                            'contract-card__grid-underlying-trade'
                        )}
                        >
                            <div className='contract-card__underlying-name'>
                                <UnderlyingIcon market={contract_info.underlying} />
                                <span className='contract-card__symbol'>
                                    {contract_info.display_name}
                                </span>
                            </div>
                            <div className='contract-card__type'>
                                <ContractTypeCell type={contract_info.contract_type} />
                            </div>
                        </div>
                    </ContractCardHeader>
                    {is_sold ?
                        <div className='progress-slider--completed' />
                        :
                        <ProgressSlider
                            is_loading={false}
                            start_time={contract_info.purchase_time}
                            expiry_time={contract_info.date_expiry}
                            current_tick={getTick()}
                            ticks_count={contract_info.tick_count}
                        />
                    }
                    <ContractCardBody>
                        <ProfitLossCardContent
                            pl_value={+profit}
                            payout={getIndicativePrice(contract_info)}
                            currency={currency}
                            is_sold={!!(is_sold)}
                            status={this.props.status}
                        />
                    </ContractCardBody>
                    <ContractCardFooter>
                        <div className='contract-card__footer-wrapper'>
                            <div className='purchase-price-container'>
                                <span className='purchase-price__label'>
                                    {localize('Purchase price:')}
                                </span>
                                <span className='purchase-price__value' >
                                    <Money
                                        currency={currency}
                                        amount={buy_price}
                                    />
                                </span>
                            </div>
                            <div className='potential-payout-container'>
                                <span className='potential-payout__label'>
                                    {localize('Potential payout:')}
                                </span>
                                <span className='potential-payout-price__value' >
                                    <Money
                                        currency={currency}
                                        amount={payout}
                                    />
                                </span>
                            </div>
                        </div>
                        <CSSTransition
                            in={!!(isValidToSell(contract_info))}
                            timeout={250}
                            classNames={{
                                enter    : 'contract-card__sell-button--enter',
                                enterDone: 'contract-card__sell-button--enter-done',
                                exit     : 'contract-card__sell-button--exit',
                            }}
                            unmountOnExit
                        >
                            <div
                                className='contract-card__sell-button'
                            >
                                <Button
                                    className={classNames(
                                        'btn--primary',
                                        'btn--primary--green',
                                        'btn--sell', {
                                            'btn--loading': is_sell_requested,
                                        })}
                                    is_disabled={!(isValidToSell(contract_info)) || is_sell_requested}
                                    text={localize('Sell contract')}
                                    onClick={() => onClickSell(contract_info.contract_id)}
                                />
                            </div>
                        </CSSTransition>
                    </ContractCardFooter>
                </ContractCard>
                <ContractAudit
                    contract_info={contract_info}
                    contract_end_time={getEndTime(contract_info)}
                    is_dark_theme={is_dark_theme}
                    is_open={true}
                    is_shade_visible={this.handleShade}
                    duration={getDurationTime(contract_info)}
                    duration_unit={getDurationUnitText(getDurationPeriod(contract_info))}
                    exit_spot={exit_spot}
                    has_result={!!(is_sold)}
                />
            </React.Fragment>
        );
    }

    redirectBackToReports = () => {
        // history.goBack() will go to the wrong location if user goes to contract by pasting it in the url.
        if (this.props.history.location.state) {
            this.props.history.goBack();
        } else {
            this.props.history.push(routes.reports);
        }
    };

    render() {
        if (!this.props.contract_info) return null;
        const body_content = (this.props.contract_info.status) ? this.getBodyContent() : null;
        return (
            <div className={classNames('contract-drawer', {})}>
                <div
                    className='contract-drawer__heading'
                    onClick={this.redirectBackToReports}
                >
                    <Icon icon='IconBack' />
                    <h2><Localize str={this.props.heading || 'Contract'} /></h2>
                </div>
                <div className='contract-drawer__body'>{body_content}</div>
            </div>
        );
    }
}

ContractDrawer.propTypes = {
    contract_info    : PropTypes.object,
    heading          : PropTypes.string,
    is_dark_theme    : PropTypes.bool,
    is_sell_requested: PropTypes.bool,
    onClickSell      : PropTypes.func,
    status           : PropTypes.string,
};

export default withRouter(ContractDrawer);
