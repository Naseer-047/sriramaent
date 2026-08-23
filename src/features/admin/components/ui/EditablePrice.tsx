import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Check, X, Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EditablePriceProps {
  value: number;
  onSave: (val: number) => Promise<void> | void;
  editMode: boolean;
  className?: string;
  currencySymbol?: string;
}

export const EditablePrice: React.FC<EditablePriceProps> = ({
  value,
  onSave,
  editMode,
  className,
  currencySymbol = '₹'
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value.toString());
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDraft(value.toString());
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = async () => {
    const numericVal = parseFloat(draft);
    if (isNaN(numericVal) || numericVal === value) {
      setIsEditing(false);
      setDraft(value.toString());
      return;
    }
    
    setIsSaving(true);
    try {
      await onSave(numericVal);
      setIsEditing(false);
    } catch (e) {
      console.error(e);
      setDraft(value.toString());
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setDraft(value.toString());
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSave();
    else if (e.key === 'Escape') handleCancel();
  };

  if (!editMode) {
    return <span className={className}>{currencySymbol} {value.toLocaleString('en-IN')}</span>;
  }

  if (isEditing) {
    return (
      <div className={cn("relative group flex items-center gap-1", className)}>
        <span className="text-gray-500 font-medium">{currencySymbol}</span>
        <input
          ref={inputRef}
          type="number"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSaving}
          className="w-24 bg-white border border-[#E2B659] rounded-md px-2 py-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E2B659]/50 shadow-sm"
        />
        
        {/* Inline Actions */}
        <div className="flex items-center gap-1 bg-white px-1 shadow-sm rounded-md border border-gray-100 ml-1">
          <button 
            onClick={handleCancel}
            disabled={isSaving}
            className="p-1 text-gray-400 hover:text-red-500 hover:bg-gray-50 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="p-1 text-[#00897b] hover:bg-green-50 rounded transition-colors"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
        className={cn(
            "relative group inline-flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-md transition-colors px-2 py-1 -ml-2 -mt-1", 
            className
        )}
        onClick={() => setIsEditing(true)}
    >
      <span className="pr-4">{currencySymbol} {value.toLocaleString('en-IN')}</span>
      <Pencil className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#E2B659] transition-all absolute right-0 top-1/2 -translate-y-1/2" />
    </div>
  );
};
