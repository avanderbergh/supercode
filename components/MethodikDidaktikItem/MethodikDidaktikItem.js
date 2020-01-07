import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MethodikDidaktikItem.css";

const MethidikDidaktikItem = props => {
	const { headline, text, icon } = props.item;
	return (
		<article className="methodik-didaktik-item">
			<FontAwesomeIcon color="#47d7ac" className="icon" icon={icon} size="3x" />
			<h4>{headline}</h4>
			<p>{text}</p>
		</article>
	);
};

export default MethidikDidaktikItem;
