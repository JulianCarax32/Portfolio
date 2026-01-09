import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/JulianCarax32",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ivantesoro32/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    // {
    //     name: "LeetCode",
    //     link: "https://leetcode.com/dhruvilrathod/",
    //     simpleIconName: "leetcode",
    //     backgroundColor: "#FFA116",
    // },
    {
        name: "Gmail",
        link: "mailto:ivan.oroset@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/fucksorte/",
        simpleIconName: "instagram",
        backgroundColor: "#FF0069",
    }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    {
        name: ".NET",
        link: "https://dotnet.microsoft.com/",
        simpleIconName: "dotnet",
        backgroundColor: "#512BD4", //cercato a mano su simpleicons.org
    },
    // {
    //     name: "Sass",
    //     link: "https://sass-lang.com/",
    //     simpleIconName: "sass",
    //     backgroundColor: "#CC6699",
    // },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "nodedotjs",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "ExpressJS",
        link: "https://expressjs.com/",
        simpleIconName: "express",
        backgroundColor: "#000000",
    },
    {
        name: "Android",
        link: "https://www.android.com/",
        simpleIconName: "android",
        backgroundColor: "#3DDC84", //cercato a mano su simpleicons.org
    },
    {
        name: "iOS",
        link: "https://www.apple.com/it/ios",
        simpleIconName: "ios",
        backgroundColor: "#000000", //cercato a mano su simpleicons.org
    },
    // {
    //     name: "ThreeJS",
    //     link: "https://threejs.org/",
    //     simpleIconName: "threedotjs",
    //     backgroundColor: "#000000",
    // },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        simpleIconName: "tailwindcss",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    // {
    //     name: "PrimeNG",
    //     link: "https://primeng.org/",
    //     simpleIconName: "primeng",
    //     backgroundColor: "#DD0031",
    // },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "FULLSTACK_DEVELOPMENT",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "BUILDING_RESPONSIVE_WEBSITE_FRONT_END_USING_ANGULAR",
        "CREATING_APPLICATION_BACKEND_IN_NODE_EXPRESS_DOT_NET",
        "DEVELOPING_CUSTOM_AND_INTERACTIVE_MOBILE_APPS",
        "MANAGING_DATA_SAFELY_WITH_POSTGRESQL_AND_OTHER_RELATIONAL_DBMS"
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "GCP",
        link: "https://cloud.google.com/",
        simpleIconName: "googlecloud",
        backgroundColor: "#4285F4",
    },
    // {
    //     name: "AWS",
    //     link: "https://aws.amazon.com/",
    //     simpleIconName: "amazonwebservices",
    //     backgroundColor: "#232F3E",
    // },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "postgresql",
        backgroundColor: "#336791",
    },
    // {
    //     name: "MongoDB",
    //     link: "https://www.mongodb.com/",
    //     simpleIconName: "mongodb",
    //     backgroundColor: "#47A248",
    // },
    // {
    //     name: "Docker",
    //     link: "https://www.docker.com/",
    //     simpleIconName: "docker",
    //     backgroundColor: "#1488C6",
    // },
    {
        name: "Render",
        link: "https://render.com/",
        simpleIconName: "render",
        backgroundColor: "#000000",
    },
    // {
    //     name: "Heroku",
    //     link: "https://www.heroku.com/",
    //     simpleIconName: "heroku",
    //     backgroundColor: "#430098",
    // },
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "CLOUD_INFRA_ARCHITECTURE",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "EXPERIENCE_WORKING_ON_MULTIPLE_CLOUD_PLATFORMS",
        "HOSTING_AND_MAINTAINING_WEBSITES_WITH_CUSTOM_DOMAIN",
        "SETTING_UP_SOFTWARE_INTEGRATIONS"
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Adobe XD",
        link: "https://adobexdplatform.com/",
        simpleIconName: "adobexd",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "adobeillustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html/",
        simpleIconName: "adobephotoshop",
        backgroundColor: "#001e36",
    },
];

