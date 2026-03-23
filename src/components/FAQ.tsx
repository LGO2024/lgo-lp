import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '本当に無料で利用できますか？',
    a: 'はい、学生の皆様は完全無料でご利用いただけます。LGOの収益は提携旅行会社からの送客手数料で成り立っています。',
  },
  {
    q: '個人情報は安全ですか？',
    a: 'シミュレーター利用時に個人情報は一切お伺いしません。LINE登録後も、プライバシーポリシーに基づき厳重に管理いたします。',
  },
  {
    q: 'どんな旅行プランが提案されますか？',
    a: '提携旅行会社から提供された、大学生の団体旅行に特化した多様なパッケージプランの中から、LGOが最適なものを選んで提案します。',
  },
  {
    q: '動画生成は誰でも使えますか？',
    a: 'LGO経由で旅行を予約された団体様は、無料でご利用いただけます。',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4" style={{ background: '#fff' }}>
      <div className="max-w-2xl mx-auto">
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
            LGOに関するQ&A
          </h2>
          <p className="text-gray-500 text-sm">よくある質問にお答えします</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm"
                style={{
                  background: openIndex === index ? '#EEF8FF' : 'white',
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                <span className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5"
                    style={{ background: '#1B6FE4' }}
                  >
                    Q
                  </span>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-3"
                  style={{ color: '#1B6FE4' }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-5 pb-5 flex gap-3">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5"
                        style={{ background: '#22c55e' }}
                      >
                        A
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
