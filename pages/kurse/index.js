import Head from "next/head";
import { Component } from "react";
import "../../components/KursSeite/KursSeite";
import KursSeite from "../../components/KursSeite/KursSeite";

export default class Home extends Component {
	render() {
		return (
			<>
				<Head>
					<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
				</Head>
				<KursSeite />
			</>
		);
	}
}
