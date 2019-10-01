import React from "react";

const style = (num, length) => {
	return {
		width: ((num - 1) / (length - 1)) * 100 + "%",
		height: 5,
		backgroundColor: "rgba(255,255,0, .5)"
	};
};

const ProgressBar = props => (
	<div>
		<div
			style={{
				width: props.totalSteps * 100,
				border: "1px solid #fff",
				height: 5,
				background: "rgba(255,255,255, .5)"
			}}
		>
			<div style={style(props.step, props.totalSteps)}></div>
		</div>
	</div>
);

export default ProgressBar;
