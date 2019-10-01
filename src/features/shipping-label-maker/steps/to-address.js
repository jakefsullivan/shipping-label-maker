import React from "react";
import PropTypes from "prop-types";

class ToAddress extends React.Component {
	render() {
		const {
			onAction,
			wizardContext: { to }
		} = this.props;

		return (
			<div>
				<p style={{ margin: "0px 0px 3px 0px" }}>Shipping To:</p>
				<input
					className="name"
					name="name"
					type="text"
					placeholder="Name"
					value={to.name}
					onChange={onAction}
					nestedkey="to"
					style={{ minWidth: 400 }}
				/>
				<br />
				<br />
				<input
					id="street"
					name="street"
					type="text"
					placeholder="Street Address"
					value={to.street}
					onChange={onAction}
					nestedkey="to"
					style={{ minWidth: 500 }}
				/>
				<br />
				<br />
				<input
					id="city"
					name="city"
					type="text"
					placeholder="City"
					value={to.city}
					onChange={onAction}
					nestedkey="to"
					style={{ maxWidth: 150 }}
				/>
				<input
					id="state"
					name="state"
					type="text"
					placeholder="State"
					value={to.state}
					onChange={onAction}
					nestedkey="to"
					style={{ maxWidth: 75, marginLeft: 10 }}
				/>
				<input
					id="zip"
					name="zip"
					type="zip"
					placeholder="Zip"
					value={to.zip}
					onChange={onAction}
					nestedkey="to"
					style={{ maxWidth: 100, marginLeft: 10 }}
				/>
			</div>
		);
	}
}

export default ToAddress;

ToAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};
