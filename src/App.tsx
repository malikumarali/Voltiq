import { useState } from "react";
import { View } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import OtherViews from "./components/OtherViews";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="bg-white text-[#101E4C] min-h-screen flex flex-col justify-between selection:bg-[#F5C500] selection:text-white">
      
      {/* Dynamic Header */}
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentView === "home" ? (
          <HomeView 
            setView={setCurrentView} 
            setSelectedId={setSelectedId} 
          />
        ) : (
          <OtherViews 
            view={currentView} 
            setView={setCurrentView} 
            selectedId={selectedId} 
            setSelectedId={setSelectedId} 
          />
        )}
      </main>

      {/* Footer component */}
      <Footer 
        setCurrentView={setCurrentView} 
      />

    </div>
  );
}
