function Button(props) {
  const { onClick, textContent } = props;
  return (
    <button className="btn" onClick={onClick}>
      {textContent}
    </button>
  );
}

export default Button;
