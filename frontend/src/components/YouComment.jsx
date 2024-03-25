import propTypes from "prop-types";

function YouComment({ comment, imgProfile, formatDate }) {
  return (
    <div className="u-cSpace-y">
      <img src={imgProfile(comment.profile_img)} alt="" />
      <p className="cSpace-n-y">{comment.username}</p>
      <p className="cSpace-c-y">{comment.message}</p>
      <p className="cSpace-r-y">{formatDate(comment.received)} </p>
    </div>
  );
}

YouComment.propTypes = {
  comment: propTypes.shape({
    profile_img: propTypes.number,
    username: propTypes.string,
    message: propTypes.string,
    received: propTypes.string,
  }).isRequired,
  imgProfile: propTypes.func.isRequired,
  formatDate: propTypes.func.isRequired,
};

export default YouComment;