// Design section
const DesignSection: SkillSection = {
    sectionTitle: "UI_UX_DESIGN",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        // "DESIGNING_HIGHLY_ATTRACTIVE_UI",
        "CUSTOMIZING_LOGO_DESIGNS_AND_VIRTUAL_CARDS",
        "CREATING_FLOW_OF_APPLICATION_FUNCTIONALITIES"
    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [
    {
        name: "Gemini",
        link: "https://www.gemini.google.com/",
        simpleIconName: "googlegemini",
        backgroundColor: "#8E75B2", //cercato a mano su simpleicons.org
    },
    {
        name: "TP-Link",
        link: "https://www.tp-link.com/",
        simpleIconName: "tplink",
        backgroundColor: "#4ACBD6", //cercato a mano su simpleicons.org
    },
];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "DIGITAL_SOLUTIONS_CONSULTANCY",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "HELPING_LOCAL_BUSINESSES_SETUP_NETWORKS",
        "PROVIDING_RELIABLE_AND_CONFIDENTIAL_CONSULTANCY"
    ]
}

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "MY_PROJECTS",
    sectionSubtitle: "SHOWCASING_INNOVATIVE_SOLUTIONS_AND_REAL_WORLD_APPLICATIONS",
    entities: [
        {
            title: "BEACH_MANAGEMENT_SOFTWARE",
            coverImagePath: AssetPaths.PROJECT_JUSTBEACH,
            githubLink: "https://justbeach.org", //lo so non è github ma ci sta
            description: "JUSTBEACH_SHOWCASING_PROJECTS_AND_SKILLS",
            techStack: ["Angular", "Express", "Oracle Cloud"],
            year: "2025 - 2026"
        },
        {
            title: "LITERALLY_THIS_PORTFOLIO",
            coverImagePath: AssetPaths.PROJECT_THIS_ANGULAR_PORTFOLIO,
            // liveLink: "https://dhruvilrathod.github.io/webifcviewer/",
            githubLink: "https://github.com/JulianCarax32/Portfolio",
            description: "ANGULAR_BASED_PORTFOLIO_SHOWCASING_PROJECTS_AND_SKILLS",
            techStack: ["Angular", "NginX", "Oracle Cloud"],
            year: 2025
        },
        {
            title: "AUTOMATED_RESPONDER_FOR_HOTELS",
            coverImagePath: AssetPaths.PROJECT_NO_MORE_CLICK_APP,
            githubLink: "",
            description: "AUTOMATED_TOOL_OPTIMIZING_FIRST_RESPONSE_FLOW",
            techStack: ["Node.js", "MySQL", "Bootstrap"],
            year: 2023
        },
        // {
        //     title: "Angular + NestJS Boilerplate",
        //     coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
        //     githubLink: "https://github.com/dhruvilrathod/sample-angular-nest",
        //     description: "🛠️ A production-grade boilerplate integrating Angular, NestJS, and Nginx for seamless fullstack development. Perfect for kickstarting robust and scalable web applications.",
        //     techStack: ["Angular", "NestJS", "NgINX", "Docker"],
        //     year: 2023
        // },
        // {
        //     title: "Hospital Management System Dashboard",
        //     coverImagePath: AssetPaths.PROJECT_HMS_APP,
        //     githubLink: "https://github.com/freelancer-dhruvil/hms-demo",
        //     description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
        //     techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
        //     year: 2024
        // },
        // {
        //     title: "Cross-Platform Music Player",
        //     coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
        //     githubLink: "https://github.com/dhruvilrathod/music_player",
        //     description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
        //     techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
        //     year: 2023
        // }
    ]
}

