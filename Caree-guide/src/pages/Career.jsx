import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer"; // Fixed typo in import (footer -> Footer)
import { Link } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import useFetchProperties from "../hook/fetchCareerData"; // Ensure this path is correct
import config from "../.config"; // Ensure this file exists

function Career() {
  const URL = `${config.apiBackend}/api/news`;
  const { newsFeed, loading, error } = useFetchProperties(URL);
  const news = newsFeed?.data || []; // Safely extract news data

  console.log(newsFeed); // For debugging

  // Early returns for loading, error, and invalid data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!Array.isArray(news)) return <p>Unexpected Data Format!</p>;

  return (
    <>
      <Header />
      <MantineProvider>
        {/* Step of career discovery */}
        <div className="bg-gradient-to-r from-blue-400 to-cyan-200 text-center">
          <div className="p-[2rem]">
            <h1 className="text-[2.5rem] font-bold p-[2rem]">
              Building your Career.
            </h1>
            <ul className="timeline timeline-vertical p-[1rem]">
              <li>
                <div className="timeline-start timeline-box text-xl">
                  Assess your current level.
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-xl">
                  Personal awareness. Identify your strong abilities
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start timeline-box text-xl">
                  Find the career that suits you.
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box text-xl">
                  Create a career path chart and track your milestones.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box text-xl">
                  Apply for work with a job-winning resume.
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* News feed from backend */}
        <div className="flex flex-wrap my-[2rem] w-[90%] ml-[5%] justify-center">
          {news.map((item) => (
            <div
              key={item.id}
              className="card bg-[#dc143c]/85 w-96 shadow-sm p-[2rem] mx-[1rem] my-[1rem] text-white"
            >
              <figure>
                <img
                  src={
                    item.image ||
                    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  }
                  alt={item.newsfeed_title || "News"}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">
                  {item.newsfeed_title || "Newsfeed Title"}
                </h2>
                <p>{item.description || "News feed description."}</p>
              </div>
              <Link to={`/news/${item.id}`}> {/* Dynamic link example */}
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <div className="card text-primary-content w-[70%] ml-[15%] my-[2rem] text-center p-[2rem]">
            <h1 className="card-title text-center justify-center text-[2rem]">
              In-demand Skills
            </h1>
            <p className="text-xl">
              Upskill in business analytics, health care, graphic design,
              management, and more
            </p>
            <div className="card-body">
              <div className="card bg-base-100 image-full shadow-sm justify-center">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Skills"
                  />
                </figure>
                <div className="card-body p-[3rem]">
                  <div className="flex flex-wrap gap-[1rem] justify-center">
                    <Link to="/skills/computer">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Computer
                      </button>
                    </Link>
                    <Link to="/skills/sales">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Sales
                      </button>
                    </Link>
                    <Link to="/skills/caregiving">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Caregiving
                      </button>
                    </Link>
                    <Link to="/skills/law">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Law
                      </button>
                    </Link>
                    <Link to="/skills/nutrition">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Nutrition
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
      <Footer />
    </>
  );
}

export default Career;