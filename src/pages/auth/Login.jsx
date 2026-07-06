import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useRef } from "react";
const apiUrl = import.meta.env.VITE_BASE_URL;
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function LoginForm() {
  let navigate = useNavigate();
  let emailRef = useRef();
  let passwordRef = useRef();
  async function loginPost() {
    try {
      const response = await fetch(`${apiUrl}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("access", data.data.access);
      localStorage.setItem("refresh", data.data.refresh);
      navigate("/admin");
    } catch (error) {
      toast.error("Login xato!");
    }
  }
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-indigo-600 font-bold text-xl mb-8 flex items-center gap-1">
        <FiEdit />
        Blogify
      </h1>

      <Link
        to={"/"}
        className="text-sm block text-gray-500 hover:text-black mb-8"
      >
        ← Back to Home
      </Link>

      <div className="border rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>

        <p className="text-gray-500 text-sm mb-8">
          Enter your credentials to access your account
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginPost();
          }}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-indigo-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;




// import React from "react";
// import Input from "../../components/Input";
// import Button from "../../components/Button";

// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function LoginForm() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const baseUrl = import.meta.env.VITE_BASE_URL;

//   let navigate = useNavigate();

//   console.log(baseUrl);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const loginObj = {    
//       email: emailRef.current.value,
//       password: passwordRef.current.value,
//     };

//     try {
//       const response = await fetch(`${baseUrl}auth/login/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginObj),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login xato");
//       }

//       // Tokenni saqlash (agar API qaytarsa)
//       localStorage.setItem("access", data.access);
//       localStorage.setItem("refresh", data.refresh);
//       localStorage.setItem("access", data.data.access);
//       localStorage.setItem("refresh", data.data.refresh);

//       navigate("/admin");
//     } catch (error) {
//       toast(error.message);
//     }
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="border border-gray-400 flex flex-col gap-4 px-8 py-6 rounded-2xl"
//     >
//       <div>
//         <h1 className="font-extrabold mb-2 text-3xl">Welcome Back</h1>
//         <p className="mb-2 text-gray-400 text-[20px]">
//           Enter your credentials to access your account
//         </p>
//       </div>

//       <Input
//         ref={emailRef}
//         type={"email"}
//         label={"Email"}
//         placeholder={"name@gmail.com"}
//       />
//       <Input
//         ref={passwordRef}
//         type={"password"}
//         label={"Password"}
//         placeholder={"******"}
//       />

//       <Button variant="primary" text={"Login"} />
//     </form>
//   );
// }

// export default LoginForm;


// import React from "react";
// import LoginImg from "../../assets/images/Container 01.svg";
// import LoginForm from "../../components/LoginForm";
// function Login() {
//   return (
//     <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
//       <div className="flex items-center justify-center bg-white px-6 py-10">
//         <LoginForm />
//       </div>
//       <div className="hidden lg:flex items-center justify-center bg-[#f3f2ff]">
//         <div className="text-center">
//           <img src={LoginImg} alt="img" />
//           <h2 className="mt-10 text-3xl font-bold text-gray-900">
//             Start Your Journey
//           </h2>
//           <p className="mt-3 text-gray-500">
//             Join thousands of creators sharing their stories on Blogify
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;
