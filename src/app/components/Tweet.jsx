import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
export default function Tweet() {
  return (
    <div className="px-4 border-b-2 flex  h-auto">
      <div className="h-10 w-10 bg-cyan-600 rounded-full mt-5"></div>
      <div className="flex-grow ml-2">
        <h3 className="font-bold mt-2">User</h3>
        <p className="overflow-y  max-w-2xl break-words">
          Burası asagı dogru buyumeli yana dogru degil
        </p>
        <div className="float-right flex items-center">
          <span className=" pr-5  text-sm">140</span>
          <button className="p-1 my-1 rounded-full hover:bg-red-500">
            <AiOutlineHeart size="20px" />
          </button>
          <span className="ml-10 pr-3  text-sm">140</span>
          <button className="p-1 my-1 rounded-full hover:bg-red-700">
            <FiTrash size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}
