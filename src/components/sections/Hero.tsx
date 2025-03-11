
import React, { useEffect, useRef } from 'react';
import AnimatedButton from "../ui/AnimatedButton";
import GlassMorphism from "../ui/GlassMorphism";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const blur1 = heroRef.current.querySelector('.blur-1') as HTMLElement;
      const blur2 = heroRef.current.querySelector('.blur-2') as HTMLElement;
      
      if (blur1 && blur2) {
        blur1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        blur2.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
      }
    };
    
    const heroElement = heroRef.current;
    
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blur-1 absolute top-[10%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-primary/10 filter blur-[120px] transition-transform duration-300 ease-out" />
        <div className="blur-2 absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] rounded-full bg-accent/20 filter blur-[100px] transition-transform duration-300 ease-out" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="max-w-3xl space-y-8 animate-fade-in text-right">
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary ml-2"></span>
              معرفی بازار ربات‌های تلگرام
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-primary">تجربه تلگرام خود</span> را با ربات‌های قدرتمند ما متحول کنید
            </h1>
            
            <p className="text-xl text-muted-foreground">
              کانال‌ها و گروه‌های تلگرام خود را با مجموعه ربات‌های پرمیوم ما ارتقا دهید. وظایف را خودکار کنید، با کاربران تعامل داشته باشید و ویژگی‌های قدرتمندی به تجربه پیام‌رسانی خود اضافه کنید.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <AnimatedButton variant="premium" size="lg" className="rounded-full text-base px-8">
                مشاهده ربات‌ها <ArrowRight className="mr-2 h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" className="rounded-full text-base">
                اطلاعات بیشتر
              </AnimatedButton>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-xl">
              <div className="text-center">
                <p className="text-2xl font-bold">+۳۰</p>
                <p className="text-sm text-muted-foreground">ربات پرمیوم</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">+۱۰۰ هزار</p>
                <p className="text-sm text-muted-foreground">کاربر فعال</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">۲۴/۷</p>
                <p className="text-sm text-muted-foreground">پشتیبانی</p>
              </div>
            </div>
          </div>
          
          <div className="relative w-full max-w-lg lg:max-w-xl animate-fade-in">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 to-accent/50 opacity-75 blur"></div>
            <GlassMorphism className="relative p-6 rounded-2xl h-full">
              <div className="relative p-1 bg-white rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg"
                  alt="نمایش ربات‌های تلگرام"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="text-primary"
                        >
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">ربات تلگرام</h4>
                        <p className="text-xs text-muted-foreground mt-1">تجربه پیام‌رسانی خود را متحول کنید</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassMorphism>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
