export function Settings({ onBack }: { onBack: () => void }) {
  return (
    <div className="pb-28">
      <div className="flex items-center bg-off-white/95 backdrop-blur-xl p-6 pb-4 justify-between sticky top-0 z-30 border-b border-white/40">
        <div className="text-slate-900 flex size-10 shrink-0 items-center justify-start">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200/50 overflow-hidden shadow-sm hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-xl text-slate-600">arrow_back_ios_new</span>
          </button>
        </div>
        <h2 className="text-slate-900 text-lg font-bold tracking-tight flex-1 text-center font-display">ข้อมูลส่วนตัวและการตั้งค่า</h2>
        <div className="flex w-10 items-center justify-end"></div>
      </div>

      <div className="px-5 pt-6 pb-2">
        <div className="flex flex-col items-center bg-white border border-slate-100 rounded-4xl p-8 soft-elevation relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 mb-5">
            <div className="w-28 h-28 rounded-full p-1.5 glossy-blue-button shadow-xl shadow-blue-500/20">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-white">
                <span className="material-symbols-outlined text-6xl text-slate-300">person</span>
              </div>
            </div>
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border border-slate-100 text-primary hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-[18px] leading-none">photo_camera</span>
            </button>
          </div>
          
          <div className="flex flex-col items-center z-10 w-full">
            <h1 className="text-slate-900 text-xl font-bold font-display mb-1">Mangkang Mankong</h1>
            <p className="text-slate-400 text-sm font-medium mb-5 tracking-wide">Member ID: CF-000199</p>
            
            <div className="glossy-blue-button px-5 py-1.5 rounded-full shadow-lg shadow-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-filled text-yellow-300 text-[16px]">verified</span>
                <span className="text-white font-bold text-[11px] tracking-widest uppercase drop-shadow-sm">PLATINUM MEMBER</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-7 pt-6 pb-3">
        <h3 className="text-slate-900 text-[15px] font-bold tracking-tight">จัดการบัญชี</h3>
      </div>

      <div className="flex flex-col gap-3 px-5">
        {[
          { icon: 'edit_square', label: 'แก้ไขข้อมูลส่วนตัว' },
          { icon: 'lock_reset', label: 'เปลี่ยนรหัสผ่าน' },
          { icon: 'shield_person', label: 'ตั้งค่าความเป็นส่วนตัว' },
        ].map((item, i) => {
          return (
            <button key={i} className="flex items-center gap-4 bg-white border border-slate-100 rounded-3xl px-5 py-4 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] transition-shadow group active:scale-[0.99] transition-transform">
              <div className="flex items-center justify-center rounded-2xl glossy-blue-button shrink-0 size-10 shadow-md shadow-blue-500/10">
                <span className="material-symbols-outlined text-[20px] text-white drop-shadow-sm">{item.icon}</span>
              </div>
              <div className="flex flex-col flex-1 items-start text-left">
                <p className="text-slate-900 text-[15px] font-bold group-hover:text-primary transition-colors">{item.label}</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
            </button>
          );
        })}
      </div>

      <div className="px-5 mt-8 mb-4">
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-3xl px-6 py-4 shadow-sm active:bg-slate-50 transition-colors group">
          <span className="material-symbols-outlined text-[20px] text-red-500 group-hover:text-red-600">logout</span>
          <span className="text-red-500 text-[15px] font-bold group-hover:text-red-600">ออกจากระบบ</span>
        </button>
        <p className="text-center text-slate-400 text-xs mt-4">Version 2.4.0 (Build 159)</p>
      </div>
    </div>
  );
}
