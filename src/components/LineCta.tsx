import { motion } from 'framer-motion'

const LINE_URL = 'https://lin.ee/X3UQbkT'

export default function LineCta() {
  return (
    <section className="py-16 px-4" style={{ background: '#EEF8FF' }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{ background: '#06C755', color: 'white' }}
          >
            LINE公式
          </span>

          <h2
            className="font-black mb-4"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#1a1a1a' }}
          >
            診断結果の全貌と、あなただけの<br />「究極の3択」を見るには？
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
            LINEで友だち追加するだけで、LGOがあなたの旅行計画を<br className="hidden sm:block" />
            24時間サポート。詳細なプランの提案から予約まで完全サポートします。
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '🤖', text: 'LGOが即座に回答' },
              { icon: '🎯', text: '3択で迷わない提案' },
              { icon: '🎬', text: '動画生成も無料' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl text-center"
                style={{ background: 'white', boxShadow: '0 2px 12px rgba(6,199,85,0.1)' }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-bold">{item.text}</p>
              </div>
            ))}
          </div>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line inline-flex text-base sm:text-lg mx-auto"
            style={{ padding: '1rem 2rem' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LGO公式LINEを友だち追加して、詳細プランを見る（無料）
          </a>

          <p className="mt-3 text-xs text-gray-400">
            ✅ スパム・勧誘メッセージは一切送りません &nbsp;✅ いつでもブロック可能
          </p>
        </motion.div>
      </div>
    </section>
  )
}
