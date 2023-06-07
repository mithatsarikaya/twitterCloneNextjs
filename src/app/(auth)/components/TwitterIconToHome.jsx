import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

export default function TwitterIconToHome() {
  return (
    <Link href="/">
      <BsTwitter className="pl-1" color="#1D9BF0" size={35} />
    </Link>
  );
}
