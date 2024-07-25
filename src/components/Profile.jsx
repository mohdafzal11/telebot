import React, { useContext } from "react";
import profile from "../../src/assets/profile.png";
import { UserDataContext } from "../Utils/userDataContext";

const Profile = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="flex items-center space-x-2 ">
      <img
        className="p-0.5 border rounded-lg shadow-md shadow-orange-500  border-[#FA650F]"
        src={profile}
        alt="profile"
      />

      <div className="text-black truncate w-10">{userData?.chatId}</div>
    </div>
  );
};

export default Profile;