// Freelancing projects
const ExtraProjects: ProjectSection = {
    sectionTitle: "EXTRA_PASSIONS",
    sectionSubtitle: "TRANSFORMING_PASSIONS_INTO_CREATIVE_SOLUTIONS",
    entities: [
        {
            title: "NOT_ONLY_CODING_ALSO_DRAWING",
            coverImagePath: AssetPaths.PROJECT_DRAWING,
            githubLink: "https://www.instagram.com/fucksorte/",
            description: "PERSONAL_JOURNEY_IN_DIGITAL_DRAWING",
            techStack: ["Clip Studio Paint"],
            year: 2021,
            branch: "resource-tree-utility"
        },
        {
            title: "NOT_ONLY_CODING_ALSO_SINGING",
            coverImagePath: AssetPaths.PROJECT_SPOTIFY,
            githubLink: "https://open.spotify.com/intl-it/artist/4SlSs9WDkQsLmfM0UdLFWz",
            description: "PASSION_PROJECT_ROOTED_IN_MUSICAL_JOURNEY",
            techStack: ["Distrokid"],
            year: 2019,
            branch: "resource-tree-utility"
        }
    ]
}


// Freelancing projects
const FreelancingProjects: ProjectSection = {
    sectionTitle: "Freelancing",
    sectionSubtitle: "🚀 Transforming Ideas into Digital Solutions: Tailored Websites, Custom CMS, and More!",
    entities: [
        {
            title: "South Australia Tiling",
            coverImagePath: AssetPaths.PROJECT_SA_TILING,
            liveLink: "https://southaustraliatiling.com.au/",
            description: "🚀 Built with SSR and SSG to showcase a South Australian tiling and bathroom renovation business, enhancing their online presence and visibility.",
            techStack: ["Angular 19", "SSR/SSG", "NestJS", "Firebase"],
            year: 2025
        },
        {
            title: "Kiwi Finance",
            coverImagePath: AssetPaths.PROJECT_KIWI_FINANCE,
            liveLink: "https://kiwifinance.com.au/",
            description: "💰 Developed a tailored website for a new Perth-based finance and mortgage broking business, combining modern design with a focus on accessibility and client engagement.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2025
        },
        {
            title: "RAS Finance Website + CMS",
            coverImagePath: AssetPaths.PROJECT_DRAWING,
            liveLink: "https://rasfinance.com.au/",
            description: "📈 Designed a bespoke website for a leading South Australia-based finance and mortgage broking business, showcasing services with a sleek, client-focused design.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2024
        },
        {
            title: "Acquire Conveyancing Website",
            coverImagePath: AssetPaths.PROJECT_ACQUIRE_CONVEYANCING,
            liveLink: "https://acquireconveyancing.com.au/",
            description: "🏡 Crafted a tailored website for a South Australia-based conveyancing business, delivering a professional online presence with user-friendly design and local appeal.",
            techStack: ["Angular", "Tailwind", "Firebase"],
            year: 2023
        },
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "WORK_EXPERIENCE",
    experiences: [
        {
            orgLink: "https://www.passepartout.net/",
            orgLogoPath: AssetPaths.WORK_PASSEPARTOUT_LOGO,
            orgName: "PASSEPARTOUT_ORG_NAME",
            positions: [
                {
                    positionName: "PASSEPARTOUT_POSITION",
                    duration: "PASSEPARTOUT_DURATION",
                    location: "PASSEPARTOUT_LOCATION",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "PASSEPARTOUT_TASK_1",
                        "PASSEPARTOUT_TASK_2",
                        "PASSEPARTOUT_TASK_3",
                        "PASSEPARTOUT_TASK_4"
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.mlhotelcattolica.com/aragosta/it/index",
            orgLogoPath: AssetPaths.WORK_ARAGOSTA_LOGO,
            orgName: "ARAGOSTA_ORG_NAME",
            positions: [
                {
                    positionName: "ARAGOSTA_POSITION",
                    duration: "ARAGOSTA_DURATION",
                    location: "ARAGOSTA_LOCATION",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "ARAGOSTA_TASK_1",
                        "ARAGOSTA_TASK_2",
                        "ARAGOSTA_TASK_3",
                        "ARAGOSTA_TASK_4",
                        "ARAGOSTA_TASK_5"
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.zucchetti.it/",
            orgLogoPath: AssetPaths.WORK_ZUCCHETTI_LOGO,
            orgName: "ZUCCHETTI_ORG_NAME",
            positions: [
                {
                    positionName: "ZUCCHETTI_POSITION",
                    duration: "ZUCCHETTI_DURATION",
                    location: "ZUCCHETTI_LOCATION",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "ZUCCHETTI_TASK_1",
                        "ZUCCHETTI_TASK_2",
                        "ZUCCHETTI_TASK_3"
                    ]
                }
            ]
        }
    ]
}


// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing",
    experiences: [
        {
            orgLink: "https://southaustraliatiling.com.au/",
            orgLogoPath: AssetPaths.WORK_ZUCCHETTI_LOGO,
            orgName: "South Australia Tiling",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Adelaide, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed a visually appealing website to highlight the high-quality work of a South Australian tiling and bathroom renovation business, improving their online presence.📊",
                        "Utilized Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance search engine visibility and drive organic traffic to the website. 🚀",
                    ]
                }
            ]
        },
        {
            orgLink: "https://kiwifinance.com.au/",
            orgLogoPath: AssetPaths.WORK_KIWI_LOGO,
            orgName: "Kiwi Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Perth, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed an SEO-friendly website with financial calculators, and a custom contact form tailored to Astute Financial's requirements. 🌐📊",
                        "Streamlined data collection and client inquiries by integrating the contact form with Google Sheets and Gmail. 📋",
                    ]
                }
            ]
        },
        {
            orgLink: "https://rasfinance.com.au/",
            orgLogoPath: AssetPaths.WORK_RAS_LOGO,
            orgName: "RAS Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2024",
                    location: "Adelaide, SA",
                    locationType: "Hybrid",
                    jobType: "Contract",
                    workPoints: [
                        "Built a dynamic website featuring financial calculators, a CMS for articles, and a sleek contact form. 📊📝",
                        "Streamlined client inquiries by integrating the contact form with Google Sheets and Gmail. 📧📋✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_PASSEPARTOUT_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2023",
                    location: "Adelaide, SA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Crafted a professional logo, business cards, and responsive website using Illustrator. 🎨💼",
                        "Set up a custom domain email and Office 365 with SharePoint for seamless operations. 📧🔗",
                        "Developed and hosted an SEO-friendly website with a contact form to boost online presence. 🌐📈",
                    ]
                }
            ]
        },
    ]
}

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "INTERNSHIPS",
    experiences: [
        {
            orgLink: "https://www.icscomputer.it/",
            orgLogoPath: AssetPaths.WORK_ICS_COMPUTER_LOGO,
            orgName: "ICS_COMPUTER",
            positions: [
                {
                    positionName: "JR_IT_TECHNICIAN",
                    duration: "HIGH_SCHOOL_INTERNSHIP",
                    location: "ICS_LOCATION",
                    locationType: "On-Site",
                    jobType: "Part-time",
                    workPoints: [
                        "PROVIDED_HANDS_ON_SUPPORT_IN_SOFTWARE_REPAIR",
                        "ASSISTED_IN_NETWORK_MAINTENANCE",
                        "GRATEFUL_FOR_TEAM_GUIDANCE",
                    ]
                }
            ]
        },
    ]
}



// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        {
            liveLink: "https://adventofcode.com/",
            coverImagePath: AssetPaths.ACHIEVEMENT_AOC_PIC,
            techStack: ["Python"],
            title: "Advent of Code 2024",
            description: "📅 Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills.🎯",
            year: 2024,
            githubLink: "https://github.com/dhruvilrathod/RSP/tree/master/advent_of_code",
        },
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        {
            liveLink: "https://www.linkedin.com/posts/dhruvilrathod_competitiveprogramming-codingchallenges-teamwork-activity-7291965632684695553-CTqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADi05s0B8nMLyX_mC2aovn2P6w6tNr-b3AA",
            coverImagePath: AssetPaths.ACHIEVEMENT_CPC_RSP_WIN_PIC,
            techStack: ["C++", "Python"],
            title: "CPC X RSP 2025",
            description: "🏆 Secured 3rd place in a high-stakes coding competition, tackling complex algorithms under pressure! Grateful for an incredible team and experience at CPC X RSP competition.",
            year: 2025,
        },
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "HIGH_SCHOOL_DIPLOMA",
    majorName: "INFORMATION_TECHNOLOGY",
    duration: "SEP_2013_JUN_2018",
    universityName: "ITTS Rimini",
    campusName: "O. Belluzzi - L. Da Vinci",
    logoImagePath: AssetPaths.EDUCATION_ITIS_LOGO,
    gpa: "96 / 100",
    websiteLink: "https://www.ittsrimini.edu.it/",
    studyPoints: [
        "FUNDAMENTALS_OF_COMPUTER_SCIENCE_AND_PROGRAMMING",
        "NETWORKS_SYSTEMS_AND_SECURITY",
        // "HANDS_ON_EXPERIENCE_THROUGH_PROJECT_BASED_LEARNING_1"
    ]
}


