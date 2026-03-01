import React, { useState } from 'react';
import { Home } from './components/Home';
import { Card } from './components/Card';
import { Documents } from './components/Documents';
import { History } from './components/History';
import { Contact } from './components/Contact';
import { Settings } from './components/Settings';
import { PrivilegeDetails } from './components/PrivilegeDetails';
import { Comparison } from './components/Comparison';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [currentView, setCurrentView] = useState('main'); // 'main', 'settings', 'privilege-details', 'comparison'

  const renderView = () => {
    if (currentView === 'settings') return <Settings onBack={() => setCurrentView('main')} />;
    if (currentView === 'privilege-details') return <PrivilegeDetails onBack={() => setCurrentView('main')} />;
    if (currentView === 'comparison') return <Comparison onBack={() => setCurrentView('main')} />;

    switch (currentTab) {
      case 'home': return <Home onOpenSettings={() => setCurrentView('settings')} onOpenNotifications={() => setCurrentTab('history')} />;
      case 'card': return <Card onOpenComparison={() => setCurrentView('comparison')} onOpenPrivilege={() => setCurrentView('privilege-details')} onOpenSettings={() => setCurrentView('settings')} onOpenNotifications={() => setCurrentTab('history')} />;
      case 'documents': return <Documents onOpenSettings={() => setCurrentView('settings')} onOpenNotifications={() => setCurrentTab('history')} />;
      case 'history': return <History onOpenSettings={() => setCurrentView('settings')} />;
      case 'contact': return <Contact onOpenSettings={() => setCurrentView('settings')} onOpenNotifications={() => setCurrentTab('history')} />;
      default: return <Home onOpenSettings={() => setCurrentView('settings')} onOpenNotifications={() => setCurrentTab('history')} />;
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-off-white overflow-x-hidden shadow-2xl">
      {renderView()}
      {currentView === 'main' && <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />}
    </div>
  );
}
