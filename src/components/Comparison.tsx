export function Comparison({ onBack }: { onBack: () => void }) {
  return (
    <div className="pb-32">
      <div className="flex items-center bg-off-white/80 backdrop-blur-xl p-6 pb-4 justify-between sticky top-0 z-30 border-b border-slate-200/50">
        <div className="text-slate-900 flex size-10 shrink-0 items-center justify-start">
          <button onClick={onBack} className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-xl text-slate-900">arrow_back_ios_new</span>
          </button>
        </div>
        <h2 className="text-slate-900 text-base font-bold tracking-tight flex-1 text-center font-display">ตารางเปรียบเทียบสิทธิประโยชน์</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-50">
            <span className="material-symbols-outlined text-xl text-slate-900">more_horiz</span>
          </button>
        </div>
      </div>

      <div className="pt-6 pb-2">
        <div className="px-6 mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-slate-900 text-2xl font-bold font-display leading-tight">ระดับสมาชิก<br/>ของคุณ</h1>
          </div>
          <div className="bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 cursor-pointer">
            <span className="text-primary font-bold text-xs flex items-center gap-1">
              ดูรายละเอียด
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-4 px-6 pb-10 snap-x snap-mandatory no-scrollbar w-full items-center">
          <div className="snap-center shrink-0 w-[85%] relative transform scale-95 opacity-60">
            <div className="silver-gradient-card rounded-3xl relative overflow-hidden h-[200px] flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <span className="text-slate-500 font-bold tracking-[0.2em] text-[10px] uppercase">Member</span>
                <div className="bg-slate-200/50 px-3 py-1 rounded-full border border-slate-300">
                  <span className="text-slate-600 font-bold text-[10px] tracking-widest uppercase">SILVER</span>
                </div>
              </div>
              <div className="mt-auto">
                <div className="emv-chip-minimal mb-4 opacity-70"></div>
                <p className="text-slate-700 text-xl font-bold uppercase tracking-wider font-display">Carfin Plus</p>
                <p className="text-slate-500 text-xs mt-1">จุดเริ่มต้นความคุ้มค่า</p>
              </div>
            </div>
          </div>

          <div className="snap-center shrink-0 w-[85%] relative transform scale-95 opacity-80">
            <div className="gold-gradient-card rounded-3xl relative overflow-hidden h-[200px] flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <span className="text-yellow-900/40 font-bold tracking-[0.2em] text-[10px] uppercase">Preferred</span>
                <div className="bg-yellow-900/10 px-3 py-1 rounded-full border border-yellow-900/10">
                  <span className="text-yellow-900 font-bold text-[10px] tracking-widest uppercase">GOLD</span>
                </div>
              </div>
              <div className="mt-auto">
                <div className="emv-chip-minimal mb-4 opacity-80 mix-blend-multiply"></div>
                <p className="text-yellow-900 text-xl font-bold uppercase tracking-wider font-display">Carfin Plus</p>
                <p className="text-yellow-800/70 text-xs mt-1">สิทธิพิเศษที่มากกว่า</p>
              </div>
            </div>
          </div>

          <div className="snap-center shrink-0 w-[85%] relative">
            <div className="glossy-metallic-card rounded-3xl relative overflow-hidden h-[200px] z-10">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-electric-blue text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl z-20 uppercase tracking-wider shadow-lg border-b border-l border-white/20">
                ระดับปัจจุบัน
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 opacity-40 blur-[50px] rounded-full mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="relative glass-card-inner p-6 flex flex-col justify-between h-full rounded-3xl">
                <div className="flex justify-between items-start">
                  <span className="text-blue-100/60 font-bold tracking-[0.2em] text-[10px] uppercase">Elite Member</span>
                  <div className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/30 mr-16 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                    <span className="text-white font-bold text-[10px] tracking-widest uppercase text-shadow-sm">PLATINUM</span>
                  </div>
                </div>
                <div className="mt-auto relative z-10">
                  <div className="emv-chip-minimal mb-4 shadow-lg border border-white/20"></div>
                  <p className="text-white text-xl font-bold leading-none tracking-[0.08em] font-display uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Carfin Plus</p>
                  <p className="text-blue-50/80 text-xs mt-2 font-light tracking-wide">เอกสิทธิ์เหนือระดับสำหรับคุณ</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
              <div className="bg-blue-100 text-primary px-3 py-1 rounded-full text-[10px] font-bold shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check</span>
                Selected
              </div>
            </div>
          </div>

          <div className="snap-center shrink-0 w-[85%] relative transform scale-95 opacity-60">
            <div className="royal-gradient-card rounded-3xl relative overflow-hidden shadow-2xl shadow-black/40 h-[200px]">
              <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '96px' }}>workspace_premium</span>
              </div>
              <div className="relative glass-card-inner !bg-black/40 !border-yellow-500/30 p-6 flex flex-col justify-between h-full rounded-3xl z-10">
                <div className="flex justify-between items-start">
                  <span className="text-white/30 font-bold tracking-[0.2em] text-[10px] uppercase">Invitation</span>
                  <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-yellow-500/40">
                    <span className="text-yellow-500 font-bold text-[10px] tracking-widest uppercase">ROYAL</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-xl font-bold leading-none tracking-[0.08em] font-display uppercase">Carfin Plus</p>
                  <p className="text-white/40 text-xs mt-2 font-light">ที่สุดแห่งเอกสิทธิ์</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] -mt-4 pt-8 px-6 pb-8 flex-1 min-h-[500px] relative z-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-900 text-lg font-bold font-display">สิทธิประโยชน์สมาชิก</h3>
          <span className="text-[10px] text-primary font-bold bg-blue-50 px-2 py-1 rounded-md border border-blue-100">เปรียบเทียบทุกระดับ</span>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-slate-50">
          {[
            { icon: 'shield', title: 'ประกันอุบัติเหตุ', desc: 'Accident Insurance' },
            { icon: 'flight', title: 'ห้องรับรองสนามบิน', desc: 'Airport Lounge Access' },
            { icon: 'support_agent', title: 'ผู้ช่วยส่วนตัว RM', desc: 'Personal RM Assistant' },
            { icon: 'medical_services', title: 'ตรวจสุขภาพประจำปี', desc: 'Annual Health Checkup' },
          ].map((item, i) => {
            return (
              <div key={i} className="flex items-center justify-between py-4 group">
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-full glossy-icon-blue flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.desc}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center size-6 rounded-full glossy-check-circle">
                  <span className="material-symbols-outlined text-[14px] text-white font-bold">check</span>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-between py-4 relative overflow-hidden -mx-6 px-6 bg-gradient-to-r from-white via-white to-blue-50/50">
            <div className="flex items-center gap-4 relative z-10">
              <div className="size-11 rounded-full glossy-icon-blue flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                <span className="material-symbols-outlined text-[20px]">redeem</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">ของขวัญวันเกิด</span>
                <span className="text-[10px] text-slate-400 font-medium">Exclusive Birthday Gift</span>
              </div>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <div className="text-right">
                <span className="block text-xs font-bold text-yellow-600">ทองคำ / Gadget</span>
                <span className="block text-[8px] text-slate-400 uppercase tracking-wide">For Royal Tier</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/90 backdrop-blur-xl border-t border-slate-100 p-6 z-40 pb-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">ยอดลงทุนสะสม</span>
            <span className="text-lg font-bold text-slate-900 font-display">500,000 <span className="text-sm font-normal text-slate-500">THB</span></span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">ขาดอีกเพียง</span>
            <span className="text-lg font-bold text-primary font-display">500,000 <span className="text-sm font-normal text-slate-500">THB</span></span>
          </div>
        </div>
        
        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden shadow-inner">
          <div className="glossy-bar-fill h-full rounded-full w-1/2 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-md mr-1"></div>
          </div>
        </div>
        
        <button className="glossy-blue-btn w-full text-white text-lg font-bold py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
          <span className="relative z-10 font-sans tracking-wide">อัปเกรดระดับสมาชิก</span>
          <span className="material-symbols-outlined relative z-10 text-white group-hover:translate-x-1 transition-transform">arrow_upward</span>
        </button>
      </div>
    </div>
  );
}
