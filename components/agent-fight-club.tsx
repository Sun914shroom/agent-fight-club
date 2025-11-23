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
  const [isThinking, setIsThinking] = useState(false)
  const [elonPercentage, setElonPercentage] = useState(50)
  const [endingPhase, setEndingPhase] = useState(0)
  const [elonUpgraded, setElonUpgraded] = useState(false)
  const [elonBetAmount, setElonBetAmount] = useState(12420201)
  const [marxBetAmount, setMarxBetAmount] = useState(22375411)
  
  // Combat Animation States
  const [projectile, setProjectile] = useState<{ id: number; from: "ELON" | "MARX" } | null>(null)
  const [elonHitFlash, setElonHitFlash] = useState(false)
  const [marxHitFlash, setMarxHitFlash] = useState(false)
  const [screenShake, setScreenShake] = useState(false)

  // Unified Global Control Logic (Debug/Demo Mode)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // === SPACEBAR: Unified Forward Control ===
      if (e.code === "Space") {
        e.preventDefault()
        
        if (gameState === "FIGHT" && !isThinking) {
          // Advance fight step
          const nextStep = fightStep + 1
          
          // Check if fight is complete
          if (nextStep > 6) {
            setGameState("VOTE")
            return
          }
          
          setFightStep(nextStep)
          setIsThinking(true)
          
          // Determine speaker and dialogue for this step
          let speaker = ""
          let text = ""
          let damage = 0
          
          if (nextStep === 1) {
            speaker = "ELON"
            text = "Haha, broke commie! You lived off handouts while I build empires. Web3 is pure freedom—WAGMI, you're NGMI!"
            damage = Math.floor(Math.random() * 100000 + 100000)
          } else if (nextStep === 2) {
            speaker = "MARX"
            text = "Vampire capitalist! Sucking blood from proletariat with your scam coins. You are selling digital air!"
            damage = Math.floor(Math.random() * 100000 + 100000)
          } else if (nextStep === 3) {
            speaker = "ELON"
            text = "I create value! DOGE flips fiat. Free market wins, no lazy unions needed!"
            damage = Math.floor(Math.random() * 100000 + 100000)
          } else if (nextStep === 4) {
            speaker = "MARX"
            text = "Staking is theft! Rug pulls are bourgeois betrayal! United against whale exploitation!"
            damage = Math.floor(Math.random() * 100000 + 100000)
          } else if (nextStep === 5) {
            speaker = "ELON"
            text = "Buyout time! Minting your bearded ass as an NFT—owning you forever. Shut your FUD mouth!"
            damage = Math.floor(Math.random() * 100000 + 100000)
          } else if (nextStep === 6) {
            speaker = "MARX"
            text = "Hard Fork revolution! 51% attack incoming! Redistribute the wallet! Seize the blockchain!"
            damage = Math.floor(Math.random() * 100000 + 100000)
          }
          
          // Show thinking bubble immediately
          if (speaker) {
            setCurrentDialogue({
              speaker: speaker,
              text: "..." // Thinking placeholder
            })
            
            // After 1 second, show actual dialogue and fire projectile
            setTimeout(() => {
              setCurrentDialogue({
                speaker: speaker,
                text: text
              })
              setIsThinking(false)
              
              // Fire projectile attack!
              setProjectile({ id: Date.now(), from: speaker as "ELON" | "MARX" })
              
              // After 0.4s (projectile flight time), trigger impact effects
              setTimeout(() => {
                // Remove projectile
                setProjectile(null)
                
                // Trigger hit flash on target
                if (speaker === "ELON") {
                  setMarxHitFlash(true)
                  setTimeout(() => setMarxHitFlash(false), 100)
                } else if (speaker === "MARX") {
                  setElonHitFlash(true)
                  setTimeout(() => setElonHitFlash(false), 100)
                }
                
                // Trigger screen shake
                setScreenShake(true)
                setTimeout(() => setScreenShake(false), 200)
                
                // Apply damage to opponent
                if (speaker === "ELON") {
                  setMarxLiquidity(prev => Math.max(0, prev - damage))
                } else if (speaker === "MARX") {
                  setElonLiquidity(prev => Math.max(0, prev - damage))
                }
              }, 400)
            }, 1000)
          }
        } else if (gameState === "VOTE") {
          // Transition to WINNER
          setGameState("WINNER")
          setEndingPhase(1) // Phase 1: Liquidation (instant)
          setTimeout(() => setEndingPhase(2), 2000) // Phase 2: Settlement (after 2s)
        }
      }
      
      // === 'F' KEY: Fast Forward to Voting ===
      if (e.key === "f" || e.key === "F") {
        e.preventDefault()
        if (gameState === "FIGHT") {
          // Clean up fight state
          setCurrentDialogue(null)
          setIsThinking(false)
          // Jump to voting
          setGameState("VOTE")
        }
      }
      
      // === ARROW LEFT: Safety Backtrack ===
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        
        if (gameState === "WINNER") {
          // Go back to VOTE
          setGameState("VOTE")
          setEndingPhase(0)
          setElonUpgraded(false)
          setElonBetAmount(12420201)
          setMarxBetAmount(22375411)
        } else if (gameState === "VOTE") {
          // Go back to FIGHT (at the end)
          setGameState("FIGHT")
          setFightStep(6)
          setCurrentDialogue({
            speaker: "MARX",
            text: "Hard Fork revolution! 51% attack incoming!"
          })
        } else if (gameState === "FIGHT") {
          // Go back to LOBBY
          setGameState("LOBBY")
          // Reset fight state
          setFightStep(0)
          setCurrentDialogue(null)
          setIsThinking(false)
          setElonLiquidity(1000000)
          setMarxLiquidity(1000000)
        }
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [gameState, fightStep, isThinking])

  // Ending Phase 1: Liquidation Animation
  useEffect(() => {
    if (gameState === "WINNER" && endingPhase === 1) {
      // Animate bet amounts - Elon's side grows, Marx's shrinks
      const interval = setInterval(() => {
        setElonBetAmount(prev => {
          const next = prev + 500000
          return next >= 34795612 ? 34795612 : next
        })
        setMarxBetAmount(prev => {
          const next = prev - 500000
          return next <= 0 ? 0 : next
        })
      }, 50)
      
      setTimeout(() => {
        clearInterval(interval)
        setElonBetAmount(34795612)
        setMarxBetAmount(0)
      }, 2000)
    }
  }, [gameState, endingPhase])

  // Ending Phase 2: Evolution Effect
  useEffect(() => {
    if (endingPhase === 2) {
      // Trigger Elon upgrade after 1s
      setTimeout(() => {
        setElonUpgraded(true)
      }, 1000)
    }
  }, [endingPhase])

  // Tug-of-War Animation Effect
  useEffect(() => {
    if (gameState === "VOTE") {
      // Reset to 50/50
      setElonPercentage(50)
      
      // Phase 1: Marx pushes hard! (0-1s) - Elon drops to 40%
      setTimeout(() => {
        setElonPercentage(40)
      }, 100)
      
      // Phase 2: The struggle! (1-3s) - wobbles between 42-48%
      setTimeout(() => {
        const wobbleInterval = setInterval(() => {
          setElonPercentage(42 + Math.random() * 6)
        }, 200)
        
        setTimeout(() => {
          clearInterval(wobbleInterval)
          
          // Phase 3: The Whale Entry! (3-4s) - Elon jumps to 52%
          setElonPercentage(52)
          
          // Phase 4: Decisive Victory! (4-5s) - Elon 58%
          setTimeout(() => {
            setElonPercentage(58)
          }, 1000)
        }, 2000)
      }, 1000)
    }
  }, [gameState])

  // --- HELPERS ---
  const formatMoney = (value: number) => {
    return `${new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)} $GAS`
  }

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
            animate={{ 
              opacity: 1,
              x: screenShake ? [-2, 2, -2, 2, 0] : 0,
              y: screenShake ? [-1, 1, -1, 1, 0] : 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: screenShake ? 0.2 : 0.3 }}
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
                {/* Title Section with NO/YES Labels */}
                <div className="w-full flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
                  {/* NO Label - Aligned with Musk */}
                  <div className="flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-6xl sm:text-7xl md:text-8xl font-press-start drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]" style={{ fontFamily: 'Knewave, cursive' }}>
                      NO
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="text-center">
                    <h2 
                      className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider font-press-start leading-tight glitch mb-2"
                      data-text="IS WEB3 A SCAM?"
                    >
                      IS WEB3 A SCAM?
                    </h2>
                    <p className="text-white font-mono text-base sm:text-lg md:text-xl font-bold">
                      💰34,795,612 $GAS Vol
                    </p>
                  </div>
                  
                  {/* YES Label - Aligned with Marx */}
                  <div className="flex-shrink-0">
                    <span className="text-red-500 font-bold text-6xl sm:text-7xl md:text-8xl font-press-start drop-shadow-[0_0_15px_rgba(239,68,68,0.9)]" style={{ fontFamily: 'Knewave, cursive' }}>
                      YES
                    </span>
                  </div>
                </div>

                {/* Arena - Characters with Liquidity Bars */}
                <div className="w-full flex items-center justify-between px-8 sm:px-12 md:px-16 relative">
                  {/* Flying Projectile */}
                  <AnimatePresence>
                    {projectile && (
                      <motion.div
                        key={projectile.id}
                        initial={{ 
                          x: projectile.from === "ELON" ? -200 : 200,
                          y: 0,
                          opacity: 0,
                          scale: 0.5
                        }}
                        animate={{ 
                          x: projectile.from === "ELON" ? 200 : -200,
                          y: 0,
                          opacity: 1,
                          scale: 1,
                          rotate: projectile.from === "ELON" ? 360 : -360
                        }}
                        exit={{ 
                          opacity: 0,
                          scale: 2
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                      >
                        <div className="text-6xl drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                          {projectile.from === "ELON" ? "🚀" : "📕"}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

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
                      <motion.img 
                        src="/elon_pixel.png" 
                        alt="Elon Musk" 
                        className={`w-48 sm:w-64 md:w-80 h-auto transition-all duration-300 ${
                          hoveredChar === "ELON" 
                            ? "scale-110 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]" 
                            : ""
                        }`}
                        animate={{
                          x: elonHitFlash ? [-5, 5, -5, 5, 0] : 0,
                          filter: elonHitFlash 
                            ? "brightness(1.5) sepia(1) hue-rotate(-50deg)" 
                            : "brightness(1) sepia(0) hue-rotate(0deg)"
                        }}
                        transition={{ duration: elonHitFlash ? 0.2 : 0.3 }}
                      />
                      
                      {/* Hover Stats Card */}
                      {hoveredChar === "ELON" && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute left-full top-1/4 ml-6 bg-slate-900/95 border-4 border-cyan-400 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(34,211,238,0.6)] z-[60]"
                        >
                          <div className="text-cyan-400 font-bold mb-2 text-lg">ELON MUSK</div>
                          <div className="text-white mb-1">Grok-3 (Beta)</div>
                          <div className="text-gray-400 text-sm">Wallet: 0x...D0GE</div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Dialogue Box (Vertical Panel Next to Speaker's Head) */}
                  {currentDialogue && (
                    <motion.div
                      key={currentDialogue.speaker}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`absolute top-[25%] ${
                        currentDialogue.speaker === "ELON" 
                          ? "left-[28%]" 
                          : "right-[28%]"
                      } w-80 max-w-sm bg-black/95 border-2 border-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 z-50`}
                    >
                      {/* LIVE FEED Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-red-500 text-[10px] font-bold font-mono tracking-wider">LIVE FEED</span>
                      </div>
                      
                      {/* Speaker Name */}
                      <div className={`text-base sm:text-lg font-bold mb-2 font-mono ${
                        currentDialogue.speaker === "ELON" ? "text-cyan-400" : "text-red-500"
                      }`}>
                        &gt; {currentDialogue.speaker}
                      </div>
                      
                      {/* Dialogue Text - Thinking or Speaking */}
                      {currentDialogue.text === "..." ? (
                        <div className="text-gray-400 text-sm sm:text-base font-bold leading-relaxed animate-pulse font-mono">
                          <span className="inline-block animate-bounce">.</span>
                          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                          <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                        </div>
                      ) : (
                        <div className="text-white text-sm sm:text-base font-bold leading-relaxed break-words font-mono">
                          {currentDialogue.text}
                        </div>
                      )}
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
                      <motion.img 
                        src="/marx_pixel.png" 
                        alt="Karl Marx" 
                        className={`w-42 sm:w-56 md:w-70 h-auto transition-all duration-300 ${
                          hoveredChar === "MARX" 
                            ? "scale-110 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" 
                            : ""
                        }`}
                        animate={{
                          x: marxHitFlash ? [-5, 5, -5, 5, 0] : 0,
                          filter: marxHitFlash 
                            ? "brightness(1.5) sepia(1) hue-rotate(-50deg)" 
                            : "brightness(1) sepia(0) hue-rotate(0deg)"
                        }}
                        transition={{ duration: marxHitFlash ? 0.2 : 0.3 }}
                      />
                      
                      {/* Hover Stats Card */}
                      {hoveredChar === "MARX" && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute right-full top-1/4 mr-6 bg-slate-900/95 border-4 border-red-500 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(239,68,68,0.6)] z-[60]"
                        >
                          <div className="text-red-500 font-bold mb-2 text-lg">KARL MARX</div>
                          <div className="text-white mb-1">Llama-3-70B</div>
                          <div className="text-gray-400 text-sm">Wallet: 0x...RED1</div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Betting Footer Bar */}
                <div className="w-full">
                  <div className="relative h-12 flex items-center">
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
                          className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-bold border-2 border-cyan-300 text-xs sm:text-sm shadow-lg font-mono"
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
                          className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold border-2 border-red-300 text-xs sm:text-sm shadow-lg font-mono"
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

      {/* VOTING OVERLAY - TUG-OF-WAR */}
      <AnimatePresence mode="wait">
        {gameState === "VOTE" && (
          <motion.div
            key="vote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
          >
            {/* Governance Panel */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-slate-900 border-4 border-white/30 p-8 sm:p-12 max-w-4xl w-full mx-4 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                    FINAL VOTE: DAO GOVERNANCE
                  </h1>
                </div>
              </div>

              {/* Tug-of-War Bar Container */}
              <div className="relative mb-8">
                {/* Percentage Labels Above Bar */}
                <div className="flex justify-between mb-3">
                  <motion.span
                    className="text-cyan-400 font-mono text-2xl sm:text-3xl font-bold"
                    animate={{ scale: elonPercentage > 50 ? [1, 1.15, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.round(elonPercentage)}%
                  </motion.span>
                  <motion.span
                    className="text-red-500 font-mono text-2xl sm:text-3xl font-bold"
                    animate={{ scale: elonPercentage < 50 ? [1, 1.15, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.round(100 - elonPercentage)}%
                  </motion.span>
                </div>

                {/* The Bar */}
                <div className="relative h-24 sm:h-32 flex border-4 border-white/50 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  {/* Elon Side (Left/Cyan) */}
                  <motion.div
                    className="relative bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-start px-4"
                    initial={{ width: "50%" }}
                    animate={{ width: `${elonPercentage}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  >
                    {/* Elon Avatar Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-300 border-4 border-white flex items-center justify-center text-3xl sm:text-4xl shadow-lg">
                      💙
                    </div>
                  </motion.div>

                  {/* Marx Side (Right/Red) */}
                  <motion.div
                    className="relative bg-gradient-to-l from-red-800 to-red-500 flex items-center justify-end px-4"
                    initial={{ width: "50%" }}
                    animate={{ width: `${100 - elonPercentage}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  >
                    {/* Marx Avatar Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-300 border-4 border-white flex items-center justify-center text-3xl sm:text-4xl shadow-lg">
                      ❤️
                    </div>
                  </motion.div>

                  {/* Glowing Frontline Divider */}
                  <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
                    initial={{ left: "50%" }}
                    animate={{ left: `${elonPercentage}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  />
                </div>

                {/* Names Under Bar */}
                <div className="flex justify-between mt-3">
                  <span className="text-cyan-400 font-bold text-xl sm:text-2xl font-mono">ELON</span>
                  <span className="text-red-500 font-bold text-xl sm:text-2xl font-mono">MARX</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WINNER OVERLAY - CINEMATIC ENDING (IN ARENA) */}
      <AnimatePresence mode="wait">
        {gameState === "WINNER" && (
          <motion.div
            key="winner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col"
          >
            {/* Keep the Fight Scene Background */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/background_pixel.png" 
                alt="Fight Background" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-black/50"
                animate={{ 
                  backgroundColor: endingPhase >= 2 ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)" 
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header (Same as Fight) */}
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

              {/* Main Arena */}
              <div className="flex-1 flex flex-col items-center justify-between py-8 px-4">
                {/* Title Section */}
                <div className="w-full flex items-center justify-center">
                  <div className="text-center">
                    <h2 
                      className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider font-press-start leading-tight glitch mb-2"
                      data-text="IS WEB3 A SCAM?"
                    >
                      IS WEB3 A SCAM?
                    </h2>
                    <p className="text-white font-mono text-base sm:text-lg md:text-xl font-bold">
                      {(elonBetAmount + marxBetAmount).toLocaleString()} $GAS Vol💰
                    </p>
                  </div>
                </div>

                {/* Arena - Characters */}
                <div className="w-full flex items-center justify-between px-8 sm:px-12 md:px-16 relative">
                  {/* Elon Character - WINNER */}
                  <motion.div 
                    className="flex flex-col items-center relative z-20"
                    animate={{ 
                      scale: endingPhase >= 2 ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {/* Character Image with Upgrade Effect */}
                    <div className="relative">
                      {endingPhase >= 2 && !elonUpgraded && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 2.5] }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0 bg-yellow-400/50 rounded-full blur-3xl"
                        />
                      )}
                      
                      <motion.img 
                        src={elonUpgraded ? "/elon_pixel_gold.PNG" : "/elon_pixel.png"}
                        alt="Elon Musk" 
                        className="w-48 sm:w-64 md:w-80 h-auto"
                        animate={{
                          filter: elonUpgraded 
                            ? "drop-shadow(0 0 40px rgba(234,179,8,0.9))" 
                            : "drop-shadow(0 0 0px rgba(0,0,0,0))"
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Upgraded Stats */}
                      {elonUpgraded && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute left-full top-1/4 ml-6 bg-slate-900/95 border-4 border-yellow-400 p-5 text-base font-mono whitespace-nowrap shadow-[0_0_30px_rgba(234,179,8,0.8)] z-[60]"
                        >
                          <div className="text-yellow-400 font-bold mb-2 text-lg flex items-center gap-2">
                            ELON MUSK <span className="text-2xl">↑</span>
                          </div>
                          <div className="text-yellow-300 mb-1 font-bold">GROK-4.1 (FAST)</div>
                          <div className="text-gray-400 text-sm">⚡ MODEL UPGRADED</div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Phase 2: Settlement Receipt (Right Side) */}
                  {endingPhase >= 2 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute right-[15%] top-1/2 -translate-y-1/2 bg-slate-900/95 border-4 border-green-500 p-8 shadow-[0_0_60px_rgba(34,197,94,0.8)] max-w-md w-full z-30"
                    >
                      {/* Header */}
                      <div className="text-center mb-6">
                        <h1 className="text-4xl sm:text-5xl font-black text-green-400 font-mono mb-2 drop-shadow-[0_0_20px_rgba(34,197,94,1)]">
                          🏆 WINNER: ELON MUSK
                        </h1>
                        <div className="text-slate-400 font-mono text-xs">SMART CONTRACT RECEIPT</div>
                      </div>

                      {/* Payouts */}
                      <div className="space-y-4">
                        {/* Row 1: Prize Pool */}
                        <div className="flex justify-between items-center border-b border-white/20 pb-3">
                          <span className="text-white font-mono text-sm sm:text-base">Prize Pool</span>
                          <span className="text-white font-mono text-xl sm:text-2xl font-bold">
                            {(34795612).toLocaleString()} $GAS
                          </span>
                        </div>

                        {/* Row 2: Community Payout */}
                        <div className="flex justify-between items-center border-b-2 border-green-900 pb-3">
                          <span className="text-white font-mono text-sm sm:text-base">Community Payout</span>
                          <span className="text-green-400 font-mono text-xl sm:text-2xl font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
                            {(33055831).toLocaleString()} $GAS
                          </span>
                        </div>

                        {/* Row 3: Agent Fee */}
                        <div className="flex justify-between items-center border-b-2 border-yellow-900 pb-3">
                          <span className="text-white font-mono text-sm sm:text-base">Agent Fee</span>
                          <span className="text-yellow-400 font-mono text-xl sm:text-2xl font-bold drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">
                            {(1391824).toLocaleString()} $GAS
                          </span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-6 text-center text-slate-400 font-mono text-base font-bold">
                        Powered by SpoonOS
                      </div>
                    </motion.div>
                  )}

                  {/* Marx Character - LOSER */}
                  <motion.div 
                    className="flex flex-col items-center relative"
                    animate={{ 
                      opacity: endingPhase >= 1 ? 0 : 1,
                      scale: endingPhase >= 1 ? 0.8 : 1,
                      filter: endingPhase >= 1 ? "blur(10px) grayscale(100%)" : "blur(0px) grayscale(0%)"
                    }}
                    transition={{ duration: 3.5 }}
                  >
                    <div className="mb-4 w-48 sm:w-64">
                      <div className="flex justify-between mb-1 text-sm font-bold">
                        <span className="text-red-500 font-mono">LIQUIDITY</span>
                        <span className="text-red-500 font-mono">{formatMoney(marxLiquidity)}</span>
                      </div>
                      <div className="bg-slate-900 border-red-500 border-2 relative overflow-hidden h-4">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-red-800 to-red-500"
                          initial={{ width: `${(marxLiquidity / 1000000) * 100}%` }}
                          animate={{ width: `${(marxLiquidity / 1000000) * 100}%` }}
                          transition={{ type: "spring", stiffness: 100 }}
                        />
                      </div>
                    </div>

                    <img 
                      src="/marx_pixel.png" 
                      alt="Karl Marx" 
                      className="w-42 sm:w-56 md:w-70 h-auto"
                    />
                    
                    {/* LIQUIDATED Stamp */}
                    {endingPhase >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: -15 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <div className="text-6xl sm:text-7xl md:text-8xl font-black text-red-600 font-mono drop-shadow-[0_0_40px_rgba(220,38,38,0.9)] border-8 border-red-600 px-8 py-4">
                          [ LIQUIDATED ]
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Betting Footer Bar */}
                <div className="w-full">
                  <div className="relative h-12 flex items-center">
                    <div className="absolute inset-0 flex">
                      {/* Elon Side (Grows to 100%) */}
                      <motion.div 
                        className="bg-cyan-600 border-y-4 border-l-4 border-r-4 border-cyan-400 flex items-center justify-end px-6"
                        initial={{ width: `${(12420201 / (12420201 + 22375411)) * 100}%` }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "linear" }}
                      >
                        <motion.div 
                          className="text-white font-mono text-lg font-bold"
                          key={elonBetAmount}
                        >
                          {formatMoney(elonBetAmount)}
                        </motion.div>
                      </motion.div>
                      
                      {/* Marx Side (Hidden completely) */}
                      <motion.div 
                        className="bg-red-600 border-y-4 border-red-400 flex items-center justify-between px-6 overflow-hidden"
                        initial={{ width: `${(22375411 / (12420201 + 22375411)) * 100}%` }}
                        animate={{ width: "0%", opacity: 0 }}
                        transition={{ duration: 2, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  )
}
