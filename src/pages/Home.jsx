import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import valuationHero from '../assets/home-valuation.png';
import { Helmet } from 'react-helmet';

import {
  DocumentTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  BanknotesIcon,
  DocumentCheckIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';

function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Zenith | Business Valuation</title>
      </Helmet>
      {/* Unified Top Section */}
      <section className="bg-gradient-to-b from-white to-purple-50">
        {/* Hero */}
        <div className="py-16 flex justify-center">
          <div className="w-full max-w-7xl bg-[#f5f2eb] rounded-xl overflow-hidden px-8 py-12 flex flex-col lg:flex-row gap-12 items-start shadow-md">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-16 leading-relaxed">
                <div>Reliable Business Valuations</div>
                <div className="mt-2">Backed by Data</div>
                <div className="mt-2">Delivered Fast</div>
              </h1>

              <p className="text-lg text-gray-700 mb-20">
                At Zenith Valuation, we provide startups and small businesses with independent, defensible valuations — backed by financial models and real-world insight.
              </p>
              <Link
                to="/services"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>

            <div className="lg:w-1/2 rounded-lg overflow-hidden">
              <img
                src={valuationHero}
                alt="Business valuation illustration"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20 px-6 flex justify-center">
          <div className="w-full max-w-7xl bg-gradient-to-b from-blue-100 to-blue-50 rounded-xl shadow-md px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-14 text-left">
              How Our Business Valuation Process Works
            </h2>

            <div className="grid md:grid-cols-4 gap-10 text-center">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Gathering</h3>
                <p className="text-gray-700 text-sm">
                  We collect key documents to understand your business model, ownership, and financials.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow">
                  <ChartBarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Analysis</h3>
                <p className="text-gray-700 text-sm">
                  We benchmark your performance and analyze risks and industry trends.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow">
                  <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Value Estimation</h3>
                <p className="text-gray-700 text-sm">
                  We apply multiple valuation methods to determine your business's fair value.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow">
                  <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Final Report</h3>
                <p className="text-gray-700 text-sm">
                  You receive a polished, share-ready valuation report in PDF format.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Link to="/services/business-valuation" className="bg-white rounded-lg shadow hover:shadow-md p-6 transition text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <ScaleIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Business Valuation & Appraisal</h3>
                  <p className="text-gray-600 text-sm">
                    Accurate and defensible fair market valuations for financial reporting, acquisitions, and asset appraisal.
                  </p>
                </div>
              </Link>

              <Link to="/services/strategic-growth" className="bg-white rounded-lg shadow hover:shadow-md p-6 transition text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <ChartBarIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Strategic Planning & Growth</h3>
                  <p className="text-gray-600 text-sm">
                    Support for M&A, exit planning, ESOPs, and value-driven growth decisions based on deep financial insight.
                  </p>
                </div>
              </Link>

              <Link to="/services/litigation-support" className="bg-white rounded-lg shadow hover:shadow-md p-6 transition text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <BanknotesIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Litigation Support</h3>
                  <p className="text-gray-600 text-sm">
                    Objective valuations for disputes, divorce, shareholder litigation, and expert witness testimony.
                  </p>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link to="/services/tax-compliance" className="bg-white rounded-lg shadow hover:shadow-md p-6 transition text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <DocumentCheckIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Tax & Planning Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    Valuations for IRS compliance, gifting, estate transfers, and tax planning — all FMV-backed.
                  </p>
                </div>
              </Link>

              <Link to="/services/other" className="bg-white rounded-lg shadow hover:shadow-md p-6 transition text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <PuzzlePieceIcon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">Other Services</h3>
                  <p className="text-gray-600 text-sm">
                    Including business modeling, consulting, fresh start accounting, and custom financial analysis.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-to-b from-white to-green-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Trusted by business owners, founders, and advisors
          </h2>
          <p className="text-gray-600 text-md mb-6">
            Our reports are prepared by professionals with experience in private company valuation, investment banking, and startup finance.
          </p>
          <div className="text-sm text-gray-500">
            * Member: NACVA | Reports accepted by banks, VC firms, and M&A advisors
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-100 text-blue-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a valuation for your business?</h2>
        <p className="text-lg mb-8">
          Whether you're raising funding, preparing to sell, or just want to know your worth — we can help.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Contact Us
        </Link>
      </section>
    </Layout>
  );
}

export default Home;
