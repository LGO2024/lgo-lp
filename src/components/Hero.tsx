import { motion } from 'framer-motion'

const LINE_URL = 'https://lin.ee/X3UQbkT'

export default function Hero() {
  const scrollToSimulator = () => {
    const el = document.getElementById('simulator')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B6FE4 0%, #0d4fb8 50%, #0a3a8f 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px),
                            radial-gradient(circle at 50% 80%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px, 80px 80px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-bold"
          style={{ background: '#FFDA54', color: '#1a1a1a' }}
        >
          🎓 大学生の合宿・旅行幹事必見！
        </motion.div>

        {/* Main catch copy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-black leading-tight mb-4"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', lineHeight: 1.2 }}
        >
          深夜のファミレス会議、<br />
          もう終わりにしませんか？
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100 font-bold mb-5"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
        >
          LGOがあなたの合宿・旅行計画を劇的に変える。
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-blue-100 mb-8 leading-relaxed"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
        >
          人数調整、予算交渉、宿探し…面倒な幹事の仕事はLGOに任せて、<br className="hidden sm:block" />
          最高の思い出作りに集中しよう！
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={scrollToSimulator}
            className="btn-cta w-full sm:w-auto text-base sm:text-lg"
            style={{ padding: '1rem 2rem', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', maxWidth: '480px' }}
          >
            1分でわかる！合宿予算シミュレーターを試す（無料）
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-blue-200 text-sm"
        >
          ✅ 個人情報入力不要 &nbsp;✅ 完全無料 &nbsp;✅ 1分で完了
        </motion.p>

        {/* LINE link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6"
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line inline-flex mx-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで無料相談する
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  )
}
