import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faFistRaised,
	faArrowsAlt,
	faLanguage,
	faCompressArrowsAlt
} from "@fortawesome/free-solid-svg-icons";
import MethodikDidaktikItem from "../MethodikDidaktikItem/MethodikDidaktikItem";
import Carousel from "react-bootstrap/Carousel";
import "./methodik-didaktik.css";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(faFistRaised, faArrowsAlt, faLanguage, faCompressArrowsAlt);

const MethodikDidaktik = props => {
	const { inhalt } = props;
	return (
		<section id="methodik-didaktik">
			<h2 className="methodik-didaktik-title">
				<span>Methodik</span>Didaktik
			</h2>
			<div className="methodik-didaktik-container">
				{inhalt.map(item => (
					<MethodikDidaktikItem item={item} />
				))}
			</div>
		</section>
	);
};

export default MethodikDidaktik;
