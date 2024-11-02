function Input(props) {
  const { placeholder } = props;
  return <input type="text" placeholder={placeholder} className="input" />;
}

export default Input;
