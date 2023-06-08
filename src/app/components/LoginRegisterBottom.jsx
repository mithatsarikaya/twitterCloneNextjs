import Link from "next/link";

export default function LoginRegisterBottom() {
  return (
    <div className="w-screen h-100 bg-[#1d9bf0] left-0 bottom-0 fixed">
      <div className="text-white flex items-center justify-evenly">
        <div className="py-3">
          <p className="text-xl font-bold">Don't miss what's happening</p>
          <span className="test-sm">
            People on Twitter are the first to know
          </span>
        </div>
        <div>
          <Link href="/login">
            <button className="border-2 rounded-full px-2 py-1 mr-1 font-bold hover:bg-blue-400">
              Log in{" "}
            </button>
          </Link>
          <Link href="/register">
            <button className=" bg-white border-slate-200 text-black border-2 rounded-full px-2 py-1 mr-1 hover:bg-slate-300">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
