import React from 'react';
import "./filter.css";

const Filter = ({searchEvent, handleJobFilter}) => {
    return <div className="filter-page">
    <div className="search-box">
      <div className="search">
        <h3>Search Jobs</h3>
        <div className="job-search">
          <input
            type="text"
            className="search-term"
            placeholder="Search Here"
            onChange={searchEvent}
          />
        </div>
      </div>
    </div>

    <div className="filter">
            <div className="job-category">
              <h4>Categories</h4>
              <ul>
                <li onClick={handleJobFilter}>Frontend</li>
                <li onClick={handleJobFilter}>Backend</li>
                <li onClick={handleJobFilter}>Devops</li>
                <li onClick={handleJobFilter}>Full Stack</li>
                <li onClick={handleJobFilter}>Digital Marketing</li>
              </ul>
            </div>
          </div>
  </div>;
}



export default Filter;