import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { LuHash } from "react-icons/lu";
import { AiOutlineBell } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const session = useSession();
  return (
    <div className="bg-white w-3/12 pt-3">
      {session.status === "authenticated" ? (
        <div className="pl-20">
          <Link href="#">
            <BsTwitter className="pl-1" color="#1D9BF0" size={30} />
          </Link>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <BiHomeCircle color="black" size={30} />
            Anasayfa
          </a>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <LuHash color="black" size={30} />
            Keşfet
          </a>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <AiOutlineBell color="black" size={30} />
            Bildirimler
          </a>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <BsEnvelope color="black" size={30} />
            Mesajlar
          </a>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <RiFileListLine color="black" size={30} />
            Listeler
          </a>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <BsBookmark color="black" size={30} />
            Yer İşaretleri
          </a>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <BsPerson color="black" size={30} />
            Profil
          </a>
          <a
            onClick={signOut}
            className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 "
          >
            <LuLogOut color="black" size={30} />
            Çıkış
          </a>
        </div>
      ) : (
        <div className="pl-20">
          <Link href="#">
            <BsTwitter className="pl-1" color="#1D9BF0" size={30} />
          </Link>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <BsBookmark color="black" size={30} />
            Yer İşaretleri
          </a>
          <a className="flex pl-1 py-2 gap-4 rounded-full cursor-pointer text-lg mt-3 font-normal hover:bg-slate-200 ">
            <BsPerson color="black" size={30} />
            Profil
          </a>
        </div>
      )}
    </div>
  );
}
