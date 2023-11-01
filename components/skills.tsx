'use client'
import { useState, useEffect } from "react"

interface SkillItem {
    title : string;
    progressBefore : number;
    progressAfter : number;
    desc : string;
}

export default function Skills() {

    const [itemList, setItemList] = useState<SkillItem[]>([]);
    const [progressBar, setProgressBar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/skills");
                const data = await res.json();
                setItemList(data.data);
                
                setTimeout(() => {
                    setProgressBar(true);
                }, 500);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {
                itemList.map((e, i) => {
                    return (
                        <div key={i} className="w-full h-20">
                            <div className="w-full h-5 bg-[#e0e0de] rounded-[50px]">
                                <div className={`h-full bg-[#FA8072] duration-1000 ease-out rounded-[50px] text-right relative mb-3 first:mt-10`} style={{width : !progressBar ? e.progressBefore : e.progressAfter + "%"}}>
                                    <p className="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{e.title}</p>
                                </div>
                            </div>
                            <p className="text-xs md:text-sm">{e.desc}</p>
                        </div>
                    )
                })
            }
        </>
    )
}