const MastersDegree: EducationSection = {
    degreeName: "BACHELORS_DEGREE_IN_INFORMATION_TECHNOLOGY",
    majorName: "COMPUTER_SCIENCE_AND_ENGINEERING",
    duration: "SEP_2018_MAR_2023",
    universityName: "Alma Mater Studiorum of Bologna (UniBO)",
    campusName: "Campus di Cesena",
    logoImagePath: AssetPaths.EDUCATION_UNIBO_LOGO,
    gpa: "98 / 110",
    websiteLink: "https://www.unibo.it/it/campus-cesena",
    studyPoints: [
        "FOUNDATION_IN_SOFTWARE_ENGINEERING",
        "DEEPENING_KNOWLEDGE_IN_SYSTEMS_NETWORKS_AND_SECURITY",
        "HANDS_ON_EXPERIENCE_THROUGH_PROJECT_BASED_LEARNING_1"
    ]
}

const OtherCertificates: EducationSection = {
    degreeName: "PRELIMINARY_ENGLISH_TEST",
    majorName: "UK_NATIONAL_QUALIFICATIONS_FRAMEWORK",
    duration: "2018",
    universityName: "Cambridge English Level 1 Certificate in ESOL International - Preliminary",
    campusName: "Rimini",
    logoImagePath: AssetPaths.EDUCATION_CAMBRIDGE_LOGO,
    gpa: "“Pass with Distinction” (162 / 170)",
    websiteLink: "https://www.cambridgeenglish.org/it/exams-and-tests/preliminary/",
    studyPoints: [
        "ENGLISH_LANGUAGE_SPECIALIZATION"
    ]
}


export const AppConfig = {
    loaderSplashAnimation: true,        // enable or disable splash screen at the initialization of website
    logoName: "Ivan Tesoro",         // Signature font logo name in header
    topSaluto: "Heilà,",
    topName: "sono Ivan",             // your name with presentation
    footerName: "Ivan Tesoro",
    emailId: "ivantesoro@hotmail.it",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",

    // Home page
    professionalTitle: "PROFESSIONAL_TITLE",
    professionalSummary: "SOFTWARE_ENGINEER_PASSIONATE_ABOUT_COMPUTER_SCIENCE_AND_ITS_EVOLUTION",
    githubProfile: "https://github.com/JulianCarax32/",              // Your github profile link
    portfolioRepository: "https://github.com/JulianCarax32/Portfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?".
        FullstackSection,
        CloudSection,
        DigitalSolutionSection,
        DesignSection,
    ],

    // Projects page
    projectsPageTitle: "PROJECTS_AND_FREELANCING",    // Title of projects page
    projectsPageDescription: "PROJECTS_DESCRIPTION",
    projectSections: [                  // Define and add a custom section if needed
        //FreelancingProjects,
        PersonalProjects,
        ExtraProjects,
    ],

    // Experience page
    experiencePageTitle: "MY_WORKS_INTERNSHIPS_AND_FREELANCING",
    experiencePageDescription: "EXPERIENCE_DESCRIPTION",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        InternshipExperience,
        // FreelancingExperience,
    ],

    // Education page
    educationPageTitle: "DEGREES_AND_QUALIFICATIONS",
    educationPageDescription: "EDUCATION_DESCRIPTION",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
        OtherCertificates
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
}
