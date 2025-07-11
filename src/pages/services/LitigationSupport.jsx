import React from 'react';
import Layout from '../../components/Layout';

function LitigationSupport() {
  return (
    <Layout>
      <section className="bg-white py-16 px-4">
        <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-12 md:p-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Litigation Support
          </h1>
          <p className="text-gray-700 mb-10 text-lg max-w-3xl">
            We provide expert financial opinions, valuation reports, and testimony support for a wide range of legal matters.
          </p>

          <div className="space-y-10 max-w-5xl">
            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Legal Disputes</h2>
              <p className="text-gray-700 text-base">
                Valuations for shareholder disagreements, divorce proceedings, and business disputes requiring an unbiased financial analysis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Expert Witness Testimony</h2>
              <p className="text-gray-700 text-base">
                We support law firms and clients with defensible valuation models and experienced professionals ready to testify in court.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default LitigationSupport;
