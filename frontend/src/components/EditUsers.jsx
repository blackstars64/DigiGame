import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import formatDate from "../utils/formatDate";
import imgProfile from "../utils/imgProfile";
import DeleteUser from "./popups/DeleteUser";
import { deleteUser } from "../actions/allUsers.action";
import "../scss/EditUsers.scss";

function EditUsers({ allUsers }) {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [idBeingEdited, setIdBeingEdited] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredUsers(allUsers);
  }, [allUsers]);

  const handlechange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValue);

    const filtered = allUsers.filter((user) => {
      return (
        String(user.username)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(user.email)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      );
    });

    setFilteredUsers(filtered.length === 0 ? allUsers : filtered);
  };

  const handleClickDelete = (id) => {
    setIsDelete(!isDelete);
    setIdBeingEdited(id);
  };

  return (
    <section className="c-e-u">
      <h2 className="h1">Edit Users</h2>

      <input
        className="textarea"
        type="search"
        value={inputSearch}
        placeholder="Find a user"
        onChange={handlechange}
      />
      <section className="e-u-fullCard">
        {filteredUsers.map((user) => {
          return (
            <div className="e-u-card" key={user.id}>
              <img
                className="e-u-img"
                src={imgProfile(user.profile_img)}
                alt="pitcture"
              />
              <p className="e-u-p">{user.username}</p>
              <p className="e-u-p">{user.email}</p>
              <p className="e-u-p">
                Admin: {user.is_admin === 1 ? "Oui" : "Non"}
              </p>
              <p className="e-u-p">DigiPoint: {user.digi_point}</p>
              <p className="e-u-p">{formatDate(user.register_date)}</p>
              {isDelete && idBeingEdited === user.id && (
                <DeleteUser
                  setIsDelete={setIsDelete}
                  idBeingEdited={idBeingEdited}
                  setIdBeingEdited={setIdBeingEdited}
                  dispatch={dispatch}
                  deleteUser={deleteUser}
                />
              )}
              <button
                className="btn-violet"
                onClick={() => handleClickDelete(user.id)}
                type="button"
              >
                Delete
              </button>
            </div>
          );
        })}
      </section>
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
