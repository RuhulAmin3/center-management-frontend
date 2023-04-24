import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { HiOutlineMenu, HiDocumentReport } from "react-icons/hi";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { FaPeopleArrows, FaPencilRuler } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillAccountBook } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [studentMenuToggle, setStudentMenuToggle] = useState(false);
  const [teachersMenuToggle, setTeachersMenuToggle] = useState(false);
  const [classToggle, setClassToggle] = useState(false);
  const [accountToggle, setAccountToggle] = useState(false);

  return (
    <>
      <div className="bg-primary flex items-center justify-between p-2">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <span className="text-3xl text-white cursor-pointer">
          <HiOutlineMenu />
        </span>
      </div>
      <div>
        <ul className="flex flex-col bg-[#042954] text-[#a3aab3]">
          <li>
            <span
              onClick={() => setStudentMenuToggle(!studentMenuToggle)}
              className="cursor-pointer flex items-center justify-between px-5 py-3"
            >
              <span className="flex gap-3 items-center">
                <FaPeopleArrows className="text-primary text-2xl" />
                Students{" "}
              </span>
              {studentMenuToggle && (
                <RiArrowDownSLine className="font-bold text-xl" />
              )}
              {studentMenuToggle || (
                <RiArrowRightSLine className="font-bold text-xl" />
              )}
            </span>
            {studentMenuToggle && (
              <ul className="bg-[#051f3e] py-3">
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">All Students</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Student Details</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Admission Form</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Fees Report</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span
              onClick={() => setTeachersMenuToggle(!teachersMenuToggle)}
              className="cursor-pointer flex items-center justify-between px-5 py-3"
            >
              <span className="flex gap-3 items-center">
                <IoIosPeople className="text-primary text-2xl" />
                Teachers{" "}
              </span>
              {teachersMenuToggle && (
                <RiArrowDownSLine className="font-bold text-xl" />
              )}
              {teachersMenuToggle || (
                <RiArrowRightSLine className="font-bold text-xl" />
              )}
            </span>
            {teachersMenuToggle && (
              <ul className="bg-[#051f3e] py-3">
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">All Teachers</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Teachers Details</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Add Teacher</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Payment Report</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span
              onClick={() => setClassToggle(!classToggle)}
              className="cursor-pointer flex items-center justify-between px-5 py-3"
            >
              <span className="flex gap-3 items-center">
                <FaPencilRuler className="text-primary text-xl" />
                Class{" "}
              </span>
              {classToggle && (
                <RiArrowDownSLine className="font-bold text-xl" />
              )}
              {classToggle || (
                <RiArrowRightSLine className="font-bold text-xl" />
              )}
            </span>
            {classToggle && (
              <ul className="bg-[#051f3e] py-3">
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">All Classes</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Add New Class</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span
              onClick={() => setAccountToggle(!accountToggle)}
              className="cursor-pointer flex items-center justify-between px-5 py-3"
            >
              <span className="flex gap-3 items-center">
                <AiFillAccountBook className="text-primary text-2xl" />
                Account{" "}
              </span>
              {accountToggle && (
                <RiArrowDownSLine className="font-bold text-xl" />
              )}
              {accountToggle || (
                <RiArrowRightSLine className="font-bold text-xl" />
              )}
            </span>
            {accountToggle && (
              <ul className="bg-[#051f3e] py-3">
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">All Fees Collection</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Expenses</a>
                </li>
                <li className="pl-10 py-3 flex gap-2 items-center hover:bg-[#042954] hover:text-white ease-in duration-300">
                  <RiArrowRightSLine className="font-bold text-xl" />
                  <a href="#">Add New Expense</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span className="cursor-pointer flex items-center justify-between px-5 py-3">
              <span className="flex gap-3 items-center">
                <TbReport className="text-primary text-2xl" />
                Attendence Report{" "}
              </span>
            </span>
          </li>
          <li>
            <span className="cursor-pointer flex items-center justify-between px-5 py-3">
              <span className="flex gap-3 items-center">
                <HiDocumentReport className="text-primary text-2xl" />
                Exam Result Report{" "}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
