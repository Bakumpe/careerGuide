import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TodoList from "../components/TodoList";
// import "../styles.css"; // Uncomment and fix if you need a stylesheet

function Profile() {
  return (
    <>
      <Header />
      {/* Client profile */}
      <div className="flex w-[95%] flex-col lg:flex-row mt-[1rem] mb-[3rem] ml-[2.5%]">
        <div className="card bg-base-300 rounded-box grid grow place-items-center w-[50%] content-start gap-[1rem]">
          {/* Profile details */}
          <div className="stats shadow">
            <div className="stat bg-white">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-[55%] border rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile" />
                  </div>
                </div>
              </div>
              <div className="stat-value text-[2rem]">
                <h1>NAME</h1>
              </div>
              <div className="stat-title">
                <h2 className="text-[1.5rem]">Title</h2>
              </div>
              <div className="stat-desc text-xl"></div>
            </div>
          </div>
          <div className="h-[10rem] border text-center text-xl w-[80%] font-bold leading-[1.5rem]">
            <h2>Personal Details</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              illum distinctio doloribus dignissimos veritatis soluta sit
              nostrum esse quasi, provident ex error? Eius dolore suscipit vel
              magni similique est ipsam.
            </p>
          </div>
        </div>

        <div className="divider lg:divider-horizontal">or</div>

        {/* Favorites section */}
        <div className="card bg-base-300 rounded-box grid grow place-items-center mb-[2rem]">
          <h1 className="text-xl font-bold">FAVORITES</h1>
          <div className="flex flex-col">
            <div className="card bg-base-300 rounded-box grid place-items-center">
              <div className="w-[90%]">
                <ul className="list bg-base-100 rounded-box shadow-md">
                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    Most played songs this week
                  </li>
                  <li className="list-row">
                    <div>
                      <img
                        className="size-10 rounded-box"
                        src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                        alt="Song cover"
                      />
                    </div>
                    <div>
                      <div>Dio Lupa</div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        Remaining Reason
                      </div>
                    </div>
                    <p className="list-col-wrap text-xs">
                      "Remaining Reason" became an instant hit, praised for its
                      haunting sound and emotional depth. A viral performance
                      brought it widespread recognition, making it one of Dio
                      Lupa’s most iconic tracks.
                    </p>
                    <button className="btn btn-square btn-ghost">
                      <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M6 3L20 12 6 21 6 3z"></path>
                        </g>
                      </svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </g>
                      </svg>
                    </button>
                  </li>
                  {/* Add other list items similarly */}
                </ul>
              </div>
            </div>
            <div className="divider">or</div>
            <div className="card bg-base-300 rounded-box grid place-items-center mb-[2rem]">
              <h1 className="text-xl font-bold">RECENT ACTIVITY</h1>
              <div className="w-[90%]">
                <ul className="list bg-base-100 rounded-box shadow-md">
                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    Most played songs this week
                  </li>
                  <li className="list-row">
                    <div>
                      <img
                        className="size-10 rounded-box"
                        src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                        alt="Song cover"
                      />
                    </div>
                    <div>
                      <div>Dio Lupa</div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        Remaining Reason
                      </div>
                    </div>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] ml-[5%] mb-[1rem]">
        <div className="flex flex-col lg:flex-row">
          <div className="card bg-base-300 rounded-box grid mb-[3rem] p-[1.5rem] grow place-items-center w-[50%]">
            <h1 className="text-xl font-bold">SELECTED COACHES</h1>
            <div className="w-[90%]">
              <ul className="list bg-base-100 rounded-box shadow-md place-items-center">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Most played songs this week
                </li>
                <li className="list-row">
                  <div className="text-4xl font-thin opacity-30 tabular-nums">
                    01
                  </div>
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                      alt="Coach"
                    />
                  </div>
                  <div className="list-col-grow">
                    <div>Dio Lupa</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Remaining Reason
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#dc143c]/80 grid grow place-items-center w-[50%] mx-[2rem]">
            <h1 className="text-xl font-bold">CAREER CHECKLIST</h1>
            <div className="w-[90%] p-[1.5rem]">
              <ul className="timeline timeline-vertical lg:timeline-horizontal">
                <li>
                  <div className="timeline-start timeline-box font-bold">
                    Task one
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
                {/* Add other timeline items similarly */}
              </ul>
            </div>

            <div>
              <div className="card card-dash bg-base-100 w-96 mb-[5%]">
                <div className="card-body">
                  <h2 className="card-title font-bold">TASKS</h2>
                  <TodoList />
                  <p>Tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;