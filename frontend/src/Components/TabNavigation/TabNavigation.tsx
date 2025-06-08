import { useState } from "preact/hooks";

interface Tab {
    id: string;
    label: string;
}

interface TabNavigationProps {
    tabs: Tab[];
    defaultActiveTab?: string;
    onTabChange?: (tabId: string) => void;
    className?: string;
}

export function TabNavigation({ 
    tabs, 
    defaultActiveTab, 
    onTabChange, 
    className = "" 
}: TabNavigationProps) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id || '');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        onTabChange?.(tabId);
    };

    return (
        <div className={`flex flex-row items-center gap-2 bg-white rounded-lg p-2 shadow-sm border border-gray-100 ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab.id
                            ? 'text-teal-600 bg-teal-50 border border-teal-200'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
