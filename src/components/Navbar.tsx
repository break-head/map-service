import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center fixed w-full h-[52px] top-0 shadow-sm bg-white">
        <Link href="/" className="text-blue-800 text-lg font-semibold cursor-pointer px-[18px] py-0">
          nextmap
        </Link>
        <div className="flex gap-3 items-center px-[18px] py-0 ">
          <Link href="/stores" className="cursor-pointer hover:text-gray-500 max-sm:hidden ">
            맛집목록
          </Link>
          <Link href="/stores/new" className="cursor-pointer hover:text-gray-500 max-sm:hidden">
            맛집 생성
          </Link>
          <Link href="/users/mypage" className="cursor-pointer hover:text-gray-500 max-sm:hidden">
            마이 페이지
          </Link>
          <Link href="/users/likes" className="cursor-pointer hover:text-gray-500 max-sm:hidden">
            찜한 페이지
          </Link>
          <Link href="/users/login" className="cursor-pointer hover:text-gray-500 max-sm:hidden">
            로그인
          </Link>
        </div>
        {/* mobile buttion */}
        <div className="hidden max-sm:block px-[18px] py-0 cursor-pointer" onClick={() => setIsOpen((val) => !val)}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      {isOpen && (
        <div className="hidden max-sm:block fixed w-full text-white h-screen top-[52px] bg-blue-800  ">
          <div className="flex flex-col gap-4 px-[18px] py-6">
            <Link href="/stores" className="cursor-pointer hover:text-gray-500">
              맛집목록
            </Link>
            <Link href="/stores/new" className="cursor-pointer hover:text-gray-500">
              맛집 생성
            </Link>
            <Link href="/users/login" className="cursor-pointer hover:text-gray-500">
              로그인 페이지
            </Link>
            <Link href="/users/mypage" className="cursor-pointer hover:text-gray-500">
              마이 페이지
            </Link>
            <Link href="/users/likes" className="cursor-pointer hover:text-gray-500">
              찜한 페이지
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
