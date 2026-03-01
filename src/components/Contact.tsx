export function Contact({ onOpenSettings, onOpenNotifications }: { onOpenSettings: () => void, onOpenNotifications: () => void }) {
  return (
    <div className="pb-28">
      <div className="flex items-center bg-off-white/95 backdrop-blur-xl p-6 pb-4 justify-between sticky top-0 z-30 border-b border-white/40">
        <div className="text-slate-900 flex size-10 shrink-0 items-center justify-start cursor-pointer" onClick={onOpenSettings}>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200/50 overflow-hidden shadow-sm">
            <span className="material-symbols-outlined text-2xl text-slate-400">person</span>
          </div>
        </div>
        <h2 className="text-slate-900 text-lg font-bold tracking-tight flex-1 text-center font-display uppercase">บริการช่วยเหลือ</h2>
        <div className="flex w-10 items-center justify-end">
          <button onClick={onOpenNotifications} className="flex size-10 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-2xl text-slate-600">notifications</span>
          </button>
        </div>
      </div>

      <div className="px-5 pt-8 pb-4 text-center">
        <div className="inline-block relative">
          <div className="w-36 h-36 rounded-full p-1.5 glossy-blue-button mx-auto shadow-2xl shadow-blue-500/30">
            <img alt="RM Profile" className="w-full h-full rounded-full object-cover border-[3px] border-white bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCztsqMkPQfMbsQtZFRYkHwuWeTZz4OGUxWVIavefnx_VRKu_gVu_os3gFxpKabhQga8DR2IKtnwWY9AjtLmndO-N7364FBtK2TytNVe20yMLdktqiVOKGm1_l2pXEDHyTQEGbAAX0P9-kcpbzfCU_39QDas68tl7_tsGa8yVIw-yiNzyUedUpvYwBSAb7aNLLyMTZPDqjL14SkCbKrvmdvONqpg9BZyJlzPyJv3FcDddYXl7CSSAXcX4-kGKk3Yg_P0kdNwkoabvLK"/>
          </div>
          <div className="absolute bottom-2 right-2 bg-emerald-500 border-[3px] border-white w-8 h-8 rounded-full shadow-md flex items-center justify-center" title="Online">
            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-5 mb-2">
          <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest bg-blue-50 text-primary py-1.5 px-3 rounded-full inline-block border border-blue-100/50">Relationship Manager</span>
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 font-display">คุณรินรดา (ริน)</h1>
        <p className="text-slate-400 text-sm font-medium mt-1">ผู้ช่วยส่วนตัวระดับ Platinum ของคุณ</p>
      </div>

      <div className="px-6 py-4 grid grid-cols-2 gap-4">
        <button className="glossy-blue-button rounded-3xl h-24 p-4 flex flex-col items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-transform group">
          <span className="material-symbols-outlined text-3xl text-white drop-shadow-md group-hover:scale-110 transition-transform">call</span>
          <span className="text-white font-bold text-sm tracking-wide">โทรหา RM</span>
        </button>
        <button className="glossy-blue-button rounded-3xl h-24 p-4 flex flex-col items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-transform group">
          <span className="material-symbols-outlined text-3xl text-white drop-shadow-md group-hover:scale-110 transition-transform">chat</span>
          <span className="text-white font-bold text-sm tracking-wide">แชทผ่าน LINE</span>
        </button>
      </div>
      
      <div className="px-6 text-center -mt-2 mb-8">
        <p className="text-[12px] text-slate-400 font-medium">พร้อมดูแลและให้คำปรึกษาทุกวัน 09:00 - 18:00 น.</p>
      </div>

      <div className="px-5 pb-4">
        <div className="bg-white rounded-3xl p-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="p-5 pb-0 flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-[16px]">สำนักงานใหญ่</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">123 อาคารสาทรซิตี้ ทาวเวอร์ ชั้น 15 <br/>ถนนสาทรใต้ กรุงเทพฯ 10120</p>
            </div>
            <div className="bg-blue-50/50 rounded-full p-2.5 text-primary border border-blue-100">
              <span className="material-symbols-outlined">business</span>
            </div>
          </div>
          
          <div className="relative h-32 w-full bg-slate-50 rounded-2xl overflow-hidden mx-auto mb-1 border border-slate-100 group cursor-pointer">
            <div className="absolute inset-0 bg-[#f1f5f9]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-3 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-red-500 drop-shadow-md filter shadow-red-500">location_on</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-2.5 flex justify-center border-t border-slate-200">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">near_me</span> นำทางไปยังสำนักงาน
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-8">
        <button className="w-full bg-white border border-slate-200 rounded-3xl p-5 flex items-center justify-between shadow-sm hover:bg-slate-50 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100">
              <span className="material-symbols-outlined">help</span>
            </div>
            <div className="text-left">
              <span className="block text-slate-900 font-bold text-[15px]">ศูนย์ช่วยเหลือ</span>
              <span className="block text-slate-400 text-xs mt-0.5">คำถามที่พบบ่อย (FAQ) และวิธีการใช้งาน</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-white border border-transparent group-hover:border-slate-100 transition-all">
            <span className="material-symbols-outlined text-slate-400 text-sm group-hover:translate-x-0.5 transition-transform">chevron_right</span>
          </div>
        </button>
      </div>
    </div>
  );
}
