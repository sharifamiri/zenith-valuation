import React from 'react';
import Layout from '../components/Layout';
import cvaBadge from '../assets/cva-badge.png';
import aboutPhoto from '../assets/about-photo.png';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About | Zenith Valuation</title>
      </Helmet>
      <section className="bg-white text-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-8">About Zenith Valuation</h1>

          {/* Top Row: Image + Bio */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            {/* Left: Image Placeholder */}
            <div className="w-full ml-auto text-center">
              <img
                src={aboutPhoto}
                alt="Sharif Amiri"
                className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Sharif Amiri</h3>
              <p className="text-gray-600 text-sm">Director – CVA, Finance, MBA</p>
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-lg mb-4">
                Founded in 2019, <strong>Zenith Valuation</strong> brings over <strong>10 years of hands-on experience</strong> in business valuation,
                financial modeling, and strategic consulting. Our mission is to deliver <strong>accurate</strong>, <strong>defensible</strong>,
                and <strong>insightful valuations</strong> that empower founders, investors, and advisors to make confident decisions.
              </p>
              <p className="text-lg mb-4">
                Led by <strong>Sharif Amiri</strong>, a <strong>Certified Valuation Analyst (CVA)</strong>, we specialize in working with startups,
                small to mid-sized businesses, and high-growth companies nationwide.
              </p>
              <p className="text-lg">
                We offer the <strong>professionalism of a national firm</strong> with the responsiveness and personalization of a boutique practice.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-purple-50 rounded-lg p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Us?</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base list-disc list-inside">
              <li>Accurate Fair Market Valuations for funding, M&A, and compliance</li>
              <li>Expert-led reports prepared by a credentialed CVA</li>
              <li>Fast turnaround times without compromising quality</li>
              <li>Trusted by founders, CPAs, and legal professionals</li>
              <li>Transparent pricing and a personalized approach</li>
            </ul>
          </div>

          {/* CVA Badge + Info */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={cvaBadge}
              alt="Certified Valuation Analyst (CVA)"
              className="w-32 h-32 object-contain"
            />
            <p className="text-gray-700 text-base">
              The CVA designation, awarded by NACVA, is one of the most respected credentials in the valuation profession.
              CVAs must meet rigorous training standards and demonstrate the highest level of ethics, competence, and objectivity.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
