import { TProjectFB } from '@/types/types';
import {
    BuildingOfficeIcon,
    MapPinIcon,
    EnvelopeIcon,
    UserIcon
} from '@heroicons/react/24/outline';


export const projects = [
    { name: 'SkyLoom Tower', src: '/projects/project1.jpg', state: "in progress", type: "Residential", clients: [{ id: 991, src: '/clients/globalfinance.jpg', width: 160 }], location: "Kragujevac, Serbia" },
    { name: 'Emerald Arcadia Residence', src: '/projects/project2.jpg', state: "in progress", type: "Commercial and Retail", clients: [{ id: 992, src: '/clients/bw.jpg', width: 60 }, { id: 993, src: '/clients/eaglehills.png', width: 60 }], location: "Belgrade, Serbia" },
    { name: 'Lumina Nexus Plaza', src: '/projects/project3.jpg', state: "finished", type: "Residential", clients: [{ id: 994, src: '/clients/globalfinance.jpg', width: 160 }], location: "Šabac, Serbia" },
    { name: 'Solstice Haven Retreat', src: '/projects/project4.jpg', state: "finished", type: "Commercial and Retail", clients: [{ id: 995, src: '/clients/lessina.png', width: 160 }, { id: 996, src: '/clients/poseidon.png', width: 60 }], location: "Belgrade, Serbia" },
    { name: 'TerraVista EcoScape', src: '/projects/project5.jpg', state: "finished", type: "Hospitality", clients: [{ id: 997, src: '/clients/lessina.png', width: 160 }, { id: 998, src: '/clients/poseidon.png', width: 60 }, { id: 999, src: '/clients/globalfinance.jpg', width: 160 }], location: "Belgrade, Serbia" },
    { name: 'Phoenix Rise Complex', src: '/projects/project6.jpg', state: "finished", type: "Healthcare and Bio-pharmaceutical", clients: [{ id: 990, src: '/clients/institut.png', width: 60 }], location: "Smederevo, Serbia " },
    { name: 'KT Residence', src: '/projects/project7.jpeg', state: "finished", type: "Traffic, Transportation, Roads", clients: [{ id: 989, src: '/clients/bw.jpg', width: 60 }, { id: 988, src: '/clients/eaglehills.png', width: 60 }, { id: 987, src: '/clients/poseidon.png', width: 60 }, { id: 986, src: '/clients/stopshop.png', width: 60 }], location: "Pancevo, Serbia" },
    { name: 'Emerson College – The Little Building', src: '/projects/project8.jpg', state: "finished", type: "Hospitality", clients: [{ id: 980, src: '/clients/arlon.jpg', width: 100 }], location: "Zlatibor, Serbia" },
    { name: 'Nemanja House', src: '/projects/nemanja.png', state: "in progress", type: "Hospitality", clients: [{ id: 9950, src: '/clients/arlon.jpg', width: 100 }], location: "Kursumlija, Serbia" },
]

export const about = [
    { content: " International is a modern company, founded in 2010, focused on consulting, management, building design and construction.", id: 1 },
    { content: "The company has earned recognition for undertaking large, complex projects, fostering innovation, embracing emerging technologies, and making a difference for their clients, employees and community.", id: 2 },
    { content: "Our comprehensive services capture all phases of the building development process from providing assistance in finding suitable sites, development of concept, preliminary and final designs, through planning, budgeting, scheduling and permitting to expert and design supervision.", id: 3 },
    { content: "In accordance with our vision and mission, strong intention in service delivery, integration and systematically organizational development, Artica International has been constantly entrusted by clients, enlarging its greater value in serviceability whether be high buildings, supermarkets, large-scale projects, hypermarkets, and other large-scale construction projects where customers include the government and private sectors.", id: 4 },
]

export const aboutII = [
    { content: ["We aspire to be recognized as the premier engineering, construction, and project management company."], heading: 'Vision', id: 11 },
    {
        content: ["To be company of record for full service in construction industry, using our vision and inner focus to create functionall works of art",
            "Recognized for developing and embracing high quality technologies and processes",
            "Offering a more diversified set of innovative services",
            "Serving a broader geographic market",
            "Responsive to the needs of our clients, our employees and our communities "
        ],
        heading: 'Mision',
        id: 12
    },
    {
        content: ["Our values guide all of our actions. We strongly believe in integrity and transparency.",
            "We demand excellence, deliver on our promises and continuously search for new and better ways to provide the best solutions for our clients.",
            "We care about and are personally committed to everything we do, especially our people, their safety and development, our customers and their success, and the world we inhabit.",
            "We create value for clients through innovative solutions, think differently, give new ideas a chance and build on people's new ideas and support them.",
        ],
        heading: 'Values',
        id: 13
    },
]



export const aboutIcons = [{ name: 'expeirence', src: "/about/expeirence.png" }, { name: 'creativity', src: "/about/creativity.png" }, { name: 'quality', src: "/about/quality.png" }, { name: 'reputation', src: "/about/reputation.png" }]

export const footerData = [
    {
        name: "company", icon: BuildingOfficeIcon, id: 555, content: ["ARTICA INTERNATIONAL doo", "MB: 20631295", "PIB: 106560818", "+381 (0)11 630 5 630", "+381 (0)11 3111 325"]
    },
    { name: "location", icon: MapPinIcon, id: 556, content: ["Bulevar Nikole Tesle 48", "11070 Novi Beograd, Serbia"] },
    { name: "email", icon: EnvelopeIcon, id: 557, content: ["office@artica.rs", "www.artica.rs "] },
    { name: "contact person", icon: UserIcon, id: 558, content: ["GENERAL MANAGER", "Nemanja Luković", "+381 (0)11 3111 325", "+381 (0)11 630 5 630", "+381 63 646 070", "nemanja.lukovic@artica.rs"] },

]

export const partners = [{ id: 222, imgSrc: "/partners/aromaI.png", name: "aroma", width: 150 }, { id: 223, imgSrc: "/partners/delhaize.png", name: "delhaize", width: 50 }]

export const bbb: TProjectFB[] = []