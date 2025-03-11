
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import BotShowcase from '../components/sections/BotShowcase';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast
    setTimeout(() => {
      toast({
        title: "به ربات‌های تلگرام خوش آمدید",
        description: "ربات‌های پرمیوم ما را برای ارتقای تجربه تلگرام خود بررسی کنید.",
        duration: 5000,
      });
    }, 1500);

    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    const fadeElements = document.querySelectorAll('.fade-in-view');
    fadeElements.forEach((el) => observer.observe(el));
    
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <BotShowcase />
        <Features />
        <Pricing />
        
        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-12 fade-in-view">
              <h2 className="section-heading">تماس با ما</h2>
              <p className="section-subheading">
                سوال یا نیاز به کمک دارید؟ با تیم ما تماس بگیرید و به سرعت پاسخ دریافت کنید.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl shadow-premium p-8 md:p-10 fade-in-view">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2 text-right">
                    <label htmlFor="name" className="text-sm font-medium">نام</label>
                    <input
                      id="name"
                      placeholder="نام شما"
                      className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label htmlFor="email" className="text-sm font-medium">ایمیل</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="ایمیل شما"
                      className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 text-right">
                  <label htmlFor="subject" className="text-sm font-medium">موضوع</label>
                  <input
                    id="subject"
                    placeholder="چگونه می‌توانیم به شما کمک کنیم؟"
                    className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2 text-right">
                  <label htmlFor="message" className="text-sm font-medium">پیام</label>
                  <textarea
                    id="message"
                    placeholder="پیام شما..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
