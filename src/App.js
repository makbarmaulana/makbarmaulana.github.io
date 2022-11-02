import React from "react";

const App = () => {
	const mousePosition = (e) => {
		const cursor = document.querySelector(".cursor");
		const innerCursor = document.querySelector(".inner-cursor");
		const { clientX: x, clientY: y } = e;

		cursor.style.left = x + "px";
		cursor.style.top = y + "px";
		innerCursor.style.left = x + "px";
		innerCursor.style.top = y + "px";
	};

	window.addEventListener("mousemove", mousePosition);

	return (
		<div className="container">
			<div className="name">
				<span>M</span>
				<span>A</span>
				<span>K</span>
				<span>B</span>
				<span>A</span>
				<span>R</span>
				<span>M</span>
				<span>A</span>
				<span>U</span>
				<span>L</span>
				<span>A</span>
				<span>N</span>
				<span>A</span>
			</div>
			<div className="title">
				<span>&#8212;</span>
				<span>W</span>
				<span>E</span>
				<span>B</span>
				<span>&#x200A;</span>
				<span>D</span>
				<span>E</span>
				<span>V</span>
				<span>E</span>
				<span>L</span>
				<span>O</span>
				<span>P</span>
				<span>E</span>
				<span>R</span>
				<span>&#8212;</span>
			</div>
			<div className="cursor"></div>
			<div className="inner-cursor"></div>
		</div>
	);
};

export default App;
