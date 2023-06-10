"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TwitterIconToHome from "../components/TwitterIconToHome";

export default function Register() {
  const [info, setInfos] = useState({
    username: "",
    pwd: "",
    pwd2: "",
  });

  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      res.status === 201 &&
        (console.log(res),
        router.push("/login?success=Account has been created"));

      console.log("what");
    } catch (err) {
      setError(err);
      console.log("problem");
      console.log(err);
    }
  };

  return (
    <div className="grid  place-items-center mt-10 gap-y-8">
      <TwitterIconToHome />
      <h1 className="text-2xl font-bold">Register to Twitter</h1>
      <form
        onSubmit={handleSubmit}
        className="grid place-items-center gap-y-8"
        action=""
      >
        <input
          required
          name="username"
          className="border-2 py-5 px-2 text-black"
          placeholder="username"
          type="text"
        />
        <input
          required
          name="pwd"
          className="border-2 py-5 px-2 text-black"
          placeholder="password"
          type="text"
        />
        {/* <input
          required
          name="pwd2"
          className="border-2 py-5 px-2"
          onChange={handleChange}
          placeholder="password"
          type="text"
        /> */}
        <button className="text-white font-bold bg-black w-64 py-2 rounded-full hover:bg-slate-800">
          Register
        </button>
      </form>
      {error && <p>{error}</p>}
      <p>Already have a account?</p>
      <Link className="text-cyan-300 font-medium" href="login">
        Login
      </Link>
    </div>
  );
}
