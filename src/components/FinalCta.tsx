import { motion } from 'framer-motion'

const LINE_URL = 'https://lin.ee/Y6CJmpm'

export default function FinalCta() {
  return (
    <section
      className="py-20 px-4 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B6FE4 0%, #0d4fb8 50%, #0a3a8f 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-4">🎉</div>
          <h2
            className="text-white font-black mb-4"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)' }}
          >
            もう、幹事の悩みに<br />サヨナラ！
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
            LGOで、あなたも最高の合宿・旅行体験を。<br />
            今すぐAIシミュレーターを試して、幹事の負担から解放されましょう！
          </p>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-base sm:text-lg"
            style={{ padding: '1.1rem 2.2rem', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
          >
            1分で診断！LGO公式LINEを友だち追加する（無料）
          </a>

          <div className="mt-6 flex items-center justify-center gap-6 text-blue-200 text-sm">
            <span>✅ 完全無料</span>
            <span>✅ 個人情報不要</span>
            <span>✅ 1分で完了</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
