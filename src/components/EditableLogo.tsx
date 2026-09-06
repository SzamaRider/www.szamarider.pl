import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, Upload, Image as ImageIcon, Check } from 'lucide-react';

interface EditableLogoProps {
  className?: string;
  subTitle?: string;
  size?: 'md' | 'lg';
}

const STORAGE_KEY = 'szama_rider_custom_logo';
const EVENT_NAME = 'szama_logo_updated';

export const EditableLogo: React.FC<EditableLogoProps> = ({
  className = '',
  subTitle = 'Food Delivery Fleet Management',
  size = 'md',
}) => {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadSavedLogo = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setLogoSrc(saved || null);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    loadSavedLogo();

    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      setLogoSrc(customEvent.detail ?? null);
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setLogoSrc(e.newValue);
      }
    };

    window.addEventListener(EVENT_NAME, handleCustomEvent);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(EVENT_NAME, handleCustomEvent);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const saveLogo = (newSrc: string | null) => {
    setLogoSrc(newSrc);
    try {
      if (newSrc) {
        localStorage.setItem(STORAGE_KEY, newSrc);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: newSrc }));
    } catch (err) {
      console.warn('Failed to save logo to storage', err);
    }
    setIsOpen(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          saveLogo(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (customUrl.trim()) {
      saveLogo(customUrl.trim());
      setCustomUrl('');
    }
  };

  const logoPresets = [
    {
      name: 'Default Szama Navy Badge',
      url: null,
    },
    {
      name: 'Electric Blue Courier Mark',
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Fast Courier Shield',
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Warsaw City Fleet Mark',
      url: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const boxSize = size === 'lg' ? 'w-11 h-11 sm:w-12 sm:h-12' : 'w-10 h-10';

  return (
    <div
      className={`relative inline-flex items-center gap-3 group select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="flex items-center gap-3 group active:scale-95 transition-transform">
        {/* Logo Mark */}
        <div
          className={`${boxSize} rounded-xl bg-[#001A3D] text-white flex items-center justify-center overflow-hidden shadow-sm border border-slate-200/50 relative shrink-0 transition-all group-hover:shadow-md`}
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Szama Rider Custom Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="text-white font-black text-lg tracking-tighter">SR</span>
          )}

          {/* Quick subtle camera overlay on icon */}
          <div
            className={`absolute inset-0 bg-[#001A3D]/70 backdrop-blur-[1px] flex items-center justify-center text-white transition-opacity ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(true);
            }}
            title="Upload or Change Logo"
          >
            <Camera className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-[#001A3D] leading-tight">
              Szama Rider
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-gray-400 font-bold uppercase -mt-0.5">
            {subTitle}
          </span>
        </div>
      </a>

      {/* Floating Change Logo Trigger Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        className={`hidden sm:flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-[#2563EB] rounded-lg text-[10px] font-bold border border-gray-200 transition-all ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 pointer-events-none'
        }`}
        title="Upload your custom brand logo"
      >
        <Camera className="w-3 h-3" />
        <span>Upload Logo</span>
      </button>

      {/* Custom Logo Upload Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-[#001A3D]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#001A3D]">Upload Szama Rider Logo</h4>
                  <p className="text-xs text-slate-500">
                    Syncs automatically across Header and Footer
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-lg p-1.5 rounded-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {/* Current Logo Preview */}
            <div className="my-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#001A3D] text-white flex items-center justify-center overflow-hidden shadow-inner border border-slate-300 shrink-0">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-white font-black text-2xl tracking-tighter">SR</span>
                )}
              </div>
              <div className="text-xs text-slate-600">
                <div className="font-bold text-slate-900">Current Logo Mark</div>
                <div className="text-[11px] text-slate-400">
                  {logoSrc ? 'Custom image uploaded' : 'Default Szama Rider SVG Emblem'}
                </div>
              </div>
            </div>

            <div className="space-y-4 my-4">
              {/* File upload from computer or phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Upload Photo from Device (PNG, JPG, SVG)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-300 rounded-xl hover:border-[#2563EB] hover:bg-blue-50/50 transition-colors text-xs font-semibold text-slate-700"
                >
                  <Upload className="w-4 h-4 text-[#2563EB]" />
                  <span>Choose file from phone or computer</span>
                </button>
              </div>

              {/* URL Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Or Paste Direct Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/logo.png"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyUrl}
                    className="px-3.5 py-2 bg-[#2563EB] text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Presets */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Quick Presets
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {logoPresets.map((preset) => {
                    const isSelected = logoSrc === preset.url;
                    return (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => saveLogo(preset.url)}
                        className="text-left p-2 border border-slate-200 rounded-lg hover:border-[#2563EB] hover:bg-slate-50 transition-all text-xs flex items-center justify-between"
                      >
                        <span className="truncate font-medium text-slate-800 text-[11px]">
                          {preset.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => saveLogo(null)}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
