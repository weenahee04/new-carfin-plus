export function History({ onOpenSettings }: { onOpenSettings: () => void }) {
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
          <button className="flex size-10 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors relative">
            <span className="material-symbols-outlined text-2xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
            <span className="absolute top-2 right-2.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white"></span>
            </span>
          </button>
        </div>
      </div>

      <div className="px-6 pt-6 pb-2">
        <h1 className="text-slate-900 text-2xl font-bold font-display leading-tight">ศูนย์การแจ้งเตือน<br/>และกิจกรรม</h1>
        <p className="text-slate-500 text-sm mt-2 font-medium">อัปเดตข้อมูลข่าวสารและกิจกรรมล่าสุดสำหรับคุณ</p>
      </div>

      <div className="flex flex-col gap-4 px-5 pt-4">
        <div className="flex items-center gap-3 mb-1 mt-2">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-off-white px-2">วันนี้</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {[
          { icon: 'account_balance_wallet', title: 'ได้รับดอกเบี้ยแล้ว', desc: 'ยอดดอกเบี้ยประจำเดือนของคุณถูกโอนเข้าบัญชีเรียบร้อยแล้ว', time: '10:30 น.', unread: true },
          { icon: 'stars', title: 'สิทธิพิเศษใหม่สำหรับคุณ', desc: 'อัปเกรดระดับสมาชิก Platinum พร้อมรับสิทธิ์ส่วนลดน้ำมัน 5%', time: '09:15 น.', unread: true },
        ].map((item, i) => {
          return (
            <div key={i} className="flex gap-4 bg-white border border-slate-100 rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06)] transition-all relative overflow-hidden group cursor-pointer">
              {item.unread && <div className="absolute top-5 right-5 w-2 h-2 bg-red-500 rounded-full ring-4 ring-red-50"></div>}
              <div className="flex items-center justify-center rounded-2xl glossy-blue-button shrink-0 size-12 shadow-lg shadow-blue-500/20">
                <span className="material-symbols-outlined text-2xl text-white drop-shadow-md">{item.icon}</span>
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <p className="text-slate-900 text-[15px] font-bold leading-tight pr-4">{item.title}</p>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                <span className="text-slate-400 text-[11px] font-medium mt-1">{item.time}</span>
              </div>
            </div>
          );
        })}

        <div className="flex items-center gap-3 mb-1 mt-4">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-off-white px-2">เมื่อวาน</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {[
          { icon: 'warning', title: 'แจ้งเตือนสัญญาใกล้หมดอายุ', desc: 'กรุณาตรวจสอบและต่ออายุสัญญาภายในวันที่ 30 พ.ย. นี้ เพื่อรักษาสิทธิประโยชน์', time: 'เมื่อวาน, 16:45 น.' },
          { icon: 'history_edu', title: 'เอกสารได้รับการอนุมัติ', desc: 'เอกสารยืนยันตัวตนของคุณได้รับการตรวจสอบและอนุมัติแล้ว', time: 'เมื่อวาน, 11:20 น.' },
        ].map((item, i) => {
          return (
            <div key={i} className="flex gap-4 bg-white/60 border border-slate-100 rounded-3xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] relative overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center rounded-2xl glossy-blue-button shrink-0 size-12 shadow-lg shadow-blue-500/20 grayscale-[0.2]">
                <span className="material-symbols-outlined text-2xl text-white drop-shadow-md">{item.icon}</span>
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <p className="text-slate-900 text-[15px] font-bold leading-tight">{item.title}</p>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                <span className="text-slate-400 text-[11px] font-medium mt-1">{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
