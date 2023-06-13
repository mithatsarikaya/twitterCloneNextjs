"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import TwitterIconToHome from "../components/TwitterIconToHome";

export default function Login() {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setSuccess(params.get("success"));
    setError(params.get("error"));
  }, [params]);

  if (session.status === "loading") {
    return <p className="p-20">Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const username = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      username,
      password,
    });
  };

  return (
    <div className="grid  place-items-center mt-10 gap-y-8">
      <TwitterIconToHome />
      <h1>{success ? success : "Welcome Back"}</h1>
      <h1 className="text-2xl font-bold">Sign in to Twitter</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid place-items-center gap-y-8"
        action=""
      >
        <input
          required
          className="border-2 py-5 px-2"
          placeholder="username"
          type="text"
        />
        <input
          required
          className="border-2 py-5 px-2"
          placeholder="password"
          type="text"
        />
        {error && <p className="text-red-700">{error}</p>}
        <button className="text-white font-bold bg-black w-64 py-2 rounded-full hover:bg-slate-800">
          Login
        </button>
      </form>
      <p>Don't have an account?</p>
      <Link className="text-cyan-300 font-medium" href="/register">
        Sign up
      </Link>
    </div>
  );
}
