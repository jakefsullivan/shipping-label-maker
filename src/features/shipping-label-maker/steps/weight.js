import React from "react";
import PropTypes from "prop-types";

class Weight extends React.Component {
	render() {
		const {
			onAction,
			wizardContext: { weight }
		} = this.props;
		return (
			<div>
				<p style={{ margin: "0px 0px 3px 0px" }}>Enter Weight:</p>
				<input
					name="weight"
					type="text"
					placeholder="weight"
					value={weight}
					onChange={onAction}
				/>
			</div>
		);
	}
}
export default Weight;

Weight.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};
