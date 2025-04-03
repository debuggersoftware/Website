import React, { useState } from "react";
import "../css/Contact.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "debuggersoft8@gmail.com",
      time: new Date().toLocaleString()
    };

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        "service_mlo7sgl", // Replace with your EmailJS service ID
        "template_q19i4ob", // Replace with your EmailJS template ID
        templateParams,
        "Mpzq5Vd4F3OzDwnXw" // Replace with your EmailJS public key
      );

      setStatus({
        submitted: true,
        success: true,
        message: t("contact.form.successMessage") || "Message sent successfully!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        submitted: true,
        success: false,
        message: t("contact.form.errorMessage") || "Failed to send message. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <video autoPlay loop muted playsInline webkit-playsinline="true" id="contact-bg">
        <source src={`${process.env.PUBLIC_URL}/groupdesignbg.mp4`} type="video/mp4" />
      </video>
      <div className="contact-content">
        <div className="contact-wrapper">
          <h1 className="contact-heading">{t("contact.title")}</h1>
          <p className="contact-subheading">
            {t("contact.subtitle")}
          </p>
        </div>
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-box contact-info">
            <h2>{t("contact.infoTitle")}</h2>
            <div className="info-group">
              <span>📍</span>
              <p>{t("contact.address")}</p>
            </div>
            <div className="info-group">
              <span>📞</span>
              <p>{t("contact.phone")}</p>
            </div>
            <div className="info-group">
              <span>✉️</span>
              <p>{t("contact.email")}</p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="contact-box contact-form">
            <h2>{t("contact.formTitle")}</h2>
            {status.submitted && (
              <div className={`status-message ${status.success ? "success" : "error"}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.name")} 
                required 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.email")} 
                required 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.message")} 
                rows="5" 
                required 
              />
              <button 
                type="submit" 
                disabled={loading}
              >
                <span>
                  {loading 
                    ? t("contact.form.sending") || "Sending..." 
                    : t("contact.form.send")
                  }
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;