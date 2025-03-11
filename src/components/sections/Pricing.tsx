
import React, { useState } from 'react';
import AnimatedButton from "../ui/AnimatedButton";
import { Check, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingPlanProps {
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

const PricingPlan = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  className
}: PricingPlanProps) => {
  return (
    <div className={cn(
      "rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-8px]",
      isPopular 
        ? "bg-primary text-white shadow-premium border border-primary/30" 
        : "bg-card border border-border/40 shadow-card hover:shadow-premium",
      className
    )}>
      {isPopular && (
        <div className="inline-block bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
          محبوب‌ترین
        </div>
      )}
      
      <h3 className={cn(
        "text-xl font-semibold mb-3",
        isPopular ? "text-white" : "text-foreground"
      )}>
        {title}
      </h3>
      
      <div className="flex items-baseline mb-3">
        <span className={cn(
          "text-3xl font-bold",
          isPopular ? "text-white" : "text-foreground"
        )}>
          {price} تومان
        </span>
        <span className={cn(
          "text-sm mr-1",
          isPopular ? "text-white/80" : "text-muted-foreground"
        )}>
          /{period}
        </span>
      </div>
      
      <p className={cn(
        "text-sm mb-6",
        isPopular ? "text-white/80" : "text-muted-foreground"
      )}>
        {description}
      </p>
      
      <ul className="space-y-3 mb-8 text-right">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start justify-end text-sm">
            <span className={isPopular ? "text-white/90" : ""}>
              {feature}
            </span>
            <Check className={cn(
              "h-4 w-4 ml-2 mt-0.5",
              isPopular ? "text-white" : "text-primary"
            )} />
          </li>
        ))}
      </ul>
      
      <AnimatedButton
        variant={isPopular ? "default" : "outline"}
        className={cn(
          "w-full justify-center",
          isPopular ? "bg-white text-primary hover:bg-white/90" : ""
        )}
      >
        شروع کنید
      </AnimatedButton>
    </div>
  );
};

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="section-heading">
            قیمت‌گذاری ساده و شفاف
          </h2>
          <p className="section-subheading">
            طرحی را انتخاب کنید که برای نیازهای شما بهترین باشد. همه طرح‌ها شامل دسترسی به تمام ویژگی‌ها هستند.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-8 md:mb-12">
            <div className="bg-secondary rounded-full p-1 inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billing === 'monthly'
                    ? 'bg-white shadow-sm text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBilling('monthly')}
              >
                ماهانه
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billing === 'annually'
                    ? 'bg-white shadow-sm text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBilling('annually')}
              >
                سالانه <span className="text-xs opacity-80">۲۰٪ تخفیف</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          <PricingPlan
            title="پایه"
            price={billing === 'monthly' ? 200000 : 160000}
            period={billing === 'monthly' ? 'ماه' : 'ماه، پرداخت سالانه'}
            description="مناسب برای کانال‌های کوچک و استفاده شخصی."
            features={[
              "دسترسی به ۳ ربات پایه",
              "تا ۱,۰۰۰ پیام در روز",
              "تحلیل‌های پایه",
              "پشتیبانی ایمیل",
              "به‌روزرسانی‌های منظم"
            ]}
          />
          
          <PricingPlan
            title="حرفه‌ای"
            price={billing === 'monthly' ? 500000 : 400000}
            period={billing === 'monthly' ? 'ماه' : 'ماه، پرداخت سالانه'}
            description="ایده‌آل برای جوامع در حال رشد و کانال‌های تجاری."
            features={[
              "دسترسی به تمام ۱۰+ ربات",
              "پیام‌های نامحدود",
              "تحلیل‌های پیشرفته",
              "پشتیبانی اولویت‌دار",
              "دستورات سفارشی",
              "گزینه برچسب سفید"
            ]}
            isPopular
          />
          
          <PricingPlan
            title="سازمانی"
            price={billing === 'monthly' ? 1000000 : 800000}
            period={billing === 'monthly' ? 'ماه' : 'ماه، پرداخت سالانه'}
            description="برای جوامع بزرگ و نیازهای حرفه‌ای."
            features={[
              "دسترسی به تمام ربات‌ها شامل بتا",
              "همه چیز نامحدود",
              "مدیر حساب اختصاصی",
              "پشتیبانی اولویت‌دار ۲۴/۷",
              "توسعه سفارشی",
              "دسترسی API",
              "ادغام‌های سفارشی"
            ]}
          />
        </div>
        
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto bg-secondary/50 rounded-2xl p-6 md:p-8 flex items-center justify-between flex-col md:flex-row gap-6">
          <div className="flex items-start md:items-center gap-4">
            <Info className="h-5 w-5 text-primary mt-1 md:mt-0" />
            <p className="text-sm text-muted-foreground">
              همه طرح‌ها با ۱۴ روز تضمین بازگشت وجه همراه هستند. بدون هیچ سؤالی.
            </p>
          </div>
          <AnimatedButton variant="outline" size="sm">
            تماس با فروش
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
