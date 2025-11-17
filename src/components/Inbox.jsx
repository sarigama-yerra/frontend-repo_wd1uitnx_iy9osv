import { useMemo } from 'react'
import { FileText, FileImage, FileSpreadsheet, Folder, Sparkles, ArrowRight } from 'lucide-react'

const sample = [
  { name: 'Invoice_1045.pdf', type: 'pdf', text: 'Acme Corp Invoice #1045 due 03/02', predicted: '/Finance/Invoices', confidence: 0.93 },
  { name: 'W2_2024.pdf', type: 'pdf', text: 'W-2 Wage and Tax Statement 2024', predicted: '/Personal/Taxes', confidence: 0.88 },
  { name: 'drivers_license.jpg', type: 'image', text: 'State of CA DL 123456', predicted: '/Personal/IDs', confidence: 0.74 },
  { name: 'bank_statement.csv', type: 'csv', text: 'Transactions Jan 2025', predicted: '/Finance/Bank', confidence: 0.69 },
]

function iconFor(type){
  switch(type){
    case 'image': return <FileImage className="text-pink-600" size={18}/>
    case 'csv': return <FileSpreadsheet className="text-emerald-600" size={18}/>
    default: return <FileText className="text-indigo-600" size={18}/>
  }
}

export default function Inbox() {
  const items = useMemo(()=>sample, [])

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 text-white grid place-items-center"><Sparkles size={16}/></div>
            <h3 className="font-semibold text-gray-900">Smart inbox</h3>
          </div>
          <button className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">Process new files</button>
        </div>

        <div className="divide-y">
          {items.map((f, idx) => (
            <div key={idx} className="p-4 flex items-start justify-between gap-4 hover:bg-gray-50">
              <div className="flex items-start gap-3 min-w-0">
                <div className="h-9 w-9 rounded-md bg-gray-100 grid place-items-center">
                  {iconFor(f.type)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900 truncate max-w-[240px] sm:max-w-xs md:max-w-md">{f.name}</p>
                    <span className="text-xs text-gray-500">OCR {Math.round(f.confidence*100)}% confident</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-1">{f.text}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 text-sm px-2 py-1 rounded-md border border-indigo-200 bg-indigo-50 text-indigo-700">
                  <Folder size={14}/> {f.predicted}
                </div>
                <ArrowRight className="text-gray-400" size={16}/>
                <button className="px-3 py-1.5 rounded-md border border-gray-200 hover:border-gray-300 text-sm">File</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
