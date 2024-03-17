import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import isEmpty from "../utils/isEmpty";
import adminPanel from "../assets/admin.png";
import imgProfile from "../utils/imgProfile";
import EditPictureProfile from "../components/popups/EditPictureProfile";
import EditProfile from "../components/popups/EditProfile";
import "../scss/Profile.scss";

function Profile() {
  const { user } = useOutletContext();
  const [isPopupImg, setIsPopupImg] = useState(false);
  const [isPopupEdit, setIsPopupEdit] = useState(false);

  const handlePopupImg = () => {
    setIsPopupImg(!isPopupImg);
  };

  const handlePopupEdit = () => {
    setIsPopupEdit(!isPopupEdit);
  };

  return (
    <section className="profile">
      <h2 className="h1">DigiProfile</h2>
      <section className="c-profile">
        {isPopupImg && (
          <EditPictureProfile handlePopupImg={handlePopupImg} user={user} />
        )}
        {isPopupEdit && (
          <EditProfile handlePopupImg={handlePopupEdit} user={user} />
        )}
        <div className="c-profile-h">
          <p className="profile-username">
            {!isEmpty(user) ? user.username : "No Connected"}
          </p>
          <button
            className="profile-btn-img"
            onClick={handlePopupImg}
            type="button"
          >
            <picture>
              <img
                className="profile-img"
                src={imgProfile(user.profile_img)}
                alt="Profile"
              />
            </picture>
          </button>
        </div>
        <hr className="profile-hr" />
        <div className="profile-text">
          <p className="profile-desc">Description:</p>
          <p className="textarea textarea-p">
            {!isEmpty(user) ? user.description : "No description yet"}
          </p>
        </div>
        <p className="textarea textarea-m ">
          {!isEmpty(user) ? user.email : "No Connected"}
        </p>
        <div className="profile-edit">
          {user.is_admin === 1 && (
            <Link to="/adminPanel" disabled={isPopupImg || isPopupEdit}>
              <img
                className="profile-admin"
                src={adminPanel}
                alt="Admin Panel"
              />
            </Link>
          )}
          <button
            disabled={isPopupImg || isPopupEdit}
            className="btn-violet"
            onClick={handlePopupEdit}
            type="button"
          >
            Edit Profile
          </button>
        </div>
      </section>
    </section>
  );
}

export default Profile;
