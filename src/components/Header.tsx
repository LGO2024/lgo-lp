const LINE_URL = 'https://lin.ee/Y6CJmpm'

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
      style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-2xl font-black tracking-tight"
          style={{ color: '#1B6FE4', letterSpacing: '-0.04em' }}
        >
          LGO
        </span>
        <span className="hidden sm:inline text-xs text-gray-500 font-medium">LGO旅チェック</span>
      </div>

      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta text-sm py-2 px-4"
        style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}
      >
        LINEで無料相談
      </a>
    </header>
  )
}
