(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/reviews.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "FEATURED_REVIEW",
    ()=>FEATURED_REVIEW,
    "REVIEWS",
    ()=>REVIEWS,
    "TRENDING",
    ()=>TRENDING
]);
const CATEGORIES = [
    'All',
    'Action',
    'RPG',
    'Strategy',
    'Indie'
];
const FEATURED_REVIEW = {
    id: '1',
    slug: 'elden-ring',
    title: 'Elden Ring',
    developer: 'FromSoftware',
    platform: 'PC / PS5 / Xbox',
    year: 2022,
    category: 'Action',
    score: 10,
    excerpt: 'A generation-defining open world that treats the player as an intelligent adult. Every vista earned, every death a lesson, every discovery a quiet triumph.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_hero.jpg',
    featured: true
};
const REVIEWS = [
    {
        id: '2',
        slug: 'baldurs-gate-3',
        title: "Baldur's Gate 3",
        developer: 'Larian Studios',
        platform: 'PC / PS5',
        year: 2023,
        category: 'RPG',
        score: 10,
        excerpt: 'The first RPG in a decade that feels genuinely limitless. Larian built a D&D campaign that reacts to everything.',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_616x353.jpg'
    },
    {
        id: '3',
        slug: 'hades-ii',
        title: 'Hades II',
        developer: 'Supergiant Games',
        platform: 'PC (Early Access)',
        year: 2024,
        category: 'Action',
        score: 9,
        excerpt: 'Supergiant somehow improved on a perfect formula. The combat is tighter, the story darker, the secrets deeper.',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1145350/capsule_616x353.jpg'
    },
    {
        id: '5',
        slug: 'disco-elysium',
        title: 'Disco Elysium',
        developer: 'ZA/UM',
        platform: 'PC',
        year: 2019,
        category: 'RPG',
        score: 10,
        excerpt: "A novel disguised as an RPG. The writing alone justifies the medium's existence.",
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/632470/capsule_616x353.jpg'
    },
    {
        id: '6',
        slug: 'into-the-breach',
        title: 'Into the Breach',
        developer: 'Subset Games',
        platform: 'PC / Switch',
        year: 2018,
        category: 'Strategy',
        score: 9,
        excerpt: 'Perfect information, perfect design. Every puzzle has a solution — finding it is the entire game.',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/590380/capsule_616x353.jpg'
    },
    {
        id: '7',
        slug: 'hollow-knight',
        title: 'Hollow Knight',
        developer: 'Team Cherry',
        platform: 'PC / Switch / PS4',
        year: 2017,
        category: 'Indie',
        score: 9,
        excerpt: 'An underground world built with more care than most AAA studios manage with hundred-million-dollar budgets.',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg'
    },
    {
        id: '8',
        slug: 'frostpunk-2',
        title: 'Frostpunk 2',
        developer: '11 bit studios',
        platform: 'PC',
        year: 2024,
        category: 'Strategy',
        score: 8,
        excerpt: 'The sequel expands the canvas — more city, more politics, more impossible choices. Harder to love, harder to put down.',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1601580/capsule_616x353.jpg'
    },
    {
        id: '9',
        slug: 'neon-white',
        title: 'Neon White',
        developer: 'Angel Matrix',
        platform: 'PC / Switch',
        year: 2022,
        category: 'Indie',
        score: 8,
        excerpt: "A speedrunner's fantasy wrapped in anime schlock. The card-based movement system is one of the year's best ideas.",
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1533420/header.jpg'
    },
    {
        id: '10',
        slug: 'remnant-ii',
        title: 'Remnant II',
        developer: 'Gunfire Games',
        platform: 'PC / PS5 / Xbox',
        year: 2023,
        category: 'Action',
        score: 8,
        excerpt: 'A Soulslike shooter that earns every comparison. Procedural worlds hide secrets that reward obsessive players.',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1282100/header.jpg'
    }
];
const TRENDING = [
    ...REVIEWS
].sort((a, b)=>b.score - a.score).slice(0, 5);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScoreBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScoreBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ScoreBadge({ score, size = 'sm' }) {
    const isGlowing = score >= 9;
    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222',
        borderWidth: size === 'lg' ? 2 : 1,
        borderStyle: 'solid',
        borderColor: '#EF9F27',
        borderRadius: 0,
        fontFamily: "'Russo One', 'Arial Black', sans-serif",
        fontWeight: 400,
        color: '#F0EBE0',
        lineHeight: 1,
        ...size === 'lg' ? {
            fontSize: 48,
            padding: '12px 20px',
            minWidth: 80
        } : {
            fontSize: 13,
            padding: '3px 7px'
        },
        ...isGlowing ? {
            boxShadow: '0 0 20px rgba(239, 159, 39, 0.45), 0 2px 8px rgba(0,0,0,0.7)'
        } : {
            boxShadow: '0 2px 8px rgba(0,0,0,0.7)'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: baseStyle,
        "aria-label": `Score ${score} out of 10`,
        children: score
    }, void 0, false, {
        fileName: "[project]/components/ScoreBadge.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = ScoreBadge;
var _c;
__turbopack_context__.k.register(_c, "ScoreBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScoreBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Hero({ review }) {
    _s();
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReduced) return;
            let raf;
            const onScroll = {
                "Hero.useEffect.onScroll": ()=>{
                    raf = requestAnimationFrame({
                        "Hero.useEffect.onScroll": ()=>{
                            if (imgRef.current) {
                                const offset = window.scrollY * 0.35;
                                imgRef.current.style.setProperty('--parallax-offset', `${offset}px`);
                            }
                        }
                    }["Hero.useEffect.onScroll"]);
                }
            }["Hero.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Hero.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    cancelAnimationFrame(raf);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": `Featured review: ${review.title}`,
        style: {
            position: 'relative',
            height: '100vh',
            minHeight: 600,
            overflow: 'hidden',
            backgroundColor: '#111111'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: imgRef,
                className: "parallax-image",
                style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: '-20%',
                    height: '140%',
                    backgroundImage: `url(${review.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                },
                role: "img",
                "aria-label": `${review.title} cover art`
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.4) 45%, transparent 70%)',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.7) 70%, #111111 100%)',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1280,
                        margin: '0 auto',
                        padding: '0 clamp(24px, 5vw, 80px) 48px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'Public Sans', system-ui, sans-serif",
                                fontSize: 10,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: '#EF9F27',
                                display: 'block',
                                marginBottom: 12
                            },
                            children: review.category
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 101,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontFamily: "'Libre Bodoni', Georgia, serif",
                                fontSize: 'clamp(32px, 6vw, 72px)',
                                fontWeight: 700,
                                lineHeight: 1.05,
                                color: '#F0EBE0',
                                marginBottom: 16,
                                maxWidth: '14ch'
                            },
                            children: review.title
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 117,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Public Sans', system-ui, sans-serif",
                                fontSize: 16,
                                fontWeight: 400,
                                lineHeight: 1.65,
                                color: '#C4BDB4',
                                marginBottom: 28,
                                maxWidth: '52ch'
                            },
                            children: review.excerpt
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 132,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 20,
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    score: review.score,
                                    size: "lg"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 155,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        fontFamily: "'Public Sans', system-ui, sans-serif",
                                        fontSize: 13,
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: '#F0EBE0',
                                        backgroundColor: 'transparent',
                                        border: '1px solid #F0EBE0',
                                        borderRadius: 0,
                                        padding: '12px 24px',
                                        minHeight: 44,
                                        cursor: 'pointer',
                                        transition: 'border-color 150ms ease-out, color 150ms ease-out'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = '#EF9F27';
                                        e.currentTarget.style.color = '#EF9F27';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = '#F0EBE0';
                                        e.currentTarget.style.color = '#F0EBE0';
                                    },
                                    "aria-label": `Read full review of ${review.title}`,
                                    children: "Read Review"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 157,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 147,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Public Sans', system-ui, sans-serif",
                                fontSize: 11,
                                color: '#888888',
                                marginTop: 20,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em'
                            },
                            children: [
                                review.developer,
                                "  ·  ",
                                review.platform,
                                "  ·  ",
                                review.year
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 188,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 93,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Hero, "yH8mEGw9zDQgg3u40vY4RuXceis=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CategoryFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reviews.ts [app-client] (ecmascript)");
'use client';
;
;
function CategoryFilter({ active, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        role: "tablist",
        "aria-label": "Filter reviews by category",
        style: {
            position: 'sticky',
            top: 0,
            zIndex: 20,
            backgroundColor: '#111111',
            borderBottom: '1px solid #2A2A2A',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                flexDirection: 'row',
                padding: '0 24px',
                gap: 0,
                maxWidth: 1280,
                margin: '0 auto'
            },
            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>{
                const isActive = cat === active;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    role: "tab",
                    "aria-selected": isActive,
                    onClick: ()=>onChange(cat),
                    style: {
                        fontFamily: "'Public Sans', system-ui, sans-serif",
                        fontSize: 10,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: isActive ? '#EF9F27' : '#888888',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: isActive ? '2px solid #EF9F27' : '2px solid transparent',
                        padding: '14px 18px',
                        minHeight: 44,
                        minWidth: 44,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'color 150ms ease-out, border-color 150ms ease-out'
                    },
                    children: cat
                }, cat, false, {
                    fileName: "[project]/components/CategoryFilter.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/CategoryFilter.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CategoryFilter.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = CategoryFilter;
var _c;
__turbopack_context__.k.register(_c, "CategoryFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ArticleCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScoreBadge.tsx [app-client] (ecmascript)");
;
;
function ArticleCard({ review, featured = false }) {
    const { title, category, score, excerpt, imageUrl, developer, year } = review;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        tabIndex: 0,
        role: "button",
        "aria-label": `${title}, score ${score} out of 10, ${category}`,
        style: {
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            borderRadius: 0,
            overflow: 'visible',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transition: 'border-color 200ms ease-out, transform 200ms ease-out',
            width: '100%'
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.borderColor = '#EF9F27';
            e.currentTarget.style.transform = 'translateY(-2px)';
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.borderColor = '#2A2A2A';
            e.currentTarget.style.transform = 'translateY(0)';
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: '100%',
                    paddingTop: featured ? '42.86%' : '56.25%',
                    /* 21:9 = 42.86%, 16:9 = 56.25% */ overflow: 'hidden',
                    flexShrink: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageUrl,
                    alt: `${title} screenshot`,
                    style: {
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    },
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/components/ArticleCard.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ArticleCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    score: score,
                    size: "sm"
                }, void 0, false, {
                    fileName: "[project]/components/ArticleCard.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ArticleCard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 12,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Public Sans', system-ui, sans-serif",
                            fontSize: 10,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: '#EF9F27'
                        },
                        children: category
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "'Libre Bodoni', Georgia, serif",
                            fontSize: featured ? 22 : 16,
                            fontWeight: 700,
                            lineHeight: 1.25,
                            color: '#F0EBE0'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'Public Sans', system-ui, sans-serif",
                            fontSize: 13,
                            lineHeight: 1.6,
                            color: '#888888',
                            display: '-webkit-box',
                            WebkitLineClamp: featured ? undefined : 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: featured ? 'visible' : 'hidden'
                        },
                        children: excerpt
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'Public Sans', system-ui, sans-serif",
                            fontSize: 11,
                            color: '#444444',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            marginTop: 'auto'
                        },
                        children: [
                            developer,
                            " · ",
                            year
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ArticleCard.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleCard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ArticleCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ArticleCard;
var _c;
__turbopack_context__.k.register(_c, "ArticleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TrendingSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TrendingSidebar({ reviews }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": "Trending reviews",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                    borderBottom: '1px solid #2A2A2A',
                    paddingBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "'Russo One', 'Arial Black', sans-serif",
                            fontSize: 12,
                            fontWeight: 400,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: '#F0EBE0'
                        },
                        children: "Trending"
                    }, void 0, false, {
                        fileName: "[project]/components/TrendingSidebar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            fontFamily: "'Public Sans', system-ui, sans-serif",
                            fontSize: 10,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: '#EF9F27',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        },
                        children: "See all"
                    }, void 0, false, {
                        fileName: "[project]/components/TrendingSidebar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TrendingSidebar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                style: {
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                },
                children: reviews.map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                width: '100%',
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderLeft: '2px solid transparent',
                                borderRadius: 0,
                                padding: '8px 0 8px 8px',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'border-color 150ms ease-out, background-color 150ms ease-out'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.borderLeftColor = '#EF9F27';
                                e.currentTarget.style.backgroundColor = 'rgba(239,159,39,0.05)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.borderLeftColor = 'transparent';
                                e.currentTarget.style.backgroundColor = 'transparent';
                            },
                            "aria-label": `${review.title}, score ${review.score} out of 10`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Russo One', 'Arial Black', sans-serif",
                                        fontSize: 20,
                                        color: idx === 0 ? '#EF9F27' : '#444444',
                                        minWidth: 28,
                                        lineHeight: 1,
                                        flexShrink: 0
                                    },
                                    children: idx + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/TrendingSidebar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 56,
                                        height: 40,
                                        overflow: 'hidden',
                                        flexShrink: 0,
                                        borderRadius: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: review.imageUrl,
                                        alt: "",
                                        "aria-hidden": "true",
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        },
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TrendingSidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/TrendingSidebar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Public Sans', system-ui, sans-serif",
                                                fontSize: 13,
                                                fontWeight: 600,
                                                color: '#F0EBE0',
                                                lineHeight: 1.3,
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            },
                                            children: review.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/TrendingSidebar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Public Sans', system-ui, sans-serif",
                                                fontSize: 10,
                                                color: '#444444',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                marginTop: 2
                                            },
                                            children: review.category
                                        }, void 0, false, {
                                            fileName: "[project]/components/TrendingSidebar.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TrendingSidebar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Russo One', 'Arial Black', sans-serif",
                                        fontSize: 14,
                                        color: '#EF9F27',
                                        flexShrink: 0
                                    },
                                    children: [
                                        review.score,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 10,
                                                color: '#444444'
                                            },
                                            children: "/10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TrendingSidebar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TrendingSidebar.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TrendingSidebar.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    }, review.id, false, {
                        fileName: "[project]/components/TrendingSidebar.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/TrendingSidebar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TrendingSidebar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = TrendingSidebar;
var _c;
__turbopack_context__.k.register(_c, "TrendingSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HomepageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomepageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reviews.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CategoryFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ArticleCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrendingSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TrendingSidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HomepageClient() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const filtered = activeCategory === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"].filter((r)=>r.category === activeCategory);
    const grid = filtered.length > 0 ? filtered : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                review: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURED_REVIEW"]
            }, void 0, false, {
                fileName: "[project]/components/HomepageClient.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoryFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: activeCategory,
                onChange: setActiveCategory
            }, void 0, false, {
                fileName: "[project]/components/HomepageClient.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '40px clamp(16px, 4vw, 48px)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 48
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) 280px',
                        gap: 48,
                        alignItems: 'start'
                    },
                    className: "homepage-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Russo One', 'Arial Black', sans-serif",
                                        fontSize: 18,
                                        fontWeight: 400,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: '#F0EBE0',
                                        marginBottom: 20,
                                        borderBottom: '1px solid #2A2A2A',
                                        paddingBottom: 12
                                    },
                                    children: "Latest Reviews"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomepageClient.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                grid.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Public Sans', system-ui, sans-serif",
                                        fontSize: 14,
                                        color: '#444444',
                                        padding: '40px 0'
                                    },
                                    children: "No reviews in this category yet."
                                }, void 0, false, {
                                    fileName: "[project]/components/HomepageClient.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: 16
                                    },
                                    className: "article-grid",
                                    children: grid.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            review: review
                                        }, review.id, false, {
                                            fileName: "[project]/components/HomepageClient.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/HomepageClient.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomepageClient.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "trending-sidebar",
                            style: {
                                position: 'sticky',
                                top: 60
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrendingSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                reviews: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRENDING"]
                            }, void 0, false, {
                                fileName: "[project]/components/HomepageClient.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HomepageClient.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomepageClient.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomepageClient.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 1024px) {
          .article-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .article-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .homepage-grid {
            grid-template-columns: 1fr !important;
          }
          .trending-sidebar {
            display: none !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/HomepageClient.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomepageClient, "QSd4MwsEqDAWO4iHn93e9Kg0Z08=");
_c = HomepageClient;
var _c;
__turbopack_context__.k.register(_c, "HomepageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0v~9~h7._.js.map