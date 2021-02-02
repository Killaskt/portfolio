import profile from "./res/qt.jpg";
import logo from './res/shubhlogo-small.jpg';

const data = {
    timelineItems: [
        {
            date: '1/11/24',
            timelineCircleBackgroundColor: '#333',
            timelineCircleColor: '#FFF7E2',
            title: 'SHOLO',
            header: 'Nolo',
            text: 'yolo',
        },
        {
            date: '1/11/24',
            timelineCircleBackgroundColor: '#f0e7d1',
            timelineCircleColor: '#333',
            title: 'NSDF',
            header: 'Nolo',
            text: 'yolo'
        },
    ],
    resumeLink: 'https://drive.google.com/file/d/1aOjKvzlFIflG4P7dprwhZGDn-5vdp8Sk/view?usp=sharing',
    footerLogo: logo,
    nav: {
        name: 'Shubh Patel',
        navPic: profile,
        navLinks: [
            {
                alias: 'Welcome',
                link: '#'
            },
            {
                alias: 'About',
                link: '#'
            },
            {
                alias: 'Resume',
                link: '#'
            },
            {
                alias: 'Timeline',
                link: '#'
            },
        ],
        icons: [
            {
                symbol: <i class="fab fa-github"></i>,
                url: "https://github.com/shubhpatel9",
                iconColor: '#FFF7E2',
            },
            {
                symbol: <i class="fab fa-linkedin"></i>,
                url: "https://www.linkedin.com/in/shubhpatel/",
                iconColor: '#FFF7E2',
            },
            {
                symbol: <i class="far fa-envelope"></i>,
                url: "",
                iconColor: '#FFF7E2', 
            },
        ]
    }
}

export default data;