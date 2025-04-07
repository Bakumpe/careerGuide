import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";

function CareerCoach() {
  return (
    <>
      <Header />
      {/*  Reasons to be a coach */}
      <div class="h-[75vh] md:h-[65vh] bg-linear-to-r from-blue-400 to-cyan-200 text-center content-center justify-items-center">
        <div>
          <h1 class="md:text-[2.5rem] mt-[3rem] font-bold md:p-[2rem]">Why be a Coach?</h1>
        </div>
        <div>
          <ul className="timeline md:timeline-vertical p-[2rem] justify-center w-[40%] ml-[30%]">
            <li>
              <div class="timeline-start timeline-box font-bold md:text-[1rem]">
                Empower Your Friends & Family By Sharing Free Quality Education
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
              <div className="timeline-end timeline-box  font-bold md:text-[1rem]">
                Teach On Alison, Earn Money & Inspire Millions
              </div>
              <hr className="bg-primary" />
            </li>

            <li>
              <hr className="bg-primary" />
              <div className="timeline-start timeline-box font-bold md:text-[1rem]">
                Become A Member Of The Alison Affiliate Programme
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
          </ul>
        </div>
      </div>

      {/* card to use for timeline */}
      {/* STEPS TO BECOME A COACH */}

      <div class="w-[90%] ml-[5%] justify-center justify-items-center p-[2rem] ">
        <h1 class="font-bold text-[2rem] p-[1rem]">Becoming A Coach.</h1>
        {/* steps */}
        <div class="flex gap-[1rem] flex-wrap justify-center">
          {/* step 1 */}
          <div >
            <div className="card bg-base-100 w-96 shadow-sm h-70 p-[2rem] ">
              <div className="card-body">
                <h1 className="card-title text-xl font-bold text-[#143D60]">
                  STEP 1
                </h1>
                <h2 class="text-xl">Create an Account.</h2>
                <p>
                  Set up and account you will use to share information and
                  differnt media content
                </p>
              </div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>

          {/* step 2 */}
          <div>
            <div className="card bg-base-100 w-96 shadow-sm h-70 p-[2rem]">
              <div className="card-body">
                <h1 className="card-title text-xl font-bold text-[#143D60]">
                  STEP 2
                </h1>
                <h2 class="text-xl">Fill in the Coaches Eligibity form.</h2>
                <p>
                  This allows us to assess our coaches inorder to establish fill
                  rights.
                </p>
              </div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>

          {/* step 3 */}

          <div>
            <div className="card bg-base-100 w-96 shadow-sm h-70 p-[2rem]">
              <div className="card-body">
                <h1 className="card-title text-xl font-bold text-[#143D60]">
                  STEP 3
                </h1>
                <h2 class="text-xl">Approval and System Access</h2>
                <p>
                  Upon approval, you will have full rights to access the system
                  and contribute to empowering more people with your knowledge.
                </p>
              </div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* coach profiles content from strapi*/}

      <div class="p-[2rem] justify-center flex flex-wrap bg-[#FFF5E4]/40 mb-[2rem]">
        {/* coach profile 1 */}
        <div className="stats shadow m-[1rem] bg-white">
          <div className="stat">
            <div className="stat-value">
              <h1>NAME</h1>
            </div>
            <div className="stat-title">
              <h2 class="text-xl font-bold">Title</h2>
            </div>
            <div className="stat-desc text-secondary">
              <p class="text-[#27667B] font-bold"> BIO</p>
            </div>
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold">Following</div>
            <div className="stat-value text-primary ">25.6K</div>
            <div className="stat-desc font-bold">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold">Content Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc font-bold">21% more than last month</div>
          </div>
        </div>

        {/* coach profile 2 */}
        <div className="stats shadow m-[1rem] bg-white">
          <div className="stat">
            <div className="stat-value">
              <h1>NAME</h1>
            </div>
            <div className="stat-title">
              <h2 class="text-xl font-bold">Title</h2>
            </div>
            <div className="stat-desc text-secondary">
              <p class="text-[#27667B] font-bold"> BIO</p>
            </div>
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold">Following</div>
            <div className="stat-value text-primary ">25.6K</div>
            <div className="stat-desc font-bold">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold">Content Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc font-bold">21% more than last month</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default CareerCoach;
