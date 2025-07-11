import React from 'react';
import Layout from '../../components/Layout';

function StrategicGrowth() {
  return (
    <Layout>
      <section className="bg-white py-16 px-4">
        <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-12 md:p-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Strategic Planning & Growth
          </h1>
          <p className="text-gray-700 mb-10 text-lg max-w-3xl">
            Our strategic valuation services help businesses understand their growth potential and prepare for key transitions — from scaling to succession.
          </p>

          <div className="space-y-10 max-w-5xl">
            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Growth Assessment</h2>
              <p className="text-gray-700 text-base">
                We evaluate your business’s current worth and highlight value drivers and performance gaps to support better growth strategies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Mergers and Acquisitions</h2>
              <p className="text-gray-700 text-base">
                Whether you're buying or selling, we provide objective valuations to support a fair and informed transaction process.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Exit and Succession Planning</h2>
              <p className="text-gray-700 text-base">
                From ESOPs to family transfers, we help business owners plan for future exits with accurate valuations and strategy support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default StrategicGrowth;
