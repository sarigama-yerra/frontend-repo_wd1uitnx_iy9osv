import { Clock, FolderCheck, AlertTriangle } from 'lucide-react'

const history = [
  { time: '2m ago', name: 'Invoice_1045.pdf', action: 'Filed to /Finance/Invoices', ok: true },
  { time: '7m ago', name: 'drivers_license.jpg', action: 'Needs review: low confidence', ok: false },
  { time: '1h ago', name: 'W2_2024.pdf', action: 'Filed to /Personal/Taxes', ok: true },
]

export default function Activity(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gray-800 text-white grid place-items-center"><Clock size={16}/></div>
            <h3 className="font-semibold text-gray-900">Recent activity</h3>
          </div>
        </div>
        <ul className="divide-y">
          {history.map((h, i)=> (
            <li key={i} className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{h.name}</p>
                <p className="text-sm text-gray-600">{h.action}</p>
              </div>
              {h.ok ? (
                <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md border border-emerald-200 text-emerald-700 bg-emerald-50"><FolderCheck size={14}/> Filed</span>
              ) : (
                <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md border border-amber-200 text-amber-700 bg-amber-50"><AlertTriangle size={14}/> Attention</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
