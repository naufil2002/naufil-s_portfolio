import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading text-center" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar className="text-center"
        username="naufil2002"
        blockSize={15}
        blockMargin={9.5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;