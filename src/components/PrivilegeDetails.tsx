export function PrivilegeDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 overflow-y-auto pb-32 no-scrollbar bg-off-white">
      <div className="flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-50">
        <button onClick={onBack} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-xl text-slate-900">arrow_back_ios_new</span>
        </button>
        <h1 className="text-slate-900 text-lg font-bold font-display">รายละเอียดสิทธิพิเศษ</h1>
        <div className="flex items-center justify-center w-10 h-10">
          <button className="rounded-full hover:bg-slate-50 p-2 text-slate-400">
            <span className="material-symbols-outlined text-xl">share</span>
          </button>
        </div>
      </div>

      <div className="w-full h-[280px] relative">
        <img alt="Luxury Airport Lounge" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdBLIpdktCL7WMq10iFq00XBU0RXjxWWBclNJdrjxodjsdM9BqpH125Vnqu8MKFtFbMbw-hGfhuDYHEmsbNS7QDiAIOf5WohYhK0vtgBCYazw05U0Umb4qBwigFEw0mC01uMTOdq936oX2RtYZRL9Rjii7wBj-Uh6dOLbbp8B-3FIv_GfN36Oq6PyrVbq3OBoml5rPmY0hd0mTsTPjlVhVK-hIqyf5wbtVqOL_O9wTaIfh04VoutrQhY1ND_ux8vdqBs169zioI5Zi"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-6 text-white">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full inline-block mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase">Premium Benefit</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 -mt-6 relative bg-white rounded-t-4xl z-10 min-h-[500px] shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-900 font-display leading-tight">เข้าใช้ห้องรับรองสนามบิน</h2>
        </div>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-benefit-blue text-primary text-xs font-bold rounded-lg uppercase tracking-wide flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">diamond</span>
            Platinum
          </span>
          <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg flex items-center gap-1 border border-slate-100">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            ใช้ได้ถึง 31 ธ.ค. 67
          </span>
        </div>

        <div className="prose prose-sm prose-slate mb-8">
          <p className="text-slate-500 leading-relaxed text-[15px]">
            ยกระดับการเดินทางของคุณด้วยสิทธิ์เข้าใช้ห้องรับรองพิเศษ (Miracle Lounge) ณ สนามบินสุวรรณภูมิและดอนเมือง อิ่มอร่อยกับอาหารและเครื่องดื่มหลากหลาย พร้อมมุมพักผ่อนส่วนตัวก่อนขึ้นเครื่อง เพื่อประสบการณ์การเดินทางที่เหนือระดับกว่าใคร
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          {[
            { icon: 'chair', label: 'ที่นั่งส่วนตัว' },
            { icon: 'restaurant', label: 'อาหาร' },
            { icon: 'wifi', label: 'Wi-Fi ฟรี' },
            { icon: 'shower', label: 'ห้องอาบน้ำ' },
          ].map((item, i) => {
            return (
              <div key={i} className="flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <details className="group open:bg-slate-50 transition-colors duration-200" open>
            <summary className="flex items-center justify-between p-4 cursor-pointer select-none hover:bg-slate-50 active:bg-slate-100 transition-colors">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">description</span>
                <span className="font-bold text-slate-900 text-sm">เงื่อนไขการให้บริการ</span>
              </div>
              <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
            </summary>
            <div className="px-4 pb-4 pt-0">
              <div className="h-px w-full bg-slate-200 mb-4"></div>
              <ul className="text-sm text-slate-500 leading-7 space-y-2 pl-2">
                <li className="flex gap-2 items-start">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-slate-300 shrink-0"></span>
                  <span>สงวนสิทธิ์สำหรับสมาชิกระดับ Platinum ของ Carfin Plus เท่านั้น</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-slate-300 shrink-0"></span>
                  <span>จำกัดสิทธิ์การใช้งาน 2 ครั้ง / ท่าน / ปีปฏิทิน</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-slate-300 shrink-0"></span>
                  <span>สามารถใช้ได้ที่ Miracle Lounge สนามบินสุวรรณภูมิ และสนามบินดอนเมือง</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-slate-300 shrink-0"></span>
                  <span>รหัสรับสิทธิ์มีอายุ 15 นาทีหลังจากกดปุ่ม</span>
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="h-8"></div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-5 z-50 pb-8">
        <button className="w-full group relative overflow-hidden rounded-2xl shadow-xl shadow-blue-900/30 active:scale-[0.98] transition-all duration-200">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2044] via-[#163C8C] to-[#2D6BF1]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_40%,rgba(0,0,0,0.1)_100%)]"></div>
          <div className="absolute inset-[1px] rounded-[15px] border border-white/20"></div>
          <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] rounded-2xl"></div>
          
          <div className="relative flex items-center justify-center gap-2 py-4">
            <span className="material-symbols-outlined text-white drop-shadow-md group-hover:animate-bounce">redeem</span>
            <span className="font-display font-bold text-lg text-white drop-shadow-md tracking-wide">กดรับสิทธิ์</span>
          </div>
          
          <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"></div>
        </button>
      </div>
    </div>
  );
}
