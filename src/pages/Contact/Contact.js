import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import './Contact.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [formData, setFormData]   = useState(initialForm);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData(initialForm);
  };

  return (
    <div className="nn-contact pb-5">
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you. Send us a message!" />

      <div className="container py-5">
        <div className="row g-4">

          {/* ── Contact Info ── */}
          <div className="col-12 col-md-5">
            <div className="nn-contact-info h-100 p-4">
              <h3 className="nn-contact__heading mb-4">Get in Touch</h3>
              {[
                { label: 'Address', value: 'Salim Slem, Beirut, Lebanon' },
                { label: 'Phone',   value: '+961 70 123 456' },
                { label: 'Email',   value: 'Abbasfaour@naturanest.com' },
                { label: 'Hours',   value: 'Mon – Sat, 9:00 AM – 7:00 PM' },
              ].map(({ label, value }) => (
                <p className="nn-contact-info__row" key={label}>
                  <strong>{label}:</strong> {value}
                </p>
              ))}
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="col-12 col-md-7">
            <div className="nn-contact-form p-4">
              <h3 className="nn-contact__heading mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} noValidate>

                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                    <input
                      type="text" id="name" name="name"
                      className="form-control nn-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                    <input
                      type="email" id="email" name="email"
                      className="form-control nn-input"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                  <input
                    type="text" id="subject" name="subject"
                    className="form-control nn-input"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">Message</label>
                  <textarea
                    id="message" name="message" rows="5"
                    className="form-control nn-input"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-brand w-100">
                  Send Message
                </button>

                {successMsg && (
                  <div className="nn-contact-form__success mt-3">{successMsg}</div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
