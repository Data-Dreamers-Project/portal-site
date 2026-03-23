const SpeakerDeck = () => {
	return (
		<iframe
			className="speakerdeck-iframe"
			src="https://speakerdeck.com/player/5834b5d5a3454f39a0134bbc0f1ce72f?slide=1"
			title="Data Dreamers 紹介資料"
			allowFullScreen
			style={{
				border: "0px",
				background: "padding-box padding-box rgba(0, 0, 0, 0.1)",
				margin: "0px",
				padding: "0px",
				borderRadius: "6px",
				boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
				width: "100%",
				height: "auto",
				aspectRatio: "16 / 9",
			}}
			data-ratio="1.4177215189873418"
		/>
	);
};

export default SpeakerDeck;
