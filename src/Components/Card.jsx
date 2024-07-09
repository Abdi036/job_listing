/* eslint-disable react/prop-types */
export default function Card({ children, bg = "bg-gray-300" }) {
  return (
    <div className={`${bg} rounded-lg p-8 w-full sm:w-[48%] lg:w-[23%]`}>
      {children}
    </div>
  );
}
