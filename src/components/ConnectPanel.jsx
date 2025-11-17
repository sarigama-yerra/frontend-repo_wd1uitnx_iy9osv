import { useState } from 'react'
import { FolderOpen, Link2, KeyRound, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react'

export default function ConnectPanel({ onConnect }) {
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)

  const handleConnect = () => {
    setLoading(true)
    setTimeout(() => {
      onConnect(true)
      setLoading(false)
    }, 900)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid md:grid-cols-5 gap-6">
      <div className="md:col-span-3 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center">
            <Link2 size={18} />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Connect your Dropbox</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">Paste a short-lived access token to preview the experience. In production, this will use OAuth and never store your credentials.</p>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Access token</label>
          <div className="flex gap-2">
            <input value={token} onChange={e=>setToken(e.target.value)} placeholder="sl.BEArer_xxx" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={handleConnect} disabled={!token || loading} className="px-4 py-2 rounded-md bg-blue-600 text-white disabled:opacity-60 hover:bg-blue-700 transition">
              {loading ? 'Connecting…' : 'Connect'}
            </button>
          </div>
          <a href="https://www.dropbox.com/developers/apps" target="_blank" className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800">
            Where do I find this? <ExternalLink size={14}/>
          </a>
        </div>
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {[
            {icon: <ShieldCheck className="text-emerald-600" size={18} />, title: 'Secure by design', desc: 'OAuth flow with least privilege'},
            {icon: <KeyRound className="text-blue-600" size={18} />, title: 'Scoped access', desc: 'Only reads the folder you choose'},
            {icon: <FolderOpen className="text-indigo-600" size={18} />, title: 'Smart filing', desc: 'OCR + AI routes docs automatically'},
          ].map((f, i) => (
            <div key={i} className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
              <div className="flex items-center gap-2 font-medium text-gray-800">{f.icon}{f.title}</div>
              <p className="text-xs text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-900 mb-3">What happens after connect?</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2"><CheckCircle className="text-emerald-600 mt-0.5" size={16}/> We scan your chosen inbox folder for new files</li>
          <li className="flex items-start gap-2"><CheckCircle className="text-emerald-600 mt-0.5" size={16}/> OCR extracts text, entities, and key fields</li>
          <li className="flex items-start gap-2"><CheckCircle className="text-emerald-600 mt-0.5" size={16}/> AI classifies the document type and confidence</li>
          <li className="flex items-start gap-2"><CheckCircle className="text-emerald-600 mt-0.5" size={16}/> We apply your rules to file it in the right folder</li>
        </ul>
      </div>
    </section>
  )
}
