/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import Jobs from "./Jobs";

// export default function JobLists({ isHome }) {
//   return (
//     <section className="bg-blue-50 px-4 py-10">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
//           {isHome ? "Recent Jobs" : "Browse Jobs"}
//         </h2>
//         <Jobs isHome = {true}/>
//       </div>
//     </section>
//   );
// }

import Jobs from "./Jobs";

export default function JobLists({ isHome }) {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <Jobs isHome={isHome} />
      </div>
    </section>
  );
}
