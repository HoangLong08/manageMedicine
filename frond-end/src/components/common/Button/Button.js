import React from 'react'

import "./Button.css";

function Button({ content, background, color, handleClick }) {
	return (
		<button
			type="button"
			style={{ backgroundColor: background, color: color && color }}
			className="wrapper-btn"
			onClick={handleClick}
		>
			{content}
		</button>
	)
}

export default Button
