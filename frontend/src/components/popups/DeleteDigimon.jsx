import propTypes from "prop-types";

function DeleteDigimon({
  setIdBeingEdited,
  setIsDelete,
  dispatch,
  deleteDigimon,
  digimon,
}) {
  return (
    <section>
      <p>Are you sure you want to delete this digimon?</p>
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
          dispatch(deleteDigimon(digimon.id));
          setIdBeingEdited(null);
        }}
        type="button"
      >
        Yes
      </button>
    </section>
  );
}

DeleteDigimon.propTypes = {
  setIsDelete: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
  deleteDigimon: propTypes.func.isRequired,
  setIdBeingEdited: propTypes.func.isRequired,
  digimon: propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default DeleteDigimon;
