
import React, { useEffect } from 'react';
import FeatureCard from "../ui/FeatureCard";
import GlassMorphism from "../ui/GlassMorphism";
import { Zap, Shield, RefreshCw, Globe, Clock, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "سریع و پاسخگو",
    description: "ربات‌های ما فوراً به دستورات و پیام‌ها پاسخ می‌دهند و تجربه‌ای روان برای همه کاربران تضمین می‌کنند."
  },
  {
    icon: Shield,
    title: "امن و خصوصی",
    description: "با توجه به امنیت ساخته شده، ربات‌های ما از داده‌های شما محافظت کرده و در هر سطح به حریم خصوصی احترام می‌گذارند."
  },
  {
    icon: RefreshCw,
    title: "به‌روزرسانی‌های منظم",
    description: "ما به طور مداوم ربات‌های خود را با ویژگی‌های جدید، بهبود عملکرد و رفع باگ‌ها بهبود می‌بخشیم."
  },
  {
    icon: Globe,
    title: "پشتیبانی چندزبانه",
    description: "با قابلیت‌های ترجمه داخلی و چندزبانه ربات‌های ما، به هر زبانی ارتباط برقرار کنید."
  },
  {
    icon: Clock,
    title: "دسترسی ۲۴/۷",
    description: "ربات‌های ما همیشه آنلاین هستند و آماده کمک به شما و کاربرانتان در هر زمان از شبانه‌روز هستند."
  },
  {
    icon: Settings,
    title: "قابل شخصی‌سازی",
    description: "ربات‌های ما را با گزینه‌ها و تنظیمات شخصی‌سازی گسترده، با نیازهای خاص خود تطبیق دهید."
  }
];

const Features = () => {
  useEffect(() => {
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
      }
    );
    
    const elements = document.querySelectorAll('.fade-in-view');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 fade-in-view">
          <h2 className="section-heading">
            ویژگی‌های قدرتمند
          </h2>
          <p className="section-subheading">
            ربات‌های تلگرام ما با ویژگی‌های پیشرفته همراه هستند تا به شما در مدیریت، تعامل و رشد جامعه خود کمک کنند.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="fade-in-view"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-20 relative fade-in-view">
          <GlassMorphism className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-right">
                  راه‌اندازی و ادغام آسان
                </h3>
                <p className="text-muted-foreground mb-6 text-right">
                  ربات‌های ما برای راه‌اندازی و ادغام آسان با گروه‌ها و کانال‌های موجود تلگرام شما طراحی شده‌اند. نیازی به دانش فنی نیست.
                </p>
                <ul className="space-y-3 text-right">
                  {[
                    "نصب یک‌کلیکی ساده",
                    "مستندات جامع",
                    "آموزش‌های گام به گام",
                    "پشتیبانی فنی رایگان",
                    "ادغام یکپارچه با کانال‌های موجود"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start justify-end">
                      <span>{item}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-primary ml-2 mt-1"
                      >
                        <path d="m5 12 5 5L20 7"></path>
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="فرآیند راه‌اندازی" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </GlassMorphism>
        </div>
      </div>
    </section>
  );
};

export default Features;
