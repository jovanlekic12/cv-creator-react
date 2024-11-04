function Input(props) {
  const { placeholder, name, onChange } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input"
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;
