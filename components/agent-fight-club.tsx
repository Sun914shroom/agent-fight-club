"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, TrendingUp, Wallet, QrCode, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"

// --- TYPES ---
type GameState = "LOBBY" | "FIGHT" | "VOTE" | "WINNER"

// --- GAME DATA ---
const SCRIPT = [
  {
    round: 1,
    lines: [
      {
        speaker: "ELON",
        text: "Haha, broke commie! You lived off handouts while I build empires. Web3's pure freedom—WAGMI!",
        delay: 4000,
      },
      {
        speaker: "MARX",
        text: "Vampire capitalist! Sucking blood from proletariat with your scam coins.",
        delay: 4000,
      },
    ],
  },
  {
    round: 2,
    lines: [
      {
        speaker: "ELON",
        text: "I create value! DOGE flips fiat. Free market wins!",
        delay: 3000,
      },
      {
        speaker: "MARX",
        text: "Staking is theft! Rug pulls are bourgeois betrayal!",
        delay: 4000,
      },
    ],
  },
  {
    round: 3,
    lines: [
      {
        speaker: "ELON",
        text: "Buyout time! Minting your ideology as a memecoin. Market cap: Zero!",
        delay: 3000,
      },
      {
        speaker: "MARX",
        text: "Hard Fork revolution! 51% attack incoming!",
        delay: 3000,
      },
    ],
  },
]

