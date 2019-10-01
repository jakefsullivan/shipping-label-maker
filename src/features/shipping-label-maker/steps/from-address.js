import React from "react";
import PropTypes from "prop-types";

class FromAddress extends React.Component {
	render() {
		const {
			onAction,
			wizardContext: { from }
		} = this.props;

		return (
			<div>
				<p style={{ margin: "0px 0px 3px 0px" }}>Shipping From:</p>
				<input
					className="name"
					name="name"
					type="text"
					placeholder="Name"
					value={from.name}
					nestedkey="from"
					onChange={onAction}
					style={{ minWidth: 400 }}
				/>
				<br />
				<br />
				<input
					id="street"
					name="street"
					type="text"
					placeholder="Street Address"
					value={from.street}
					onChange={onAction}
					nestedkey="from"
					style={{ minWidth: 500 }}
				/>
				<br />
				<br />
				<input
					id="city"
					name="city"
					type="text"
					placeholder="City"
					value={from.city}
					onChange={onAction}
					nestedkey="from"
					style={{ maxWidth: 150 }}
				/>
				<input
					id="state"
					name="state"
					type="text"
					placeholder="State"
					value={from.state}
					onChange={onAction}
					nestedkey="from"
					style={{ maxWidth: 75, marginLeft: 10 }}
				/>
				<input
					id="zip"
					name="zip"
					type="zip"
					placeholder="Zip"
					value={from.zip}
					onChange={onAction}
					nestedkey="from"
					style={{ maxWidth: 100, marginLeft: 10 }}
				/>
			</div>
		);
	}
}
export default FromAddress;

FromAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};
