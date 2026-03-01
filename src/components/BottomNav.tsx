export function BottomNav({ currentTab, setCurrentTab }: { currentTab: string, setCurrentTab: (tab: string) => void }) {
  const tabs = [
    { id: 'home', icon: 'dashboard', label: 'หน้าแรก' },
    { id: 'card', icon: 'credit_card', label: 'บัตรของฉัน' },
    { id: 'documents', icon: 'folder', label: 'เอกสาร' },
    { id: 'history', icon: 'history', label: 'ประวัติ' },
    { id: 'contact', icon: 'headset_mic', label: 'ติดต่อ' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-2xl border-t border-slate-100 h-24 px-6 flex items-center justify-between z-40">
      {tabs.map(tab => {
        const isActive = currentTab === tab.id;
        return (
          <div 
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`flex flex-col items-center gap-1.5 flex-1 cursor-pointer transition-colors group ${isActive ? 'text-primary relative' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{tab.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
            {isActive && <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"></div>}
          </div>
        );
      })}
    </div>
  );
}
