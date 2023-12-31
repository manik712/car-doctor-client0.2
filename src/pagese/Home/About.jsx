import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="lg:w-1/2 relative">
      <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
      <img src={parts} className="w-1/2 rounded-lg shadow-2xl right-5 top-1/2 absolute  border-8 border-white" />

      </div>
      <div className=" lg:w-1/2 space-y-5">
        <h3 className="text-lg font-semibold text-orange-600">About Us</h3>

        <h1 className="text-4xl font-bold">We are qualified <br />
         & of experience <br /> in this field</h1>
        <p className="py-6 text-sm text-neutral-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which do not <br /> look even slightly believable. </p>
        <h2 className="text-sm text-neutral-500">the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which do not look even slightly <br /> believable. </h2>
        <button className="btn btn-primary bg-[#FF3811] text-white">Get More Info</button>
      </div>
    </div>
  </div>
  );
}

export default About;