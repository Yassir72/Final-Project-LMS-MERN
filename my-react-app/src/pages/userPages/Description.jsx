import React, { useEffect } from "react";
import Header from "@/widgets/layout/header";
import FooterPages from "@/widgets/layout/footerPages";
import CardVidios from "@/widgets/layout/cardeVidios";
import LearnSection from "@/widgets/layout/LearnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faFileAlt,
  faDownload,
  faMobileAlt,
  faTv,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getcoursebyID } from "../../redux/course/slice";

export const Description = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { courseOne, isLoading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getcoursebyID(courseId));
  }, [dispatch, courseId]);

  return (
    <>
      <Header />
      <div className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md mb-6">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-700 hover:underline text-center p-4"
                >
                  {courseOne?.Title}
                </a>
                <div className="flex justify-center items-center">
                  <img
                    src={courseOne?.Image}
                    className="w-full h-90 rounded-lg"
                    alt="Course"
                  />
                </div>
                <p className="p-4 text-gray-600 text-center">
                  {courseOne?.Description}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md mt-6 p-8 lg:px-16">
                <CardVidios />
              </div>
            </div>

            <div className="lg:w-4/12 lg:pl-8">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-700">
                  Course Details
                </h2>
                <h5 className="text-xl font-bold mb-4 text-gray-700">
                  ${courseOne?.Price}
                </h5>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faVideo} className="text-black mr-2" />
                  <span>74 hours on-demand video</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faFileAlt} className="text-black mr-2" />
                  <span>34 coding exercises</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faFileAlt} className="text-black mr-2" />
                  <span>2 practice tests</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faFileAlt} className="text-black mr-2" />
                  <span>Assignments</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faFileAlt} className="text-black mr-2" />
                  <span>163 articles</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faDownload} className="text-black mr-2" />
                  <span>19 downloadable resources</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faMobileAlt} className="text-black mr-2" />
                  <span>Access on mobile and TV</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faTv} className="text-black mr-2" />
                  <span>Full lifetime access</span>
                </div>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faCertificate} className="text-black mr-2" />
                  <span>Certificate of completion</span>
                </div>
                <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300">
                  30-Day Money-Back Guarantee
                </button>
                <div className="flex justify-center mt-6">
                  <Link to="/usersPg/Payement">
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 mr-4">
                      Go to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <LearnSection />
      </div>

      <FooterPages />
    </>
  );
};

export default Description;
