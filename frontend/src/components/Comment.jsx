import propTypes from "prop-types";

function Comment({ comment, imgProfile, formatDate }) {
  return (
    <div className="u-cSpace">
      <img src={imgProfile(comment.profile_img)} alt="" />
      <p className="cSpace-n">{comment.username}</p>
      <p className="cSpace-c">{comment.message}</p>
      <p className="cSpace-r">{formatDate(comment.received)} </p>
    </div>
  );
}

Comment.propTypes = {
  comment: propTypes.shape({
    profile_img: propTypes.number,
    username: propTypes.string,
    message: propTypes.string,
    received: propTypes.string,
  }).isRequired,
  imgProfile: propTypes.func.isRequired,
  formatDate: propTypes.func.isRequired,
};

export default Comment;
