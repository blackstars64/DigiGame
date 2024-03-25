import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import formatDate from "../utils/formatDate";
import imgProfile from "../utils/imgProfile";

import Comment from "../components/Comment";
import { addMessage } from "../actions/message.action";
import "../scss/CommentSpace.scss";

function CommentSpace() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.messageReducer);
  const { user } = useOutletContext();
  const form = useRef(null);
  const messagesEndRef = useRef(null);

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

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  return (
    <section className="c-cSpace">
      <h2 className="h1">DigiChat</h2>
      <div className="cSpace">
        {comments &&
          comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                user={user}
                comment={comment}
                imgProfile={imgProfile}
                formatDate={formatDate}
                messagesEndRef={messagesEndRef}
                isYouComment={isYouComment}
              />
            );
          })}
      </div>
      <form
        className="cSpace-form"
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
