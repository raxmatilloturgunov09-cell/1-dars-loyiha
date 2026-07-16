import React, { useRef } from "react";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_BASE_URL;

function LoginForm() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

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

      if (!response.ok) {
        throw new Error(data.message || "Login xato!");
      }

      localStorage.setItem("access", data.data.access);
      localStorage.setItem("refresh", data.data.refresh);

      navigate("/admin");
    } catch (error) {
      toast.error(error.message || "Login xato!");
    }
  }

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-indigo-600 font-bold text-xl mb-8 flex items-center gap-1">
        <FiEdit />
        Blogify
      </h1>

      <Link
        to="/"
        className="text-sm block text-gray-500 hover:text-black mb-8"
      >
        ← Back to Home
      </Link>

      <div className="border rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome Back
        </h2>

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
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
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