import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Calculator, ArrowRight, CheckCircle2, Bike, Car, Flame, ExternalLink, MessageCircle } from 'lucide-react';

interface EarningsCalculatorProps {
  lang: Language;
  onOpenRegister: () => void;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({
  lang,
  onOpenRegister,
}) => {
  const t = translations[lang].calculator;

  const [hours, setHours] = useState<number>(35);
  const [deliveriesPerHour, setDeliveriesPerHour] = useState<number>(2.6);
  const [payPerOrder, setPayPerOrder] = useState<number>(21.5);
  const [vehicle, setVehicle] = useState<'ebike' | 'scooter' | 'car'>('ebike');
  const [isStudent, setIsStudent] = useState<boolean>(true);

  // Calculations
  const totalDeliveries = Math.round(hours * deliveriesPerHour);
  const grossWeekly = Math.round(totalDeliveries * payPerOrder);

  // Partner fee is ALWAYS flat 30 PLN
  const partnerFee = 30;

  // Vehicle fuel / maintenance weekly estimates
  const vehicleCosts = {
    ebike: 35,
    scooter: 70,
    car: 220,
  }[vehicle];

  // Student under 26 under Umowa Zlecenie has 0% PIT and 0% ZUS.
  const taxDeduction = isStudent ? 0 : Math.round(grossWeekly * 0.12);

  const netWeekly = Math.max(0, grossWeekly - partnerFee - vehicleCosts - taxDeduction);
  const netMonthly = Math.round(netWeekly * 4.33);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white text-[#001A3D] scroll-mt-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
            <Calculator className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#001A3D]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-6 shadow-sm">
            {/* Hours Per Week Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-[#001A3D] flex items-center gap-2">
                  <span>{t.hoursLabel}</span>
                  <span className="text-xs font-normal text-gray-400">
                    ({hours < 25 ? 'Part-time' : hours <= 45 ? 'Full-time' : 'High volume'})
                  </span>
                </label>
                <span className="text-base font-black text-[#2563EB] bg-white border border-gray-200 px-3 py-1 rounded-xl shadow-2xs">
                  {hours} hrs / week
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={65}
                step={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                <span>10 hrs</span>
                <span>25 hrs</span>
                <span>40 hrs (Standard)</span>
                <span>55 hrs</span>
                <span>65 hrs</span>
              </div>
            </div>

            {/* Deliveries Per Hour */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-[#001A3D]">
                  {t.deliveriesLabel}
                </label>
                <span className="text-sm font-bold text-[#001A3D] bg-white border border-gray-200 px-3 py-1 rounded-xl shadow-2xs">
                  {deliveriesPerHour.toFixed(1)} orders / hr
                </span>
              </div>
              <input
                type="range"
                min={1.5}
                max={4.0}
                step={0.1}
                value={deliveriesPerHour}
                onChange={(e) => setDeliveriesPerHour(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                <span>1.5 (Relaxed)</span>
                <span>2.5 (Average Warsaw/Kraków)</span>
                <span>4.0 (Peak rush)</span>
              </div>
            </div>

            {/* Average Pay Per Delivery */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-[#001A3D]">
                  {t.avgPayLabel}
                </label>
                <span className="text-sm font-bold text-[#001A3D] bg-white border border-gray-200 px-3 py-1 rounded-xl shadow-2xs">
                  {payPerOrder.toFixed(1)} PLN
                </span>
              </div>
              <input
                type="range"
                min={16.0}
                max={30.0}
                step={0.5}
                value={payPerOrder}
                onChange={(e) => setPayPerOrder(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                <span>16 PLN (Short distance)</span>
                <span>21.5 PLN (Average + boosts)</span>
                <span>30 PLN (Peak + tips)</span>
              </div>
            </div>

            {/* Vehicle Selector */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#001A3D] block">
                {t.vehicleLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setVehicle('ebike')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    vehicle === 'ebike'
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-blue-100'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Bike className="w-4 h-4 mb-1.5" />
                  <div className="font-bold text-xs">E-Bike / Bike</div>
                  <div className={`text-[10px] ${vehicle === 'ebike' ? 'text-blue-100' : 'text-gray-400'}`}>
                    ~35 PLN / wk charge
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVehicle('scooter')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    vehicle === 'scooter'
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-blue-100'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Flame className="w-4 h-4 mb-1.5" />
                  <div className="font-bold text-xs">Electric Scooter</div>
                  <div className={`text-[10px] ${vehicle === 'scooter' ? 'text-blue-100' : 'text-gray-400'}`}>
                    ~70 PLN / wk energy
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVehicle('car')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    vehicle === 'car'
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-blue-100'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Car className="w-4 h-4 mb-1.5" />
                  <div className="font-bold text-xs">Car / LPG</div>
                  <div className={`text-[10px] ${vehicle === 'car' ? 'text-blue-100' : 'text-gray-400'}`}>
                    ~220 PLN / wk fuel
                  </div>
                </button>
              </div>
            </div>

            {/* Student Relief Toggle */}
            <div className="pt-2 border-t border-gray-200">
              <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-200 cursor-pointer hover:border-blue-200 transition-colors">
                <input
                  type="checkbox"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-[#2563EB] rounded border-gray-300 focus:ring-[#2563EB]"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#001A3D]">{t.studentToggle}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-[#25D366] border border-green-100">
                      {t.studentBadge}
                    </span>
                  </div>
                  <p className="text-gray-400 mt-0.5">
                    Under Polish law (Ulga dla Młodych), students pay 0% PIT and 0% ZUS on Umowa Zlecenie.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Results Summary Card (5 Cols) - Deep Navy Contrast Card */}
          <div className="lg:col-span-5 bg-[#001A3D] text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Estimated Take-Home Pay
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/10 text-emerald-300 border border-white/10">
                  Direct Bank Transfer
                </span>
              </div>

              {/* Big Numbers */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 font-medium">
                    {t.estimatedNetWeekly}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#25D366] mt-1 tracking-tight">
                    ~ {netWeekly.toLocaleString()} PLN
                    <span className="text-xs text-gray-400 font-normal ml-2">/ week</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 font-medium">
                    {t.estimatedNetMonthly}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                    ~ {netMonthly.toLocaleString()} PLN
                    <span className="text-xs text-gray-400 font-normal ml-2">/ month</span>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown Line Items */}
              <div className="space-y-2 pt-2 text-xs border-t border-white/10">
                <div className="flex items-center justify-between text-gray-300">
                  <span>Gross Orders Total ({totalDeliveries} deliveries):</span>
                  <span className="font-semibold text-white">+{grossWeekly} PLN</span>
                </div>

                {/* Clear Partner Fee Highlight */}
                <div className="flex items-center justify-between py-1.5 px-2.5 rounded-xl bg-white/10 border border-white/10 text-emerald-300">
                  <span className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    Szama Rider Partner Fee:
                  </span>
                  <span className="font-black text-[#25D366]">-30 PLN (Flat Rate)</span>
                </div>

                <div className="flex items-center justify-between text-gray-400">
                  <span>Est. Vehicle / Fuel allowance:</span>
                  <span>-{vehicleCosts} PLN</span>
                </div>

                <div className="flex items-center justify-between text-gray-400">
                  <span>Income Tax & ZUS:</span>
                  <span>{isStudent ? '0 PLN (0% Student Relief)' : `-${taxDeduction} PLN`}</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 relative z-10 space-y-3">
              <a
                href="https://tally.so/r/Y5A4Bz"
                target="_blank"
                rel="noopener noreferrer"
                id="calculator-register-now-btn"
                className="w-full py-4 px-6 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-900/50 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.ctaCalculate} (Direct Tally Form)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20apply%20for%20a%20Rental%20Bike%20to%20maximize%20my%20weekly%20delivery%20earnings."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Apply for Rental E-Bike (WhatsApp)</span>
              </a>

              <div className="text-[11px] text-center text-gray-400">
                ⚡ Weekly payouts sent directly to your Polish bank account every Tuesday.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
