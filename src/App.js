import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wishes = [
  "🎂 May this year bring you endless happiness!",
  "🌟 Keep shining bright and chasing your dreams.",
  "💌 You’re special, today and always.",
  "🎉 Here’s to laughter, love, and magical moments.",
  "💖 You make life more beautiful just by being you.",
  "🌸 Wishing you peace, love, and lots of cake!",
  "🔥 You’re unstoppable, keep being amazing.",
  "💫 May all your dreams sparkle into reality.",
  "🎶 Happiness is having you in my life.",
  "🍫 Stay sweet, strong, and fabulous.",
  "✨ May your smile never fade.",
  "🌈 The world is brighter with you in it.",
  "🌻 Keep blooming like the sunshine you are.",
  "🥳 Celebrate yourself—you deserve it!",
  "💎 You’re rare, precious, and priceless.",
  "🌌 Shine like the stars you were born to be.",
  "🍰 Life is sweeter with you around.",
  "💐 Wishing you endless love and joy.",
  "🎁 You’re a gift to everyone around you.",
  "🌊 Go with the flow, and enjoy the ride of life.",
  "🏆 Keep achieving new heights, champ!",
  "📸 May today be full of picture-perfect moments.",
  "🎇 You’re the sparkle in everyone’s story.",
  "🎵 Your vibe is pure magic.",
  "🍦 Stay cool, stay sweet, stay YOU.",
  "🦋 May you transform into your best self every day.",
  "🌹 You deserve all the love and kindness.",
  "💭 Keep dreaming big, the sky is yours.",
  "🍀 Luck always finds its way to you.",
  "🌞 You are sunshine mixed with magic."
];

export default function WishesPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wishes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.5,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.h1
        className="relative z-10 text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
        animate={{
          textShadow: [
            "0px 0px 10px #fff",
            "0px 0px 20px #ff6ec7",
            "0px 0px 30px #ff9a8b",
            "0px 0px 40px #fff",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🎉 Happy Birthday <span className="text-yellow-300">Muskan</span> 🎂
      </motion.h1>

      {/* Wish Cards */}
      <div className="relative z-10 mt-10 w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white bg-opacity-80 text-center px-6 py-8 rounded-2xl shadow-2xl text-xl md:text-2xl font-semibold w-80"
          >
            {wishes[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Heart */}
      <motion.footer
        className="absolute bottom-8 text-6xl z-10"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        ❤️
      </motion.footer>
    </div>
  );
}
