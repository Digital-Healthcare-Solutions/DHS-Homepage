const ButtonPrimary = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md font-sans flex items-center
      ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
