import propTypes from "prop-types";

function Comment({
  comment,
  imgProfile,
  formatDate,
  messagesEndRef,
  isYouComment,
}) {
  return (
    <div className={isYouComment(comment.users_id) ? "y-cSpace" : "u-cSpace"}>
      <img
        className={
          isYouComment(comment.users_id) ? "y-cSpace-img" : "cSpace-img"
        }
        src={imgProfile(comment.profile_img)}
        alt=""
      />
      <div
        className={
          isYouComment(comment.users_id) ? "c-y-cSpace-m" : "c-cSpace-m"
        }
      >
        <p
          className={isYouComment(comment.users_id) ? "y-cSpace-n" : "cSpace-n"}
        >
          {comment.username}
        </p>
        <p
          className={isYouComment(comment.users_id) ? "y-cSpace-c" : "cSpace-c"}
        >
          {comment.message}
        </p>
        <p
          className={isYouComment(comment.users_id) ? "y-cSpace-r" : "cSpace-r"}
        >
          {formatDate(comment.received)}
        </p>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}

Comment.propTypes = {
  comment: propTypes.shape({
    profile_img: propTypes.number,
    username: propTypes.string,
    message: propTypes.string,
    received: propTypes.string,
    users_id: propTypes.number,
  }).isRequired,
  imgProfile: propTypes.func.isRequired,
  formatDate: propTypes.func.isRequired,
  messagesEndRef: propTypes.shape({ current: propTypes.instanceOf(Object) })
    .isRequired,
  isYouComment: propTypes.func.isRequired,
};

export default Comment;
