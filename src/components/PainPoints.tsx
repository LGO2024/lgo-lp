import { motion } from 'framer-motion'

const pains = [
  {
    icon: '😰',
    text: '大人数（30名〜50名）のスケジュール調整が地獄…',
  },
  {
    icon: '💸',
    text: '予算内で最高の宿を見つけるのが至難の業…',
  },
  {
    icon: '🤯',
    text: '「どこがいいか分からない」と、他社との相見積もりで迷子に…',
  },
  {
    icon: '😩',
    text: '参加者全員を満足させられるか、プレッシャーで夜も眠れない…',
  },
  {
    icon: '⏰',
    text: 'そもそも、企画する時間がない！',
  },
]

export default function PainPoints() {
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
            className="font-black mb-2"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', color: '#1a1a1a' }}
          >
            あなたはこんな悩みを<br className="sm:hidden" />抱えていませんか？
          </h2>
          <p className="text-gray-500 text-sm mt-2">幹事なら誰もが経験する「あるある」の悩み</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: '#FFF5F5', border: '1px solid #FFE0E0' }}
            >
              <div className="text-2xl flex-shrink-0 mt-0.5">{pain.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: '#FFE0E0', color: '#e53e3e' }}
                  >
                    よくある悩み
                  </span>
                </div>
                <p className="text-sm font-bold leading-relaxed" style={{ color: '#2d2d2d' }}>
                  {pain.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p
            className="text-xl font-black"
            style={{ color: '#1B6FE4' }}
          >
            ↓ これら全部、LGOが解決します！
          </p>
        </motion.div>
      </div>
    </section>
  )
}
