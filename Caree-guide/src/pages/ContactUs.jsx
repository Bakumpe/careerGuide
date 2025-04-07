import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";

function ContactUs() {
  return (
    <>
      <Header />

      <div className="hero bg-base-200 h-[40vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">CONTACT US</h1>
            <p className="py-6">Get In Touch With Us</p>
          </div>
        </div>
      </div>

      <div class="flex gap-[2rem] my-[2rem] justify-self-center ">
        {/* details capturing card */}
        <div className="card w-96 bg-base-100 card-xl shadow-sm bg-cyan-200 items-center self-center">
          <div className="card-body">
            <h2 className="card-title p-[1rem]">Share with us you details.</h2>

            <form>
              {/* username input */}
              <input
                type="input"
                className="input validator"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
              />
              <p className="validator-hint">
                Must be 3 to 30 characters
                <br />
                containing only letters, numbers or dash
              </p>

              {/* email input field */}
              <input
                className="input validator"
                type="email"
                required
                placeholder="mail@site.com"
              />
              <div className="validator-hint">Enter valid email address</div>
            </form>

            <div className="justify-end card-actions">
              <p className="validator-hint">Required</p>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
        </div>
        {/* location and details card */}
        <div>
          <div className=" w-96 shadow-sm">
            <figure className="px-10 pt-10 ">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl size-[20rem] w-[] "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