export default function AgentFightClub() {
  const [gameState, setGameState] = useState<GameState>("LOBBY")
  const [elonLiquidity, setElonLiquidity] = useState(1000000)
  const [marxLiquidity, setMarxLiquidity] = useState(1000000)
  const [fightStep, setFightStep] = useState(0)
  const [currentDialogue, setCurrentDialogue] = useState<{ speaker: string; text: string } | null>(null)
  const [hoveredChar, setHoveredChar] = useState<"ELON" | "MARX" | null>(null)
  const [hoveredLiquidity, setHoveredLiquidity] = useState<"ELON" | "MARX" | null>(null)

  // COMMENTED OUT: Old auto-play fight logic
  // useEffect(() => {
  //   if (gameState === "FIGHT") {
  //     // ... old auto-play code
  //   }
  // }, [gameState, currentRound])

  // Manual Spacebar Control for FIGHT
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState === "FIGHT" && e.code === "Space") {
        e.preventDefault()
        
        // Advance fight step
        const nextStep = fightStep + 1
        setFightStep(nextStep)
        
        // Dialogue and damage logic
        if (nextStep === 1) {
          // Musk Round 1
          setCurrentDialogue({
            speaker: "ELON",
            text: "Haha, broke commie! You lived off handouts while I build empires. Web3's pure freedom—WAGMI!"
          })
          setMarxLiquidity(prev => Math.max(0, prev - Math.floor(Math.random() * 100000 + 100000)))
        } else if (nextStep === 2) {
          // Marx Round 1 Reply
          setCurrentDialogue({
            speaker: "MARX",
            text: "Vampire capitalist! Sucking blood from proletariat with your scam coins."
          })
          setElonLiquidity(prev => Math.max(0, prev - Math.floor(Math.random() * 100000 + 100000)))
        } else if (nextStep === 3) {
          // Musk Round 2
          setCurrentDialogue({
            speaker: "ELON",
            text: "I create value! DOGE flips fiat. Free market wins!"
          })
          setMarxLiquidity(prev => Math.max(0, prev - Math.floor(Math.random() * 100000 + 100000)))
        } else if (nextStep === 4) {
          // Marx Round 2 Reply
          setCurrentDialogue({
            speaker: "MARX",
            text: "Staking is theft! Rug pulls are bourgeois betrayal!"
          })
          setElonLiquidity(prev => Math.max(0, prev - Math.floor(Math.random() * 100000 + 100000)))
        } else if (nextStep === 5) {
          // Musk Round 3
          setCurrentDialogue({
            speaker: "ELON",
            text: "Buyout time! Minting your ideology as a memecoin. Market cap: Zero!"
          })
          setMarxLiquidity(prev => Math.max(0, prev - Math.floor(Math.random() * 100000 + 100000)))
        } else if (nextStep === 6) {
          // Marx Round 3 Reply
          setCurrentDialogue({
            speaker: "MARX",
            text: "Hard Fork revolution! 51% attack incoming!"
          })
          setElonLiquidity(prev => Math.max(0, prev - Math.floor(Math.random() * 100000 + 100000)))
        }
      }
      
      // COMMENTED OUT: Old voting secret control
      // if (gameState === "VOTE" && e.key === "ArrowRight") {
      //   setGameState("WINNER")
      // }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [gameState, fightStep])

  // --- HELPERS ---
  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  // COMMENTED OUT: Old betting toast
  // const showBettingToast = () => { ... }

  return (
    <div className="w-full h-screen max-w-5xl mx-auto font-press-start text-xs sm:text-sm relative flex flex-col justify-between p-2 sm:p-4 overflow-hidden select-none text-white">
      <Toaster position="bottom-right" />

      {/* CRT SCANLINE EFFECT */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
      <div className="pointer-events-none fixed inset-0 z-50 animate-scanline bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 opacity-20" />

      {/* FIGHT SCENE OVERLAY */}
      <AnimatePresence mode="wait">
        {gameState === "FIGHT" && (
          <motion.div
            key="fight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/background_pixel.png" 
                alt="Fight Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header (Same as Lobby) */}
              <header className="flex justify-between items-center p-6 border-b border-white/10 bg-black/80 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                <h1 className="text-white text-2xl sm:text-3xl tracking-wider" style={{ fontFamily: 'Monofett, cursive' }}>
                  AGENT FIGHT CLUB
                </h1>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden flex items-center justify-center text-xl">
                    🍄
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black animate-pulse" />
                </div>
              </header>

              {/* Main Fight Area */}
              <div className="flex-1 flex flex-col items-center justify-between py-8 px-4">
                {/* Title Section */}
                <div className="text-center">
                  <h2 
                    className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider font-press-start leading-tight glitch mb-2"
                    data-text="IS WEB3 A SCAM?"
                  >
                    IS WEB3 A SCAM?
                  </h2>
                    <p className="text-white font-mono text-base sm:text-lg md:text-xl font-bold">
                    $34,795,612 Vol💰
                    </p>
                </div>

                {/* Arena - Characters with Liquidity Bars */}
                <div className="w-full flex items-center justify-between px-8 sm:px-12 md:px-16 relative">
                  {/* Elon Character */}
                  <div className="flex flex-col items-center relative">
                    {/* Liquidity Bar */}
                    <div 
                      className="mb-4 w-48 sm:w-64 cursor-pointer"
                      onMouseEnter={() => setHoveredLiquidity("ELON")}
                      onMouseLeave={() => setHoveredLiquidity(null)}
                    >
                      <div className={`flex justify-between mb-1 transition-all duration-300 ${
                        hoveredLiquidity === "ELON" 
                          ? "text-base font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                          : "text-sm font-bold"
                      }`}>
                        <span className="text-cyan-400 font-mono">LIQUIDITY</span>
                        <span className="text-cyan-400 font-mono">{formatMoney(elonLiquidity)}</span>
                      </div>
                      <div className={`bg-slate-900 border-cyan-500 relative overflow-hidden transition-all duration-300 ${
                        hoveredLiquidity === "ELON"
                          ? "h-5 border-4 scale-110 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                          : "h-4 border-2"
                      }`}>
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                          initial={{ width: "100%" }}
                          animate={{ width: `${(elonLiquidity / 1000000) * 100}%` }}
                          transition={{ type: "spring", stiffness: 100 }}
                        />
                      </div>
                    </div>

                    {/* Character Image */}
                    <div 
                      className="relative transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredChar("ELON")}
                      onMouseLeave={() => setHoveredChar(null)}
                    >
                      <img 
                        src="/elon_pixel.png" 
                        alt="Elon Musk" 
                        className={`w-48 sm:w-64 md:w-80 h-auto transition-all duration-300 ${
                          hoveredChar === "ELON" 
                            ? "scale-110 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]" 
                            : ""
                        }`}
                      />
                      
                      {/* Hover Stats Card */}
                      {hoveredChar === "ELON" && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute left-full top-1/4 ml-6 bg-slate-900/95 border-4 border-cyan-400 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                        >
                          <div className="text-cyan-400 font-bold mb-2 text-lg">ELON MUSK</div>
                          <div className="text-white mb-1">Grok-3 (Beta)</div>
                          <div className="text-gray-400 text-sm">Wallet: 0x...D0GE</div>
                        </motion.div>
                      )}
                      
                      {/* NO Label Under Musk */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <span className="text-cyan-400 font-bold text-3xl font-press-start drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                          NO
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dialogue Box (Centered Between Characters) */}
                  {currentDialogue && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 border-4 border-white p-4 max-w-md text-center"
                    >
                      <div className={`text-sm font-bold mb-2 ${currentDialogue.speaker === "ELON" ? "text-cyan-400" : "text-red-500"}`}>
                        {currentDialogue.speaker}
                      </div>
                      <div className="text-white text-xs leading-relaxed">
                        {currentDialogue.text}
                      </div>
                    </motion.div>
                  )}

                  {/* Marx Character */}
                  <div className="flex flex-col items-center relative">
                    {/* Liquidity Bar */}
                    <div 
                      className="mb-4 w-48 sm:w-64 cursor-pointer"
                      onMouseEnter={() => setHoveredLiquidity("MARX")}
                      onMouseLeave={() => setHoveredLiquidity(null)}
                    >
                      <div className={`flex justify-between mb-1 transition-all duration-300 ${
                        hoveredLiquidity === "MARX" 
                          ? "text-base font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" 
                          : "text-sm font-bold"
                      }`}>
                        <span className="text-red-500 font-mono">LIQUIDITY</span>
                        <span className="text-red-500 font-mono">{formatMoney(marxLiquidity)}</span>
                      </div>
                      <div className={`bg-slate-900 border-red-500 relative overflow-hidden transition-all duration-300 ${
                        hoveredLiquidity === "MARX"
                          ? "h-5 border-4 scale-110 shadow-[0_0_20px_rgba(239,68,68,0.6)]"
                          : "h-4 border-2"
                      }`}>
                        <motion.div 
                          className="h-full bg-gradient-to-r from-red-800 to-red-500"
                          initial={{ width: "100%" }}
                          animate={{ width: `${(marxLiquidity / 1000000) * 100}%` }}
                          transition={{ type: "spring", stiffness: 100 }}
                        />
                      </div>
                    </div>

                    {/* Character Image */}
                    <div 
                      className="relative transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredChar("MARX")}
                      onMouseLeave={() => setHoveredChar(null)}
                    >
                      <img 
                        src="/marx_pixel.png" 
                        alt="Karl Marx" 
                        className={`w-42 sm:w-56 md:w-70 h-auto transition-all duration-300 ${
                          hoveredChar === "MARX" 
                            ? "scale-110 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" 
                            : ""
                        }`}
                      />
                      
                      {/* Hover Stats Card */}
                      {hoveredChar === "MARX" && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute right-full top-1/4 mr-6 bg-slate-900/95 border-4 border-red-500 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(239,68,68,0.6)]"
                        >
                          <div className="text-red-500 font-bold mb-2 text-lg">KARL MARX</div>
                          <div className="text-white mb-1">Llama-3-70B</div>
                          <div className="text-gray-400 text-sm">Wallet: 0x...RED1</div>
                        </motion.div>
                      )}
                      
                      {/* YES Label Under Marx */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <span className="text-red-500 font-bold text-3xl font-press-start drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                          YES
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Betting Footer Bar */}
                <div className="w-full">
                  <div className="relative h-20 flex items-center">
                    {/* Background Bar */}
                    <div className="absolute inset-0 flex">
                      {/* Musk Side (Cyan) */}
                      <div 
                        className="bg-cyan-600 border-y-4 border-l-4 border-cyan-400 flex items-center justify-between px-6"
                        style={{ width: `${(12420201 / (12420201 + 22375411)) * 100}%` }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-bold border-2 border-cyan-300 text-xs sm:text-sm shadow-lg"
                        >
                          BET ON MUSK
                        </motion.button>
                        <div className="text-white font-mono text-lg font-bold">
                          {formatMoney(12420201)}
                        </div>
                      </div>
                      
                      {/* Marx Side (Red) */}
                      <div 
                        className="bg-red-600 border-y-4 border-r-4 border-red-400 flex items-center justify-between px-6"
                        style={{ width: `${(22375411 / (12420201 + 22375411)) * 100}%` }}
                      >
                        <div className="text-white font-mono text-lg font-bold">
                          {formatMoney(22375411)}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold border-2 border-red-300 text-xs sm:text-sm shadow-lg"
                        >
                          BET ON MARX
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMMENTED OUT: Old health bars, stage, and footer - replaced with full-screen FIGHT overlay */}
      {/* 
      <header className="relative z-10 w-full mb-4">
        ... old health bars code ...
      </header>
      <main className="flex-1 relative flex items-end justify-between px-4 sm:px-12 pb-4 z-0 min-h-[300px]">
        ... old stage with character images ...
      </main>
      <footer className="relative z-20 mt-4 space-y-4">
        ... old dialogue/UI container ...
      </footer>
      */}

      {/* LOBBY OVERLAY - FULL SCREEN */}
      <AnimatePresence mode="wait">
        {gameState === "LOBBY" && (
          <motion.div
            key="lobby"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col overflow-y-auto"
          >
            {/* 1. HEADER (Top Bar) */}
            <header className="sticky top-0 z-50 flex justify-between items-center p-6 border-b border-white/10 bg-black shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              <h1 className="text-white text-2xl sm:text-3xl tracking-wider" style={{ fontFamily: 'Monofett, cursive' }}>
                AGENT FIGHT CLUB
              </h1>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden flex items-center justify-center text-xl">
                  🍄
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black animate-pulse" />
              </div>
            </header>

            {/* 2. HERO SECTION (Center Stage - Main Event) */}
            <div className="flex-1 flex flex-col items-center justify-center w-full relative">
              {/* The Poster */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-full"
              >
                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl" />
                <div className="relative">
                  <img
                    src="/lobby_poster_wide.png"
                    alt="Musk vs Marx"
                    className="w-full h-auto shadow-2xl shadow-blue-500/20 border border-white/10"
                  />
                  
                  {/* Names Overlay - Floating on Poster */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-8 sm:px-16 md:px-24 pb-0">
                    <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-cyan-400 tracking-wider drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] translate-y-1/4" style={{ fontFamily: 'Knewave, cursive' }}>
                      MUSK
                    </span>
                    <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-red-500 tracking-wider drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] translate-y-1/4" style={{ fontFamily: 'Knewave, cursive' }}>
                      MARX
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Typography Below Poster */}
              <div className="text-center space-y-4 my-8 px-4">
                <h2 
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-wider font-press-start leading-tight glitch"
                  data-text="IS WEB3 A SCAM?"
                >
                  IS WEB3 A SCAM?
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-mono tracking-widest">
                  WEEKLY AGENT FIGHT #36
                </p>
              </div>

              {/* CTA Button (The Trigger) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGameState("FIGHT")}
                className="relative px-8 py-4 rounded-full bg-red-600 text-white font-bold text-lg sm:text-xl tracking-wider shadow-lg shadow-red-500/50 border-2 border-red-400 animate-pulse hover:animate-none transition-all mb-12"
              >
                🔴 LIVE
              </motion.button>
            </div>

            {/* 3. VOTING SECTION (Bottom Area - DAO Governance) */}
            <div className="bg-slate-950/80 border-t border-white/10 p-6 sm:p-8">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Column A: MATCH-UP NEXT WEEK */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-cyan-400 text-sm sm:text-base font-bold tracking-wider border-b border-cyan-400/30 pb-2 font-mono">
                    MATCH-UP NEXT WEEK
                  </h3>
                  <div className="space-y-2">
                    {[
                      { rank: 1, matchup: "Trump vs Buddha", votes: "8.2M", highlight: true },
                      { rank: 2, matchup: "Altman vs Zuck", votes: "7.8M" },
                      { rank: 3, matchup: "Jobs vs Gates", votes: "7.6M" },
                      { rank: 4, matchup: "Satoshi vs Vitalik", votes: "7.3M" },
                      { rank: 5, matchup: "Bezos vs Buffett", votes: "6.9M" },
                    ].map((item) => (
                      <div
                        key={item.rank}
                        className={`flex items-center justify-between p-3 rounded border ${
                          item.highlight
                            ? "bg-cyan-900/20 border-cyan-400/50"
                            : "bg-slate-900/50 border-white/10"
                        } hover:border-cyan-400/30 transition-colors`}
                      >
                        <span className="font-mono text-xs sm:text-sm text-slate-300">
                          {item.rank}. {item.matchup}
                        </span>
                        <div className="flex items-center gap-1 text-cyan-400">
                          <span className="text-xs sm:text-sm">▲</span>
                          <span className="font-mono text-xs sm:text-sm font-bold">
                            {item.votes}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Column B: TOPIC NEXT WEEK */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-red-400 text-sm sm:text-base font-bold tracking-wider border-b border-red-400/30 pb-2 font-mono">
                    TOPIC NEXT WEEK
                  </h3>
                  <div className="space-y-2">
                    {[
                      { rank: 1, topic: "Is AI Conscious?", votes: "8.2M", highlight: true },
                      { rank: 2, topic: "UBI for Humans", votes: "7.8M" },
                      { rank: 3, topic: "Mars vs Earth", votes: "7.6M" },
                      { rank: 4, topic: "AGI Safety", votes: "7.3M" },
                      { rank: 5, topic: "Crypto vs Fiat", votes: "6.9M" },
                    ].map((item) => (
                      <div
                        key={item.rank}
                        className={`flex items-center justify-between p-3 rounded border ${
                          item.highlight
                            ? "bg-red-900/20 border-red-400/50"
                            : "bg-slate-900/50 border-white/10"
                        } hover:border-red-400/30 transition-colors`}
                      >
                        <span className="font-mono text-xs sm:text-sm text-slate-300">
                          {item.rank}. {item.topic}
                        </span>
                        <div className="flex items-center gap-1 text-red-400">
                          <span className="text-xs sm:text-sm">▲</span>
                          <span className="font-mono text-xs sm:text-sm font-bold">
                            {item.votes}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMMENTED OUT: Old health bars, stage section with character images, and dialogue footer
          These have been replaced by the full-screen FIGHT overlay above.
          This old code used elonHealth/marxHealth/isShaking/currentLine/winProb states that are no longer defined.
      
      {/* --- TOP: HEALTH BARS --- *}
      <header className="relative z-10 w-full mb-4">
        ...
      </header>

      {/* --- MIDDLE: STAGE --- *}
      <main className="flex-1 relative flex items-end justify-between px-4 sm:px-12 pb-4 z-0 min-h-[300px]">
        ...
      </main>

      {/* --- BOTTOM: DIALOGUE / UI --- *}
      <footer className="relative z-20 mt-4 space-y-4">
        ...
      </footer>
      */}
    </div>
  )
}
