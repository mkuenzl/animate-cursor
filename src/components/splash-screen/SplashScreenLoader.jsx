import React, { Component } from "react";
import "./SplashScreen.css";

// function LoadingMessage() {
// 	return (
// 		<div className="splash-screen">
// 			<div className="loading-dot">.</div>
// 		</div>
// 	);
// }

function LoadingMessage() {
	return (
		<div className="wrap">
			<div className="cube">
				<div className="front">FRONT</div>
				<div className="back">BACK</div>
				<div className="top">TOP</div>
				<div className="bottom">BOTTOM</div>
				<div className="left">LEFT</div>
				<div className="right">RIGHT</div>
			</div>
		</div>
	);
}

function withSplashScreen(WrappedComponent) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				loading: true,
			};
		}

		componentDidMount() {
			try {
				setTimeout(() => {
					this.setState({
						loading: false,
					});
				}, 1500);
			} catch (err) {
				console.log(err);
				this.setState({
					loading: false,
				});
			}
		}

		render() {
			// while checking user session, show "loading" message
			if (this.state.loading) return LoadingMessage();

			// otherwise, show the desired route
			return <WrappedComponent {...this.props} />;
		}
	};
}

export default withSplashScreen;
