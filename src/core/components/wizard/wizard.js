import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import ProgressBar from "../progress-bar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {calculateShippingCost} from "../../../utils"

const styles = theme => ({
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
		color: "white",
		height: 300,
		padding: "30px",
		margin: "0 auto",
		maxWidth: 500,
		marginTop: 100,
		border: "3px solid #000"
	},
	div: {
		width: "100%"
	}
});

class Wizard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			wizardContext: this.props.wizardContext
		};
		this.handleNestedObjectChange = this.handleNestedObjectChange.bind(
			this
		);
		this.handleChange = this.handleChange.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	handleNestedObjectChange = event => {
		const key = event.target.getAttribute("name"),
			nestedkey = event.target.getAttribute("nestedkey"),
			value = event.target.value;
		this.setState(prevState => ({
			...prevState,
			wizardContext: {
				...prevState.wizardContext,
				[nestedkey]: {
					...prevState.wizardContext[nestedkey],
					[key]: value
				}
			}
		}));
	};

	handleChange = event => {
		const key = event.target.getAttribute("name"),
			value = event.target.value;
		this.setState(prevState => ({
			...prevState,
			wizardContext: {
				...prevState.wizardContext,
				[key]: value
			}
		}));
	};

	handleOptionChange = event => {
		const key = event.target.id,
			value = event.target.value;
		this.setState(prevState => ({
			...prevState,
			wizardContext: {
				...prevState.wizardContext,
				[key]: value
			}
		}));
	};

	handleComplete = () => {
		this.props.onComplete(this.state.wizardContext);
	};

	render() {
		const shippingCost = calculateShippingCost(this.state.wizardContext.weight, this.state.shippingOption);

		const { Header } = this.props;
		const { step } = this.state;

		const StepOne = this.props.steps[0];
		const StepTwo = this.props.steps[1];
		const StepThree = this.props.steps[2];
		const StepFour = this.props.steps[3];
		const StepFive = this.props.steps[4];
		const { classes } = this.props;
		return (
			<div>
				<Paper className={classes.root}>
					<Header />
					<ProgressBar
						step={step}
						totalSteps={this.props.steps.length}
					/>
					<br />
					{this.state.step === 1 ? (
						<StepOne
							wizardContext={this.state.wizardContext}
							onAction={this.handleNestedObjectChange}
						/>
					) : null}
					{this.state.step === 2 ? (
						<StepTwo
							wizardContext={this.state.wizardContext}
							onAction={this.handleNestedObjectChange}
						/>
					) : null}
					{this.state.step === 3 ? (
						<StepThree
							wizardContext={this.state.wizardContext}
							onAction={this.handleChange}
						/>
					) : null}
					{this.state.step === 4 ? (
						<StepFour
							wizardContext={this.state.wizardContext}
							onAction={this.handleOptionChange}
						/>
					) : null}

					{this.state.step === 5 ? (
						<StepFive
							wizardContext={this.state.wizardContext}
							shippingCost={shippingCost}
						/>
					) : null}

					<br />

					<Grid container spacing={3}>
						<Grid item xs={12}>
							<ButtonGroup fullWidth>
								<Button
									onClick={this.prevStep}
									disabled={this.state.step === 1}
								>
									Previous
								</Button>
								<Button
									onClick={this.nextStep}
									disabled={this.state.step === 5}
								>
									Next
								</Button>
								<Button
									onClick={this.handleComplete}
									disabled={this.state.step !== 5}
								>
									Generate Label
								</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Paper>
			</div>
		);
	}
}
export default withStyles(styles)(Wizard);

Wizard.propTypes = {
	Header: PropTypes.func.isRequired,
	steps: PropTypes.array.isRequired,
	wizardContext: PropTypes.object.isRequired,
	onComplete: PropTypes.func.isRequired
};
