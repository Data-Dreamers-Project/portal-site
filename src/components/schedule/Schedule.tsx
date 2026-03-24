import type { FC } from "react";
import "./Schedule.css";
import { EVENTS } from "~/constants/events";

export const Schedule: FC = () => {
	return (
		<div className="wrapper">
			<div className="timeline">
				<svg className="arrow pcArrow" viewBox="0 0 1000 40">
					<title>横方向のスケジュール矢印</title>
					<line
						x1="10"
						y1="20"
						x2="900"
						y2="20"
						stroke="#333"
						strokeWidth="8"
					/>
					<polygon points="940,20 900,5 900,35" fill="#333" />
				</svg>

				<svg className="arrow spArrow" viewBox="0 0 40 1000">
					<title>縦方向のスケジュール矢印</title>
					<line
						x1="20"
						y1="10"
						x2="20"
						y2="900"
						stroke="#333"
						strokeWidth="8"
					/>
					<polygon points="20,940 5,900 35,900" fill="#333" />
				</svg>

				<div className="items">
					{EVENTS.map((event) => (
						<div className="item" key={event.id}>
							<div
								className="box"
								data-date={event.date}
								data-place={event.location}
							>
								<div className="boxLine">{event.title}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
