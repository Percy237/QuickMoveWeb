import heroImage from "../assets/hero-image.png";

function LandingPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:flex lg:flex">
      <div className="w-full mt-9 md:w-1/2 flex justify-center items-center">
        <div className="w-full flex flex-col items-center bg-white px-10">
          <h2 className="text-center lato-regular font-semibold text-2xl mb-4">
            Welcome to Your Relocation Service
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl">
            Our platform connects you with reliable logistic providers offering
            local, long-distance, and specialty moving services. Simplify your
            moving process with easy booking, management, and execution.
          </p>

          <a href="https://expo.dev/accounts/tpercy/projects/QuickMove/builds/427ff989-c79b-481d-82f2-0bd4a461ff8b">
            <button className="button" type="button">
              <span className="button__text">Download</span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2 h-[400px] md:h-[500px] lg:h-[500px]">
        <img
          src={heroImage}
          alt="hero-image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default LandingPage;
