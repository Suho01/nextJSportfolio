'use client'
import { useState, useEffect } from "react"

interface PortfolioItem {
    title : string;
    desc : string[];
    desc2 : string[];
}

export default function Portfolio() {
    const [skillList, setSkillList] = useState<PortfolioItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/portfolio");
                const data = await res.json();
                setSkillList(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {
                skillList.map((e, i) => {
                    console.log(e, i);
                    return (
                        <p>{e.title}</p>
                    )
                })
            }
        </>
    )
}
