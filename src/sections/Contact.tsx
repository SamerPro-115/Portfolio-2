import React, { useState } from 'react';

import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

import { motion } from "motion/react";
import { useLanguage } from '@/hooks/useLanguage';

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { t } = useTranslation();
  const isAr = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);
    try {
      await emailjs.send("service_rkv4miq", "template_t3niway", {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      }, "4RMueB5KLxcm6MLb9");
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccess(false), 5000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0 },
  };

  function labelText(): string {
   const textSize = isAr ? "text-2xl" : "text-sm xl:text-md lg:text-lg tracking-[0.15rem]"

   return textSize;
  }

  return (
    <>

      <section
        id="contact"
        className="bg-black text-white py-28 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* Header */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
            className="mb-7" dir={isAr ? "rtl" : "ltr"}
          >
            
            <h2 className={`font-extralight text-white leading-none ${isAr ? " text-5xl md:text-6xl lg:text-7xl xl:text-8xl" : "font-cormorant italic text-6xl md:text-7xl xl:text-8xl"}`}>
              {t("contact.title")}
            </h2>
          </motion.div>

          {/* 2-col grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">

            {/* Vertical divider */}
            <div className="center-line hidden md:block" />

            {/* ── Left: form ── */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp} transition={{ duration: 0.9, ease: [0.16,1,0.3,1], delay: 0.1 }}
              className={`flex flex-col justify-center order-1 md:order-1 ${isAr ? "md:ml-16" : "md:pr-16"}`}
              dir={isAr ? "rtl" : "ltr"}
            >
              <p className={`text-white/50 ${isAr ? "text-xl" : "text-md"} leading-relaxed mb-10 max-w-sm`}>
                {t("contact.subtitle")}
              </p>

              {showSuccess && (
               <div className={`mb-6 px-4 py-3 border border-green-700/40 bg-green-900/20 text-green-300 text-sm  ${isAr && "md:text-lg" } font-mono-tech tracking-wider`}>
                  ✓ {t("contact.alerts.success")}
                </div>
              )}
              {showError && (
               <div className={`mb-6 px-4 py-3 border border-red-700/40 bg-red-900/20 text-red-300 text-sm  ${isAr && "md:text-lg" } font-mono-tech tracking-wider`}>
                  ✗ {t("contact.alerts.error")}
                </div>
              )}

               
           
           
               

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className={`contact-label ${labelText()}`}>{t("contact.form.nameLabel")}</label>
                  <input
                    name="name" type="text"
                    placeholder={t("contact.form.namePlaceholder")}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`contact-input ${isAr ? "text-md" : "text-sm" }`}
                  />
                </div>

                <div>
                  <label className={`contact-label ${labelText()}`}>{t("contact.form.emailLabel")}</label>
                  <input
                    name="email" type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                     className={`contact-input ${isAr ? "text-md" : "text-sm" }`}
                  />
                </div>

                <div>
                  <label className={`contact-label ${labelText()}`}>{t("contact.form.messageLabel")}</label>
                  <textarea
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleInputChange}
                    required rows={4}
                      className={`resize-none contact-input ${isAr ? "text-md" : "text-sm" }`}
                  />
                </div>

                <button type="submit" disabled={isLoading} className={`submit-btn ${isAr ? "text-md md:text-xl lg:text-2xl" : "tracking-widest text-sm md:text-md lg:text-lg xl:text-xl "}`}>
                  {isLoading ? t("contact.form.sendingButton") : t("contact.form.sendButton")}
                </button>
              </form>

              <p className={` ${isAr ?  "text-md" : "text-sm tracking-wider"} text-white/50 mt-8 font-mono-tech `}>
                {t("contact.footer.preferEmail")}{" "}
                <a href="mailto:newsamer123@gmail.com" className={`text-white/90 hover:text-white/60 transition-colors underline underline-offset-4 `}>
                  newsamer123@gmail.com
                </a>
              </p>
            </motion.div>

            {/* ── Right: gif ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16,1,0.3,1], delay: 0.25 }}
              className="relative flex items-center order-2 md:order-2"
            >



  <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
  <img
    src="/images/human-2.gif"
    alt="hooded figure"
    className={`w-full h-full object-cover object-center ${!isAr && "transform -scale-x-100"}`}
  />

    {/* Edge fades */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 top-0    h-1/4 bg-gradient-to-b from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />

  {/* Dark overlay so text reads clearly */}
  <div className="absolute inset-0 bg-black/30" />

</div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}