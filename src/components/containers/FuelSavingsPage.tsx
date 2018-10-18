import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/fuelSavingsActions';
import { IFuelSavings } from '../../models/interfaces/IFuelSavings';
import FuelSavingsForm from '../FuelSavingsForm';

interface FuelSavingsPageProps {
    actions: any;
    fuelSavings: IFuelSavings;
}

export class FuelSavingsPage extends React.Component<FuelSavingsPageProps> {
    saveFuelSavings = () => {
        this.props.actions.saveFuelSavings(this.props.fuelSavings);
    };

    calculateFuelSavings = e => {
        this.props.actions.calculateFuelSavings(
            this.props.fuelSavings,
            e.target.name,
            e.target.value
        );
    };

    render() {
        return (
            <FuelSavingsForm
                onSaveClick={this.saveFuelSavings}
                onChange={this.calculateFuelSavings}
                fuelSavings={this.props.fuelSavings}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        fuelSavings: state.fuelSavings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FuelSavingsPage);
