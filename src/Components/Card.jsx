/* eslint-disable react/prop-types */
export default function Card({ children, bg = "bg-gray-300" }) {
  return <div className={`${bg} rounded-lg p-8 w-[25%]`}>{children}</div>;
}
