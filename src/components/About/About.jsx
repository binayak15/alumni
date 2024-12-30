import React from "react";

const About = () => {
  return (
    <>
      <div className="m-8 md:mx-12 lg:mx-16">
        {/* Introduction Section */}
        <div className="mb-14">
          <h1 className="font-bold text-3xl text-center md:text-left">
            <span className="text-orange-400">Alumni</span> Overview
          </h1>
          <p className="text-xl mt-3 text-justify">
            "Being part of this alumni community has been a remarkable journey.
            It’s more than just staying connected—it’s about giving back,
            sharing experiences, and helping each other grow. The education and
            relationships we built here continue to shape our personal and
            professional lives. Let’s keep supporting one another and inspiring
            the next generation to achieve even greater heights."
          </p>
        </div>

        {/* About VC Section */}
        <div className="mt-10">
          <h1 className="font-bold text-3xl text-center md:text-left">
            <span className="text-orange-400">About VC</span> Overview
          </h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2  items-center">
            <div>
              <img
                className="w-full max-w-md mx-auto md:mx-0"
                src="https://reactjs.org/logo-og.png"
                alt="Alumni Logo"
              />
            </div>
            <div>
              <p className="text-justify">
                Berhampur University was established on 2nd January 1967 by the
                Odisha Act 21 of 1966 as an affiliating University. The seven
                districts originally under the territorial jurisdiction of the
                University are Ganjam, Gajapati, Kandhamal, Koraput, Rayagada,
                Nowrangpur, and Malkangiri with over 180 affiliated colleges.
                Lingaraj Law College, Berhampur, is the only constituent college
                of the University.
              </p>
            </div>
          </div>
        </div>

        {/* About BU Section */}
        <div className="mb-12 mt-14">
          <h1 className="font-bold text-3xl text-center md:text-left">
            <span className="text-orange-400">About BU</span> Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
            <div>
              <p className="text-justify">
                Berhampur University was established on 2nd January 1967 by the
                Odisha Act 21 of 1966 as an affiliating University. The seven
                districts originally under the territorial jurisdiction of the
                University are Ganjam, Gajapati, Kandhamal, Koraput, Rayagada,
                Nowrangpur, and Malkangiri with over 180 affiliated colleges.
                Lingaraj Law College, Berhampur, is the only constituent college
                of the University.
              </p>
            </div>
            <div>
              <img
                className="w-full max-w-md mx-auto md:mx-20"
                src="https://reactjs.org/logo-og.png"
                alt="Alumni Logo"
              />
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-4 md:px-18 lg:px-8 ">
          <div className="bg-orange-50 text-white p-6 rounded shadow-md">
            <h2 className="text-orange-600 text-xl font-bold mb-2">Vision</h2>
            <p className="text-black text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              sapiente voluptates nisi consequuntur distinctio impedit
              voluptatum veritatis consectetur blanditiis odit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eveniet est repudiandae. Voluptatem, inventore iure dolor quaerat ad culpa praesentium amet molestiae iste in natus! Laudantium quisquam iste quos voluptates..
            </p>
          </div>
          <div className="bg-orange-50 text-white p-6 rounded shadow-md">
            <h2 className="text-orange-600 text-xl font-bold mb-2">Mission</h2>
            <p className="text-black text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              sapiente voluptates nisi consequuntur distinctio impedit
              voluptatum veritatis consectetur blanditiis odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia maxime sapiente laudantium tempora facilis minima natus quasi, temporibus consequatur similique perspiciatis vero ipsum recusandae quisquam. Totam error illo facere?.
            </p>
          </div>
        </div>

        {/* msg from HOD*/}
        <div className="mt-20  grid grid-cols-1  md:grid-cols-2 gap-1"> 
          <div> 
              <img
                className="w-full max-w-md mx-auto md:mx-6 rounded-3xl "
                src="https://reactjs.org/logo-og.png"
                alt="Alumni Logo"  
              /> 
              </div>
           <div className=" border-2 border-gray-300 p-4 rounded-md shadow-md ">  <h2 className="text-orange-600">Message From Head, P.G. Department of Computer Science </h2>
           <p> 

Dear Alumni <br />
You are an integral part of our department's legacy and success. Your accomplishments inspire our students and faculty alike, reflecting the values and excellence we strive for. We are proud of your journey and cherish the bond we share.
Stay connected and continue to make a difference. Together, we can build a vibrant community of learning and growth. <br />
Warm regards,Dr.Sushant Kumar Das</p></div>

        </div>

 
 {/* impact msg */}
 <div className=" max-w-3xl mx-auto mt-16">
  <h2 className="text-lg font-bold mb-6 ml-2 " >Impact Message From Alumni</h2>
  <div className="text-gray-700  bg-orange-50 border-2 border-gray-300 rounded-md shadow-md p-6">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nobis facilis earum non dolores suscipit, delectus perferendis rem harum atque incidunt, nulla impedit et quis provident amet itaque, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nesciunt voluptate consequuntur cumque harum? Id nisi adipisci eos maxime incidunt amet laboriosam aliquid soluta, placeat iusto facere, tenetur dolores qui rem ex, labore unde cupiditate exercitationem eaque! Quod fuga enim magnam, maiores, ex animi provident ad laudantium delectus totam eos. sapiente officia.
  </div>
</div>








      </div> 
    </>
  );
};

export default About;