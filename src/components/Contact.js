import React, { useState, useRef } from "react";
import "../styles/Contact.css";

const initialState = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'sent' | 'error'
  const successRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT || "";
    try {
      setStatus("sending");
      if (endpoint) {
        // send JSON to configured endpoint
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, sentAt: new Date().toISOString() }),
        });

        if (!res.ok) {
          setStatus("error");
          return;
        }
      } else {
        // Simulate network request when no endpoint configured
        await new Promise((res) => setTimeout(res, 800));
      }

      setStatus("sent");
      setForm(initialState);
      setTimeout(() => {
        if (successRef.current) successRef.current.focus();
      }, 50);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="tag">Get in Touch</span>
            <h2 className="section-title">
              Ready to bring your ideas to life?
            </h2>
            <p className="contact-description">
              Let's discuss how CLE10 can help you transform your vision into
              reality. Our team is ready to collaborate with you on your next
              project.
            </p>
            <a href="#contact-form" className="btn btn-primary">
              Contact our Team →
            </a>
          </div>

          <div className="contact-form" id="contact-form">
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-describedby="contact-status"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "error-name" : undefined}
                  />
                  {errors.name && (
                    <div id="error-name" className="form-error" role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "error-email" : undefined}
                  />
                  {errors.email && (
                    <div id="error-email" className="form-error" role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "error-message" : undefined
                  }
                />
                {errors.message && (
                  <div id="error-message" className="form-error" role="alert">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>

              <div
                id="contact-status"
                aria-live="polite"
                className="form-status"
              >
                {status === "sent" && (
                  <div tabIndex="-1" ref={successRef} className="form-success">
                    Thanks! Your message has been sent.
                  </div>
                )}
                {status === "error" && (
                  <div className="form-error">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
