import { Cloud, FolderCog, Settings, Bot } from "lucide-react";

export default function Header({ onOpenSettings, connected }) {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow">
            <Cloud size={22} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              DropSort AI
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-200 text-blue-700 bg-blue-50">
                <Bot size={12} /> OCR + AI
              </span>
            </h1>
            <p className="text-xs text-gray-500">Automatically read and file your documents into Dropbox</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border ${connected ? 'border-emerald-200 text-emerald-700 bg-emerald-50' : 'border-amber-200 text-amber-700 bg-amber-50'}`}>
            <span className={`h-2 w-2 rounded-full ${connected ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            {connected ? 'Connected' : 'Connect Dropbox'}
          </span>
          <button onClick={onOpenSettings} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition">
            <Settings size={16} />
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}
