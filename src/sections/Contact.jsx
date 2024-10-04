import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's get in touch</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm always open to discussing product design work or partnership
            opportunities.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Najas Nazar"
              />
            </label>
          </form>
        </div>
      </div>
      <h3 className="head-text">Contact Me</h3>
    </section>
  );
};

export default Contact;
