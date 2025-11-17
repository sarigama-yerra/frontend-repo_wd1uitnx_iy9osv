import { useState } from 'react'
import { Plus, Trash2, Wand2, Folder, ChevronRight } from 'lucide-react'

export default function RulesBuilder({ onSave }) {
  const [rules, setRules] = useState([
    { id: 1, if: 'contains', value: 'Invoice', then: '/Finance/Invoices', confidence: 0.86 },
    { id: 2, if: 'entity', value: 'SSN', then: '/Personal/IDs', confidence: 0.78 },
  ])

  const addRule = () => setRules(r => [...r, { id: Date.now(), if: 'contains', value: '', then: '/', confidence: 0.9 }])
  const removeRule = (id) => setRules(r => r.filter(x => x.id !== id))
  const update = (id, key, val) => setRules(r => r.map(x => x.id === id ? { ...x, [key]: val } : x))

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white grid place-items-center"><Wand2 size={16}/></div>
            <h3 className="font-semibold text-gray-900">Auto-file rules</h3>
          </div>
          <button onClick={()=>onSave?.(rules)} className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">Save</button>
        </div>

        <div className="p-5 space-y-3">
          {rules.map(rule => (
            <div key={rule.id} className="grid md:grid-cols-12 gap-3 items-center p-3 rounded-lg border border-gray-200">
              <select value={rule.if} onChange={e=>update(rule.id, 'if', e.target.value)} className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="contains">Text contains</option>
                <option value="entity">Entity extracted</option>
                <option value="amount">Amount over</option>
              </select>
              <input value={rule.value} onChange={e=>update(rule.id, 'value', e.target.value)} placeholder="e.g. Invoice" className="md:col-span-4 px-3 py-2 border border-gray-300 rounded-md text-sm" />
              <ChevronRight className="hidden md:block text-gray-400" size={16}/>
              <div className="md:col-span-4 flex items-center gap-2">
                <Folder size={16} className="text-indigo-600"/>
                <input value={rule.then} onChange={e=>update(rule.id, 'then', e.target.value)} placeholder="/Finance/Invoices" className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm" />
              </div>
              <button onClick={()=>removeRule(rule.id)} className="justify-self-end p-2 rounded-md hover:bg-red-50 text-red-600"><Trash2 size={16}/></button>
            </div>
          ))}
          <button onClick={addRule} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300 text-sm">
            <Plus size={16}/> Add rule
          </button>
        </div>
      </div>
    </section>
  )
}
