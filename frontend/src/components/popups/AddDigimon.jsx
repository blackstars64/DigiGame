import { useRef } from "react";
import propTypes from "prop-types";

function AddDigimon({ setIsAdd, dispatch, addDigimon }) {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postDigimon = {
      name: form.current.name.value,
      level: form.current.level.value,
      img: form.current.img.value,
    };

    dispatch(addDigimon(postDigimon));
    form.current.reset();
    setIsAdd(false);
  };
  return (
    <section className="c-popup">
      <h2 className="popup-h">Add Digimon</h2>
      <form className="popup-f" ref={form} onSubmit={(e) => handleSubmit(e)}>
        <input className="textarea" type="text" id="name" placeholder="Name" />
        <input
          className="textarea"
          type="text"
          id="level"
          placeholder="Level"
        />
        <input className="textarea" type="text" id="img" placeholder="Image" />
        <div className="popup-c-btn">
          <button
            className="btn-white"
            onClick={() => setIsAdd(false)}
            type="button"
          >
            Cancel
          </button>
          <button className="btn-white" type="submit">
            Add
          </button>
        </div>
      </form>
    </section>
  );
}

AddDigimon.propTypes = {
  dispatch: propTypes.func.isRequired,
  addDigimon: propTypes.func.isRequired,
  setIsAdd: propTypes.func.isRequired,
};

export default AddDigimon;
