import React from 'react';
import Layout from '../components/Layout';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

function Contact() {
  return (
    <Layout>
      <section className="min-h-screen bg-white px-6 pt-20 pb-16 flex items-start justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Contact us
            </h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Reach out for inquiries, estimates, or questions about your business's valuation.
            </p>
            <form
              action="https://formspree.io/f/mwpbgygz"
              method="POST"
              className="space-y-4 bg-gray-50 p-6 rounded shadow"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Please enter name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter email..."
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Please enter phone number..."
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase">Message</label>
                <textarea
                  name="message"
                  placeholder="Please enter message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reach us at</h3>
            <div className="text-gray-700 space-y-6">
              <div className="flex items-start">
                <PhoneIcon className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <span className="text-base">424-488-9262</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <span className="text-base">
                  23545 Crenshaw Blvd #101B<br />
                  Torrance, CA 90505
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
