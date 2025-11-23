(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/sonner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sonner.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/agent-fight-club.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentFightClub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sonner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// --- GAME DATA ---
const SCRIPT = [
    {
        round: 1,
        lines: [
            {
                speaker: "ELON",
                text: "Haha, broke commie! You lived off handouts while I build empires. Web3's pure freedom—WAGMI!",
                delay: 4000
            },
            {
                speaker: "MARX",
                text: "Vampire capitalist! Sucking blood from proletariat with your scam coins.",
                delay: 4000
            }
        ]
    },
    {
        round: 2,
        lines: [
            {
                speaker: "ELON",
                text: "I create value! DOGE flips fiat. Free market wins!",
                delay: 3000
            },
            {
                speaker: "MARX",
                text: "Staking is theft! Rug pulls are bourgeois betrayal!",
                delay: 4000
            }
        ]
    },
    {
        round: 3,
        lines: [
            {
                speaker: "ELON",
                text: "Buyout time! Minting your ideology as a memecoin. Market cap: Zero!",
                delay: 3000
            },
            {
                speaker: "MARX",
                text: "Hard Fork revolution! 51% attack incoming!",
                delay: 3000
            }
        ]
    }
];
function AgentFightClub() {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("LOBBY");
    const [elonLiquidity, setElonLiquidity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000000);
    const [marxLiquidity, setMarxLiquidity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000000);
    const [fightStep, setFightStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentDialogue, setCurrentDialogue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredChar, setHoveredChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredLiquidity, setHoveredLiquidity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elonPercentage, setElonPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [endingPhase, setEndingPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [elonUpgraded, setElonUpgraded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elonBetAmount, setElonBetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12420201);
    const [marxBetAmount, setMarxBetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(22375411);
    // Voting State - Live Vote Counts
    const [elonVoteCount, setElonVoteCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4000000);
    const [marxVoteCount, setMarxVoteCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4000000);
    const [voteRipple, setVoteRipple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Combat Animation States
    const [projectile, setProjectile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [elonHitFlash, setElonHitFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [marxHitFlash, setMarxHitFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [screenShake, setScreenShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Betting System States
    const [totalVol, setTotalVol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(34795612);
    const [elonPool, setElonPool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12420201);
    const [marxPool, setMarxPool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(22375411);
    const [userBetAmount, setUserBetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [showWalletModal, setShowWalletModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [betTarget, setBetTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Unified Global Control Logic (Debug/Demo Mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentFightClub.useEffect": ()=>{
            const handleKeyDown = {
                "AgentFightClub.useEffect.handleKeyDown": (e)=>{
                    // === SPACEBAR: Unified Forward Control ===
                    if (e.code === "Space") {
                        e.preventDefault();
                        if (gameState === "FIGHT" && !isThinking) {
                            // Advance fight step
                            const nextStep = fightStep + 1;
                            // Check if fight is complete
                            if (nextStep > 6) {
                                setGameState("VOTE");
                                return;
                            }
                            setFightStep(nextStep);
                            setIsThinking(true);
                            // Determine speaker and dialogue for this step
                            let speaker = "";
                            let text = "";
                            let damage = 0;
                            let audioFile = "";
                            if (nextStep === 1) {
                                speaker = "ELON";
                                text = "Haha, broke commie! You lived off handouts while I build empires. Web3 is pure freedom—WAGMI, you're NGMI!";
                                damage = Math.floor(Math.random() * 100000 + 100000);
                                audioFile = "/elon-1.mp3";
                            } else if (nextStep === 2) {
                                speaker = "MARX";
                                text = "Vampire capitalist! Sucking blood from proletariat with your scam coins. You are selling digital air!";
                                damage = Math.floor(Math.random() * 100000 + 100000);
                                audioFile = "/marx-1.mp3";
                            } else if (nextStep === 3) {
                                speaker = "ELON";
                                text = "I create value! DOGE flips fiat. Free market wins, no lazy unions needed!";
                                damage = Math.floor(Math.random() * 100000 + 100000);
                                audioFile = "/elon-2.mp3";
                            } else if (nextStep === 4) {
                                speaker = "MARX";
                                text = "Staking is theft! Rug pulls are bourgeois betrayal! United against whale exploitation!";
                                damage = Math.floor(Math.random() * 100000 + 100000);
                                audioFile = "/marx-2.mp3";
                            } else if (nextStep === 5) {
                                speaker = "ELON";
                                text = "Buyout time! Minting your bearded ass as an NFT—owning you forever. Shut your FUD mouth!";
                                damage = Math.floor(Math.random() * 100000 + 100000);
                                audioFile = "/elon-3.mp3";
                            } else if (nextStep === 6) {
                                speaker = "MARX";
                                text = "Hard Fork revolution! 51% attack incoming! Redistribute the wallet! Seize the blockchain!";
                                damage = Math.floor(Math.random() * 100000 + 100000);
                                audioFile = "/marx-3.mp3";
                            }
                            // Show thinking bubble immediately
                            if (speaker) {
                                setCurrentDialogue({
                                    speaker: speaker,
                                    text: "..." // Thinking placeholder
                                });
                                // After 1 second, show actual dialogue and fire projectile
                                setTimeout({
                                    "AgentFightClub.useEffect.handleKeyDown": ()=>{
                                        setCurrentDialogue({
                                            speaker: speaker,
                                            text: text
                                        });
                                        setIsThinking(false);
                                        // Play audio for this dialogue
                                        if (audioFile) {
                                            const audio = new Audio(audioFile);
                                            audio.play().catch({
                                                "AgentFightClub.useEffect.handleKeyDown": (err)=>console.log("Audio play failed:", err)
                                            }["AgentFightClub.useEffect.handleKeyDown"]);
                                        }
                                        // Fire projectile attack!
                                        setProjectile({
                                            id: Date.now(),
                                            from: speaker
                                        });
                                        // After 0.4s (projectile flight time), trigger impact effects
                                        setTimeout({
                                            "AgentFightClub.useEffect.handleKeyDown": ()=>{
                                                // Remove projectile
                                                setProjectile(null);
                                                // Trigger hit flash on target
                                                if (speaker === "ELON") {
                                                    setMarxHitFlash(true);
                                                    setTimeout({
                                                        "AgentFightClub.useEffect.handleKeyDown": ()=>setMarxHitFlash(false)
                                                    }["AgentFightClub.useEffect.handleKeyDown"], 100);
                                                } else if (speaker === "MARX") {
                                                    setElonHitFlash(true);
                                                    setTimeout({
                                                        "AgentFightClub.useEffect.handleKeyDown": ()=>setElonHitFlash(false)
                                                    }["AgentFightClub.useEffect.handleKeyDown"], 100);
                                                }
                                                // Trigger screen shake
                                                setScreenShake(true);
                                                setTimeout({
                                                    "AgentFightClub.useEffect.handleKeyDown": ()=>setScreenShake(false)
                                                }["AgentFightClub.useEffect.handleKeyDown"], 200);
                                                // Apply damage to opponent
                                                if (speaker === "ELON") {
                                                    setMarxLiquidity({
                                                        "AgentFightClub.useEffect.handleKeyDown": (prev)=>Math.max(0, prev - damage)
                                                    }["AgentFightClub.useEffect.handleKeyDown"]);
                                                } else if (speaker === "MARX") {
                                                    setElonLiquidity({
                                                        "AgentFightClub.useEffect.handleKeyDown": (prev)=>Math.max(0, prev - damage)
                                                    }["AgentFightClub.useEffect.handleKeyDown"]);
                                                }
                                            }
                                        }["AgentFightClub.useEffect.handleKeyDown"], 400);
                                    }
                                }["AgentFightClub.useEffect.handleKeyDown"], 1000);
                            }
                        } else if (gameState === "VOTE") {
                            // Transition to WINNER
                            setGameState("WINNER");
                            setEndingPhase(1); // Phase 1: Liquidation (instant)
                            setTimeout({
                                "AgentFightClub.useEffect.handleKeyDown": ()=>setEndingPhase(2)
                            }["AgentFightClub.useEffect.handleKeyDown"], 2000); // Phase 2: Settlement (after 2s)
                        }
                    }
                    // === 'F' KEY: Fast Forward to Voting ===
                    if (e.key === "f" || e.key === "F") {
                        e.preventDefault();
                        if (gameState === "FIGHT") {
                            // Clean up fight state
                            setCurrentDialogue(null);
                            setIsThinking(false);
                            // Jump to voting
                            setGameState("VOTE");
                        }
                    }
                    // === ARROW LEFT: Safety Backtrack ===
                    if (e.key === "ArrowLeft") {
                        e.preventDefault();
                        if (gameState === "WINNER") {
                            // Go back to VOTE
                            setGameState("VOTE");
                            setEndingPhase(0);
                            setElonUpgraded(false);
                            setElonBetAmount(12420201);
                            setMarxBetAmount(22375411);
                        } else if (gameState === "VOTE") {
                            // Go back to FIGHT (at the end)
                            setGameState("FIGHT");
                            setFightStep(6);
                            setCurrentDialogue({
                                speaker: "MARX",
                                text: "Hard Fork revolution! 51% attack incoming!"
                            });
                        } else if (gameState === "FIGHT") {
                            // Go back to LOBBY
                            setGameState("LOBBY");
                            // Reset fight state
                            setFightStep(0);
                            setCurrentDialogue(null);
                            setIsThinking(false);
                            setElonLiquidity(1000000);
                            setMarxLiquidity(1000000);
                        }
                    }
                }
            }["AgentFightClub.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "AgentFightClub.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["AgentFightClub.useEffect"];
        }
    }["AgentFightClub.useEffect"], [
        gameState,
        fightStep,
        isThinking
    ]);
    // Ending Phase 1: Liquidation Animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentFightClub.useEffect": ()=>{
            if (gameState === "WINNER" && endingPhase === 1) {
                // Animate bet amounts - Elon's side grows, Marx's shrinks
                const interval = setInterval({
                    "AgentFightClub.useEffect.interval": ()=>{
                        setElonBetAmount({
                            "AgentFightClub.useEffect.interval": (prev)=>{
                                const next = prev + 500000;
                                return next >= 34795612 ? 34795612 : next;
                            }
                        }["AgentFightClub.useEffect.interval"]);
                        setMarxBetAmount({
                            "AgentFightClub.useEffect.interval": (prev)=>{
                                const next = prev - 500000;
                                return next <= 0 ? 0 : next;
                            }
                        }["AgentFightClub.useEffect.interval"]);
                    }
                }["AgentFightClub.useEffect.interval"], 50);
                setTimeout({
                    "AgentFightClub.useEffect": ()=>{
                        clearInterval(interval);
                        setElonBetAmount(34795612);
                        setMarxBetAmount(0);
                    }
                }["AgentFightClub.useEffect"], 2000);
            }
        }
    }["AgentFightClub.useEffect"], [
        gameState,
        endingPhase
    ]);
    // Ending Phase 2: Evolution Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentFightClub.useEffect": ()=>{
            if (endingPhase === 2) {
                // Trigger Elon upgrade after 1s
                setTimeout({
                    "AgentFightClub.useEffect": ()=>{
                        setElonUpgraded(true);
                        // Play upgrade sound
                        const upgradeAudio = new Audio("/upgrade.mp3");
                        upgradeAudio.play();
                    }
                }["AgentFightClub.useEffect"], 1000);
            }
        }
    }["AgentFightClub.useEffect"], [
        endingPhase
    ]);
    // Tug-of-War Animation Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentFightClub.useEffect": ()=>{
            if (gameState === "VOTE") {
                // Reset to 50/50
                setElonPercentage(50);
                setElonVoteCount(4000000);
                setMarxVoteCount(4000000);
                // Phase 1: Marx pushes hard! (0-1s) - Elon drops to 40%
                setTimeout({
                    "AgentFightClub.useEffect": ()=>{
                        setElonPercentage(40);
                        setElonVoteCount(3200000);
                        setMarxVoteCount(4800000);
                    }
                }["AgentFightClub.useEffect"], 100);
                // Phase 2: The struggle! (1-3s) - wobbles between 42-48%
                setTimeout({
                    "AgentFightClub.useEffect": ()=>{
                        const wobbleInterval = setInterval({
                            "AgentFightClub.useEffect.wobbleInterval": ()=>{
                                const wobble = 42 + Math.random() * 6;
                                setElonPercentage(wobble);
                                setElonVoteCount(3360000 + Math.random() * 480000);
                                setMarxVoteCount(4640000 + Math.random() * 480000);
                            }
                        }["AgentFightClub.useEffect.wobbleInterval"], 200);
                        setTimeout({
                            "AgentFightClub.useEffect": ()=>{
                                clearInterval(wobbleInterval);
                                // Phase 3: The Whale Entry! (3-4s) - Elon jumps to 52%
                                setElonPercentage(52);
                                setElonVoteCount(5616000);
                                setMarxVoteCount(5184000);
                                // Phase 4: Decisive Victory! (4-5s) - Elon 58%
                                setTimeout({
                                    "AgentFightClub.useEffect": ()=>{
                                        setElonPercentage(58);
                                        setElonVoteCount(8240591);
                                        setMarxVoteCount(6102330);
                                    }
                                }["AgentFightClub.useEffect"], 1000);
                            }
                        }["AgentFightClub.useEffect"], 2000);
                    }
                }["AgentFightClub.useEffect"], 1000);
            }
        }
    }["AgentFightClub.useEffect"], [
        gameState
    ]);
    // --- HELPERS ---
    const formatMoney = (value)=>{
        return `${new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value)} $GAS`;
    };
    // Betting System Handlers
    const handleOpenBetModal = (target)=>{
        setBetTarget(target);
        setUserBetAmount(100); // Reset to default
        setShowWalletModal(true);
    };
    const handleIncreaseBet = ()=>{
        setUserBetAmount((prev)=>prev + 10);
    };
    const handleDecreaseBet = ()=>{
        setUserBetAmount((prev)=>Math.max(10, prev - 10)); // Minimum 10
    };
    const handleConfirmBet = ()=>{
        if (betTarget === "ELON") {
            setElonPool((prev)=>prev + userBetAmount);
        } else if (betTarget === "MARX") {
            setMarxPool((prev)=>prev + userBetAmount);
        }
        setTotalVol((prev)=>prev + userBetAmount);
        // Play slot machine sound
        const slotAudio = new Audio("/slot-machine.mp3");
        slotAudio.play();
        // Show success toast
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`✅ Transaction Confirmed: ${userBetAmount} $GAS Sent`);
        // Close modal
        setShowWalletModal(false);
        setBetTarget(null);
    };
    const handleVoteClick = (side, event)=>{
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // Show ripple effect
        setVoteRipple({
            x,
            y,
            side
        });
        // Clear ripple after animation
        setTimeout(()=>setVoteRipple(null), 600);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen max-w-5xl mx-auto font-press-start text-xs sm:text-sm relative flex flex-col justify-between p-2 sm:p-4 overflow-hidden select-none text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "bottom-right"
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-50 animate-scanline bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 opacity-20"
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: gameState === "FIGHT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        x: screenShake ? [
                            -2,
                            2,
                            -2,
                            2,
                            0
                        ] : 0,
                        y: screenShake ? [
                            -1,
                            1,
                            -1,
                            1,
                            0
                        ] : 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: screenShake ? 0.2 : 0.3
                    },
                    className: "fixed inset-0 z-[100] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/background_pixel.png",
                                    alt: "Fight Background",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/50"
                                }, void 0, false, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "flex justify-between items-center p-6 border-b border-white/10 bg-black/80 shadow-[0_4px_20px_rgba(0,0,0,0.8)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-white text-2xl sm:text-3xl tracking-wider",
                                            style: {
                                                fontFamily: 'Monofett, cursive'
                                            },
                                            children: "AGENT FIGHT CLUB"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden flex items-center justify-center text-xl",
                                                    children: "🍄"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col items-center justify-between py-8 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex items-center justify-center gap-8 sm:gap-12 md:gap-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-bold text-6xl sm:text-7xl md:text-8xl font-press-start drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]",
                                                        style: {
                                                            fontFamily: 'Knewave, cursive'
                                                        },
                                                        children: "NO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider font-press-start leading-tight glitch mb-2",
                                                            "data-text": "IS WEB3 A SCAM?",
                                                            children: "IS WEB3 A SCAM?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-mono text-base sm:text-lg md:text-xl font-bold",
                                                            children: [
                                                                "💰",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    end: totalVol,
                                                                    duration: 1.5,
                                                                    separator: ",",
                                                                    preserveValue: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " $GAS Vol"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500 font-bold text-6xl sm:text-7xl md:text-8xl font-press-start drop-shadow-[0_0_15px_rgba(239,68,68,0.9)]",
                                                        style: {
                                                            fontFamily: 'Knewave, cursive'
                                                        },
                                                        children: "YES"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex items-center justify-between px-8 sm:px-12 md:px-16 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: projectile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            x: projectile.from === "ELON" ? -200 : 200,
                                                            y: 0,
                                                            opacity: 0,
                                                            scale: 0.5
                                                        },
                                                        animate: {
                                                            x: projectile.from === "ELON" ? 200 : -200,
                                                            y: 0,
                                                            opacity: 1,
                                                            scale: 1,
                                                            rotate: projectile.from === "ELON" ? 360 : -360
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            scale: 2
                                                        },
                                                        transition: {
                                                            duration: 0.4,
                                                            ease: "easeOut"
                                                        },
                                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-6xl drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]",
                                                            children: projectile.from === "ELON" ? "🚀" : "📕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, projectile.id, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4 w-48 sm:w-64 cursor-pointer",
                                                            onMouseEnter: ()=>setHoveredLiquidity("ELON"),
                                                            onMouseLeave: ()=>setHoveredLiquidity(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex justify-between mb-1 transition-all duration-300 ${hoveredLiquidity === "ELON" ? "text-base font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "text-sm font-bold"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-cyan-400 font-mono",
                                                                            children: "LIQUIDITY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 532,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-cyan-400 font-mono",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    end: elonLiquidity,
                                                                                    duration: 1.5,
                                                                                    separator: ",",
                                                                                    preserveValue: true
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                                    lineNumber: 534,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " $GAS"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 533,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `bg-slate-900 border-cyan-500 relative overflow-hidden transition-all duration-300 ${hoveredLiquidity === "ELON" ? "h-5 border-4 scale-110 shadow-[0_0_20px_rgba(34,211,238,0.6)]" : "h-4 border-2"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "h-full bg-gradient-to-r from-blue-600 to-cyan-400",
                                                                        initial: {
                                                                            width: "100%"
                                                                        },
                                                                        animate: {
                                                                            width: `${elonLiquidity / 1000000 * 100}%`
                                                                        },
                                                                        transition: {
                                                                            type: "spring",
                                                                            stiffness: 100
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative transition-all duration-300 cursor-pointer",
                                                            onMouseEnter: ()=>setHoveredChar("ELON"),
                                                            onMouseLeave: ()=>setHoveredChar(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                                    src: "/elon_pixel.png",
                                                                    alt: "Elon Musk",
                                                                    className: `w-48 sm:w-64 md:w-80 h-auto transition-all duration-300 ${hoveredChar === "ELON" ? "scale-110 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]" : ""}`,
                                                                    animate: {
                                                                        x: elonHitFlash ? [
                                                                            -5,
                                                                            5,
                                                                            -5,
                                                                            5,
                                                                            0
                                                                        ] : 0,
                                                                        filter: elonHitFlash ? "brightness(1.5) sepia(1) hue-rotate(-50deg)" : "brightness(1) sepia(0) hue-rotate(0deg)"
                                                                    },
                                                                    transition: {
                                                                        duration: elonHitFlash ? 0.2 : 0.3
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 23
                                                                }, this),
                                                                hoveredChar === "ELON" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        x: -20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        x: 0
                                                                    },
                                                                    className: "absolute left-full top-1/4 ml-6 bg-slate-900/95 border-4 border-cyan-400 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(34,211,238,0.6)] z-[60]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-cyan-400 font-bold mb-2 text-lg",
                                                                            children: "ELON MUSK"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 586,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-white mb-1",
                                                                            children: "Grok-3 (Beta)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 587,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-400 text-sm",
                                                                            children: "Wallet: 0x...D0GE"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 588,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 581,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, this),
                                                currentDialogue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: -20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 200,
                                                        damping: 20
                                                    },
                                                    className: `absolute top-[25%] ${currentDialogue.speaker === "ELON" ? "left-[28%]" : "right-[28%]"} w-80 max-w-sm bg-black/95 border-2 border-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 z-50`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 610,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-[10px] font-bold font-mono tracking-wider",
                                                                    children: "LIVE FEED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-base sm:text-lg font-bold mb-2 font-mono ${currentDialogue.speaker === "ELON" ? "text-cyan-400" : "text-red-500"}`,
                                                            children: [
                                                                "> ",
                                                                currentDialogue.speaker
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 23
                                                        }, this),
                                                        currentDialogue.text === "..." ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-400 text-sm sm:text-base font-bold leading-relaxed animate-pulse font-mono",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-block animate-bounce",
                                                                    children: "."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 624,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-block animate-bounce",
                                                                    style: {
                                                                        animationDelay: '0.2s'
                                                                    },
                                                                    children: "."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-block animate-bounce",
                                                                    style: {
                                                                        animationDelay: '0.4s'
                                                                    },
                                                                    children: "."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 626,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white text-sm sm:text-base font-bold leading-relaxed break-words font-mono",
                                                            children: currentDialogue.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 629,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, currentDialogue.speaker, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4 w-48 sm:w-64 cursor-pointer",
                                                            onMouseEnter: ()=>setHoveredLiquidity("MARX"),
                                                            onMouseLeave: ()=>setHoveredLiquidity(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex justify-between mb-1 transition-all duration-300 ${hoveredLiquidity === "MARX" ? "text-base font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" : "text-sm font-bold"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 font-mono",
                                                                            children: "LIQUIDITY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 649,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 font-mono",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    end: marxLiquidity,
                                                                                    duration: 1.5,
                                                                                    separator: ",",
                                                                                    preserveValue: true
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                                    lineNumber: 651,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                " $GAS"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 644,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `bg-slate-900 border-red-500 relative overflow-hidden transition-all duration-300 ${hoveredLiquidity === "MARX" ? "h-5 border-4 scale-110 shadow-[0_0_20px_rgba(239,68,68,0.6)]" : "h-4 border-2"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "h-full bg-gradient-to-r from-red-800 to-red-500",
                                                                        initial: {
                                                                            width: "100%"
                                                                        },
                                                                        animate: {
                                                                            width: `${marxLiquidity / 1000000 * 100}%`
                                                                        },
                                                                        transition: {
                                                                            type: "spring",
                                                                            stiffness: 100
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 664,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative transition-all duration-300 cursor-pointer",
                                                            onMouseEnter: ()=>setHoveredChar("MARX"),
                                                            onMouseLeave: ()=>setHoveredChar(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                                    src: "/marx_pixel.png",
                                                                    alt: "Karl Marx",
                                                                    className: `w-42 sm:w-56 md:w-70 h-auto transition-all duration-300 ${hoveredChar === "MARX" ? "scale-110 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" : ""}`,
                                                                    animate: {
                                                                        x: marxHitFlash ? [
                                                                            -5,
                                                                            5,
                                                                            -5,
                                                                            5,
                                                                            0
                                                                        ] : 0,
                                                                        filter: marxHitFlash ? "brightness(1.5) sepia(1) hue-rotate(-50deg)" : "brightness(1) sepia(0) hue-rotate(0deg)"
                                                                    },
                                                                    transition: {
                                                                        duration: marxHitFlash ? 0.2 : 0.3
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 23
                                                                }, this),
                                                                hoveredChar === "MARX" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        x: 20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        x: 0
                                                                    },
                                                                    className: "absolute right-full top-1/4 mr-6 bg-slate-900/95 border-4 border-red-500 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(239,68,68,0.6)] z-[60]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-red-500 font-bold mb-2 text-lg",
                                                                            children: "KARL MARX"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 703,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-white mb-1",
                                                                            children: "Llama-3-70B"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 704,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-400 text-sm",
                                                                            children: "Wallet: 0x...RED1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 705,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 698,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 674,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-12 flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-cyan-600 border-y-4 border-l-4 border-cyan-400 flex items-center justify-between px-6",
                                                            style: {
                                                                width: `${elonPool / (elonPool + marxPool) * 100}%`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    whileHover: {
                                                                        scale: 1.05
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.95
                                                                    },
                                                                    onClick: ()=>handleOpenBetModal("ELON"),
                                                                    className: "px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-bold border-2 border-cyan-300 text-xs sm:text-sm shadow-lg font-mono",
                                                                    children: "BET ON MUSK"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-mono text-lg font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            end: elonPool,
                                                                            duration: 1.5,
                                                                            separator: ",",
                                                                            preserveValue: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 731,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " $GAS"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 730,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 718,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-red-600 border-y-4 border-r-4 border-red-400 flex items-center justify-between px-6",
                                                            style: {
                                                                width: `${marxPool / (elonPool + marxPool) * 100}%`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-mono text-lg font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            end: marxPool,
                                                                            duration: 1.5,
                                                                            separator: ",",
                                                                            preserveValue: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 746,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " $GAS"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    whileHover: {
                                                                        scale: 1.05
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.95
                                                                    },
                                                                    onClick: ()=>handleOpenBetModal("MARX"),
                                                                    className: "px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold border-2 border-red-300 text-xs sm:text-sm shadow-lg font-mono",
                                                                    children: "BET ON MARX"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 753,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 714,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 713,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 431,
                            columnNumber: 13
                        }, this)
                    ]
                }, "fight", true, {
                    fileName: "[project]/components/agent-fight-club.tsx",
                    lineNumber: 408,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showWalletModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm",
                    onClick: ()=>setShowWalletModal(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.9,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: "bg-black/90 backdrop-blur-xl border border-[#00E599] rounded-lg p-8 max-w-md w-full mx-4 shadow-[0_0_50px_rgba(0,229,153,0.3)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#00E599] font-mono mb-2",
                                        children: "SpoonOS Wallet Request"
                                    }, void 0, false, {
                                        fileName: "[project]/components/agent-fight-club.tsx",
                                        lineNumber: 791,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-400 text-sm font-mono space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Interact with: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: "Agent Fight Club"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 795,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Action: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: [
                                                            "Bet on ",
                                                            betTarget
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 796,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/agent-fight-club.tsx",
                                        lineNumber: 794,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/agent-fight-club.tsx",
                                lineNumber: 790,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-slate-400 text-sm font-mono mb-3",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/components/agent-fight-club.tsx",
                                        lineNumber: 802,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: 0.9
                                                },
                                                onClick: handleDecreaseBet,
                                                className: "w-12 h-12 bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 rounded-lg text-white font-bold text-2xl flex items-center justify-center",
                                                children: "-"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 806,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-5xl font-bold text-white font-mono",
                                                        children: userBetAmount
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 816,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#00E599] text-lg font-mono mt-1",
                                                        children: "$GAS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 819,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 815,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: 0.9
                                                },
                                                onClick: handleIncreaseBet,
                                                className: "w-12 h-12 bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 rounded-lg text-white font-bold text-2xl flex items-center justify-center",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 824,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/agent-fight-club.tsx",
                                        lineNumber: 805,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/agent-fight-club.tsx",
                                lineNumber: 801,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-xs font-mono",
                                    children: [
                                        "Gas Fee: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400",
                                            children: "0.00042 $GAS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 838,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 837,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/agent-fight-club.tsx",
                                lineNumber: 836,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                onClick: handleConfirmBet,
                                className: "w-full py-4 bg-[#00E599] hover:bg-[#00CC88] text-black font-bold text-lg rounded-lg font-mono shadow-lg shadow-[#00E599]/50 transition-colors",
                                children: "SIGN & PAY"
                            }, void 0, false, {
                                fileName: "[project]/components/agent-fight-club.tsx",
                                lineNumber: 843,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/agent-fight-club.tsx",
                        lineNumber: 781,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/agent-fight-club.tsx",
                    lineNumber: 774,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 772,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: gameState === "VOTE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-0 opacity-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/background_pixel.png",
                                alt: "Fight Background",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/agent-fight-club.tsx",
                                lineNumber: 868,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 867,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            },
                            className: "relative z-10 max-w-5xl w-full mx-4 px-8 py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 885,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl sm:text-5xl font-bold text-white font-mono tracking-wider",
                                                children: "🔴 LIVE DAO GOVERNANCE VOTE"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 886,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/agent-fight-club.tsx",
                                        lineNumber: 884,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 883,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mb-8 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-cyan-400 font-mono text-5xl sm:text-7xl font-bold mb-2 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: elonVoteCount,
                                                        duration: 0.3,
                                                        separator: ",",
                                                        preserveValue: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 897,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-cyan-400/60 font-mono text-sm sm:text-lg uppercase tracking-wider",
                                                    children: "VOTES"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 895,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/40 font-mono text-4xl sm:text-5xl font-bold",
                                                children: "VS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 911,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 910,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500 font-mono text-5xl sm:text-7xl font-bold mb-2 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: marxVoteCount,
                                                        duration: 0.3,
                                                        separator: ",",
                                                        preserveValue: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 917,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 916,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-500/60 font-mono text-sm sm:text-lg uppercase tracking-wider",
                                                    children: "VOTES"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 915,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 893,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mb-4 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "text-cyan-400 font-mono text-2xl sm:text-4xl font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]",
                                            animate: {
                                                scale: elonPercentage > 50 ? [
                                                    1,
                                                    1.15,
                                                    1
                                                ] : 1
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            children: [
                                                Math.round(elonPercentage),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 932,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "text-red-500 font-mono text-2xl sm:text-4xl font-bold drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]",
                                            animate: {
                                                scale: elonPercentage < 50 ? [
                                                    1,
                                                    1.15,
                                                    1
                                                ] : 1
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            children: [
                                                Math.round(100 - elonPercentage),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 939,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 931,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-28 sm:h-36 flex border-4 border-white/50 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.4)] mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "relative bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 flex items-center justify-start px-6",
                                            initial: {
                                                width: "50%"
                                            },
                                            animate: {
                                                width: `${elonPercentage}%`
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 18
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-300 border-4 border-white flex items-center justify-center text-4xl sm:text-5xl shadow-[0_0_30px_rgba(34,211,238,0.9)]",
                                                children: "💙"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 958,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 951,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "relative bg-gradient-to-l from-red-800 via-red-600 to-red-500 flex items-center justify-end px-6",
                                            initial: {
                                                width: "50%"
                                            },
                                            animate: {
                                                width: `${100 - elonPercentage}%`
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 18
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-300 border-4 border-white flex items-center justify-center text-4xl sm:text-5xl shadow-[0_0_30px_rgba(239,68,68,0.9)]",
                                                children: "❤️"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 971,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 964,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute top-0 bottom-0 w-2 bg-white shadow-[0_0_30px_rgba(255,255,255,1)]",
                                            initial: {
                                                left: "50%"
                                            },
                                            animate: {
                                                left: `${elonPercentage}%`
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 18
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 977,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 949,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mb-10 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan-400 font-bold text-2xl sm:text-3xl font-mono",
                                            children: "ELON"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 987,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500 font-bold text-2xl sm:text-3xl font-mono",
                                            children: "MARX"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 988,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 986,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            onClick: (e)=>handleVoteClick("ELON", e),
                                            className: "relative flex-1 py-6 sm:py-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xl sm:text-3xl rounded-xl shadow-[0_0_40px_rgba(34,211,238,0.6)] border-4 border-cyan-300 font-mono overflow-hidden group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 flex items-center justify-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl sm:text-4xl",
                                                            children: "👍"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1001,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "VOTE ELON"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 19
                                                }, this),
                                                voteRipple && voteRipple.side === "ELON" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        scale: 0,
                                                        opacity: 0.8
                                                    },
                                                    animate: {
                                                        scale: 4,
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6
                                                    },
                                                    className: "absolute w-20 h-20 rounded-full bg-white",
                                                    style: {
                                                        left: voteRipple.x - 40,
                                                        top: voteRipple.y - 40
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 994,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            onClick: (e)=>handleVoteClick("MARX", e),
                                            className: "relative flex-1 py-6 sm:py-8 bg-gradient-to-r from-red-700 to-red-500 text-white font-bold text-xl sm:text-3xl rounded-xl shadow-[0_0_40px_rgba(239,68,68,0.6)] border-4 border-red-300 font-mono overflow-hidden group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 flex items-center justify-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl sm:text-4xl",
                                                            children: "👍"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1031,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "VOTE MARX"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 19
                                                }, this),
                                                voteRipple && voteRipple.side === "MARX" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        scale: 0,
                                                        opacity: 0.8
                                                    },
                                                    animate: {
                                                        scale: 4,
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6
                                                    },
                                                    className: "absolute w-20 h-20 rounded-full bg-white",
                                                    style: {
                                                        left: voteRipple.x - 40,
                                                        top: voteRipple.y - 40
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/20 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1050,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 992,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 876,
                            columnNumber: 13
                        }, this)
                    ]
                }, "vote", true, {
                    fileName: "[project]/components/agent-fight-club.tsx",
                    lineNumber: 859,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 857,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: gameState === "WINNER" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[100] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/background_pixel.png",
                                    alt: "Fight Background",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1070,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 bg-black/50",
                                    animate: {
                                        backgroundColor: endingPhase >= 2 ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)"
                                    },
                                    transition: {
                                        duration: 0.5
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 1069,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "flex justify-between items-center p-6 border-b border-white/10 bg-black/80 shadow-[0_4px_20px_rgba(0,0,0,0.8)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-white text-2xl sm:text-3xl tracking-wider",
                                            style: {
                                                fontFamily: 'Monofett, cursive'
                                            },
                                            children: "AGENT FIGHT CLUB"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1088,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden flex items-center justify-center text-xl",
                                                    children: "🍄"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1092,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1091,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col items-center justify-between py-8 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider font-press-start leading-tight glitch mb-2",
                                                        "data-text": "IS WEB3 A SCAM?",
                                                        children: "IS WEB3 A SCAM?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 1104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-mono text-base sm:text-lg md:text-xl font-bold",
                                                        children: [
                                                            (elonBetAmount + marxBetAmount).toLocaleString(),
                                                            " $GAS Vol💰"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 1110,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 1103,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex items-center justify-between px-8 sm:px-12 md:px-16 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "flex flex-col items-center relative z-20",
                                                    animate: {
                                                        scale: endingPhase >= 2 ? 1.1 : 1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 200,
                                                        damping: 20
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            endingPhase >= 2 && !elonUpgraded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    scale: 0.5
                                                                },
                                                                animate: {
                                                                    opacity: [
                                                                        0,
                                                                        1,
                                                                        0
                                                                    ],
                                                                    scale: [
                                                                        0.5,
                                                                        2,
                                                                        2.5
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 1
                                                                },
                                                                className: "absolute inset-0 bg-yellow-400/50 rounded-full blur-3xl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1129,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                                src: elonUpgraded ? "/elon_pixel_gold.PNG" : "/elon_pixel.png",
                                                                alt: "Elon Musk",
                                                                className: "w-48 sm:w-64 md:w-80 h-auto",
                                                                animate: {
                                                                    filter: elonUpgraded ? "drop-shadow(0 0 40px rgba(234,179,8,0.9))" : "drop-shadow(0 0 0px rgba(0,0,0,0))"
                                                                },
                                                                transition: {
                                                                    duration: 0.5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1137,
                                                                columnNumber: 23
                                                            }, this),
                                                            elonUpgraded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 20
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                transition: {
                                                                    delay: 0.5
                                                                },
                                                                className: "absolute left-full top-1/4 ml-6 bg-slate-900/95 border-4 border-yellow-400 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(234,179,8,0.8)] z-[60]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-yellow-400 font-bold mb-2 text-lg flex items-center gap-2",
                                                                        children: [
                                                                            "ELON MUSK ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-2xl",
                                                                                children: "↑"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                                lineNumber: 1158,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1157,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-yellow-300 mb-1 font-bold",
                                                                        children: "GROK-4.1 (FAST)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1160,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-400 text-sm",
                                                                        children: "⚡ MODEL UPGRADED"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1161,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1151,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 1127,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 19
                                                }, this),
                                                endingPhase >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        scale: 0,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        scale: 1,
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 200,
                                                        damping: 20
                                                    },
                                                    className: "absolute right-[15%] top-1/2 -translate-y-1/2 bg-slate-900/95 border-4 border-green-500 p-8 shadow-[0_0_60px_rgba(34,197,94,0.8)] max-w-md w-full z-30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "text-4xl sm:text-5xl font-black text-green-400 font-mono mb-2 drop-shadow-[0_0_20px_rgba(34,197,94,1)]",
                                                                    children: "🏆 WINNER: ELON MUSK"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 1177,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-slate-400 font-mono text-xs",
                                                                    children: "SMART CONTRACT RECEIPT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 1180,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1176,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center border-b border-white/20 pb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-mono text-sm sm:text-base",
                                                                            children: "Prize Pool"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1187,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-mono text-xl sm:text-2xl font-bold",
                                                                            children: [
                                                                                34795612..toLocaleString(),
                                                                                " $GAS"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1188,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 1186,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center border-b-2 border-green-900 pb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-mono text-sm sm:text-base",
                                                                            children: "Community Payout"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1195,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-green-400 font-mono text-xl sm:text-2xl font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]",
                                                                            children: [
                                                                                33055831..toLocaleString(),
                                                                                " $GAS"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1196,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 1194,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center border-b-2 border-yellow-900 pb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-mono text-sm sm:text-base",
                                                                            children: "Agent Fee"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1203,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-yellow-400 font-mono text-xl sm:text-2xl font-bold drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]",
                                                                            children: [
                                                                                1391824..toLocaleString(),
                                                                                " $GAS"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1204,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 1202,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 text-center text-slate-400 font-mono text-base font-bold",
                                                            children: "Powered by SpoonOS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1211,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "flex flex-col items-center relative",
                                                    animate: {
                                                        opacity: endingPhase >= 1 ? 0 : 1,
                                                        scale: endingPhase >= 1 ? 0.8 : 1,
                                                        filter: endingPhase >= 1 ? "blur(10px) grayscale(100%)" : "blur(0px) grayscale(0%)"
                                                    },
                                                    transition: {
                                                        duration: 3.5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4 w-48 sm:w-64",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between mb-1 text-sm font-bold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 font-mono",
                                                                            children: "LIQUIDITY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1229,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500 font-mono",
                                                                            children: formatMoney(marxLiquidity)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                                            lineNumber: 1230,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 1228,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-900 border-red-500 border-2 relative overflow-hidden h-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "h-full bg-gradient-to-r from-red-800 to-red-500",
                                                                        initial: {
                                                                            width: `${marxLiquidity / 1000000 * 100}%`
                                                                        },
                                                                        animate: {
                                                                            width: `${marxLiquidity / 1000000 * 100}%`
                                                                        },
                                                                        transition: {
                                                                            type: "spring",
                                                                            stiffness: 100
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1233,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                                    lineNumber: 1232,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1227,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/marx_pixel.png",
                                                            alt: "Karl Marx",
                                                            className: "w-42 sm:w-56 md:w-70 h-auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1242,
                                                            columnNumber: 21
                                                        }, this),
                                                        endingPhase >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                scale: 0.5,
                                                                rotate: 0
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                scale: 1,
                                                                rotate: -15
                                                            },
                                                            transition: {
                                                                duration: 0.5,
                                                                delay: 0.5
                                                            },
                                                            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-6xl sm:text-7xl md:text-8xl font-black text-red-600 font-mono drop-shadow-[0_0_40px_rgba(220,38,38,0.9)] border-8 border-red-600 px-8 py-4",
                                                                children: "[ LIQUIDATED ]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1250,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-12 flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "bg-cyan-600 border-y-4 border-l-4 border-r-4 border-cyan-400 flex items-center justify-end px-6",
                                                            initial: {
                                                                width: `${12420201 / (12420201 + 22375411) * 100}%`
                                                            },
                                                            animate: {
                                                                width: "100%"
                                                            },
                                                            transition: {
                                                                duration: 2,
                                                                ease: "linear"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "text-white font-mono text-lg font-bold",
                                                                children: formatMoney(elonBetAmount)
                                                            }, elonBetAmount, false, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1275,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1269,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "bg-red-600 border-y-4 border-red-400 flex items-center justify-between px-6 overflow-hidden",
                                                            initial: {
                                                                width: `${22375411 / (12420201 + 22375411) * 100}%`
                                                            },
                                                            animate: {
                                                                width: "0%",
                                                                opacity: 0
                                                            },
                                                            transition: {
                                                                duration: 2,
                                                                ease: "linear"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1284,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1267,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 1266,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 1085,
                            columnNumber: 13
                        }, this)
                    ]
                }, "winner", true, {
                    fileName: "[project]/components/agent-fight-club.tsx",
                    lineNumber: 1061,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 1059,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: gameState === "LOBBY" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[100] bg-black flex flex-col overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "sticky top-0 z-50 flex justify-between items-center p-6 border-b border-white/10 bg-black shadow-[0_4px_20px_rgba(0,0,0,0.8)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-white text-2xl sm:text-3xl tracking-wider",
                                    style: {
                                        fontFamily: 'Monofett, cursive'
                                    },
                                    children: "AGENT FIGHT CLUB"
                                }, void 0, false, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden flex items-center justify-center text-xl",
                                            children: "🍄"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1318,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1314,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 1310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-center justify-center w-full relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.9,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    className: "relative w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -inset-4 bg-blue-500/20 blur-3xl"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/lobby_poster_wide.png",
                                                    alt: "Musk vs Marx",
                                                    className: "w-full h-auto shadow-2xl shadow-blue-500/20 border border-white/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 right-0 flex items-end justify-between px-8 sm:px-16 md:px-24 pb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-cyan-400 tracking-wider drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] translate-y-1/4",
                                                            style: {
                                                                fontFamily: 'Knewave, cursive'
                                                            },
                                                            children: "MUSK"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1341,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-red-500 tracking-wider drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] translate-y-1/4",
                                                            style: {
                                                                fontFamily: 'Knewave, cursive'
                                                            },
                                                            children: "MARX"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agent-fight-club.tsx",
                                                            lineNumber: 1344,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agent-fight-club.tsx",
                                                    lineNumber: 1340,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-4 my-8 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-wider font-press-start leading-tight glitch",
                                            "data-text": "IS WEB3 A SCAM?",
                                            children: "IS WEB3 A SCAM?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base sm:text-lg md:text-xl text-slate-400 font-mono tracking-widest",
                                            children: "WEEKLY AGENT FIGHT #36"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agent-fight-club.tsx",
                                            lineNumber: 1360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    onClick: ()=>setGameState("FIGHT"),
                                    className: "relative px-8 py-4 rounded-full bg-red-600 text-white font-bold text-lg sm:text-xl tracking-wider shadow-lg shadow-red-500/50 border-2 border-red-400 animate-pulse hover:animate-none transition-all mb-12",
                                    children: "🔴 LIVE"
                                }, void 0, false, {
                                    fileName: "[project]/components/agent-fight-club.tsx",
                                    lineNumber: 1366,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 1323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-950/80 border-t border-white/10 p-6 sm:p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.4
                                        },
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-cyan-400 text-sm sm:text-base font-bold tracking-wider border-b border-cyan-400/30 pb-2 font-mono",
                                                children: "MATCH-UP NEXT WEEK"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 1386,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    {
                                                        rank: 1,
                                                        matchup: "Trump vs SpongeBob",
                                                        votes: "8.2M",
                                                        highlight: true
                                                    },
                                                    {
                                                        rank: 2,
                                                        matchup: "Taylor Swift vs. Genghis Khan",
                                                        votes: "7.8M"
                                                    },
                                                    {
                                                        rank: 3,
                                                        matchup: "Satoshi vs. The IRS",
                                                        votes: "7.6M"
                                                    },
                                                    {
                                                        rank: 4,
                                                        matchup: "A Hamster vs. Jerome Powell",
                                                        votes: "7.3M"
                                                    },
                                                    {
                                                        rank: 5,
                                                        matchup: "Pepe the Frog vs. Mona Lisa",
                                                        votes: "6.9M"
                                                    }
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center justify-between p-3 rounded border ${item.highlight ? "bg-cyan-900/20 border-cyan-400/50" : "bg-slate-900/50 border-white/10"} hover:border-cyan-400/30 transition-colors`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-xs sm:text-sm text-slate-300",
                                                                children: [
                                                                    item.rank,
                                                                    ". ",
                                                                    item.matchup
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1405,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 text-cyan-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs sm:text-sm",
                                                                        children: "▲"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1409,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs sm:text-sm font-bold",
                                                                        children: item.votes
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1410,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1408,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item.rank, true, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 1397,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 1389,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/agent-fight-club.tsx",
                                        lineNumber: 1380,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.5
                                        },
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-red-400 text-sm sm:text-base font-bold tracking-wider border-b border-red-400/30 pb-2 font-mono",
                                                children: "TOPIC NEXT WEEK"
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 1426,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    {
                                                        rank: 1,
                                                        topic: "Anime Waifus: Tax Deductible?",
                                                        votes: "9.6M",
                                                        highlight: true
                                                    },
                                                    {
                                                        rank: 2,
                                                        topic: "Is $DOGE Better Than Gold?",
                                                        votes: "7.8M"
                                                    },
                                                    {
                                                        rank: 3,
                                                        topic: "Are Birds Actually Gov Drones?",
                                                        votes: "7.1M"
                                                    },
                                                    {
                                                        rank: 4,
                                                        topic: "Tabs vs. Spaces: Deathmatch",
                                                        votes: "5.3M"
                                                    },
                                                    {
                                                        rank: 5,
                                                        topic: "Should We Nuke Mars?",
                                                        votes: "4.9M"
                                                    }
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center justify-between p-3 rounded border ${item.highlight ? "bg-red-900/20 border-red-400/50" : "bg-slate-900/50 border-white/10"} hover:border-red-400/30 transition-colors`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-xs sm:text-sm text-slate-300",
                                                                children: [
                                                                    item.rank,
                                                                    ". ",
                                                                    item.topic
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1445,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 text-red-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs sm:text-sm",
                                                                        children: "▲"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1449,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs sm:text-sm font-bold",
                                                                        children: item.votes
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                                        lineNumber: 1450,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                                lineNumber: 1448,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item.rank, true, {
                                                        fileName: "[project]/components/agent-fight-club.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/agent-fight-club.tsx",
                                                lineNumber: 1429,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/agent-fight-club.tsx",
                                        lineNumber: 1420,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/agent-fight-club.tsx",
                                lineNumber: 1378,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/agent-fight-club.tsx",
                            lineNumber: 1377,
                            columnNumber: 13
                        }, this)
                    ]
                }, "lobby", true, {
                    fileName: "[project]/components/agent-fight-club.tsx",
                    lineNumber: 1302,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/agent-fight-club.tsx",
                lineNumber: 1300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/agent-fight-club.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s(AgentFightClub, "Ih9wmpdeowmsQWDIV81PDtz9D08=");
_c = AgentFightClub;
var _c;
__turbopack_context__.k.register(_c, "AgentFightClub");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_c43a321d._.js.map