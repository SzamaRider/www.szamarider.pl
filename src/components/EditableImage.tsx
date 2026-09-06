import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, Upload, Image as ImageIcon, Check } from 'lucide-react';

interface EditableImageProps {
  storageKey: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  badgeLabel?: string;
  aspectRatio?: string;
  isLogo?: boolean;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  storageKey,
  defaultSrc,
  alt,
  className = '',
  badgeLabel = 'Customize Image',
  aspectRatio,
  isLogo = false,
}) => {
  const [src, setSrc] = useState<string>(defaultSrc);
  const [isOpen, setIsOpen] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`szama_img_${storageKey}`);
      if (saved) {
        setSrc(saved);
      }
    } catch {
      // localStorage may fail in restricted sandboxes
    }
  }, [storageKey]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setSrc(reader.result);
          try {
            localStorage.setItem(`szama_img_${storageKey}`, reader.result);
          } catch (err) {
            console.warn('Storage limit reached or failed', err);
          }
          setIsOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (customUrl.trim()) {
      setSrc(customUrl.trim());
      try {
        localStorage.setItem(`szama_img_${storageKey}`, customUrl.trim());
      } catch (err) {
        console.warn('Storage failed', err);
      }
      setIsOpen(false);
      setCustomUrl('');
    }
  };

  const handleReset = () => {
    setSrc(defaultSrc);
    try {
      localStorage.removeItem(`szama_img_${storageKey}`);
    } catch {
      // ignore
    }
    setIsOpen(false);
  };

  const presets = isLogo
    ? [
        { name: 'Default Szama Rider', url: defaultSrc },
        {
          name: 'Minimal Dark',
          url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
        },
      ]
    : [
        {
          name: 'City Courier on E-Bike',
          url: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Courier Delivering with Thermal Bag',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Warsaw City Delivery at Sunset',
          url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Electric Scooter Fleet',
          url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
        },
      ];

  return (
    <div
      className={`relative group overflow-hidden ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Edit Trigger Button */}
      <button
        type="button"
        id={`btn-edit-img-${storageKey}`}
        onClick={() => setIsOpen(true)}
        className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg shadow-md transition-all duration-200 ${
          isHovered
            ? 'opacity-100 translate-y-0 bg-slate-900/90 text-white backdrop-blur-sm hover:bg-blue-600'
            : 'opacity-0 -translate-y-1 bg-black/40 text-white pointer-events-none'
        }`}
        title="Change photo or logo"
      >
        <Camera className="w-3.5 h-3.5" />
        <span>{badgeLabel}</span>
      </button>

      {/* Customization Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {isLogo ? 'Update Brand Logo' : 'Customize Cover Image'}
                  </h4>
                  <p className="text-xs text-slate-500">Live preview & custom photo upload</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-lg p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 my-4">
              {/* File upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Upload from Device
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
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-300 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 transition-colors text-xs font-medium text-slate-700"
                >
                  <Upload className="w-4 h-4 text-blue-600" />
                  <span>Choose file from your phone or computer</span>
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
                    placeholder="https://images.unsplash.com/..."
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="button"
                    onClick={handleApplyUrl}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Presets */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Quick Preset
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => {
                        setSrc(preset.url);
                        try {
                          localStorage.setItem(`szama_img_${storageKey}`, preset.url);
                        } catch {
                          // ignore
                        }
                        setIsOpen(false);
                      }}
                      className="text-left p-2 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-slate-50 transition-all text-xs group/btn flex items-center justify-between"
                    >
                      <span className="truncate text-slate-800 font-medium">{preset.name}</span>
                      {src === preset.url && <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
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
