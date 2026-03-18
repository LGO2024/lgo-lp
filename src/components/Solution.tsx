import { motion } from 'framer-motion'

export default function Solution() {
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
            className="font-black mb-4"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', color: '#1a1a1a' }}
          >
            LGOが、そのすべての悩みを<br />解決します！
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
            LGOは、大学生のサークルやゼミの合宿・旅行幹事のために生まれた、<strong>AI即時マッチングサービス</strong>です。<br />
            あなたの「やりたくない」を「やってよかった！」に変える、画期的なソリューションを提供します。
          </p>
        </motion.div>

        {/* Visual illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="rounded-3xl p-8 max-w-2xl w-full text-center"
            style={{ background: 'white', boxShadow: '0 8px 40px rgba(27,111,228,0.12)' }}
          >
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {/* Before */}
              <div className="text-center">
                <div className="text-5xl mb-2">😫</div>
                <div
                  className="text-sm font-bold px-3 py-1 rounded-lg"
                  style={{ background: '#FFF5F5', color: '#e53e3e' }}
                >
                  幹事の苦労
                </div>
                <ul className="mt-3 text-xs text-gray-500 text-left space-y-1">
                  <li>✗ 深夜のファミレス会議</li>
                  <li>✗ 何時間もの宿探し</li>
                  <li>✗ 予算オーバーのリスク</li>
                  <li>✗ プレッシャーとストレス</li>
                </ul>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <div
                  className="text-3xl font-black"
                  style={{ color: '#1B6FE4' }}
                >
                  →
                </div>
                <div
                  className="text-xs font-bold mt-1 px-2 py-1 rounded-full text-white"
                  style={{ background: '#1B6FE4' }}
                >
                  LGO
                </div>
              </div>

              {/* After */}
              <div className="text-center">
                <div className="text-5xl mb-2">🎉</div>
                <div
                  className="text-sm font-bold px-3 py-1 rounded-lg"
                  style={{ background: '#F0FFF4', color: '#22c55e' }}
                >
                  幹事の喜び
                </div>
                <ul className="mt-3 text-xs text-gray-600 text-left space-y-1">
                  <li>✅ AIが即座にプラン提案</li>
                  <li>✅ 10分で宿が決まる</li>
                  <li>✅ 予算ぴったりの提案</li>
                  <li>✅ 思い出作りに専念</li>
                </ul>
              </div>
            </div>

            <div
              className="mt-6 p-4 rounded-2xl text-center"
              style={{ background: '#EEF8FF' }}
            >
              <p className="text-sm font-bold" style={{ color: '#1B6FE4' }}>
                🤖 AIが24時間365日、あなたの合宿計画をサポート
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { num: '10分', label: '平均プラン決定時間' },
            { num: '無料', label: '学生は完全無料' },
            { num: '24h', label: 'AIサポート対応' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black" style={{ color: '#1B6FE4' }}>{stat.num}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
