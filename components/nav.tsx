'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import Logo from '/public/120x50.png';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

interface NavItem {
    name : string,
    link : string
}

export default function Nav() {

    const icons = [faUser, faCode, faWindowMaximize];
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [menuList, setMenuList] = useState<NavItem[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/nav");
                const data = await res.json();
                setMenuList(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    return (
        <>
            <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/">
                        <h1>
                            <Image width={120} height={50} src={Logo} alt="로고" title="로고" />
                        </h1>
                    </Link>
                    <div className="basis-3/4 hidden md:block">
                        <ul className="flex justify-around">
                            {
                                menuList.map((e, i) => { // map문 : 원본이 유지되는 새로운 반복문, foreach문 : 원본 수정 가능, 근데 react에서는 못 씀
                                    return (
                                        <li className="relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100" key={i}><Link href={e.link}>{e.name}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fixed right-5 top-5 transition-all duration-500 z-[51] cursor-pointer md:hidden" onClick={toggleMenu}>
                <div className={`w-[30px] h-[5px] bg-[#FA8072] dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-1000 ${menuActive ? 'rotate-[1845deg] translate-y-[10px]' : ''}`}></div>
                <div className={`w-[30px] h-[5px] bg-[#FA8072] dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-1000 ${menuActive ? 'opacity-0 -translate-x-8' : ''}`}></div>
                <div className={`w-[30px] h-[5px] bg-[#FA8072] dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-1000 ${menuActive ? '-rotate-[1845deg] -translate-y-[10px]' : ''}`}></div>
            </div>
            <div className={`w-72 h-full fixed top-0 bg-[#feefed] z-50 p-12 box-border transition-all duration-1000 md:hidden ${menuActive ? 'right-0' : '-right-72 rotate-[1800deg]'}`}>
                <div className="text-center mt-6">
                    <Image src="https://via.placeholder.com/100" alt="100x100" title="100x100" width={100} height={100} className="mx-auto rounded-full mb-4" />
                    <p>프론트엔드 개발자 김준면</p>
                </div>
                <ul className="mt-12">
                    {
                        menuList.map((e, i) => {
                            return (
                                <li key={i} className="pt-5 pb-2 border-b border-[#fdc3bc] hover:font-bold"><FontAwesomeIcon icon={icons[i]} className="mr-2" /><Link href={e.link}>{e.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}