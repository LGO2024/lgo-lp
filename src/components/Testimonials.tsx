import { motion } from 'framer-motion'

const testimonials = [
  {
    avatar: '👨‍🎓',
    quote:
      '今まで何時間もかかっていた宿探しが、LGOのおかげで10分で終わりました！AIが提案してくれるから、自信を持ってメンバーに提案できました。',
    name: 'Aさん',
    role: '大学3年 サークル代表',
    stars: 5,
  },
  {
    avatar: '👩‍🎓',
    quote:
      '旅行後にAIが作ってくれた動画が最高でした！みんなでSNSにアップして、最高の思い出になりました。来年もLGOを使います！',
    name: 'Bさん',
    role: '大学2年 ゼミ長',
    stars: 5,
  },
  {
    avatar: '🧑‍🎓',
    quote:
      '正直、幹事はやりたくなかったけど、LGOがあったから乗り切れました。特に3択提案は、優柔不断な私には神機能でしたね。',
    name: 'Cさん',
    role: '大学4年 旅行幹事',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-4" style={{ background: '#EEF8FF' }}>
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
            style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', color: '#1a1a1a' }}
          >
            LGOを使った先輩幹事の声
          </h2>
          <p className="text-gray-500 text-sm">実際にLGOを利用した先輩たちのリアルな声</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl p-6"
              style={{ background: 'white', boxShadow: '0 4px 20px rgba(27,111,228,0.08)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                「{t.quote}」
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: '#EEF8FF' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
