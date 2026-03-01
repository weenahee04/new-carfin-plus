export function Card({ onOpenComparison, onOpenPrivilege, onOpenSettings, onOpenNotifications }: { onOpenComparison: () => void, onOpenPrivilege: () => void, onOpenSettings: () => void, onOpenNotifications: () => void }) {
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

      <div className="px-5 py-4">
        <div className="mesh-gradient-card rounded-4xl relative overflow-hidden shadow-2xl shadow-blue-900/10 cursor-pointer" onClick={onOpenComparison}>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-400 opacity-20 blur-[60px] rounded-full"></div>
          <div className="relative glass-card-inner p-8 flex flex-col justify-between min-h-[240px]">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0.5">
                <span className="text-white/50 font-bold tracking-[0.2em] text-[10px] uppercase font-display">Membership Card</span>
                <span className="text-white font-semibold tracking-tight text-xl font-display">Carfin Plus</span>
              </div>
              <div className="glossy-blue-button px-3 py-1 rounded-full backdrop-blur-md">
                <span className="text-white font-bold text-[10px] tracking-widest uppercase drop-shadow-sm">PLATINUM</span>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="emv-chip-gold mb-6"></div>
              <p className="text-white text-2xl font-medium leading-none tracking-[0.08em] mb-5 font-display uppercase drop-shadow-md">Mangkang Mankong</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-white/40 text-[9px] uppercase tracking-[0.25em] font-bold">Account Number</span>
                  <p className="text-white/90 font-display text-sm tracking-[0.2em] drop-shadow-sm">CF-000199</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-white/40 text-[9px] uppercase tracking-[0.25em] font-bold">Expiry</span>
                  <p className="text-white/90 font-display text-sm tracking-[0.2em] drop-shadow-sm">01/70</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 pb-2">
        <div className="flex flex-col gap-2 rounded-4xl p-8 bg-white border border-slate-100 soft-elevation text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <h1 className="text-primary text-2xl font-bold font-display">สิทธิพิเศษระดับ PLATINUM</h1>
          <p className="text-slate-500 text-[15px] leading-relaxed px-2">
            สัมผัสประสบการณ์เหนือระดับพร้อมเข้าถึงสิทธิประโยชน์สุด Exclusive เฉพาะสมาชิกคนสำคัญเช่นคุณ
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-7 pt-8 pb-5">
        <h3 className="text-slate-900 text-lg font-bold tracking-tight">สิทธิประโยชน์สำหรับคุณ</h3>
      </div>

      <div className="flex flex-col gap-3 px-5">
        {[
          { icon: 'featured_seasonal_and_gifts', title: 'ของขวัญวันเกิดประจำปี', desc: 'รับของขวัญสุดพิเศษในเดือนเกิดของคุณ' },
          { icon: 'medical_services', title: 'บริการตรวจสุขภาพพรีเมียม', desc: 'โปรแกรมตรวจสุขภาพประจำปี ณ โรงพยาบาลชั้นนำ' },
          { icon: 'connecting_airports', title: 'เข้าใช้ห้องรับรองสนามบิน', desc: 'พักผ่อนหย่อนใจใน Airport Lounge ทั่วโลก', onClick: onOpenPrivilege },
          { icon: 'support_agent', title: 'ผู้ช่วยส่วนตัว RM ตลอด 24 ชม.', desc: 'บริการดูแลและให้คำปรึกษาแบบส่วนตัวทุกเวลา' },
        ].map((item, i) => {
          return (
            <div key={i} onClick={item.onClick} className="flex items-center gap-4 bg-white border border-slate-100 rounded-3xl px-6 py-5 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] transition-shadow cursor-pointer">
              <div className="flex items-center justify-center rounded-full glossy-blue-button shrink-0 size-12 shadow-lg shadow-blue-500/20">
                <span className="material-symbols-outlined text-2xl text-white drop-shadow-md">{item.icon}</span>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-slate-900 text-[16px] font-bold">{item.title}</p>
                <p className="text-slate-400 text-[12px] font-medium mt-0.5">{item.desc}</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
