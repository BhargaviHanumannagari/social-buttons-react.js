const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`Button ${className}`}>{buttonText}</button>;
};

const element =
  //  Write your code here.
  render(
    <div className="container">
      <div className="content-container">
        <h1 className="heading">Social Buttons</h1>
        <div className="buttons-container">
          <button buttonText="Like" className="like-button" />
          <button buttonText="comment" className="comment-button" />
          <button buttonText="share" className="share-button" />
        </div>
      </div>
    </div>
  );

ReactDOM.render(element, document.getElementById("root"));
