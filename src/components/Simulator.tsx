import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINE_URL = 'https://lin.ee/Y6CJmpm'

const steps = [
  {
    id: 1,
    label: '参加人数を教えてください',
    options: ['〜10名', '11〜30名', '31〜50名', '51名〜'],
  },
  {
    id: 2,
    label: '希望エリアはどこですか？',
    options: ['関東（箱根・伊豆など）', '関西（京都・大阪）', '九州・沖縄', 'その他'],
  },
  {
    id: 3,
    label: '旅行の目的は何ですか？',
    options: ['スポーツ合宿', 'ゼミ合宿', 'サークル旅行', '卒業旅行'],
  },
  {
    id: 4,
    label: '希望予算はどのくらいですか？',
    options: ['〜1万円/人', '1〜2万円/人', '2〜3万円/人', '3万円〜/人'],
  },
]

type Answers = string[]

function getMockPlans(answers: Answers) {
  const [people, area, purpose, budget] = answers
  return [
    {
      badge: 'コスパ最強',
      badgeColor: '#22c55e',
      name: `【${area}】${purpose}プラン A`,
      description: `${people}向けの人気プラン。${budget}の予算でも充実の内容を実現。大浴場・食事付きで参加者も大満足。`,
      price: budget,
      features: ['食事2食付き', '大浴場あり', '無料Wi-Fi'],
    },
    {
      badge: '施設充実',
      badgeColor: '#1B6FE4',
      name: `【${area}】${purpose}プラン B`,
      description: `設備が充実した人気施設。会議室・レクリエーション設備も完備。グループ活動にも最適。`,
      price: budget,
      features: ['会議室完備', 'レク設備あり', '専任スタッフ'],
    },
    {
      badge: '移動が楽',
      badgeColor: '#F96C30',
      name: `【${area}】${purpose}プラン C`,
      description: `駅近の好アクセス。${people}が一斉に移動しやすい立地。集合・解散もスムーズ。`,
      price: budget,
      features: ['駅から5分', '送迎バスあり', '荷物預かり'],
    },
  ]
}

export default function Simulator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>([])
  const [showResult, setShowResult] = useState(false)

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)

    if (step < steps.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    } else {
      setTimeout(() => setShowResult(true), 300)
    }
  }

  const handleReset = () => {
    setStep(0)
    setAnswers([])
    setShowResult(false)
  }

  const plans = showResult ? getMockPlans(answers) : []

  return (
    <section id="simulator" className="py-16 px-4" style={{ background: '#fff' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
            style={{ background: '#FFDA54', color: '#1a1a1a' }}
          >
            ★ メイン機能
          </span>
          <h2
            className="font-black mb-3"
            style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', color: '#1a1a1a' }}
          >
            まずは1分で診断！<br />
            あなたの理想の合宿プランを<br className="sm:hidden" />AIが瞬時に提案
          </h2>
          <p className="text-gray-500 text-sm">
            個人情報入力は一切不要！たった4つの質問に答えるだけ
          </p>
        </motion.div>

        {/* Simulator Card */}
        <div
          className="rounded-3xl p-6 sm:p-8"
          style={{ boxShadow: '0 8px 40px rgba(27,111,228,0.15)', border: '2px solid #EEF8FF' }}
        >
          {!showResult ? (
            <>
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Step {step + 1} / {steps.length}</span>
                  <span>{Math.round(((step) / steps.length) * 100)}% 完了</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: '#EEF8FF' }}>
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #1B6FE4, #06C755)' }}
                    animate={{ width: `${((step) / steps.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Step content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-center font-black text-lg mb-6" style={{ color: '#1a1a1a' }}>
                    Q{step + 1}. {steps[step].label}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {steps[step].options.map((option) => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect(option)}
                        className="p-4 rounded-2xl font-bold text-sm text-center transition-all"
                        style={{
                          background: '#EEF8FF',
                          color: '#1B6FE4',
                          border: '2px solid #d0e8ff',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#1B6FE4'
                          e.currentTarget.style.color = 'white'
                          e.currentTarget.style.borderColor = '#1B6FE4'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#EEF8FF'
                          e.currentTarget.style.color = '#1B6FE4'
                          e.currentTarget.style.borderColor = '#d0e8ff'
                        }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>

                  {/* Selected answers so far */}
                  {answers.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {answers.map((a, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ background: '#F0FFF4', color: '#22c55e', border: '1px solid #bbf7d0' }}
                        >
                          ✓ {a}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Result screen */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="font-black text-lg sm:text-xl mb-1" style={{ color: '#1a1a1a' }}>
                  おめでとうございます！
                </h3>
                <p className="text-sm text-gray-600">
                  あなたの条件にぴったりのプランが見つかりました！
                </p>
              </div>

              {/* Answer summary */}
              <div
                className="p-4 rounded-2xl mb-6 grid grid-cols-2 gap-2"
                style={{ background: '#EEF8FF' }}
              >
                {steps.map((s, i) => (
                  <div key={i} className="text-xs">
                    <span className="text-gray-400">{s.label.slice(0, 8)}…</span>
                    <br />
                    <span className="font-bold" style={{ color: '#1B6FE4' }}>{answers[i]}</span>
                  </div>
                ))}
              </div>

              {/* Mock plan cards */}
              <div className="space-y-4 mb-6">
                {plans.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl"
                    style={{ border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span
                        className="text-xs font-black px-3 py-1 rounded-full text-white"
                        style={{ background: plan.badgeColor }}
                      >
                        {plan.badge}
                      </span>
                      <span className="text-xs text-gray-400">予算: {plan.price}</span>
                    </div>
                    <p className="font-bold text-sm mb-1">{plan.name}</p>
                    <p className="text-xs text-gray-500 mb-2 leading-relaxed">{plan.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {plan.features.map((f, fi) => (
                        <span
                          key={fi}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: '#EEF8FF', color: '#1B6FE4' }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full block text-center text-base"
              >
                詳細プランをLINEで確認する（無料）
              </a>

              <button
                onClick={handleReset}
                className="mt-3 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                やり直す
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
