import React, { useState } from 'react';
import "./jobs.css";
import { Link } from "react-router-dom";
import Job from "./../../Assets/jobs.json";
import Filter from '../filter/Filter';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


const Jobs = () => {
    const [filteredJobs, setFilteredJobs] = useState([...Job]);
    const [searchterm, setSearchTerm] = useState("");
    const [active, setActive] = useState(false);


    const searchEvent = (event) => {
        const data = event.target.value;
        setSearchTerm(data);
        if (searchterm !== "" || searchterm.length > 2) {
          const filterData = Job.filter((item) => {
            if (item) {
              return Object.values(item)
                .join("")
                .toLowerCase()
                .includes(searchterm.toLowerCase());
            } else {
              return 0;
            }
          });
          setFilteredJobs(filterData);
        } else {
          setFilteredJobs(Job);
        }
      };

      function handleJobFilter(event) {
        const value = event.target.innerText;
        event.preventDefault();
        setFilteredJobs(
          Job.filter((job) => {
            return job.role === value;
          })
        );
      }

      function saveClick(id, logo, company, position, location, posted) {
        window.localStorage.setItem(
          "Job",
          JSON.stringify(id, logo, company, position, location, posted)
        );
      }

    return <div className="jobs-for-you">
    <div className="job-background">
      <div className="title">
        <h2>Our Jobs</h2>
      </div>
    </div>
    <div className="job-section">
      <div className="job-page">
        {filteredJobs.map(
          ({ id, logo, company, position, location, posted, role }) => {
            return (
              <div className="job-list">
                <div className="job-card">
                  <div className="job-name">
                    <img
                      src={
                      require(`../../Assets/images/${logo}`)
                      }
                      alt="logo"
                      className="job-profile"
                    />
                    <div className="job-detail">
                      <h4>{company}</h4>
                      <h3>{position}</h3>
                      <div className="category">
                        <p>{location}</p>
                        <p>{role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-button">
                    <div className="job-posting">
                      <Link to="/apply-jobs">Apply Now</Link>
                    </div>  <div className="save-button">
                          <Link
                            to="/Jobs"
                            onClick={() => {
                              saveClick(
                                {
                                  id,
                                  logo,
                                  company,
                                  position,
                                  location,
                                  posted,
                                },
                                setActive(!active)
                              );
                            }}
                          >
                            {JSON.parse(localStorage.getItem("Job"))?.id ===
                            id ? (
                              <AiFillHeart />
                            ) : (
                              <AiOutlineHeart />
                            )}
                          </Link>
                        </div>

                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <Filter
            setFilteredJobs={setFilteredJobs}
            searchEvent={searchEvent}
            handleJobFilter={handleJobFilter}
          />
    </div>
  </div>;
}



export default Jobs;