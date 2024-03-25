import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import imgProfile from "../utils/imgProfile";
import trashImg from "../assets/trash.png";
import DeleteMessage from "./popups/DeleteMessage";
import "../scss/EditMessages.scss";

function EditMessages() {
  const [isDelete, setIsDelete] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [idBeingEdited, setIdBeingEdited] = useState(null);
  const [filteredMessage, setFilteredMessage] = useState([]);
  const comments = useSelector((state) => state.messageReducer);

  const handleClickDelete = (id) => {
    setIsDelete(!isDelete);
    setIdBeingEdited(id);
  };
  useEffect(() => {
    setFilteredMessage(comments);
  }, [comments]);

  const handlechange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValue);

    const filtered = comments.filter((comment) => {
      return (
        String(comment.username)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(comment.message)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      );
    });

    setFilteredMessage(filtered.length === 0 ? comments : filtered);
  };

  return (
    <section className="c-em">
      <h2 className="h1">Edit Message</h2>
      <input
        className="textarea "
        type="search"
        value={inputSearch}
        placeholder="Find a message..."
        onChange={handlechange}
      />
      <div className="em-allMessage">
        {comments &&
          filteredMessage.map((comment) => {
            return (
              <div className="em-oneMessage" key={comment.id}>
                <div className="em-cUser">
                  <p className="em-username">{comment.username}</p>
                  <picture>
                    <img
                      className="em-ImgProfile"
                      src={imgProfile(comment.profile_img)}
                      alt="digimon"
                    />
                  </picture>
                </div>
                <p className="em-message">{comment.message}</p>
                {isDelete && idBeingEdited === comment.id && (
                  <DeleteMessage
                    setIsDelete={setIsDelete}
                    comment={comment}
                    setIdBeingEdited={setIdBeingEdited}
                  />
                )}
                <div className="em-c-btnDate">
                  <p className="em-received">{formatDate(comment.received)}</p>
                  <button
                    className="em-deleteBtn"
                    onClick={() => {
                      handleClickDelete(comment.id);
                    }}
                    type="button"
                  >
                    <picture>
                      <img
                        className="em-deleteImg"
                        src={trashImg}
                        alt="trash"
                      />
                    </picture>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default EditMessages;
