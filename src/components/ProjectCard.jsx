import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link, name }) => {
  return (
    <>
      <Col xs={12} md={6} xl={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>
              <a href={link}>{title}</a>
            </h4>
            {/* <span>{description}</span> */}
          </div>
        </div>
        <h3 className="text-center submitbutton">
          <a className="text-decoration-none" href={link}>
            <button>{name}</button>
            <h6 className="mt-0 mb-0 text-black">
              {description}
            </h6>
          </a>
        </h3>
      </Col>
    </>
  );
};

export default ProjectCard;
