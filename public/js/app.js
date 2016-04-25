var CommentBox = React.createClass({//takes in an object, is our parent container!
  getInitialState: function () {
    return { data: [] };//setting the state to an array
  },
  loadArtistsFromServer: function () {
    var _this = this;
    $.ajax({
      url: this.props.url,
      method: "GET",
      dataType: "json",
      success: function (data) {
        _this.setState({data: data});
        console.log(data[0].link);
      }
    });
  },
  componentWillMount: function () {
    this.loadArtistsFromServer();
  },
  // handleCommentSubmit: function (comment) {
  //   console.log(comment);
  //   var _this = this;
  //   $.ajax({
  //     url: this.props.url,
  //     method: "POST",
  //     dataType: "json",
  //     data: comment,
  //     success: function (data) {
  //       console.log(data);
  //       _this.setState({data: _this.state.data.concat(data)});
  //     }
  //   });
  // },
  componentDidMount: function () {
    this.loadArtistsFromServer();
    // setInterval(this.loadArtistsFromServer, 5000);
  },
  render: function () {
    console.log(this.state.data);
    return (
      <div className="commentBox">
        <ul>
          <li>
            
          </li>
        </ul>
      </div>
    )
  }
});

var comments = [
  { id: 1, author: "Tony", text: "React is Cool. "},
  { id: 2, author: "Jesse", text: "React is da **bomb**. "}
];



ReactDOM.render(
  <CommentBox url="http://localhost:3000/producers" />,
  document.getElementById('app')
);