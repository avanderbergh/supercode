import Head from "next/head";
import { Component } from "react";
import ZukunftChancenSeite from "../../components/ZukunftChancenSeite/ZukunftChancenSeite";

export default class Home extends Component {
	render() {
		return (
			<>
				<Head>
					<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
				</Head>
				<ZukunftChancenSeite />
			</>
		);
	}
}
