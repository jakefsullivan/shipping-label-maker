import React from "react";
import PropTypes from "prop-types";

class Shipping extends React.Component {
	render() {
		const {
			onAction,
			wizardContext: { shippingOption }
		} = this.props;

		const shippingOptions = {
			ground: 1,
			priority: 2
		};

		return (
			<div>
				<p style={{ margin: 0 }}>Choose Shipping </p>
				<div>
					<label>
						options:
						<select
							onChange={onAction}
							value={shippingOption}
							id="shippingOption"
							style={{ width: "200px" }}
						>
							<option value={shippingOptions.ground}>
								Ground
							</option>
							<option value={shippingOptions.priority}>
								Priority
							</option>
						</select>
					</label>
				</div>
			</div>
		);
	}
}
export default Shipping;

Shipping.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};
