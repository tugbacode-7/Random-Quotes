export const Card = ({ children }) => {
  return (
    <div className="border-md bg-olive-300 shadow-2xl max-w-150 m-auto mt-100 rounded-2xl text-m px-20 py-15 flex flex-col place-content-between h-90">
      {children}
    </div>
  );
};
