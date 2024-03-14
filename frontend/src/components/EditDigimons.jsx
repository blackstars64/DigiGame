import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AddDigimon from "./popups/AddDigimon";
import EditDigimon from "./popups/EditDigimon";
import { deleteDigimon } from "../actions/digimon.action";
import DeleteDigimon from "./popups/DeleteDigimon";

function EditDigimons({ digimons }) {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredDigimons, setFilteredDigimons] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [idBeingEdited, setIdBeingEdited] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredDigimons(digimons);
  }, [digimons]);

  const handlechange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValue);

    const filtered = digimons.filter((digimon) => {
      return (
        String(digimon.name)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(digimon.level)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      );
    });

    setFilteredDigimons(filtered.length === 0 ? digimons : filtered);
  };

  const handleClick = (id) => {
    setIsEdit(!isEdit);
    setIdBeingEdited(id);
  };

  const handleClickDelete = (id) => {
    setIsDelete(!isDelete);
    setIdBeingEdited(id);
  };

  return (
    <section>
      <h2>Edit Digimons</h2>
      <input
        type="search"
        value={inputSearch}
        placeholder="Find a digimon"
        onChange={handlechange}
      />
      <button
        onClick={() => {
          setIsAdd(true);
        }}
        type="button"
      >
        Add
      </button>
      {isAdd && <AddDigimon />}
      <section>
        {filteredDigimons.map((digimon) => {
          return (
            <div key={digimon.id}>
              <img src={digimon.img} alt="pitcture" />
              <div>
                <p>{digimon.name}</p>
                <p>{digimon.level}</p>
                <p>Card {digimon.id}</p>
                {isEdit && idBeingEdited === digimon.id && (
                  <EditDigimon
                    digimon={digimon}
                    idBeingEdited={idBeingEdited}
                    setIdBeingEdited={setIdBeingEdited}
                    setIsEdit={setIsEdit}
                  />
                )}
                {isDelete && idBeingEdited === digimon.id && (
                  <DeleteDigimon
                    setIsDelete={setIsDelete}
                    dispatch={dispatch}
                    deleteDigimon={deleteDigimon}
                    digimon={digimon}
                    setIdBeingEdited={setIdBeingEdited}
                  />
                )}
              </div>
              <div>
                <button onClick={() => handleClick(digimon.id)} type="button">
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleClickDelete(digimon.id);
                  }}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

EditDigimons.propTypes = {
  digimons: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      level: propTypes.string.isRequired,
      img: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default EditDigimons;
