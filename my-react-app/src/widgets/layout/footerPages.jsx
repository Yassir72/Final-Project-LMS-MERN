import { Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom";
 
export function FooterPages() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="../../../public/img/iconelogo.png" alt="logo-ct" className="w-21" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
            >
            <Link to='/usersPg/CoursesPage' className="flex items-center">
              Course
            </Link>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-12 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 ARK-X Talent Factory
      </Typography>
    </footer>
  );
}
export default FooterPages