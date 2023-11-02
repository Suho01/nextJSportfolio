import { NextRequest, NextResponse } from "next/server";

interface AboutItem {
    title : string;
    desc? : string;
    desc2? : string;
    date? : string[];
    dateDesc? : string[];
}
interface NavItem {
    name : string,
    link : string
}
interface SkillItem {
    title : string;
    progressBefore : number;
    progressAfter : number;
    desc : string;
}
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
    original ? : string;
    create : string;
    git : string;
}

export const GET = async (req : NextRequest) : Promise<NextResponse> => {
    const type = req.nextUrl.searchParams.get("type");
    
    switch(type) {
        case 'about' :
            const data : AboutItem[] = [
                {
                    title : "◆ MIND",
                    desc : "혼자 부딪혀봐야 온전히 내 것이 된다",
                    desc2 : "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제 해결하는 것을 좋아합니다."
                },
                {
                    title : "◆ EDUCATION",
                    date : [
                        "2023.06.29 ~ 2023.11.29",
                        "2023.01.01 ~ 2023.11.30",
                        "2023.06.29 ~ 2023.11.30",
                        "2023.06.29 ~ 2023.11.30"
                    ],
                    dateDesc : [
                        "(혼합 + 디지털 컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A",
                        "설명2",
                        "설명3",
                        "설명4"
                    ]
                },
                {
                    title : "◆ LICENSE",
                    date : [
                        "2023.06",
                        "2023.05",
                        "2023.04"
                    ],
                    dateDesc : [
                        "자격증 이름1",
                        "자격증 이름2",
                        "자격증 이름3"
                    ]
                }
            ]
        
            return NextResponse.json({data});

        case 'nav' :
            const dataNav : NavItem[] = [
                {
                    name : "소개",
                    link : "/about"
                },
                {
                    name : "스킬",
                    link : "/skills"
                },
                {
                    name : "포트폴리오",
                    link : "work"
                }
            ]
        
            return NextResponse.json({dataNav});

        case 'skill' :
            const dataSkill : SkillItem[] = [
                {
                    title : "HTML",
                    progressBefore : 0,
                    progressAfter : 80,
                    desc : "웹표준에 준수하여 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃 구성을 할 수 있다."
                },
                {
                    title : "CSS",
                    progressBefore : 0,
                    progressAfter : 90,
                    desc : "마크업에 작성된 Class를 토대로 디자인을 할 수 있다."
                },
                {
                    title : "JavaScript",
                    progressBefore : 0,
                    progressAfter : 70,
                    desc : "웹 페이지 내 동적인 기능을 구현, 서버의 데이터를 수신해 가공할 수 있다."
                },
                {
                    title : "React",
                    progressBefore : 0,
                    progressAfter : 40,
                    desc : "REACT를 활용하여 SPA 사이트 제작을 할 수 있다."
                },
                {
                    title : "NextJS",
                    progressBefore : 0,
                    progressAfter : 60,
                    desc : "REACT 프레임워크 NextJS를 활용하여 SSR 사이트 제작을 할 수 있다."
                }
            ]
        
            return NextResponse.json({dataSkill});

        case 'work' :
            const dataWork : WorkItem[] = [
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
        
            return NextResponse.json({dataWork});

        default :
        req.json({error : "파라미터 에러 발생"});
    }
}