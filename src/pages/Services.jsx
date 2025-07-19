import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Services | Zenith Valuation</title>
      </Helmet>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Business Valuation and Appraisal */}
            <div className="bg-white rounded-lg shadow p-6 transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Business Valuation and Appraisal</h3>
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2">
                <li><strong>Fair Market Valuation:</strong> Accurate assessments based on financials, assets, liabilities, and industry benchmarks.</li>
                <li><strong>Asset Appraisals:</strong> Includes valuation of real estate, equipment, and intellectual property.</li>
                <li><strong>Financial Reporting:</strong> Valuations for PPA, impairment testing, and stock-based compensation reporting.</li>
              </ul>
            </div>

            {/* Strategic Planning and Growth */}
            <div className="bg-white rounded-lg shadow p-6 transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Strategic Planning and Growth</h3>
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2">
                <li><strong>Growth Assessment:</strong> Identify value drivers and optimize business structure to enhance valuation.</li>
                <li><strong>Mergers & Acquisitions:</strong> Support buyers and sellers with objective pricing for fair deals.</li>
                <li><strong>Succession & Exit Planning:</strong> Plan ownership transitions, ESOPs, or family transfers with clarity.</li>
              </ul>
            </div>

            {/* Litigation Support */}
            <div className="bg-white rounded-lg shadow p-6 transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Litigation Support</h3>
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2">
                <li><strong>Legal Dispute Valuation:</strong> For shareholder disagreements, divorce, and breach of contract claims.</li>
                <li><strong>Expert Witness Testimony:</strong> Professional reports and court-defensible valuation support.</li>
              </ul>
            </div>

            {/* Tax and Planning Compliance */}
            <div className="bg-white rounded-lg shadow p-6 transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Tax and Planning Compliance</h3>
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2">
                <li><strong>IRS-Compliant Valuations:</strong> For estate, gift, and income tax filings based on FMV standards.</li>
                <li><strong>Strategic Tax Planning:</strong> Valuations for gifting, ownership restructuring, and tax-efficient exits.</li>
              </ul>
            </div>

            {/* Other Services */}
            <div className="bg-white rounded-lg shadow p-6 transition lg:col-span-2">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Other Services</h3>
              <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2">
                <li><strong>Financial Consulting:</strong> Improve financial performance and value positioning with expert guidance.</li>
                <li><strong>Business Modeling & Analytics:</strong> Build custom models to forecast growth and evaluate key metrics.</li>
                <li><strong>Fresh Start Accounting:</strong> Reset balance sheets post-restructuring with defensible valuations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default Services;
