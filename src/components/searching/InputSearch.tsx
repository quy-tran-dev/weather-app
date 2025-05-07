export default function InputSearch() {
    return (
        <div> <div className="flex justify-between items-center">
            <form className="flex items-center w-full max-w-md bg-[#f9f9f9] rounded-lg px-4 py-2 text-gray-400 text-sm">
                <input className="bg-transparent outline-none w-full placeholder:text-gray-400" placeholder="Search here ..." type="text" />
                <button className="text-gray-400" type="submit">
                    <i className="fas fa-search">
                    </i>
                </button>
            </form>
            <div className="flex items-center gap-6 ml-6 text-gray-600">
                <button aria-label="Notifications" className="text-lg hover:text-gray-800 transition-colors duration-300">
                    <i className="far fa-bell">
                    </i>
                </button>
                <button aria-label="User" className="text-lg hover:text-gray-800 transition-colors duration-300">
                    <i className="far fa-user-circle">
                    </i>
                </button>
                <img alt="User avatar placeholder, circular with letter U" className="w-8 h-8 rounded-full object-cover" height="32" src="https://storage.googleapis.com/a1aa/image/aa4c475c-87ef-4a59-3644-9bba81a6635d.jpg" width="32" />
            </div>
        </div>
        </div>
    )
}
