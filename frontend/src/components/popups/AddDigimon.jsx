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
    <section>
      <h2>Add Digimon</h2>
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="name" placeholder="Name" />
        <input type="text" id="level" placeholder="Level" />
        <input type="text" id="img" placeholder="Image" />
        <button type="submit">Add</button>
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
