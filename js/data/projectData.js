const PROJECTS = {
    tag: "My Work",

    title: "Featured Projects",

    subtitle:
        "A collection of projects showcasing my expertise in full-stack development, AI, simulations, database management, and interactive applications.",

    items: [
        {
            id: 1,

            title: "Page Pulse",

            category: "Full-Stack Web Application",

            description:
                "A website analysis tool developed as part of the Digital Heroes assessment. It analyzes websites, validates URLs, measures performance, and provides detailed insights with proper error handling.",

            image: "assets/images/projects/page-pulse/cover.png",

            gallery: [
                "assets/images/projects/page-pulse/cover.png",
                "assets/images/projects/page-pulse/idle.png",
                "assets/images/projects/page-pulse/analyzing.png",
                "assets/images/projects/page-pulse/error-invalid-url.png",
                "assets/images/projects/page-pulse/error-timeout.png",
                "assets/images/projects/page-pulse/error-website-not-found.png"
            ],

            technologies: [
                "React",
                "Node.js",
                "Express.js"
            ],

            features: [
                "Website Performance Analysis",
                "URL Validation",
                "Real-time Website Audit",
                "Error Handling",
                "Responsive User Interface"
            ],

            github: "https://github.com/Rahul-G23/Page-Pulse",

            live: "https://page-pulse-blue.vercel.app/",
            
            year: "2026"
        },

        {
            id: 2,

            title: "Virus Contamination Simulator",

            category: "Simulation Game",

            description:
                "A graph-based simulation game where interconnected nodes represent systems. The player strategically quarantines infected nodes and uses antibiotics to stop the virus from spreading throughout the network.",

            image: "assets/images/projects/virus-contamination-simulator/cover.png",

            gallery: [
                "assets/images/projects/virus-contamination-simulator/cover.png",
                "assets/images/projects/virus-contamination-simulator/home-page.png",
                "assets/images/projects/virus-contamination-simulator/sign-in-page.png",
                "assets/images/projects/virus-contamination-simulator/registration-page.png",
                "assets/images/projects/virus-contamination-simulator/leaderboard.png",
                "assets/images/projects/virus-contamination-simulator/history.png",
                "assets/images/projects/virus-contamination-simulator/level-failed.png",
                "assets/images/projects/virus-contamination-simulator/victory-page.png"
            ],

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js"
            ],

            features: [
                "Graph-Based Simulation",
                "Virus Propagation",
                "Quarantine System",
                "Antibiotic Deployment",
                "Interactive Gameplay"
            ],

            github: "https://github.com/Projects-for-Engg/DFS_based_path_finder",

            live: "",
            
            year: "2026"

        },

        {
            id: 3,

            title: "Industrial Manufacturing Stock Management System",

            category: "Database Management System",

            description:
                "A database-driven inventory management system that tracks raw materials, finished products, stock availability, and manufacturing operations efficiently.",

            image: "assets/images/projects/industrial-stock-management/cover.png",

            gallery: [
                "assets/images/projects/industrial-stock-management/cover.png",
                "assets/images/projects/industrial-stock-management/dashboard.png",
                "assets/images/projects/industrial-stock-management/dashboard-analytics.png",
                "assets/images/projects/industrial-stock-management/login-page.png",
                "assets/images/projects/industrial-stock-management/registration-page.png",
                "assets/images/projects/industrial-stock-management/report.png"
            ],

            technologies: [
                "MySQL",
                "SQL",
                "DBMS"
            ],

            features: [
                "Inventory Tracking",
                "Product Management",
                "Stock Monitoring",
                "Analytics Dashboard",
                "Database Operations"
            ],

            github: "https://github.com/Projects-for-Engg/Industrial-Stock-Management",

            live: "",
            year: "2026"
        },

        {
            id: 4,

            title: "ExamVerse AI",

            category: "AI Learning Platform",

            description:
                "An AI-powered competitive exam preparation platform providing study materials, syllabus tracking, quizzes, progress monitoring, and AI-assisted learning.",

            image: "assets/images/projects/examverse-ai/cover.png",

            gallery: [
                "assets/images/projects/examverse-ai/cover.png",
                "assets/images/projects/examverse-ai/dashboard.png",
                "assets/images/projects/examverse-ai/login-page.png",
                "assets/images/projects/examverse-ai/register-page.png",
                "assets/images/projects/examverse-ai/progress-tracking.png",
                "assets/images/projects/examverse-ai/notes-management.png",
                "assets/images/projects/examverse-ai/syllabus-module.png",
                "assets/images/projects/examverse-ai/ai-chatbot-inference.png"
            ],

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js"
            ],

            features: [
                "AI Chatbot",
                "Progress Tracking",
                "Notes Management",
                "Competitive Exam Modules",
                "Learning Dashboard"
            ],

            github: "https://github.com/Rahul-G23/AI_Chatbot",

            live: "",
            year: "2026"
        },

        {
            id: 5,

            title: "KawachYatri",

            category: "Safety Web Application",

            description:
                "A personal safety web application designed to provide emergency assistance, SOS alerts, user profile management, and quick access to safety features.",

            image: "assets/images/projects/kawachyatri/cover.png",

            gallery: [
                "assets/images/projects/kawachyatri/cover.png",
                "assets/images/projects/kawachyatri/home-page.png",
                "assets/images/projects/kawachyatri/login-page.png",
                "assets/images/projects/kawachyatri/profile.png",
                "assets/images/projects/kawachyatri/details-page.png",
                "assets/images/projects/kawachyatri/sos-activated.png"
            ],

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js"
            ],

            features: [
                "Emergency SOS",
                "User Authentication",
                "Profile Management",
                "Emergency Contact Details",
                "Safety Dashboard"
            ],

            github: "https://github.com/HACKANTHONNOVA/teamnova",
            
            live: "",
            year: "2025"
        },

        {
            id: 6,

            title: "Tower Defense Game",

            category: "Browser Strategy Game",

            description:
                "A browser-based tower defense game where players strategically place towers, defeat enemy waves, earn rewards, and protect their base.",

            image: "assets/images/projects/tower-defense/cover.png",

            gallery: [
                "assets/images/projects/tower-defense/cover.png",
                "assets/images/projects/tower-defense/home-page.png",
                "assets/images/projects/tower-defense/game-play.png",
                "assets/images/projects/tower-defense/game-over.png",
                "assets/images/projects/tower-defense/victory.png"
            ],

            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            features: [
                "Tower Placement",
                "Enemy Waves",
                "Game Progression",
                "Victory & Defeat States",
                "Interactive Gameplay"
            ],

            github: "https://github.com/Rahul-G23/AI-Game-Strategy",
            
            live: "",
            year: "2026"
            

        }
    ]
};