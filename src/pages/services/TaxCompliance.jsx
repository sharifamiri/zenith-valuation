import React from 'react';
import Layout from '../../components/Layout';

function TaxCompliance() {
  return (
    <Layout>
      <section className="bg-white py-16 px-4">
        <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-12 md:p-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Tax & Planning Compliance
          </h1>
          <p className="text-gray-700 mb-10 text-lg max-w-3xl">
            We help businesses meet IRS standards and prepare valuations for estate, gift, and tax planning purposes.
          </p>

          <div className="space-y-10 max-w-5xl">
            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Tax Purposes</h2>
              <p className="text-gray-700 text-base">
                Our valuations support tax filings related to gifting, ownership transfers, estate planning, and related compliance needs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">IRS Compliance</h2>
              <p className="text-gray-700 text-base">
                We prepare reports that follow IRS fair market value standards, helping you meet federal tax documentation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TaxCompliance;
