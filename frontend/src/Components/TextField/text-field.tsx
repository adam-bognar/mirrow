import { JSX } from "preact";
import { cn } from "@/lib/utils";

type TextFieldProps = {
  label: string;
  placeholder?: string;
  icon?: JSX.Element;
  type?: string;
  value?: string;
  onChange?: (e: Event) => void;
  className?: string;
  helpText?: string;
  isTextArea?: boolean;
  rows?: number;
};

export function TextField({
  label,
  placeholder,
  icon,
  type = "text",
  value,
  onChange,
  className,
  helpText,
  isTextArea = false,
  rows = 4
}: TextFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className={cn(
            "absolute left-0 pl-3 flex items-center pointer-events-none",
            isTextArea ? "top-3" : "inset-y-0"
          )}>
            {icon}
          </div>
        )}
        
        {isTextArea ? (
          <textarea
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange as any}
            className={cn(
              "block w-full pr-3 py-3 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500",
              icon ? "pl-10" : "pl-3"
            )}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange as any}
            className={cn(
              "block w-full pr-3 py-3 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500",
              icon ? "pl-10" : "pl-3"
            )}
          />
        )}
      </div>
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  icon?: JSX.Element;
  value?: string;
  onChange?: (e: Event) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  helpText?: string;
};

export function SelectField({
  label,
  icon,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className,
  helpText
}: SelectFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <select
          value={value}
          onChange={onChange as any}
          className={cn(
            "block w-full pr-3 py-3 border border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white",
            icon ? "pl-10" : "pl-3"
          )}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
}
