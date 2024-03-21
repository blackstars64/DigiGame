import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import formatDate from "../utils/formatDate";
import imgProfile from "../utils/imgProfile";
import YouComment from "../components/YouComment";
import Comment from "../components/Comment";
import { addMessage } from "../actions/message.action";

function CommentSpace() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.messageReducer);
  const { user } = useOutletContext();
  const form = useRef(null);

  const isYouComment = (commentUserId) => {
    return user.id === commentUserId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      userId: user.id,
      message: form.current.comment.value,
    };
    dispatch(addMessage(comment, user.username));
    form.current.reset();
  };

  return (
    <section className="c-cSpace">
      <h2 className="h1">DigiChat</h2>
      <div className="cSpace">
        {comments &&
          comments.map((comment) => {
            return isYouComment(comment.user_id) ? (
              <YouComment
                key={comment.id}
                comment={comment}
                imgProfile={imgProfile}
                formatDate={formatDate}
                user={user}
              />
            ) : (
              <Comment
                key={comment.id}
                comment={comment}
                imgProfile={imgProfile}
                formatDate={formatDate}
              />
            );
          })}
      </div>
      <form
        ref={form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="textarea"
          type="text"
          id="comment"
          placeholder="You Comment Here..."
        />
        <button className="btn-violet" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default CommentSpace;
