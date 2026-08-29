import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(personalInfo.links.formspree, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.03] bg-[#090d16]/70 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14 space-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            06. Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project, engineering opportunity, or technical inquiry? Reach out directly via the form or through professional platforms.
          </p>
        </motion.div>

        {/* Parallelly Aligned Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            
            {/* Quick Contact Card */}
            <div className="h-full p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Direct Contact Channels</h3>
                    <p className="text-xs text-slate-400">Prompt responses within 24 hours</p>
                  </div>
                </div>

                {/* Email with 1-click Copy */}
                <div className="p-3.5 rounded-[6px] bg-slate-950/60 border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs text-slate-200 font-medium truncate">
                      {personalInfo.email}
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.93 }}
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-[6px] bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors flex-shrink-0"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5 pt-4 border-t border-white/5">
                <motion.a
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[6px] bg-slate-950/40 hover:bg-slate-950/80 border border-white/5 hover:border-cyan-500/30 flex items-center justify-between text-xs font-medium text-slate-300 hover:text-cyan-300 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[6px] bg-slate-950/40 hover:bg-slate-950/80 border border-white/5 hover:border-white/20 flex items-center justify-between text-xs font-medium text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>

                <div className="p-3 rounded-[6px] bg-slate-950/40 border border-white/5 flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="h-full p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
              
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in the details below to initiate a conversation directly to my inbox.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 my-auto"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-300">
                      Thank you for reaching out. I have received your message and will reply as soon as possible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 rounded-[6px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-slate-300">
                            Your Name <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-slate-950/70 border border-white/10 focus:border-cyan-500 rounded-[6px] px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-slate-300">
                            Your Email <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full bg-slate-950/70 border border-white/10 focus:border-cyan-500 rounded-[6px] px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-300">
                          Message <span className="text-cyan-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Hi Kavinisha, I'd like to discuss an opportunity or project..."
                          className="w-full bg-slate-950/70 border border-white/10 focus:border-cyan-500 rounded-[6px] px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors"
                        ></textarea>
                      </div>
                    </div>

                    {status === 'error' && (
                      <p className="text-xs text-rose-400 font-medium">
                        Failed to send message. Please email directly to {personalInfo.email}.
                      </p>
                    )}

                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 transition-all disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
