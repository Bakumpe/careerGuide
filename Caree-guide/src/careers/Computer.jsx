import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import CareerList from "../components/CareerList";

function Computer() {
  return (
    <>
      <Header />
      {/* <h1>Computer</h1> */}
      {/* <CareerList category="Computer" /> */}
      {/* Description section from strapi*/}
      <div class="justify-center bg-black p-[2rem]">
        <div class="mt-[4rem] bg-black">
          <div className="card lg:card-side bg-base-100 w-[80%] justify-self-center shadow-sm h-[10rem]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Career title</h2>
              <p>
                Description Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum a quas, hic deleniti error, odit beatae
                praesentium non officiis voluptatem ut quisquam nihil quaerat
                voluptates voluptatibus enim inventore adipisci esse.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Stories  */}
      <div class="justify-center mt-[2rem] bg-black p-[2rem] flex gap-[1rem] flex-wrap">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Article Title</h2>

            <p>Article description</p>
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Read more</div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Article Title</h2>

            <p>Article description</p>
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Read more</div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Article Title</h2>

            <p>Article description</p>
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Read more</div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Article Title</h2>

            <p>Article description</p>
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Read more</div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Article Title</h2>

            <p>Article description</p>
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Read more</div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related career Coaches sections  */}
      <div class="justify-center mt-[2rem] bg-black p-[2rem] flex gap-[1rem] flex-wrap">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coach name</h2>
            <p>BIO</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coach name</h2>
            <p>BIO</p>
          </div>
        </div>{" "}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coach name</h2>
            <p>BIO</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coach name</h2>
            <p>BIO</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coach name</h2>
            <p>BIO</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Computer;
