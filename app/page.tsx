"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-100 relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-mono text-gray-800 mb-16 tracking-wider"
        >
          Vector Parallel, Inc
        </motion.h1>

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <div className="w-96 h-28 mb-6">
            <Image
              src="/logo.svg"
              alt="Vector Parallel Logo"
              width={391}
              height={116}
              className="w-full h-full object-contain"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg font-mono text-gray-700 tracking-wide"
          >
            Bit.wise()
          </motion.p>
        </motion.div>

        {/* About Us Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={() => setIsDrawerOpen(true)}
          className="group relative px-8 py-3 border-2 border-gray-800 rounded-full 
                     font-mono text-gray-800 tracking-wider hover:bg-gray-800 
                     hover:text-stone-100 transition-all duration-300 ease-in-out
                     transform hover:scale-105"
        >
          <span className="flex items-center gap-3">
            LearnAbout(us)
            <motion.span
              className="text-xl"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⇒
            </motion.span>
            About Us
          </span>
        </motion.button>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 text-center space-y-2"
        >
          <p className="text-sm font-mono text-gray-600 tracking-wide">
            1800 Wazee Street Denver CO 80202 United States
          </p>
          <p className="text-xs font-mono text-gray-500 tracking-wider">
            © {new Date().getFullYear()} Vector Parallel, Inc.
          </p>
        </motion.div>
      </div>

      {/* Side Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.5,
              }}
              className="fixed right-0 top-0 h-full w-1/3 min-w-[400px] max-w-[600px] bg-white shadow-2xl z-50 
                         flex flex-col border-l border-gray-200"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-mono text-gray-800 tracking-wider">
                  About Us
                </h2>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="space-y-4 text-gray-700 font-mono text-sm leading-relaxed">
                    <p className="font-semibold text-gray-800">
                      <strong>To Our Future Architects of Tomorrow,</strong>
                    </p>

                    <p>
                      In an era pulsating with marvel and kinetic energy, we at{" "}
                      <strong>Vector Parallel</strong> reach out to share the
                      chronicle of our journey, the constellation of our dreams,
                      and the blueprint of our shared future. Our odyssey began
                      with a vision, at once elegantly simple and profoundly
                      ambitious: to be the <strong>seamless catalyst</strong>,
                      the <strong>intuitive conduit</strong> forging an
                      effortless bond between the enterprise and the boundless
                      potential of Artificial Intelligence.
                    </p>

                    <p>
                      We navigate a time of information deluge, where technology
                      unfurls infinite horizons yet simultaneously presents
                      complexities of an unprecedented scale. We saw enterprises
                      charting these new AI waters with a mix of aspiration and
                      apprehension, and we felt the silent ache of AI's
                      transformative power remaining partially latent, its full
                      symphony yet to be conducted. It was then we resolved to
                      become that <strong>vital nexus</strong>.
                    </p>

                    <p>
                      Our collective is woven from the spirit of{" "}
                      <strong>
                        restless innovators and compassionate visionaries
                      </strong>
                      , individuals daring to dream beyond the conventional,
                      eager to sculpt a better world. Each member contributes a
                      unique thread – a distinct background, a specialized
                      skill, a fresh perspective – yet we are unified by an
                      unshakeable conviction: technology must be the handmaiden
                      of human progress, not its shackle.
                    </p>

                    <p>
                      In the realm of technological innovation, we are not
                      content to rest on laurels. We understand that true
                      innovation is not measured by lines of code or processing
                      speed alone, but by the{" "}
                      <strong>paradigms it shifts</strong>, the tangible
                      problems it dissolves, and the positive change it
                      orchestrates. Thus, our focus is laser-sharp: to engineer
                      solutions that foster a more organic, profoundly efficient{" "}
                      <strong>symbiosis</strong> between enterprise and AI.
                    </p>

                    <p>
                      We stand at the threshold of discovery, eager to explore
                      the uncharted territories of "what if" alongside you, to
                      co-author a future that is not only more intelligent, but
                      more intuitive, more empathetic, and ultimately, more{" "}
                      <strong>profoundly human</strong>.
                    </p>

                    <p className="text-right font-semibold text-gray-800 pt-4">
                      With earnest anticipation,
                      <br />
                      <strong>The Entire Team at Vector Parallel, Inc.</strong>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full py-3 bg-gray-800 text-white font-mono 
                           rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
