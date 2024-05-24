import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Avatar from "react-avatar-edit";
import {
  Card,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { ProfileInfoCard } from "@/widgets/cards";
import axios from "axios";

function Profile() {
  const dispatch = useDispatch();
  const [adminId] = useState("664c85a689dc4749180e0aef");
  const [profileData, setProfileData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [location, setLocation] = useState("");
  const [resumer, setResumer] = useState("");
  const [image, setImage] = useState(null);
  const [showAvatarEditor, setShowAvatarEditor] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch profile data by email
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/getAdminById/${adminId}`);
        const data = response.data;
        setProfileData(data);
        setName(data.Name);
        setEmail(data.Email);
        setPhonenumber(data.Phonenumber);
        setLocation(data.Location);
        setResumer(data.Resumer);
        setAvatarPreview(data.Image);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ciof6yzr");
    data.append("cloud_name", "dxm05ueme");
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxm05ueme/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const responseData = await response.json();
      if (responseData && responseData.secure_url) {
        return responseData.secure_url;
      } else {
        console.error("Image upload failed: Secure URL not found in response");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const onCropAvatar = (preview) => {
    setAvatarPreview(preview);
  };

  const onCloseAvatarEditor = () => {
    setShowAvatarEditor(false);
  };

  const handleEditButton = async () => {
    const secureUrl = await uploadImage();
    if (secureUrl) {
      const updatedData = {
        id: profileData._id,
        Name,
        Email,
        Phonenumber,
        Location,
        Resumer,
        Image: secureUrl,
      };

      dispatch({
        type: "UPDATE_PROFILE", // Adjust this based on your actual action type
        payload: updatedData,
      });

      // Optionally, send the updated data to your backend
      try {
        await axios.put(`/api/admins/${profileData._id}`, updatedData);
      } catch (error) {
        console.error("Error updating profile data:", error);
      }
    }
    setShowForm(false);
  };

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <img
                src={avatarPreview || profileData.Image}
                alt="Profile"
                style={{ width: 200, height: 200, borderRadius: "50%" }}
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {profileData.Name}
                </Typography>
              </div>
            </div>
          </div>
          <div className="grid-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Profile Information"
              description={profileData.Resumer}
              details={{
                mobile: `${profileData.Phonenumber}`,
                email: `${profileData.Email}`,
                location: `${profileData.Location}`,
                role:`${profileData.role}`,
                Integration:`${new Date(profileData.createdAt).toDateString()}`,
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon onClick={() => setShowForm(true)} className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />
          </div>
        </CardBody>
      </Card>
      {showForm && (
        <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-gray-100 bg-opacity-70 inset-0 z-50 overflow-y-auto">
          <div className="w-96 m-auto">
            <div className="mt-5 bg-white rounded-lg shadow">
              <div className="flex flex-row-reverse p-3">
                <button onClick={() => setShowForm(false)} className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-5 pb-5">
                <textarea
                  placeholder="Resumer"
                  value={resumer}
                  onChange={(e) => setResumer(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Name"
                  id="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Email"
                  type="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Mobile"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  name="Image"
                  type="file"
                  onChange={handlePhotoChange}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
              <hr className="mt-4" />
              <div className="flex justify-center p-3">
                <button
                  type="button"
                  onClick={handleEditButton}
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                  </svg>
                  <span className="pl-2 mx-1">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAvatarEditor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6">
            <div className="flex flex-row-reverse p-3">
              <button onClick={onCloseAvatarEditor} className="btn btn-square btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Avatar width={390} height={295} onCrop={onCropAvatar} onClose={onCloseAvatarEditor} />
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
