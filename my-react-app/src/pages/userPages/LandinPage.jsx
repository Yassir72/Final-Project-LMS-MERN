
import React from "react";
import {
  Navbar,
  MobileNav,

  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import NavPage from "@/widgets/layout/navbarPages";

 

export function LandinPage() {

  
  return (

    <>

    <NavPage/>
      {/* <style>
        {`
          .bg-image {
            background: url("https://dribbble.com/shots/18010545-Hero-Section-E-Learning?utm_source=Clipboard_Shot&utm_campaign=Tabsum&utm_content=Hero%20Section%20(%20E-Learning)&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Tabsum&utm_content=Hero%20Section%20(%20E-Learning)&utm_medium=Social_Share");
            background-size: cover;
            background-repeat: no-repeat;
          }
          body {
            background: white !important;
          }
        `}
      </style>

      */}
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>




      <div className="section bg-image flex overflow-hidden h-screen text-gray-800">
        <div className="hero bg-gray-200 text-center grid md:grid-cols-2 border w-4/6 m-auto p-8 bg-opacity-90 rounded-lg">
          <img
            className="icon m-auto rounded-lg"
            src="https://static.cms.yp.ca/ecms/media/1/11042220_lel-1444925848-600x360.jpg"
            alt=""
          />
          <div className="text m-auto text-lg md:ml-5 p-5 md:text-left">
            <div className="head text-3xl mb-3 font-semibold">
              Why We Love Pizza ?
            </div>
            <div className="desc">
              There's a reason pizza is so popular. Humans are drawn to foods
              that are fatty, sweet, rich, and complex. Pizza has all of these
              components. Cheese is fatty, meat toppings tend to be rich and
              the sauce is sweet.
            </div>
          </div>
        </div>
      </div>

      <div className="heading_section italic bg-gray-200 font-semibold text-3xl text-center p-5 pt-24 text-gray-800">
        Some Well Known Pizza Styles
      </div>

      <div className="section cards mx-auto border grid md:grid-cols-3 md:px-12 bg-gray-200 text-gray-800">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded"
          >
            <div className="img">
              <img
                className="w-full h-full"
                src="https://static.toiimg.com/thumb/76481989.cms?width=680&height=512&imgsize=170646"
                alt=""
              />
            </div>
            <div className="text p-5 pt-2 text-center">
              <div className="title font-semibold my-2 text-xl text-red-700">
                Pepperoni
              </div>
              <div className="desc">
                A classic. Just throw a few (or a ton of) slices of pepperoni
                on top of the cheese, and you’ll soon have a greasy, slightly
                spicy and delicious pizza that you simply can’t go wrong with.
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section py-28 w-full scree border grid md:grid-cols-2 bg-gray-200 text-gray-800">
        <div className="subsec flex-none overflow-hidden max-h-96">
          <img
            className="w-full"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*"
            alt=""
          />
        </div>
        <div className="subsec my-auto p-8">
          <div className="title font-semibold text-3xl mb-5">
            What is paleo pizza crust made out of?
          </div>
          <div className="desc text-lg">
            We've seen it all kinds of ways, with different types of flours,
            but we settled on almond flour for its nutty flavor. We also mix in
            spices—Italian seasoning and garlic powder—to give it more flavor.
            We skip yeast because it can be a pain and instead incorporate eggs
            and olive oil. The eggs help make the crust fluffy.
          </div>
        </div>
      </div>

      <div className="heading_section bg-red-600 text-gray-300">
        <div className="footer w-5/6 mx-auto text-center">
          <div className="sub flex-1 p-8">
            <div className="text-3xl mb-3 uppercase">Contact Us</div>
            <div className="info">
              <div className="name">Pizza Parlour</div>
              <div className="name text-sm">
                Street 4996 Brown Bear Drive <br />
                City Mira Loma State CA State Full California <br />
                Zip Code 91752 <br />
                Phone Number 951-634-4557 <br />
                Mobile Number 951-903-8940
              </div>
            </div>
          </div>
          <div className="sub flex p-5 w-5/6 mx-auto border-t">
            <div className="cursor-pointer hover:underline items mx-auto">
              Our Partners
            </div>
            <div className="cursor-pointer hover:underline items mx-auto">
              Policy
            </div>
            <div className="cursor-pointer hover:underline items mx-auto">
              Facilities
            </div>
            <div className="cursor-pointer hover:underline items mx-auto">
              Developer
            </div>
          </div>
        </div>
      </div>

      <div className="filling pt-14"></div>
    </>
  );
}

export default LandinPage;
