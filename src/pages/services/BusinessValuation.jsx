import React from 'react';
import Layout from '../../components/Layout';

function BusinessValuation() {
    return (
        <Layout>
            <section className="bg-white py-16 px-4">
                <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-12 md:p-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Business Valuation & Appraisal
                    </h1>
                    <p className="text-gray-700 mb-10 text-lg max-w-3xl">
                        Our valuation services provide a clear, objective view of your business’s worth — vital for decision-making, growth, reporting, and planning.
                    </p>

                    <div className="space-y-10 max-w-5xl">
                        <div>
                            <h2 className="text-xl font-semibold text-blue-700 mb-2">
                                Determining Fair Market Value
                            </h2>
                            <p className="text-gray-700 text-base">
                                We assess your company’s value using assets, liabilities, cash flow, market conditions, and industry benchmarks to deliver a defendable fair market estimate.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-700 mb-2">
                                Appraisals
                            </h2>
                            <p className="text-gray-700 text-base">
                                We conduct asset-based appraisals — including real estate, equipment, and intellectual property — tailored to your operational needs, strategic planning, or transaction.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-700 mb-2">
                                Financial Reporting
                            </h2>
                            <p className="text-gray-700 text-base">
                                We provide GAAP and IFRS-compliant valuations for financial reporting, including purchase price allocations, impairment testing, and stock-based compensation analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}

export default BusinessValuation;
