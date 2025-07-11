import React from 'react';
import Layout from '../../components/Layout';

function OtherServices() {
  return (
    <Layout>
      <section className="bg-white py-16 px-4">
        <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-12 md:p-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Other Services
          </h1>
          <p className="text-gray-700 mb-10 text-lg max-w-3xl">
            In addition to core valuation offerings, we provide expert consulting, custom modeling, and financial restructuring support.
          </p>

          <div className="space-y-10 max-w-5xl">
            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Consulting</h2>
              <p className="text-gray-700 text-base">
                We work closely with founders and finance teams to identify value improvements and refine business strategy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Business Modeling and Analytics</h2>
              <p className="text-gray-700 text-base">
                Build detailed financial models to test growth plans, forecast performance, and evaluate investment options.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Fresh Start Accounting</h2>
              <p className="text-gray-700 text-base">
                We assist with revaluation of assets and liabilities for businesses undergoing reorganization or fresh start accounting after restructuring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default OtherServices;
