import { useState, useRef, useEffect } from 'preact/hooks';
import { JSX } from 'preact';
import { cn } from "@/lib/utils";

type CustomDropdownProps = {
  trigger: JSX.Element;
  children: JSX.Element | JSX.Element[];
  align?: 'start' | 'end' | 'center';
  className?: string;
};

export function CustomDropdown({ 
  trigger, 
  children, 
  align = 'end',
  className 
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate alignment class
  const alignClass = {
    'start': 'left-0',
    'center': 'left-1/2 -translate-x-1/2',
    'end': 'right-0'
  }[align];

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          className={cn(
            "absolute mt-2 z-50 min-w-[200px] rounded-md bg-white shadow-lg border border-gray-100 py-1 animate-in fade-in-50 zoom-in-95", 
            alignClass,
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

type CustomDropdownItemProps = {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
  className?: string;
};

export function CustomDropdownItem({ 
  children, 
  onClick,
  className
}: CustomDropdownItemProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CustomDropdownLabel({ 
  children,
  className 
}: { 
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}) {
  return (
    <div className={cn("px-4 py-1 text-sm font-medium text-gray-500", className)}>
      {children}
    </div>
  );
}

export function CustomDropdownSeparator({ className }: { className?: string }) {
  return <div className={cn("h-px my-1 bg-gray-200", className)} />;
}
