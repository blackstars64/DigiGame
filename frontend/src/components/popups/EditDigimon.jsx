import { useRef } from "react";
import propTypes from "prop-types";
import isEmpty from "../../utils/isEmpty";

function EditDigimon({
  digimon,
  idBeingEdited,
  setIdBeingEdited,
  setIsEdit,
  dispatch,
  updateDigimon,
}) {
  const form = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    const postDatas = {
      name: form.current.name.value,
      level: form.current.level.value,
      img: form.current.img.value,
    };

    if (
      isEmpty(postDatas.name) ||
      isEmpty(postDatas.level) ||
      isEmpty(postDatas.img)
    ) {
      return console.info("All fields are required");
    }

    return (
      dispatch(updateDigimon(idBeingEdited, postDatas)),
      form.current.reset(),
      setIsEdit(false),
      setIdBeingEdited(null)
    );
  };

  return (
    <section className="c-popup">
      <h2 className="popup-h">Edit Digimon</h2>
      <form className="popup-f" ref={form} onSubmit={(e) => handleForm(e)}>
        <label className="popup-l" htmlFor="name">
          Name:
          <input
            className="textarea"
            type="text"
            id="name"
            defaultValue={digimon.name}
          />
        </label>
        <label className="popup-l" htmlFor="level">
          Level:
          <input
            className="textarea"
            type="text"
            id="level"
            defaultValue={digimon.level}
          />
        </label>
        <label className="popup-l" htmlFor="img">
          Image:
          <input
            className="textarea"
            type="text"
            id="img"
            defaultValue={digimon.img}
          />
        </label>
        <button
          className="btn-white"
          onClick={() => {
            setIdBeingEdited(null);
            setIsEdit(false);
          }}
          type="button"
        >
          Cancel
        </button>
        <button className="btn-white" type="submit">
          Save
        </button>
      </form>
    </section>
  );
}

EditDigimon.propTypes = {
  digimon: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    level: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
  }).isRequired,
  idBeingEdited: propTypes.number.isRequired,
  setIdBeingEdited: propTypes.func.isRequired,
  setIsEdit: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
  updateDigimon: propTypes.func.isRequired,
};

export default EditDigimon;
