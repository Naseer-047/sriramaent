import { create } from 'zustand';
import { Product } from '../types';

type ProductEditorState = {
  original: Product | null;
  draft: Product | null;
  dirtyFields: Set<keyof Product | string>;
  isDirty: boolean;
  isSaving: boolean;
  editingField: string | null;
  
  // Actions
  initializeProduct: (product: Product) => void;
  updateField: <K extends keyof Product>(field: K, value: Product[K]) => void;
  updateVariantField: (variantIndex: number, field: string, value: any) => void;
  setEditingField: (field: string | null) => void;
  saveChanges: () => Promise<void>;
  saveField: (field: string) => Promise<void>; // Per-field save
  revertChanges: () => void;
  resetEditor: () => void;
};

export const useProductEditorStore = create<ProductEditorState>((set, get) => ({
  original: null,
  draft: null,
  dirtyFields: new Set(),
  isDirty: false,
  isSaving: false,
  editingField: null,

  initializeProduct: (product) => {
    set({
      original: product,
      draft: JSON.parse(JSON.stringify(product)), // Deep copy
      dirtyFields: new Set(),
      isDirty: false,
      editingField: null,
    });
  },

  updateField: (field, value) => {
    set((state) => {
      if (!state.draft) return state;
      
      const newDraft = { ...state.draft, [field]: value };
      
      // Math Logic: Auto calculate discount percent if prices change
      if (field === 'basePrice' || field === 'compareAtPrice') {
        const base = field === 'basePrice' ? Number(value) : Number(newDraft.basePrice);
        const compare = field === 'compareAtPrice' ? Number(value) : Number(newDraft.compareAtPrice);
        
        if (compare > base && base > 0) {
          newDraft.discountPercent = Math.round(((compare - base) / compare) * 100);
        } else {
          newDraft.discountPercent = 0;
        }
      }

      const newDirtyFields = new Set(state.dirtyFields);
      newDirtyFields.add(field as string);

      return {
        draft: newDraft,
        dirtyFields: newDirtyFields,
        isDirty: newDirtyFields.size > 0,
      };
    });
  },

  updateVariantField: (variantIndex, field, value) => {
    set((state) => {
      if (!state.draft) return state;
      
      const newVariants = [...state.draft.variants];
      newVariants[variantIndex] = { ...newVariants[variantIndex], [field]: value };
      
      const newDraft = { ...state.draft, variants: newVariants };
      const newDirtyFields = new Set(state.dirtyFields);
      newDirtyFields.add(`variants.${variantIndex}.${field}`);

      return {
        draft: newDraft,
        dirtyFields: newDirtyFields,
        isDirty: newDirtyFields.size > 0,
      };
    });
  },

  setEditingField: (field) => {
    set({ editingField: field });
  },

  saveChanges: async () => {
    const { draft } = get();
    if (!draft) return;

    set({ isSaving: true });
    
    try {
      const response = await fetch(`/api/products/${draft.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft)
      });
      
      if (!response.ok) throw new Error('Failed to save');
      
      // On success:
      set({
        original: JSON.parse(JSON.stringify(draft)),
        dirtyFields: new Set(),
        isDirty: false,
        isSaving: false,
        editingField: null,
      });
    } catch (err) {
      console.error(err);
      set({ isSaving: false });
    }
  },

  saveField: async (field) => {
    const { draft } = get();
    if (!draft) return;
    
    try {
      const response = await fetch(`/api/products/${draft.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft)
      });
      
      if (!response.ok) throw new Error('Failed to save field');
      
      set((state) => {
         const newDirtyFields = new Set(state.dirtyFields);
         newDirtyFields.delete(field);
         
         return {
           original: JSON.parse(JSON.stringify(state.draft)),
           dirtyFields: newDirtyFields,
           isDirty: newDirtyFields.size > 0,
           editingField: null,
         }
      });
    } catch (err) {
      console.error(err);
    }
  },

  revertChanges: () => {
    set((state) => ({
      draft: state.original ? JSON.parse(JSON.stringify(state.original)) : null,
      dirtyFields: new Set(),
      isDirty: false,
      editingField: null,
    }));
  },

  resetEditor: () => {
    set({
      original: null,
      draft: null,
      dirtyFields: new Set(),
      isDirty: false,
      isSaving: false,
      editingField: null,
    });
  }
}));
