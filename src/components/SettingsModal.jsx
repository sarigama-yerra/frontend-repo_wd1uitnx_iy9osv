import { useEffect } from 'react'
import { X, FolderInput, Box, Brain, Shield } from 'lucide-react'

export default function SettingsModal({ open, onClose }){
  useEffect(()=>{
    const onEsc = (e)=> e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEsc)
    return ()=> document.removeEventListener('keydown', onEsc)
  }, [onClose])

  if(!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-lg bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Settings</h3>
            <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100"><X size={16}/></button>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2"><FolderInput size={16}/> Inbox folder</div>
                <input defaultValue="/Inbox" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              </div>
              <div className="p-3 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2"><Box size={16}/> Filing root</div>
                <input defaultValue="/" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              </div>
            </div>
            <div className="p-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2"><Brain size={16}/> Confidence threshold</div>
              <input type="range" min="50" max="99" defaultValue="75" className="w-full" />
              <p className="text-xs text-gray-600 mt-1">Below this, items stay in the inbox for review</p>
            </div>
            <div className="p-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2"><Shield size={16}/> Privacy</div>
              <p className="text-xs text-gray-600">We only read the folder you select. No training on your data.</p>
            </div>
          </div>
          <div className="px-5 py-3 border-t border-gray-200 flex items-center justify-end gap-2">
            <button onClick={onClose} className="px-3 py-1.5 rounded-md border border-gray-200">Close</button>
            <button className="px-3 py-1.5 rounded-md bg-blue-600 text-white">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
