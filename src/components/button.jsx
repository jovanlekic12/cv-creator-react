function Button(props) {
  const { textContent, onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      {textContent}
    </button>
  );
}

export default Button;
