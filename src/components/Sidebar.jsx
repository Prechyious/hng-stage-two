import { Link } from "react-router-dom";
import tv from "../assets/tv.png";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { PiVideoBold } from "react-icons/pi";
import { LiaCalendar } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
    const [openSideBar, setOpenSideBar] = useState(true);

    const navLinks = [
        {
            title: "Home",
            link: "/",
            icon: <AiOutlineHome />,
            active: false,
        },
        {
            title: "Movies",
            link: "/movies/:movieId",
            icon: <BiCameraMovie />,
            active: true,
        },
        {
            title: "TV Series",
            icon: <PiVideoBold />,
            active: false,
        },
        {
            title: "Upcoming",
            icon: <LiaCalendar />,
            active: false,
        },
    ];

    const openMenu = () => {
        setOpenSideBar(!openSideBar);
    };

    return (
        <>
            <aside
                className={`md:block border rounded-r-[2.8rem] fixed md:relative h-screen z-10 bg-white shadow-md transition-all duration-300 ease-in-out md:left-0 ${
                    openSideBar
                        ? "left-0 opacity-100"
                        : "left-[-100%] opacity-0"
                }`}
            >
                <div className="mb-7 pt-10 px-4">
                    <Link
                        className="flex items-center gap-2 md:gap-5 text-xl font-bold"
                        to="/"
                    >
                        <img src={tv} alt="logo" className="h-10" />
                        MovieBox
                    </Link>
                </div>
                <nav className="flex flex-col w-full mb-5">
                    {navLinks.map(({ icon, title, link, active }) => {
                        return (
                            <Link
                                key={title}
                                to={link}
                                className={`flex items-center gap-2 py-5 px-6 text-gray-600 text-base hover:border-r-4 hover:border-rose-700 hover:bg-rose-100 duration-300 ${
                                    active &&
                                    "border-r-4 border-rose-700 bg-rose-100"
                                }`}
                            >
                                {icon}
                                <span
                                    className={`${
                                        active && "text-rose-700"
                                    } font-bold`}
                                >
                                    {title}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
                <div className="bg-rose-50 border border-rose-400 rounded-[1.25rem] p-2 w-40 h-48 mx-6 mb-10">
                    <p className=" mt-8 mb-2 text-sm font-semibold text-gray-700 px-2">
                        Play movie quizes and earn <br /> free tickets
                    </p>
                    <p className="text-[0.7rem] font-medium text-[#666] px-2 mb-2">
                        50k people are playing now
                    </p>
                    <button className="text-rose-700 bg-rose-200 text-xs font-medium border-rose-700 px-2 py-1 rounded-full mx-6">
                        Start playing
                    </button>
                </div>

                <button className="flex items-center gap-2 mx-11 text-gray-600 text-base font-bold">
                    <TbLogout size={18} />
                    <span>Log Out</span>
                </button>
            </aside>
            <button
                onClick={openMenu}
                className={`fixed md:hidden z-[9] cursor-pointer duration-300 ease-in-out ${
                    openSideBar ? "left-[13rem]" : "left-1"
                } top-12`}
            >
                {openSideBar ? (
                    <FaChevronLeft className="bg-rose-700 h-7 md:h-8 w-7 md:w-8 rounded-full p-1 md:p-1.5 text-gray-100" />
                ) : (
                    <FaChevronRight className="bg-rose-700 h-7 md:h-8 w-7 md:w-8 rounded-full p-1 md:p-1.5 text-gray-100" />
                )}
            </button>
        </>
    );
};

export default Sidebar;
