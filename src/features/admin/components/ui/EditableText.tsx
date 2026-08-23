import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Check, X, Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EditableTextProps {
  value: string;
  onSave: (val: string) => Promise<void> | void;
  editMode: boolean;
  className?: string;
  inputClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onSave,
  editMode,
  className,
  inputClassName,
  as: Component = 'span',
  multiline = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Sync draft when external value changes
  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
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
      // Revert if error
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
    if (e.key === 'Enter' && !multiline) {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!editMode) {
    return <Component className={className}>{value}</Component>;
  }

  if (isEditing) {
    return (
      <div className={cn("relative group", className)}>
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isSaving}
            className={cn(
              "w-full bg-white border border-[#E2B659] rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E2B659]/50 shadow-sm",
              inputClassName
            )}
            rows={4}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isSaving}
            className={cn(
              "w-full bg-white border border-[#E2B659] rounded-md px-3 py-1.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E2B659]/50 shadow-sm",
              inputClassName
            )}
          />
        )}
        
        {/* Inline Actions */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white px-1 shadow-sm rounded-md border border-gray-100">
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
      <Component className="pr-4">{value}</Component>
      <Pencil className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#E2B659] transition-all absolute right-0 top-1/2 -translate-y-1/2" />
    </div>
  );
};
