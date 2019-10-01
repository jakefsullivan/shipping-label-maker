import React, { Component } from "react";
import Wizard from "../../core/components/wizard/wizard";
import ShippingLabel from "../../features/shipping-label-maker/shippinglabel";
import ToAddress from "../../features/shipping-label-maker/steps/to-address";
import FromAddress from "../../features/shipping-label-maker/steps/from-address";
import Weight from "../../features/shipping-label-maker/steps/weight";
import Shipping from "../../features/shipping-label-maker/steps/shipping";
import Confirm from "../../features/shipping-label-maker/steps/confirm";
import Header from "../../core/components/header";
import ShippingObject from "../../core/components/shipping-object";

class ShippingLabelMaker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labelCompleted: false,
			wizardContext: ShippingObject
		};
		this.onComplete = this.onComplete.bind(this);
	}

	onComplete = event => {
		this.setState({ labelCompleted: true, wizardContext: event });
	};

	render() {
		const steps = [FromAddress, ToAddress, Weight, Shipping, Confirm];

		return (
			<div>
				{this.state.labelCompleted ? (
					<ShippingLabel wizardContext={this.state.wizardContext} />
				) : (
					<div>
						<Wizard
							Header={Header}
							wizardContext={this.state.wizardContext}
							steps={steps}
							onComplete={this.onComplete}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ShippingLabelMaker;
