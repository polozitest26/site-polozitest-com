'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ErrorContent() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get('error_code') || 'UNKNOWN';
  const errorMessage = searchParams.get('error_message') || 'Nepoznata greška';

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-red-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
            <svg
              className="w-20 h-20 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-6"
        >
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Plaćanje neuspešno
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Nažalost, došlo je do problema prilikom plaćanja.
          </p>

          {/* Error Details */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
            <div className="text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Kod greške:</span>
                <span className="font-semibold text-red-600">{errorCode}</span>
              </div>
              <div className="flex justify-between flex-col sm:flex-row gap-2">
                <span className="text-gray-600">Poruka:</span>
                <span className="font-semibold text-gray-900 text-right">{errorMessage}</span>
              </div>
            </div>
          </div>

          {/* Common Reasons */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Mogući razlozi:
            </h2>
            <div className="text-left space-y-2 text-gray-700">
              <p>• Nedovoljno sredstava na kartici</p>
              <p>• Kartica nije aktivirana za online plaćanje</p>
              <p>• Pogrešno unet CVV kod ili datum isteka</p>
              <p>• Plaćanje odbijeno od strane banke</p>
              <p>• Tehnički problem na strani procesora plaćanja</p>
            </div>
          </div>

          {/* What to do */}
          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-primary-900 mb-3">
              Šta da uradite?
            </h2>
            <div className="text-left space-y-2 text-gray-700">
              <p>✓ Proverite podatke kartice</p>
              <p>✓ Kontaktirajte svoju banku</p>
              <p>✓ Pokušajte ponovo za par minuta</p>
              <p>✓ Koristite drugu karticu ako je moguće</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <motion.a
              href="/prijava"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-4 px-8 bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              🔄 Pokušaj ponovo
            </motion.a>

            <a
              href="/"
              className="block w-full py-3 px-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all"
            >
              ← Nazad na početnu stranicu
            </a>
          </div>
        </motion.div>

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-sm"
        >
          <p>
            Potrebna vam je pomoć? Kontaktirajte nas na{' '}
            <a
              href="mailto:info@polozitest.com"
              className="text-red-300 hover:text-red-200 underline"
            >
              info@polozitest.com
            </a>
          </p>
          <p className="mt-2 text-gray-300">
            Telefon:{' '}
            <a href="tel:+381601234567" className="text-red-300 hover:text-red-200">
              +381 60 123 4567
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function PaymentErrorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-red-900 flex items-center justify-center"><p className="text-white">Loading...</p></div>}>
      <ErrorContent />
    </Suspense>
  );
}
