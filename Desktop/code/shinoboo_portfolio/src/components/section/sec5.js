import React from "react";
import "../../styles/sec5.css";

import Sec6 from "./sec6";
import Sec7 from "./sec7";
import PublicBtn from "../common/project_btn";

import { projects } from "../../utils/text";

const Sec5 = ({ sec5Ref, sec6Ref, sec7Ref }, ref) => {
  return (
    <div className="box2">
      <section className="sec sec5" ref={sec5Ref}>
        <article className="sec5_inner">
          <h1>PROJECT</h1>
          <div className="project_box_world_wrap">
            {projects.map((project, index) => (
              <div key={project.id} className={`project_box_wrap${index + 1}`}>
                <p className="project_tit">
                  <span>{`0${project.id}`}</span>.{project.title}
                </p>
                <div className="project_box1 project flex">
                  <div className="box1_left flexCm">
                    <div className="project_img">
                      <img src={project.src} />
                    </div>
                  </div>
                  <div className="box1_right flexCm">
                    <div className="box1_right1 flexCm">
                      <div className="tit_arrow flex">
                        <h3>EXPLAIN</h3>
                      </div>
                      <div className="cont_wrap flex">
                        {project.explain.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}<br />
                          </React.Fragment>
                        ))}
                        <br />
                        {project.Period.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}<br />
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="box1_right2 flexCm">
                      <div className="tit_arrow">
                        <h3>VIEW MORE</h3>
                      </div>
                      <PublicBtn page_link={project.page_link} github_link={project.github_link} />
                    </div>
                    <div className="box1_right3 flexCm">
                      <div className="tit_arrow flex">
                        <h3>TECH STACK</h3>
                      </div>
                      <div className="hash_wrap">
                        <ul className="hash_box flexCm">
                          <li>{project.language}</li>
                          <li>{project.Library}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <Sec6 sec6Ref={sec6Ref} />
      <Sec7 sec7Ref={sec7Ref} />
    </div>
  );
};

export default React.forwardRef(Sec5);
