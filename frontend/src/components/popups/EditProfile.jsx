import { useRef } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateUser } from "../../actions/user.action";
import isEmpty from "../../utils/isEmpty";

function EditProfile({ handlePopupImg, user }) {
  const form = useRef();
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const postDatas = {
      username: form.current.username.value,
      email: form.current.email.value,
      description: form.current.description.value,
    };
    if (
      isEmpty(postDatas.username) ||
      isEmpty(postDatas.email) ||
      isEmpty(postDatas.description)
    ) {
      return console.info("All fields are required");
    }
    return (
      dispatch(updateUser(user.id, postDatas)),
      form.current.reset(),
      handlePopupImg()
    );
  };

  return (
    <section className="c-popup">
      <h2 className="popup-h">Edit Profile</h2>
      <form className="popup-f" ref={form} onSubmit={(e) => handleForm(e)}>
        <input
          className="textarea"
          type="text"
          id="username"
          defaultValue={user.username}
          required
        />
        <input
          className="textarea"
          type="email"
          id="email"
          defaultValue={user.email}
          required
        />
        <textarea
          required
          className="textarea popup-desc"
          type="text"
          id="description"
          defaultValue={user.description}
          maxLength="170"
        />
        <div>
          <button className="btn-white" type="submit">
            Validate
          </button>
          <button className="btn-white" onClick={handlePopupImg} type="button">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

EditProfile.propTypes = {
  user: propTypes.shape({
    id: propTypes.number.isRequired,
    username: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    profile_img: propTypes.number.isRequired,
  }).isRequired,
  handlePopupImg: propTypes.func.isRequired,
};

export default EditProfile;
