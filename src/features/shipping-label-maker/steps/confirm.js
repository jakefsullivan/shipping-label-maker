import React from "react";

class Confirm extends React.Component {
	render() {
		
		const { wizardContext, shippingCost } = this.props;
		console.log(wizardContext.shippingOption);
		return (
			<div>
				<div>
					from: {wizardContext.from.name}
					<br />
					{wizardContext.from.street}
					<br />
					{wizardContext.from.city}, {wizardContext.from.state} {wizardContext.from.zip}
				</div>
				<br />
				<div>
					to: {wizardContext.to.name}
					<br />
					{wizardContext.to.street}
					<br />
					{wizardContext.to.city}, {wizardContext.to.state} {wizardContext.to.zip} 
				</div>
				<div>
					<p>
						weight: {wizardContext.weight}, 
						shipping option: {wizardContext.shippingOption === 1 ? "ground" : "priority"}, 
						Total Cost: $ {shippingCost}
					</p>
				</div>
			</div>
		);
	}
}
export default Confirm;
