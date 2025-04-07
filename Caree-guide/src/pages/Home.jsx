import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import "../styles/home.css";
import { MantineProvider } from "@mantine/core";

function Home() {
  return (
    <>
      <Header />
      <MantineProvider>
        <div class="hero h-[35rem] bg-linear-to-r from-cyan-200 to-blue-400  mt-[%]">
          <div class="hero-content text-center flex gap-[3rem]">
            <iframe
              src="https://www.youtube.com/embed/Tnt0XBth5Jw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              class="rounded-xl w-[25rem] h-[40vh]"
            />
            <div class="max-w-md">
              <h1 class="text-5xl font-extrabold">
                Discover Your Career Jounery.
              </h1>
              <p class="py-6 text-xl">
                Are you a student searching for the perfect career direction? A
                recent graduate unsure of your next steps? A working
                professional seeking to advance your career? Or perhaps an
                executive ready to re-enter the workforce after a career break?
              </p>
              <a href="">
                <button class="btn btn-primary">Learn More</button>
              </a>
              <Link></Link>
            </div>
          </div>
        </div>

        <div class="flex w-[90%] ml-[5%] gap-[1.5rem] my-[5rem] justify-center">
          {/* CARD ONE */}
          <div class="card bg-base-100 w-96 shadow-sm">
            <h1 class="text-[1.5rem] text-center p-[1rem] font-bold">
              Choosing Your Path.
            </h1>
            <figure>
              <img
                class="w-md"
                src="https://www.libertystaffing.ca/hubfs/5_Ways_to_Discover_Your_Ideal_Career.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Early Career Planning.</h2>
              <p>
                Starting a new career and planning out your future can be a fun,
                exciting time of life. Whether you are entering the adult world
                for the first time or are starting down a new path after many
                years in a different field, getting started may seem like a
                daunting task, but with a few smart steps, you can put yourself
                in a position of advantage. Read on as we explain how to build
                your resume and decide on a career path.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Link to="/login">Register Here</Link>
                </button>
              </div>
            </div>
          </div>

          {/* CARD TWO */}
          <div class="card bg-base-100 w-96 shadow-sm ">
            <h1 class="text-[1.5rem] text-center p-[1rem] font-bold">
              Upgrade Your Career.
            </h1>
            <figure>
              <img
                class="w-md"
                src="https://www.ere.net/_next/image?url=https%3A%2F%2Fapi.eremedia.com%2Fwp-content%2Fuploads%2F2023%2F04%2Fbigstock-Create-Stair-To-Success-Growt-466731595.jpg&w=3840&q=75"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Mid Career Change</h2>
              <p>
                If you’ve reached the mid–career level, you’ve worked for around
                10 years, if not longer. It’s not unreasonable that you may feel
                a desire for change. … Often, mid–career professional workers
                are promoted into management positions that are less personally
                satisfying than when they worked directly on projects.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Link to="/login">Register Here</Link>
                </button>
              </div>
            </div>
          </div>

          {/* CARD THREE */}
          <div class="card bg-base-100 w-96 shadow-sm">
            <h1 class="text-[1.5rem] text-center p-[1rem] font-bold">
              Post Study Plan.
            </h1>
            <figure>
              <img
                class="w-md"
                src="https://myfuture.edu.au/images/default-source/social-icons/myfuture-home-og.png?sfvrsn=19e15d8_0"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Skills & Career Pathways.</h2>
              <p>
                While graduation signifies the end of an era many students can
                be left wondering, ‘what’s next?’ There are a number of routes
                you can take after university – and everyone’s journey will be
                different. You could search for a graduate job, enrol on a
                postgraduate course or set up your own business. If you’d like
                to gain more experience before making a decision you could
                volunteer, intern or travel the world on a gap year.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">
                  <Link to="/login">Register Here</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-[2rem] justify-center bg-[#dc143d]/10 p-[1.5rem] rounded-[1rem] w-[80%] ml-[10%]">
          <button class="btn btn-neutral text-[1rem] font-bold hover:btn-primary ">
            <Link to="/computer">Computer</Link>
          </button>
          <button class="btn btn-neutral text-[1rem] font-bold hover:btn-primary">
            <Link to="/health">Health</Link>
          </button>
          <button class="btn btn-neutral text-[1rem] font-bold hover:btn-primary">
            <Link to="/business">Business</Link>
          </button>
          <button class="btn btn-neutral text-[1rem] font-bold hover:btn-primary">
            <Link to="/entertainment">Entertainment</Link>
          </button>
          <button class="btn btn-neutral text-[1rem] font-bold hover:btn-primary">
            <Link to="/sports">Sports</Link>
          </button>
        </div>

        <div class="flex w-[90%] gap-[3rem] ml-[5%] my-[5%]">
          <div class="card card-side bg-base-100 shadow-sm w-[50%] ">
            <figure>
              <img
                class="w-[40%]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXwODRFXiEUDHeSZVt7QbddydDJTMYf1X2g&s"
                alt="Movie"
              />
            </figure>
            <div class="card-body w-[]">
              <h2 class="card-title">Michael Jordan</h2>
              <p>
                {" "}
                "I've missed more than 9,000 shots in my career. I've lost
                almost 300 games. 26 times, I've been trusted to take the
                game-winning shot and missed. I've failed over and over and over
                again in my life. And that is why I succeed." —
              </p>
            </div>
          </div>

          <div class="card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1155421342.jpg?crop=1xw:1.0xh;center,top&resize=640:*"
                alt="Movie"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Serena Williams</h2>
              <p>
                {" "}
                "It doesn't matter what your background is or where you come
                from if you have dreams and goals, thats all that matters." —
              </p>
            </div>
          </div>
        </div>
      </MantineProvider>
      <Footer />
    </>
  );
}

export default Home;
