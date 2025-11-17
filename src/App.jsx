import { useState } from 'react'
import Header from './components/Header'
import ConnectPanel from './components/ConnectPanel'
import RulesBuilder from './components/RulesBuilder'
import Inbox from './components/Inbox'
import Activity from './components/Activity'
import SettingsModal from './components/SettingsModal'

function App() {
  const [connected, setConnected] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header onOpenSettings={()=>setOpenSettings(true)} connected={connected} />

      {!connected ? (
        <>
          <Hero onConnect={()=>setConnected(true)} />
          <ConnectPanel onConnect={setConnected} />
          <HowItWorks />
        </>
      ) : (
        <>
          <ConnectSuccess />
          <RulesBuilder onSave={()=>{}} />
          <Inbox />
          <Activity />
        </>
      )}

      <Footer />
      <SettingsModal open={openSettings} onClose={()=>setOpenSettings(false)} />
    </div>
  )
}

function Hero({ onConnect }){
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Let AI file your documents in Dropbox automatically</h2>
            <p className="mt-4 text-gray-600 text-lg">Drop PDFs, scans, or emails into your inbox folder. OCR reads them, AI understands them, and everything gets filed neatly for you.</p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={onConnect} className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Connect Dropbox</button>
              <p className="text-sm text-gray-500">No setup required. Works in minutes.</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Invoices','IDs','Statements'].map((t,i)=>(
                <div key={i} className="p-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-700">{t}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-gradient-to-br from-blue-100 via-indigo-100 to-white rounded-[32px]"/>
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-sm p-4">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,#dbeafe,transparent_60%),radial-gradient(circle_at_70%_40%,#e0e7ff,transparent_60%)]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks(){
  const steps = [
    { title: 'Connect', desc: 'Authorize access to your Dropbox inbox folder' },
    { title: 'Read', desc: 'OCR extracts text and key fields from each document' },
    { title: 'Understand', desc: 'AI classifies type and extracts entities' },
    { title: 'File', desc: 'Rules and predictions place it in the right folder' },
  ]
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-4 gap-4">
          {steps.map((s,i)=>(
            <div key={i} className="p-5 rounded-xl border border-gray-200 bg-white">
              <div className="text-sm font-medium text-gray-900">{i+1}. {s.title}</div>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConnectSuccess(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 p-4 text-sm">
        Connected to Dropbox. New files in your inbox will appear below.
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500">
        Built for teams who want organized docs without busywork.
      </div>
    </footer>
  )
}

export default App
