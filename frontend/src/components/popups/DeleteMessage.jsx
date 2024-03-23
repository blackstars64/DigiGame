import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../actions/message.action";

function DeleteMessage({ setIsDelete, setIdBeingEdited, comment }) {
  const dispatch = useDispatch();
  return (
    <section className="c-delete">
      <p className="delete-p">Are you sure you want to delete this message?</p>
      <div className="delete-c-btn">
        <button
          className="btn-white delete-btn"
          onClick={() => {
            setIsDelete(false);
            setIdBeingEdited(null);
          }}
          type="button"
        >
          No
        </button>
        <button
          className="btn-white delete-btn "
          onClick={() => {
            setIsDelete(false);
            dispatch(deleteMessage(comment.id));
            setIdBeingEdited(null);
          }}
          type="button"
        >
          Yes
        </button>
      </div>
    </section>
  );
}

DeleteMessage.propTypes = {
  setIsDelete: propTypes.func.isRequired,
  setIdBeingEdited: propTypes.func.isRequired,
  comment: propTypes.shape({
    id: propTypes.number,
  }).isRequired,
};

export default DeleteMessage;
