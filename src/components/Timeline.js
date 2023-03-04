import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import "./Timeline.css";

export default function ColorsTimeline(props) {
  const { data, handler } = props;

  return (
    <Timeline position="alternate">
      {data.row.activities.map((activity) => {
        let start = `${activity.activityStart.startDate} , ${activity.activityStart.startTime}`;
        let end = `${activity.activityFinish.finishDate} , ${activity.activityFinish.finishTime}`;
        return (
          <TimelineItem
            className="timeline-item"
            onClick={() =>
              handler((prevState) => {
                return {
                  ...prevState,
                  activity: {
                    id: activity.activityCode,
                    start: start,
                    end: end,
                    message: activity.customerMessage,
                  },
                };
              })
            }
          >
            <TimelineSeparator>
              <TimelineDot
                variant={
                  data.activity.id === activity.activityCode
                    ? "filled"
                    : "outlined"
                }
                color={activity.status === "completed" ? "success" : "warning"}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{activity.activityCode}</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
