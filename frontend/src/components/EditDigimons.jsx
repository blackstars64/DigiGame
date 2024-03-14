import propTypes from "prop-types";
import { useState } from "react";
import AddDigimon from "./popups/AddDigimon";
import EditDigimon from "./popups/EditDigimon";

function EditDigimons({ digimons }) {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredDigimons, setFilteredDigimons] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handlechange = (e) => {
    const inputValut = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValut);

    const filtered = digimons.filter((digimon) => {
      return (
        String(digimon.name)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValut) ||
        String(digimon.level)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValut)
      );
    });
    setFilteredDigimons(filtered);
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
                {isEdit && <EditDigimon digimon={digimon} />}
                {isDelete && (
                  <div>
                    <p>Are you sure you want to delete this digimon?</p>
                    <button
                      onClick={() => {
                        setIsDelete(false);
                      }}
                      type="button"
                    >
                      No
                    </button>
                    <button
                      onClick={() => {
                        setIsDelete(false);
                      }}
                      type="button"
                    >
                      Yes
                    </button>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => {
                    setIsEdit(true);
                  }}
                  type="button"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setIsDelete(true);
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
