import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Check, X, Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EditableBadgeProps {
  value: string;
  onSave: (val: string) => Promise<void> | void;
  editMode: boolean;
  className?: string;
  type?: 'discount' | 'status' | 'default';
}

export const EditableBadge: React.FC<EditableBadgeProps> = ({
  value,
  onSave,
  editMode,
  className,
  type = 'default'
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = async () => {
    if (draft === value) {
      setIsEditing(false);
      return;
    }
    
    setIsSaving(true);
    try {
      await onSave(draft);
      setIsEditing(false);
    } catch (e) {
      console.error(e);
      setDraft(value);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setDraft(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSave();
    else if (e.key === 'Escape') handleCancel();
  };

  const baseBadgeStyle = "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium";
  const typeStyles = {
    discount: "bg-red-100 text-red-800",
    status: "bg-green-100 text-green-800",
    default: "bg-gray-100 text-gray-800"
  };

  const displayClass = cn(baseBadgeStyle, typeStyles[type], className);

  if (!editMode) {
    return <span className={displayClass}>{value}</span>;
  }

  if (isEditing) {
    return (
      <div className="relative group inline-flex items-center gap-1">
        <input
          ref={inputRef}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSaving}
          className="w-20 bg-white border border-[#E2B659] rounded px-1.5 py-0.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#E2B659] shadow-sm text-center"
        />
        
        {/* Inline Actions */}
        <div className="flex items-center gap-0.5 bg-white px-0.5 shadow-sm rounded border border-gray-100 absolute -right-12 z-10">
          <button 
            onClick={handleCancel}
            disabled={isSaving}
            className="text-gray-400 hover:text-red-500 hover:bg-gray-50 rounded"
          >
            <X className="w-3 h-3" />
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="text-[#00897b] hover:bg-green-50 rounded"
          >
            {isSaving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
        className={cn("relative group inline-flex items-center cursor-pointer hover:opacity-80 transition-opacity pr-4 -mr-4", displayClass)}
        onClick={() => setIsEditing(true)}
    >
      <span>{value}</span>
      <Pencil className="w-3 h-3 text-current opacity-0 group-hover:opacity-70 transition-all absolute right-0 top-1/2 -translate-y-1/2" />
    </div>
  );
};
