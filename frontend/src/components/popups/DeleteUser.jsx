import propTypes from "prop-types";

function DeleteUser({
  idBeingEdited,
  setIsDelete,
  dispatch,
  deleteUser,
  setIdBeingEdited,
}) {
  return (
    <section>
      <p>Are you sure you want to delete this user?</p>
      <button
        onClick={() => {
          setIsDelete(false);
          setIdBeingEdited(null);
        }}
        type="button"
      >
        No
      </button>
      <button
        onClick={() => {
          setIsDelete(false);
          dispatch(deleteUser(idBeingEdited));
          setIdBeingEdited(null);
        }}
        type="button"
      >
        Yes
      </button>
    </section>
  );
}

DeleteUser.propTypes = {
  setIsDelete: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
  deleteUser: propTypes.func.isRequired,
  setIdBeingEdited: propTypes.func.isRequired,
  idBeingEdited: propTypes.number.isRequired,
};

export default DeleteUser;
