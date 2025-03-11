
import React, { useEffect, useRef } from 'react';
import BotCard from "../ui/BotCard";
import AnimatedButton from "../ui/AnimatedButton";
import { ArrowRight } from "lucide-react";

const bots = [
  {
    id: "1",
    name: "ربات چت‌مستر",
    description: "یک ربات مبتنی بر هوش مصنوعی برای مکالمات هوشمند. با کاربران از طریق زبان طبیعی تعامل داشته باشید و پاسخ‌های فوری به سوالات رایج ارائه دهید.",
    image: "/placeholder.svg",
    price: 49.99,
    telegramLink: "https://t.me/examplebot1"
  },
  {
    id: "2",
    name: "برنامه‌ریز حرفه‌ای",
    description: "رویدادها و یادآوری‌ها را به راحتی مدیریت کنید. اعلان‌های خودکار ارسال کنید، رویدادهای تکرار شونده ایجاد کنید و جامعه خود را سازماندهی کنید.",
    image: "/placeholder.svg",
    price: 39.99,
    telegramLink: "https://t.me/examplebot2"
  },
  {
    id: "3",
    name: "گردآورنده محتوا",
    description: "به طور خودکار بهترین محتوا را از سراسر وب پیدا کرده و به اشتراک بگذارید. کانال خود را با اخبار، مقالات و رسانه‌های مورد توجه به روز نگه دارید.",
    image: "/placeholder.svg",
    price: 59.99,
    telegramLink: "https://t.me/examplebot3"
  }
];

const BotShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="bots" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 fade-in-view">
          <h2 className="section-heading">
            ربات‌های تلگرام پرمیوم ما
          </h2>
          <p className="section-subheading">
            مجموعه‌ای از ربات‌های قدرتمند تلگرام را کاوش کنید که برای بهبود تجربه پیام‌رسانی و خودکارسازی گردش کار شما طراحی شده‌اند.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          {bots.map((bot, index) => (
            <div 
              key={bot.id} 
              className="fade-in-view" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <BotCard {...bot} />
            </div>
          ))}
        </div>
        
        <div className="text-center fade-in-view">
          <AnimatedButton variant="outline" size="lg" className="rounded-full">
            مشاهده همه ربات‌ها <ArrowRight className="mr-2 h-4 w-4" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default BotShowcase;
