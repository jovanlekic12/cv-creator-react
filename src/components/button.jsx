function Button(props) {
  const { textContent } = props;
  return <button className="btn">{textContent}</button>;
}

export default Button;
