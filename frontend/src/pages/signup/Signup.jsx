import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> ChatWave</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full input input-bordered h-10"
            />

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Comfirm Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter your password again"
                className="w-full input input-bordered h-10"
              />
            </div>

						<GenderCheckbox />

            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              Already have an account?
            </a>

            <div>
              <button className="btn btn-block btn-sm mt-2">Sing Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup
//           <span className="text-blue-500"> ChatWave</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your fullname"
//               className="w-full input input-bordered h-10"
//             />

//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>

//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>

//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Comfirm Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your password again"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>

// 						<GenderCheckbox />

//             <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//               Already have an account?
//             </a>

//             <div>
//               <button className="btn btn-block btn-sm mt-2">Sing Up</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

