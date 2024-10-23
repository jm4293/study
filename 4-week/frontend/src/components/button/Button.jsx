export const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold m-0 py-2 px-4 rounded whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
};
