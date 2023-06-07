import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

export default function Login() {
  return (
    <div className="grid  place-items-center mt-10 gap-y-8">
      <BsTwitter className="pl-1" color="#1D9BF0" size={35} />
      <h1 className="text-2xl font-bold">Sign in to Twitter</h1>
      <form className="grid place-items-center gap-y-8" action="">
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
        <button className="text-white font-bold bg-black w-64 py-2 rounded-full">
          Login
        </button>
      </form>
      <p>Don't have an account?</p>
      <Link className="text-cyan-300 font-medium" href="/register">
        Sing up
      </Link>
    </div>
  );
}
