import Head from "next/head";
import { Component } from "react";
import StartSeite from "../components/StartSeite/StartSeite";

export default class Home extends Component {
	render() {
		return (
			<>
				<Head>
					<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
				</Head>
				<StartSeite />
			</>
		);
	}
}
