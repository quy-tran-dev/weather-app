import { div } from "framer-motion/client";
import { X } from "lucide-react";
import { useState } from "react";

export default function InputSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isClicked, setIsClicked] = useState(true);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>,) => {
        e.preventDefault();
    }
    return (
        <div className="flex items-center justify-end rounded-xl shadow-sm w-full">
            {
                isClicked ?
                    <div className="flex items-center gap-3 ml-2 text-gray-600 ">
                        {/* <h3 className="text-2xl font-semibold text-gray-300">Thời tiết</h3> */}
                        <button className="text-gray-400 px-3 py-2" type="submit" onClick={() => setIsClicked(false)}>
                            <i className="fas fa-search">
                            </i>
                        </button>
                    </div>
                    :
                    <div className="flex items-center gap-1 ml-2 text-gray-600 w-full">
                        <form className="flex items-center w-full bg-[#f9f9f9] rounded-xl px-4 py-2 text-gray-400 text-sm" onSubmit={handleSearch}>
                            <input className="bg-transparent outline-none w-full  placeholder:text-gray-400" placeholder="Nhập tên thành phố..." type="text" />
                            <button className="text-gray-400 hover:scale-110 cursor-pointer" type="submit" >
                                <i className="fas fa-search">
                                </i>
                            </button>
                        </form>
                        <div className="flex items-center p-2 rounded-xl cursor-pointer hover:scale-110">
                            <button className="text-lg text-gray-600 transition-colors duration-300 hover:scale-110">
                                <X className=" cursor-pointer hover:scale-110 hover:text-red-400 transition duration-300" onClick={() => setIsClicked(true)}/>
                            </button>
                        </div>
                    </div>
            }

        </div>
    )
}
