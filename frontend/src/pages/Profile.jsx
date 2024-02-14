import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import isEmpty from "../utils/isEmpty";
import adminPanel from "../assets/admin.png";
import imgProfile from "../utils/imgProfile";
import EditPictureProfile from "../components/popups/EditPictureProfile";
import EditProfile from "../components/popups/EditProfile";

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
    <section>
      <h2>DigiProfile</h2>
      <section>
        {isPopupImg && (
          <EditPictureProfile handlePopupImg={handlePopupImg} user={user} />
        )}
        {isPopupEdit && (
          <EditProfile handlePopupImg={handlePopupEdit} user={user} />
        )}
        <div>
          <p>{!isEmpty(user) ? user.username : "No Connected"}</p>
          <button onClick={handlePopupImg} type="button">
            <picture>
              <img src={imgProfile(user.profile_img)} alt="Profile" />
            </picture>
          </button>
        </div>
        <hr />
        <div>
          <p>Description:</p>
          <p>{!isEmpty(user) ? user.description : "No description yet"}</p>
        </div>
        <p>{!isEmpty(user) ? user.email : "No Connected"}</p>
        <div>
          {user.is_admin === 1 && (
            <Link to="/adminPanel">
              <img src={adminPanel} alt="Admin Panel" />
            </Link>
          )}
          <button onClick={handlePopupEdit} type="button">
            Edit Profile
          </button>
        </div>
      </section>
    </section>
  );
}

export default Profile;
