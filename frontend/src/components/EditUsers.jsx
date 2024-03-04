import propTypes from "prop-types";
import formatDate from "../utils/formatDate";
import imgProfile from "../utils/imgProfile";

function EditUsers({ allUsers }) {
  return (
    <section>
      <h2>Edit Users</h2>

      {allUsers.map((user) => {
        return (
          <div key={user.id}>
            <img src={imgProfile(user.profile_img)} alt="pitcture" />
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>Admin: {user.is_admin === 1 ? "Oui" : "Non"}</p>
            <p>DigiPoint: {user.digi_point}</p>
            <p>{formatDate(user.register_date)}</p>
          </div>
        );
      })}
    </section>
  );
}

EditUsers.propTypes = {
  allUsers: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      profile_img: propTypes.number.isRequired,
      username: propTypes.string.isRequired,
      email: propTypes.string.isRequired,
      is_admin: propTypes.number.isRequired,
      digi_point: propTypes.number.isRequired,
      register_date: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default EditUsers;
