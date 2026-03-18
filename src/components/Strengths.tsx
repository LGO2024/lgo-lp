import { motion } from 'framer-motion'

const strengths = [
  {
    icon: '🤖',
    title: 'AI即時マッチング',
    description:
      '深夜のファミレス会議中も、LINEのAIチャットが即座にヒアリング＆提案。幹事の熱量が高い瞬間にクロージングまで持っていきます。',
  },
  {
    icon: '🎬',
    title: '思い出のAI動画自動生成（完全無料）',
    description:
      'LGO経由で予約した団体には、旅行中の素材をアップロードするだけでプロ級の動画が完成するAI自動編集機能を無料で提供。',
  },
  {
    icon: '🎯',
    title: '選択回避の法則を応用した「究極の3択」',
    description:
      '膨大なプランの中からAIが「あなたにはこの3つがベスト」と理由付きで絞り込み提案。迷う時間をゼロに。',
  },
]

export default function Strengths() {
  return (
    <section className="py-16 px-4" style={{ background: '#fff' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="font-black mb-3"
            style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', color: '#1a1a1a' }}
          >
            なぜLGOが選ばれるのか？<br />
            幹事も参加者も笑顔になる3つの理由
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {strengths.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl p-6 text-center"
              style={{ boxShadow: '0 4px 24px rgba(27,111,228,0.1)', border: '1px solid #EEF8FF' }}
            >
              {/* Number badge */}
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-black mb-3"
                style={{ background: '#1B6FE4' }}
              >
                {index + 1}
              </div>
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="font-black text-base mb-3" style={{ color: '#1a1a1a' }}>
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
