import { NextResponse } from "next/server";

interface PortfolioItem {
    title : string;
    desc : string[];
    desc2 : string[];
}
interface PortfolioData {
    data : PortfolioItem[];
}

export async function GET() : Promise<NextResponse> {
    const data : PortfolioItem[] = [
        {
            title : "LanguageArray",
            desc : ["Javascript", "Typescript", "NextJS"],
            desc2 : [
                "함수를 사용할 줄 압니다.",
                "타입을 선언할 줄 압니다.",
                "사용해봤습니다."
            ]
        },
        {
            title : "Framework / Library",
            desc : ["React", "NodeJS"],
            desc2 : [
                "상태 관리 및 redux 활용 가능",
                "데이터베이스 연동 가능"
            ]
        },
        {
            title : "MarkUp",
            desc : ["HTML", "CSS", "SCSS", "TailwindCSS", "Styled Components"],
            desc2 : [
                "시맨틱 마크업과 브라우저 렌더링 프로세스에 대해서 잘 알고 있습니다.",
                "완존 잘해요",
                "완벽하게 쓸 줄 알아요 제 별명이 scss성애자",
                "다크모드, 다국어, 모바일 반응형 구현 삽가능",
                "아 쌉 가능"
            ]
        },
        {
            title : "Database",
            desc : ["MongoDB", "Mysql"],
            desc2 : [
                "몽골에서 온 몽고디비인가?",
                "학교에서 배웟는데 테이블 잘 만듦"
            ]
        },
        {
            title : "Tool",
            desc : ["Git", "Github", "Figma", "Adobe Photoshop", "Adobe Illustrator"],
            desc2 : [
                "이거 못하면 개발자 아님..",
                "이거 모르면 취업 못 함..",
                "피그마 선생님 조아요",
                "디자인 마스터",
                "10세에 GTQ 마스터 하다 . . ."
            ]
        }
    ]

    return NextResponse.json({data} as PortfolioData);
}