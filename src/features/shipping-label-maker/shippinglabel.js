import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
const styles = theme => ({
	root: {
		background: "#fff",
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
		color: "#000",
		height: 300,
		padding: "30px",
		margin: "0 auto",
		maxWidth: 500,
		marginTop: 100,
		border: "3px solid #000"
	},
	shipFrom: {
		fontSize: 14,
		marginLeft: 20
	},
	shipTo: {
		fontSize: 18,
		fontWeight: "bold",
		TextAlign: "center",
		marginLeft: 20
	},
	title: {
		fontSize: 12
	}
});
class ShippingLabel extends React.Component {
	render() {
		const { classes, wizardContext } = this.props;
		return (
			<Paper className={classes.root}>
				<div>
					<span className={classes.title}>ship from</span> <br />
					<div className={classes.shipFrom}>
						{wizardContext.from.name}
						<br />
						{wizardContext.from.street}
						<br />
						{wizardContext.from.city}
						{wizardContext.from.state}
						{wizardContext.from.zip}
					</div>
				</div>
				<hr />
				<div>
					<span className={classes.title}>ship to</span>
					<br />
					<div className={classes.shipTo}>
						{this.props.wizardContext.to.name}
						<br />
						{this.props.wizardContext.to.street}
						<br />
						{this.props.wizardContext.to.city}
						{this.props.wizardContext.to.state}
						{this.props.wizardContext.to.zip}
					</div>
				</div>
			</Paper>
		);
	}
}

export default withStyles(styles)(ShippingLabel);
