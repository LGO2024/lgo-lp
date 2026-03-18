const LINE_URL = 'https://lin.ee/Y6CJmpm'

export default function Footer() {
  return (
    <footer
      className="py-8 px-4 text-center"
      style={{ background: '#0f1929', color: '#9ca3af' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-2xl font-black text-white">LGO</span>
        </div>
        <p className="text-sm mb-3">AI合宿・旅行マッチングサービス</p>
        <div className="flex items-center justify-center gap-4 text-xs mb-4">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            プライバシーポリシー
          </a>
          <span>|</span>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            運営会社
          </a>
          <span>|</span>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            お問い合わせ
          </a>
        </div>
        <p className="text-xs">© 2026 LGO. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
