'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order_number') || 'N/A';

  return (
    <div className="min-h-screen bg-gradient-to-b from-success-900 via-success-800 to-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-success-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-6"
        >
          <h1 className="text-4xl font-bold text-success-600 mb-4">
            Plaćanje uspešno! 🎉
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Vaša pretplata je aktivirana i možete odmah započeti učenje.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Broj narudžbine:</span>
                <span className="font-semibold text-gray-900">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Iznos:</span>
                <span className="font-semibold text-gray-900">1200 RSD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Trajanje:</span>
                <span className="font-semibold text-gray-900">2 meseca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-success-600">✓ Plaćeno</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-primary-900 mb-3">
              Šta je sledeće?
            </h2>
            <div className="text-left space-y-2 text-gray-700">
              <p>✅ Primićete email sa pristupnim podacima</p>
              <p>✅ Prijavite se na kandidat.polozitest.com</p>
              <p>✅ Započnite učenje odmah!</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <motion.a
              href="https://kandidat.polozitest.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-4 px-8 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              🎓 Idi na portal za učenje
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
            Imate pitanja? Kontaktirajte nas na{' '}
            <a
              href="mailto:info@polozitest.com"
              className="text-success-300 hover:text-success-200 underline"
            >
              info@polozitest.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-success-900 flex items-center justify-center"><p className="text-white">Loading...</p></div>}>
      <SuccessContent />
    </Suspense>
  );
}
