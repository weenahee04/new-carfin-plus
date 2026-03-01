export function Home({ onOpenSettings, onOpenNotifications }: { onOpenSettings: () => void, onOpenNotifications: () => void }) {
  return (
    <div className="pb-28">
      <div className="flex items-center bg-off-white/95 backdrop-blur-xl p-6 pb-4 justify-between sticky top-0 z-30 border-b border-white/40">
        <div className="text-slate-900 flex size-10 shrink-0 items-center justify-start cursor-pointer" onClick={onOpenSettings}>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200/50 overflow-hidden shadow-sm">
            <span className="material-symbols-outlined text-2xl text-slate-400">person</span>
          </div>
        </div>
        <h2 className="text-slate-900 text-lg font-bold tracking-tight flex-1 text-center font-display">สรุปพอร์ตการลงทุน</h2>
        <div className="flex w-10 items-center justify-end">
          <button onClick={onOpenNotifications} className="flex size-10 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-2xl text-slate-600">notifications</span>
          </button>
        </div>
      </div>

      <div className="px-5 py-6">
        <div className="mesh-gradient-card rounded-4xl relative overflow-hidden shadow-2xl shadow-blue-900/10 mb-8">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-400 opacity-20 blur-[60px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 opacity-20 blur-[50px] rounded-full"></div>
          <div className="relative glass-card-inner p-8 flex flex-col justify-between min-h-[200px]">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-1">
                <span className="text-blue-100 font-medium tracking-wide text-sm font-display">มูลค่าพอร์ตลงทุนรวม</span>
                <span className="text-white font-bold tracking-tight text-3xl font-display">฿3,542,000</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                <span className="material-symbols-outlined text-amber-400">pie_chart</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-blue-200/80 text-[11px] uppercase tracking-wider font-bold">เงินต้นสะสม</span>
                <p className="text-white font-display text-lg font-semibold tracking-tight drop-shadow-sm">฿3,200,000</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-amber-200/80 text-[11px] uppercase tracking-wider font-bold">ผลตอบแทนรวม</span>
                <p className="text-amber-300 font-display text-lg font-semibold tracking-tight drop-shadow-sm flex items-center gap-1">
                  +฿342,000
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 mb-4">
          <h3 className="text-slate-900 text-lg font-bold tracking-tight">รายการสัญญาลงทุน</h3>
          <button className="text-primary text-sm font-semibold flex items-center gap-0.5">
            ดูทั้งหมด <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { id: '#CF-2024-081', date: '15 มี.ค. 67', amount: '฿1,000,000' },
            { id: '#CF-2024-045', date: '22 ก.พ. 67', amount: '฿500,000' },
            { id: '#CF-2023-199', date: '10 ธ.ค. 66', amount: '฿1,500,000' },
            { id: '#CF-2023-150', date: '05 พ.ย. 66', amount: '฿200,000' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white border border-slate-100 rounded-3xl px-5 py-5 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] transition-shadow group">
              <div className="flex items-center justify-center rounded-2xl bg-blue-50 shrink-0 size-12 group-hover:bg-blue-100 transition-colors">
                <span className="material-symbols-outlined text-2xl text-primary">description</span>
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <div className="flex justify-between items-start">
                  <p className="text-slate-900 text-[15px] font-bold font-display">สัญญา {item.id}</p>
                  <span className="text-slate-400 text-[11px]">{item.date}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-slate-600 text-sm font-medium">{item.amount}</p>
                  <div className="glossy-blue-button px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[10px] text-white">check_circle</span>
                    <span className="text-white text-[10px] font-bold tracking-wide">สำเร็จ</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
