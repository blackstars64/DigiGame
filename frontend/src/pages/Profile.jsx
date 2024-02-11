import { Link, useOutletContext } from "react-router-dom";
import isEmpty from "../utils/isEmpty";
import adminPanel from "../assets/admin.png";

function Profile() {
  const { user } = useOutletContext();
  return (
    <section>
      <h2>DigiProfile</h2>
      <section>
        <div>
          <p>{!isEmpty(user) ? user.username : "No Connected"}</p>
          <img src="" alt="" />
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
          <button type="button">Edit Profile</button>
        </div>
      </section>
    </section>
  );
}

export default Profile;
