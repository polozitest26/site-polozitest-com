'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PrijavaPage() {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    email: '',
    telefon: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement CorvusPay redirect
      // 1. Create order in your system
      // 2. Generate CorvusPay payment URL with signature
      // 3. Redirect to CorvusPay

      console.log('Form data:', formData);

      // PLACEHOLDER: For now, just log the data
      alert('CorvusPay integracija u toku. Uskoro će biti aktivna!');

      // Example CorvusPay redirect (when integrated):
      // const corvusPayUrl = await generateCorvusPayUrl({
      //   order_number: `ORDER-${Date.now()}`,
      //   amount: '120000', // 1200.00 RSD in cents
      //   currency: 'RSD',
      //   ...formData
      // });
      // window.location.href = corvusPayUrl;

    } catch (error) {
      console.error('Payment error:', error);
      alert('Greška prilikom inicijalizacije plaćanja. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Image
            src="/images/Logo5.png"
            alt="Položi Test Logo"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-white mb-2">
            Prijavi se i započni učenje
          </h1>
          <p className="text-gray-300 text-lg">
            Samo 1200 RSD za 3 meseca pristupa portalu
          </p>
        </div>

        {/* Payment Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ime */}
            <div>
              <label htmlFor="ime" className="block text-gray-700 font-semibold mb-2">
                Ime *
              </label>
              <input
                type="text"
                id="ime"
                name="ime"
                required
                value={formData.ime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-success-500 focus:border-transparent outline-none transition-all"
                placeholder="Unesite vaše ime"
              />
            </div>

            {/* Prezime */}
            <div>
              <label htmlFor="prezime" className="block text-gray-700 font-semibold mb-2">
                Prezime *
              </label>
              <input
                type="text"
                id="prezime"
                name="prezime"
                required
                value={formData.prezime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-success-500 focus:border-transparent outline-none transition-all"
                placeholder="Unesite vaše prezime"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-success-500 focus:border-transparent outline-none transition-all"
                placeholder="vas@email.com"
              />
            </div>

            {/* Telefon */}
            <div>
              <label htmlFor="telefon" className="block text-gray-700 font-semibold mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                value={formData.telefon}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-success-500 focus:border-transparent outline-none transition-all"
                placeholder="+381 60 123 4567"
              />
            </div>

            {/* Price Summary */}
            <div className="bg-success-50 border-2 border-success-200 rounded-xl p-6 mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-semibold">Pristup za 3 meseca:</span>
                <span className="text-2xl font-bold text-success-600">1200 RSD</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                ✓ Neograničen pristup svim testovima<br />
                ✓ AI personalizovano učenje<br />
                ✓ Detaljna statistika i praćenje napretka<br />
                ✓ Mobilna aplikacija
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all shadow-lg ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 text-white'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Prebacivanje na plaćanje...
                </span>
              ) : (
                '🔒 Nastavi na sigurno plaćanje'
              )}
            </motion.button>

            {/* Security Note */}
            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 Plaćanje je potpuno sigurno. Svi podaci se prenose enkriptovano preko HTTPS-a.
              <br />
              Plaćanje procesuje CorvusPay, licencirani procesor plaćanja.
            </p>
          </form>
        </motion.div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-success-400 hover:text-success-300 transition-colors"
          >
            ← Nazad na početnu stranicu
          </a>
        </div>
      </motion.div>
    </div>
  );
}
