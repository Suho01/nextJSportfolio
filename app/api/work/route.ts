import { NextResponse } from "next/server";

interface WorkItem {
    img : string;
    descTitle : string;
    desc : string;
    keyword : string[];
    color : string[];
    font : string;
    tools : string[];
    date : string;
    contribution : string;
    type : string;
    original ? : string; // 있을 수도 있고 없을 수도 있어서
    create : string;
    git : string;
}
interface WorkData {
    data : WorkItem[];
}

export async function GET() : Promise<NextResponse> {
    const data : WorkItem[] = [
        {
            img : "https://via.placeholder.com/500",
            descTitle : "Suho 사이트 클론코딩",
            desc : "Suho 사이트 클론코딩을 했습니다..",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Clone",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "Sancho 사이트 클론코딩",
            desc : "Sancho 사이트 클론코딩을 했습니다..",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Clone",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "Cotton 사이트 클론코딩",
            desc : "Cotton 사이트 클론코딩을 했습니다..",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Clone",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "푸리푸리 puripuri",
            desc : "유기동물 보호 사이트",
            keyword : ["#사랑", "#행복", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "20%",
            type : "Project",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "다중도어락 Ku keeper",
            desc : "졸업작품 다중도어락",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Project",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "면 전문 쇼핑몰 Cotton01",
            desc : "면을 파는 쇼핑몰",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Project",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "Suho 사이트 클론코딩",
            desc : "Suho 사이트 클론코딩을 했습니다..",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "Suho 사이트 클론코딩",
            desc : "Suho 사이트 클론코딩을 했습니다..",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
        {
            img : "https://via.placeholder.com/500",
            descTitle : "Suho 사이트 클론코딩",
            desc : "Suho 사이트 클론코딩을 했습니다..",
            keyword : ["#심플", "#깔끔", "#반응형"],
            color : ["orange", "salmon", "blue"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS Code", "Git"],
            date : "30분",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            create : "https://www.naver.com",
            git : "https://www.github.com"
        },
    ]

    return NextResponse.json({data} as WorkData);
}