const ErrorMessage = (props) => {
  return (
    <p
      className='text-red-500 text-sm mt-3 h-2 transition-all duration-1000'
      style={{ marginBlockStart: 0, marginBlockEnd: 0 }}
    >
      {props.children}
    </p>
  );
};

export default ErrorMessage;
