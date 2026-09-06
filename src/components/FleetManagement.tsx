import React, { useState } from 'react';
import { Language } from '../types';
import {
  Layers,
  Bike,
  Coins,
  ShieldCheck,
  Headphones,
  FileCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Package,
  BatteryCharging,
  Clock,
  Car,
  Fuel,
  MapPin,
  Send,
  MessageCircle,
  FileText,
} from 'lucide-react';
import { EditableImage } from './EditableImage';

interface FleetManagementProps {
  lang: Language;
  onOpenRegister: () => void;
}

export const FleetManagement: React.FC<FleetManagementProps> = ({
  lang,
  onOpenRegister,
}) => {
  const [activeTab, setActiveTab] = useState<'multi_app' | 'billing' | 'equipment' | 'legalization' | 'dispatch'>('multi_app');
  const [selectedVehicle, setSelectedVehicle] = useState<'ebike' | 'scooter' | 'moped' | 'car'>('ebike');

  const fleetPillars = [
    {
      id: 'multi_app',
      label: 'Multi-App Fleet Dispatch',
      icon: <Layers className="w-4 h-4" />,
      title: 'Unified Multi-Platform Fleet Accounts',
      desc: 'Deliver simultaneously across multiple food delivery apps under one official registered fleet partner.',
      bullets: [
        'Centralized fleet profile creation across all major delivery apps in Poland',
        'Seamless fleet transfer from another partner in < 24h with zero account freeze',
        'Maximize peak-hour earnings by switching apps without multiple tax forms',
        'Official courier onboarding verified directly with platform operations',
      ],
      badge: 'All Platforms Supported',
    },
    {
      id: 'billing',
      label: 'Automated Billing & Payouts',
      icon: <Coins className="w-4 h-4" />,
      title: 'Automated Tuesday Settlements & ZUS Payroll',
      desc: 'Transparent fleet financial management with zero commission cuts on food deliveries and guaranteed weekly bank payouts.',
      bullets: [
        'Guaranteed weekly payouts every Tuesday directly to your Polish IBAN',
        'Flat 30 PLN weekly fee — 0% percentage cut on your deliveries and tips',
        '100% customer tips stay directly with the courier',
        'Automated ZUS social security registration (ZUA/ZZA) and annual PIT-11 tax filing',
      ],
      badge: 'Zero Delays Guarantee',
    },
    {
      id: 'equipment',
      label: 'Delivery Gear & Vehicle Fleet',
      icon: <Package className="w-4 h-4" />,
      title: 'Certified Thermal Gear & Fleet Rentals',
      desc: 'Complete equipment assistance and vehicle partnership rentals so you can hit the road fully equipped immediately.',
      bullets: [
        'Platform-compliant insulated thermal food delivery backpacks and bags',
        'Partnership rentals for E-Bikes, dual-battery electric scooters, and 50cc/125cc mopeds',
        'High-capacity power banks, waterproof phone mounts, and high-visibility rainwear',
        'Fuel discount cards (Orlen, Circle K) saving up to 15-20 gr/liter for motorized riders',
      ],
      badge: 'Turnkey Equipment',
    },
    {
      id: 'legalization',
      label: 'Work Permits & Residency (TRC)',
      icon: <ShieldCheck className="w-4 h-4" />,
      title: 'Turnkey Umowa Zlecenie & Immigration Dossier',
      desc: 'Full regulatory compliance as a registered Polish employer (NIP: 1133210688, REGON: 545547185).',
      bullets: [
        'Legally binding Polish Mandate Contract (Umowa Zlecenie) digitally signed in minutes',
        'Complete employer document package for Karta Pobytu (TRC) and Załącznik nr 1',
        'Oświadczenie o powierzeniu wykonywania pracy & Zezwolenie typ A processing',
        'Assistance with PESEL, Polish bank account setup, and tax office registration',
      ],
      badge: '100% Polish Firm',
    },
    {
      id: 'dispatch',
      label: '24/7 Dispatcher Support',
      icon: <Headphones className="w-4 h-4" />,
      title: 'Dedicated Multilingual Courier Dispatch Hotline',
      desc: 'Direct human support from experienced fleet managers who speak your language and protect your rights on the road.',
      bullets: [
        'Active dispatch assistance in English, Polish, Ukrainian, Punjabi, Hindi, and Spanish',
        'Immediate resolution for restaurant waiting time compensation and app blockages',
        'Assistance with damaged order protocols and customer delivery disputes',
        'Direct WhatsApp fleet hotline (+48 883 976 989) with < 5-minute response SLA',
      ],
      badge: '6 Languages 24/7',
    },
  ];

  const currentPillar = fleetPillars.find((p) => p.id === activeTab) || fleetPillars[0];

  const vehicleOptions = {
    ebike: {
      name: 'Electric Bike (E-Bike)',
      tagline: 'Highest profit margin & lowest operational costs in Polish city centers.',
      costPerWeek: '~0-15 PLN charging',
      speed: '25 km/h city average',
      gear: ['Thermal delivery bag', 'Handlebar phone mount', 'High-capacity powerbank', 'Helmet & bike lock'],
      platforms: 'All Major Food Delivery Apps',
      perk: 'Zero fuel cost, priority short-distance orders, access to pedestrian zones.',
    },
    scooter: {
      name: 'Electric Scooter (E-Scooter)',
      tagline: 'Ultra-agile city navigation for rapid order turnaround and high delivery density.',
      costPerWeek: '~10-20 PLN charging',
      speed: '20-25 km/h city limits',
      gear: ['Insulated thermal backpack', 'Stem mount for smartphone', 'Reflective vest', 'Safety helmet'],
      platforms: 'Multiple Delivery Apps Supported',
      perk: 'Effortless parking right at restaurant doors, zero traffic delays.',
    },
    moped: {
      name: 'Moped / Scooter (50cc / 125cc)',
      tagline: 'Long-range capability for larger delivery radiuses, high order volume, and suburban zones.',
      costPerWeek: '~40-70 PLN fuel (discount card available)',
      speed: '45-60 km/h',
      gear: ['Waterproof thermal delivery trunk/bag', 'Vibration-dampened phone holder', 'DOT certified helmet'],
      platforms: 'Multi-App Food & Express Delivery',
      perk: 'Fleet fuel card discount (Circle K / Orlen), year-round speed, high tip potential.',
    },
    car: {
      name: 'Car Delivery (Fleet / Private)',
      tagline: 'All-weather reliability with large-order capacity and multi-stop bulk deliveries.',
      costPerWeek: 'LPG / Hybrid / Petrol with fleet fuel discount',
      speed: 'Full city range',
      gear: ['Large trunk thermal delivery boxes', 'In-car fast charger & dash mount'],
      platforms: 'All Supported Food Delivery Apps',
      perk: 'Delivering comfortably in heavy rain or winter snow when surge earnings spike.',
    },
  };

  const activeVehicleData = vehicleOptions[selectedVehicle];

  return (
    <section id="fleet-management" className="py-16 sm:py-24 bg-white text-[#001A3D] scroll-mt-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Food Delivery Fleet Management</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#001A3D]">
            Comprehensive Fleet Operations in Poland
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            We handle multi-app dispatch, weekly automated billing, equipment logistics, and complete Polish legalization so you can maximize your food delivery earnings with 100% peace of mind.
          </p>
        </div>

        {/* Fleet Operations Photo Banner */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-3 sm:p-4 shadow-sm">
            <EditableImage
              storageKey="fleet_management_banner"
              defaultSrc="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=1200&q=80"
              alt="Szama Rider Food Delivery Fleet Management & Courier Fleet Operations in Poland"
              badgeLabel="Upload Fleet Operations Photo"
              className="w-full h-56 sm:h-72 rounded-2xl shadow-inner object-cover"
            />
            <div className="flex flex-col sm:flex-row items-center justify-between px-2 pt-3 pb-1 text-xs gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] inline-block"></span>
                <span className="font-bold text-[#001A3D]">Szama Rider Central Fleet Hub</span>
                <span className="text-gray-400 hidden sm:inline">• Official Fleet Management Across Multiple Delivery Apps</span>
              </div>
              <div className="text-[11px] font-mono text-gray-500">
                NIP: 1133210688 • REGON: 545547185
              </div>
            </div>
          </div>
        </div>

        {/* 5-Pillar Fleet Services Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {fleetPillars.map((pillar) => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(pillar.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-[#001A3D] text-white shadow-md'
                    : 'bg-[#F8FAFC] text-gray-600 hover:bg-gray-100 hover:text-[#001A3D] border border-gray-200/70'
                }`}
              >
                <span className={isActive ? 'text-[#2563EB]' : 'text-gray-400'}>
                  {pillar.icon}
                </span>
                <span>{pillar.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-6 sm:p-10 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-blue-100/70 text-[#2563EB]">
                <Zap className="w-3.5 h-3.5" />
                <span>{currentPillar.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001A3D] tracking-tight">
                {currentPillar.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {currentPillar.desc}
              </p>

              <div className="space-y-3 pt-2">
                {currentPillar.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://tally.so/r/Y5A4Bz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wide shadow-md shadow-blue-200 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Join Szama Rider Fleet (Tally Form)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://tally.so/r/Y5A4Bz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-gray-50 text-[#001A3D] font-bold text-xs sm:text-sm border border-gray-200 shadow-2xs transition-all flex items-center gap-2"
                >
                  <span>Direct Tally Form</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
                </a>

                <a
                  href="https://wa.me/48883976989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl text-emerald-700 hover:text-emerald-800 font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Ask Dispatcher on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Visual Fleet Metric Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-md space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Fleet Management Standard
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-green-50 text-[#25D366]">
                    ACTIVE 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#2563EB]">30 PLN</div>
                    <div className="text-[11px] font-bold text-gray-500 mt-0.5">Fixed Weekly Fee</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#25D366]">0%</div>
                    <div className="text-[11px] font-bold text-gray-500 mt-0.5">Order Commission</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#001A3D]">Every Tue</div>
                    <div className="text-[11px] font-bold text-gray-500 mt-0.5">Bank Payout Day</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#2563EB]">&lt; 24h</div>
                    <div className="text-[11px] font-bold text-gray-500 mt-0.5">Fleet Activation</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs">
                  <div className="font-bold text-[#001A3D] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                    <span>Official Polish Fleet Partner Entity</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[11px]">
                    Szama Rider acts as your formal legal contractor and tax agent in Poland, registering you with ZUS, delivering automated pay slips, and issuing legal documents for residency cards (Karta Pobytu).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Fleet Operations Blueprint: Courier Lifecycle */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 mb-16 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Operations Blueprint
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001A3D] tracking-tight">
              The Szama Rider Fleet Architecture
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              A streamlined, transparent 6-stage lifecycle engineered for maximum courier earnings, fast legal compliance, and zero administrative headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Digital Onboarding',
                badge: '2 Minutes',
                desc: 'Fill our streamlined registration form. Submit basic identification (Passport, Karta Pobytu, or EU ID) with no paperwork lines.',
                icon: <Send className="w-5 h-5 text-[#2563EB]" />,
              },
              {
                step: '02',
                title: 'Legal Umowa Zlecenie',
                badge: '< 24 Hours',
                desc: 'Receive your official Polish mandate contract digitally signed on your phone. Automatic ZUS health and social registration.',
                icon: <FileText className="w-5 h-5 text-[#25D366]" />,
              },
              {
                step: '03',
                title: 'Vehicle & Gear Setup',
                badge: 'Same-Day Pickup',
                desc: 'Deliver with your own bike/car, or pick up a delivery-ready rental E-bike with dual swappable batteries and certified thermal bag.',
                icon: <Bike className="w-5 h-5 text-[#2563EB]" />,
              },
              {
                step: '04',
                title: 'Multi-App Fleet Activation',
                badge: 'All Platforms',
                desc: 'Direct partner fleet invites dispatched for all top food delivery apps. Switch between apps seamlessly to maximize daily hourly rates.',
                icon: <Layers className="w-5 h-5 text-[#001A3D]" />,
              },
              {
                step: '05',
                title: '24/7 Dispatch & Hotline',
                badge: '6 Languages',
                desc: 'Direct WhatsApp and phone assistance for order disputes, customer location issues, and restaurant delays in your native tongue.',
                icon: <Headphones className="w-5 h-5 text-[#25D366]" />,
              },
              {
                step: '06',
                title: 'Tuesday Direct Payday',
                badge: 'Fixed 30 PLN',
                desc: 'Automated direct bank transfer to your Polish IBAN every Tuesday. 0% commission deducted, with itemized tax and pay slips sent to your email.',
                icon: <Coins className="w-5 h-5 text-[#2563EB]" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200/70 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-600">
                        {item.badge}
                      </span>
                      <span className="text-xl font-black text-gray-300 group-hover:text-[#2563EB] transition-colors">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-[#001A3D]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-gray-600">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span className="font-medium">All operations compliant with Polish Labor Law (Kodeks Cywilny) & ZUS regulations.</span>
            </div>
            <a
              href="https://tally.so/r/Y5A4Bz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#2563EB] hover:text-blue-700 flex items-center gap-1 group"
            >
              <span>Begin Fleet Registration (Tally)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Interactive Fleet Vehicle & Equipment Selector */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Fleet Equipment & Transport Logistics
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001A3D] tracking-tight">
              Select Your Delivery Vehicle & Gear Package
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Whether you deliver on your own bike, need an electric fleet rental, or drive a car, Szama Rider equips you with compliant gear and partner discounts.
            </p>

            {/* High-visibility Rental Bike WhatsApp Banner */}
            <div className="pt-2">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#075E54]">
                      Fast Delivery Bike & E-Bike Rentals Available
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Get delivery-ready E-bikes with dual swappable batteries, thermal box & phone mount with zero bureaucracy.
                  </p>
                </div>
                <a
                  href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20apply%20for%20a%20Rental%20Bike%20for%20food%20delivery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 py-2.5 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-emerald-200 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Apply for Rental Bike (WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Vehicle Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <button
              type="button"
              onClick={() => setSelectedVehicle('ebike')}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedVehicle === 'ebike'
                  ? 'border-[#2563EB] bg-blue-50/40 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Bike className={`w-5 h-5 ${selectedVehicle === 'ebike' ? 'text-[#2563EB]' : 'text-gray-400'}`} />
                {selectedVehicle === 'ebike' && (
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                )}
              </div>
              <div className="font-bold text-sm text-[#001A3D]">E-Bike / Bike</div>
              <div className="text-[11px] text-gray-500">Low Cost • High Margin</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedVehicle('scooter')}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedVehicle === 'scooter'
                  ? 'border-[#2563EB] bg-blue-50/40 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <BatteryCharging className={`w-5 h-5 ${selectedVehicle === 'scooter' ? 'text-[#2563EB]' : 'text-gray-400'}`} />
                {selectedVehicle === 'scooter' && (
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                )}
              </div>
              <div className="font-bold text-sm text-[#001A3D]">E-Scooter</div>
              <div className="text-[11px] text-gray-500">Agile City Navigation</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedVehicle('moped')}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedVehicle === 'moped'
                  ? 'border-[#2563EB] bg-blue-50/40 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Fuel className={`w-5 h-5 ${selectedVehicle === 'moped' ? 'text-[#2563EB]' : 'text-gray-400'}`} />
                {selectedVehicle === 'moped' && (
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                )}
              </div>
              <div className="font-bold text-sm text-[#001A3D]">Scooter (50/125cc)</div>
              <div className="text-[11px] text-gray-500">Long Range • High Volume</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedVehicle('car')}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedVehicle === 'car'
                  ? 'border-[#2563EB] bg-blue-50/40 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Car className={`w-5 h-5 ${selectedVehicle === 'car' ? 'text-[#2563EB]' : 'text-gray-400'}`} />
                {selectedVehicle === 'car' && (
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                )}
              </div>
              <div className="font-bold text-sm text-[#001A3D]">Car Delivery</div>
              <div className="text-[11px] text-gray-500">All Weather • Bulk Orders</div>
            </button>
          </div>

          {/* Detailed Vehicle & Equipment Specifications */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-gray-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-[#001A3D]">
                    {activeVehicleData.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {activeVehicleData.tagline}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Compliant Equipment Package Provided / Required:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeVehicleData.gear.map((g, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white px-3 py-2 rounded-lg border border-gray-200/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-200/80 text-xs space-y-1">
                  <div className="font-bold text-[#001A3D]">Fleet Advantage:</div>
                  <p className="text-gray-600 text-[11px]">{activeVehicleData.perk}</p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="bg-white p-5 rounded-xl border border-gray-200/80 space-y-3 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Operating Cost:</span>
                    <span className="font-bold text-[#001A3D]">{activeVehicleData.costPerWeek}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Average City Speed:</span>
                    <span className="font-bold text-[#001A3D]">{activeVehicleData.speed}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Top Food Apps:</span>
                    <span className="font-bold text-[#2563EB]">{activeVehicleData.platforms}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Fleet Partner Fee:</span>
                    <span className="font-bold text-[#25D366]">30 PLN / week (Fixed)</span>
                  </div>
                </div>

                {/* Direct WhatsApp Rental Bike / Vehicle Apply Link */}
                <a
                  href={`https://wa.me/48883976989?text=${encodeURIComponent(
                    `Hello Szama Rider! I want to apply to rent a delivery bike/vehicle (${activeVehicleData.name}) for food delivery. Please share rental terms, rates, and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="fleet-rental-bike-whatsapp-btn"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-200 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Apply for {activeVehicleData.name} on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Direct Tally Form link if courier already has vehicle */}
                <a
                  href="https://tally.so/r/Y5A4Bz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#001A3D] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Already Have a Vehicle? Register on Tally</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Nationwide Fleet Hubs Strip */}
        <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200/80 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#001A3D]">
                Nationwide Food Delivery Fleet Operations
              </h4>
              <p className="text-xs text-gray-500">
                Szama Rider manages active courier fleets in Poland's largest metropolitan food delivery markets.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
              <MapPin className="w-4 h-4 text-[#25D366]" />
              <span>8 Active Fleet Cities</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-xs">
            {[
              { city: 'Warszawa', tag: 'Central Fleet HQ' },
              { city: 'Kraków', tag: 'Fleet & Service Desk' },
              { city: 'Wrocław', tag: 'Dispatch Hub' },
              { city: 'Gdańsk / Trójmiasto', tag: 'Active Fleet' },
              { city: 'Poznań', tag: 'Active Fleet' },
              { city: 'Łódź', tag: 'Active Fleet' },
              { city: 'Katowice & Silesia', tag: 'Regional Dispatch' },
              { city: 'Lublin', tag: 'Active Fleet' },
            ].map((hub, i) => (
              <div
                key={i}
                className="p-3 bg-white rounded-xl border border-gray-200/70 hover:border-blue-200 transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-[#001A3D]">{hub.city}</div>
                  <div className="text-[10px] text-gray-400">{hub.tag}</div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
