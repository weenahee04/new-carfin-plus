export function Documents({ onOpenSettings, onOpenNotifications }: { onOpenSettings: () => void, onOpenNotifications: () => void }) {
  return (
    <div className="pb-28">
      <div className="flex items-center bg-off-white/95 backdrop-blur-xl p-6 pb-4 justify-between sticky top-0 z-30 border-b border-white/40">
        <div className="text-slate-900 flex size-10 shrink-0 items-center justify-start cursor-pointer" onClick={onOpenSettings}>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200/50 overflow-hidden shadow-sm">
            <span className="material-symbols-outlined text-2xl text-slate-400">person</span>
          </div>
        </div>
        <h2 className="text-slate-900 text-lg font-bold tracking-tight flex-1 text-center font-display uppercase">Carfin Plus</h2>
        <div className="flex w-10 items-center justify-end">
          <button onClick={onOpenNotifications} className="flex size-10 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-2xl text-slate-600">notifications</span>
          </button>
        </div>
      </div>

      <div className="px-6 pt-6 pb-2">
        <h1 className="text-slate-900 text-2xl font-bold font-display tracking-tight">เอกสารสัญญาและกรมธรรม์</h1>
        <p className="text-slate-500 text-sm mt-1 font-light">รวมเอกสารสำคัญทั้งหมดของคุณไว้ในที่เดียว</p>
      </div>

      <div className="flex flex-col gap-4 px-5 pt-4">
        {[
          { icon: 'contract', title: 'ตั๋วสัญญาใช้เงิน', id: 'PN-8839201', date: '15 ม.ค. 2567', color: 'blue', iconColor: 'text-primary' },
          { icon: 'directions_car', title: 'สัญญาเช่าซื้อรถยนต์', id: 'HP-9928102', date: '10 ม.ค. 2567', color: 'indigo', iconColor: 'text-indigo-600' },
          { icon: 'shield', title: 'กรมธรรม์ประกันภัย', id: 'INS-7728190', date: '01 ม.ค. 2567', color: 'cyan', iconColor: 'text-cyan-600' },
        ].map((item, i) => {
          return (
            <div key={i} className="bg-white rounded-3xl p-5 border border-slate-100 soft-elevation relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-1 h-full bg-${item.color}-500`}></div>
              
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl doc-icon-gradient flex items-center justify-center shrink-0 shadow-inner">
                  <span className={`material-symbols-outlined text-3xl ${item.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-slate-900 font-bold text-[17px] truncate pr-2">{item.title}</h3>
                    <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full border border-green-100 uppercase tracking-wide">Active</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">tag</span> {item.id}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span> {item.date}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="glossy-blue-button h-10 rounded-xl flex items-center justify-center gap-2 text-white text-sm font-semibold shadow-md active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[18px]">visibility</span> <span>ดูเอกสาร</span>
                </button>
                <button className="glossy-blue-button h-10 rounded-xl flex items-center justify-center gap-2 text-white text-sm font-semibold shadow-md active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[18px]">download</span> <span>ดาวน์โหลด</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-8 py-8 flex flex-col items-center justify-center text-center opacity-60">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2">
          <span className="material-symbols-outlined text-slate-400">add_circle</span>
        </div>
        <p className="text-xs text-slate-400">เอกสารทั้งหมดเป็นเวอร์ชันล่าสุด<br/>หากต้องการเอกสารอื่น กรุณาติดต่อเจ้าหน้าที่</p>
      </div>
    </div>
  );
}
