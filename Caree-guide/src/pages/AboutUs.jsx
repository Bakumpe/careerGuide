import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import { MantineProvider, Image } from "@mantine/core";

function AboutUs() {
  return (
    <>
      <Header />
      <MantineProvider>
        <div
          className="hero h-[80vh]"
          style={{
            backgroundImage:
              "url(https://cdni.iconscout.com/illustration/premium/thumb/career-guidance-illustration-download-in-svg-png-gif-file-formats--vocational-training-professional-development-educational-pathways-education-pack-school-illustrations-9506611.png?f=webp)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div>
              <h1 className="mb-5 text-6xl font-bold text-white">AboutUs</h1>
              <p className="mb-5 text-xl font-semibold text-white leading-[2.5rem]">
                Online Career Guidance provides individual, comprehensive career
                guidance, based on the learners/students interests, skills and
                personality characteristics. Over the years, we have refined the
                product which, together with the enviable results we have
                achieved, ensures that high school learners and students will
                follow a career path that is best suited to their particular
                career orientation. Helping to make informed, realistic choices
                to get a head start in life.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        {/* Misson and values sections */}
        <div class="mt-[1rem] justify-items-center ">
          <div class="card mt-[1rem] bg-primary text-primary-content justify-self-center text-center justify-items-center justify-items-center  w-[80%]">
            <div class="card-body">
              <h2 class="card-title text-black justify-center text-center text-3xl ">
                CORE VALUES
              </h2>
              <div class="text-xl text-black">
                <p>
                  <b>Integrity: </b>
                  Acting ethically and transparently in all business dealings,
                  prioritizing doing the right thing over personal gain. It
                  means being accountable and following through with decisions
                  made, even if no one is around to see it.
                </p>
                <p>
                  <b> Respect: </b>
                  Going beyond simply being polite, respect means treating all
                  employees, clients, customers, and stakeholders with dignity
                  and worth – no matter their background, position, or opinions.
                  It is acknowledging the unique contributions each individual
                  makes in furthering the goals of the organization.
                </p>
                <p>
                  <b>Respect: </b>
                  Going beyond simply being polite, respect means treating all
                  employees, clients, customers, and stakeholders with dignity
                  and worth – no matter their background, position, or opinions.
                  It is acknowledging the unique contributions each individual
                  makes in furthering the goals of the organization.
                </p>
              </div>
            </div>
          </div>

          <div class="card mt-[1rem]  bg-primary text-primary-content  w-[80%]">
            <div class="card-body">
              <h2 class="card-title  text-black justify-center text-3xl">
                MISSION
              </h2>
              <p class="text-xl text-black">
                Going beyond simply being polite, respect means treating all
                employees, clients, customers, and stakeholders with dignity and
                worth – no matter their background, position, or opinions. It is
                acknowledging the unique contributions each individual makes in
                furthering the goals of the organization.
              </p>
            </div>
          </div>
        </div>

        {/* testimonials card - strapi*/}
        <div class="justify-center  p-[2rem] justify-items-center mt-[3rem] text-2xl">
          <h1 class="text-black">TESTIMONIALS</h1>
          <div class="flex gap[2rem] flex-wrap">
            <div class="card bg-base-100 w-96 shadow-sm">
              <figure class="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">NAME</h2>
                <h3>Title</h3>
                <p>Comment</p>
              </div>
            </div>
          </div>
        </div>

        {/* team - Strapi*/}

        <div class="justify-center  p-[2rem] justify-items-center mt-[3rem] text-2xl">
          <h1>MEET OUR TEAM</h1>
          <div class="flex gap[2rem] flex-wrap">
            <div class="card w-96 bg-base-100 card-lg shadow-sm m-[2rem]">
              <div class="card-body">
                <div class="avatar">
                  <div class="w- h-40 border-4 border-indigo-500  rounded">
                    <img
                      class="w-[] size-90 border-4 border-purple-500 "
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <h2 class="card-title">NAME</h2>
                <h3>Experience</h3>
                <p>Bio</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs - Strapi */}

        <div class="   p-[2rem]  mt-[3rem] ">
          <h1 class="text-2xl  text-center p-[1rem] font-bold">FAQS</h1>
          <div class="flex gap[2rem] flex-wrap">
            <div class="bg-base-100 border-base-300 collapse border">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-[blue]/5 peer-checked:text-secondary-content">
                <p class="text-xl text-black font-semibold ">QUESTION 1</p>
              </div>
              <div class="collapse-content bg-primary font-semibold text-primary-content peer-checked:bg-[blue]/5 peer-checked:black">
                <p>ANSWER CONTENT</p>
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
      <Footer />
    </>
  );
}

export default AboutUs;
