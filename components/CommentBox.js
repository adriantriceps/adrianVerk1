var CommentList = require("./CommentList");
var CommentForm = require("./CommentForm");

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
export default CommentBox;
