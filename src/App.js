"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wishes = [
  "🎂 May this year bring you endless happiness!",
  "🌟 Keep shining bright and chasing your dreams.",
  "💌 You’re special, today and always.",
  "✨ May every day sparkle with joy!",
  "💖 Wishing you love, laughter, and light.",
  "🎉 Celebrate yourself today & always.",
  "🌈 Life is better with your smile in it.",
  "💫 Keep spreading your magic everywhere.",
  "🌹 You’re truly unforgettable.",
  "🎁 May your heart be full of surprises.",
  "🍰 Today is all about you, enjoy every bite of it!",
  "🎀 You deserve the best of everything this year.",
  "🥳 Happiest Birthday to the most amazing soul!",
  "💎 You shine brighter than any diamond.",
  "🌸 May your day bloom with love and joy.",
  "🎇 Let the fireworks of happiness light up your year.",
  "🧁 Sweet moments for the sweetest person.",
  "💃 Dance through life with endless joy!",
  "🦋 A beautiful soul deserves a beautiful birthday.",
  "🌞 May your smile outshine the sun today.",
  "🎶 Let your laughter be the music of the day.",
  "🍫 May your life be as sweet as chocolates.",
  "🕊️ Peace, love, and blessings on your special day.",
  "🌍 The world is brighter with you in it.",
  "🍾 Cheers to love, life, and happiness!",
  "📸 Make unforgettable memories today.",
  "💐 You deserve bouquets of happiness today.",
  "🔥 May passion and joy fuel your dreams.",
  "🎊 Here’s to new adventures this year.",
  "🌻 You make life sunny and bright.",
  "👑 Birthday Queen, rule your day with love!",
  "🛶 Sail smoothly into another year of success.",
  "🌌 May your nights sparkle with stars of happiness.",
  "🍦 May your life be topped with joy like ice cream.",
  "💞 Loved today, tomorrow, and forever.",
  "🧸 Sending you hugs filled with warmth.",
  "🪄 May your wishes turn into magical realities.",
  "🍹 Relax, laugh, and enjoy every moment today.",
  "🎨 Paint your year with the brightest colors.",
  "🚀 Reach for the stars, nothing can stop you!",
  "🌴 May calmness and joy surround you.",
  "📚 May this year add wonderful stories to your life.",
  "💃 Keep being the life of every celebration.",
  "💝 Today is proof of how much you’re loved.",
  "🍯 You’re sweeter than honey, stay that way!",
  "🎯 May you always hit happiness right on target.",
  "💡 Keep glowing and inspiring everyone around.",
  "🍀 Lucky are those who have you in their lives.",
  "🤍 A heart as pure as yours deserves the best.",
  "🎶 Sing, laugh, and make today unforgettable!"
];


export default function BirthdayPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto change card every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % wishes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.h1
        className="absolute top-20 text-xl font-bold text-white drop-shadow-lg"
        animate={{ scale: [1, 1.1, 1], color: ["#fff", "#ffe4e1", "#fff"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🎉 Happy Birthday Muskan 🎉
      </motion.h1>

      {/* Floating background wishes */}
      {wishes.map((msg, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/10 text-white p-4 rounded-xl shadow-lg text-sm backdrop-blur-md"
          initial={{
            x: Math.random() * window.innerWidth - 200,
            y: Math.random() * window.innerHeight - 200,
          }}
          animate={{
            x: Math.random() * window.innerWidth - 200,
            y: Math.random() * window.innerHeight - 200,
            opacity: i === activeIndex ? 1 : 0.3,
            scale: i === activeIndex ? 1 : 0.6,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {msg}
        </motion.div>
      ))}

      {/* Focused card in center */}
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          className="absolute text-white bg-gradient-to-r from-pink-500 via-red-400 to-purple-600 px-8 py-6 rounded-2xl text-xl font-semibold shadow-2xl"
          initial={{ scale: 0, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 20 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {wishes[activeIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Animated Footer */}
      <motion.footer
        className="absolute bottom-6 text-lg font-semibold flex items-center gap-2"
        animate={{ scale: [1, 1.3, 1], color: ["#fff", "#ff4d6d", "#fff"] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Made with ❤️ by You
      </motion.footer>
    </div>
  );
}
