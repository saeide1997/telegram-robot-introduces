
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-5",
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className={cn(
              "text-xl font-semibold transition-colors",
              scrolled ? "text-foreground" : "text-foreground"
            )}>ربات‌های تلگرام</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#bots" className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              scrolled ? "text-foreground" : "text-foreground"
            )}>
              ربات‌های ما
            </a>
            <a href="#features" className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              scrolled ? "text-foreground" : "text-foreground"
            )}>
              ویژگی‌ها
            </a>
            <a href="#pricing" className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              scrolled ? "text-foreground" : "text-foreground"
            )}>
              قیمت‌ها
            </a>
            <a href="#contact" className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              scrolled ? "text-foreground" : "text-foreground"
            )}>
              تماس با ما
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span>سبد خرید (۰)</span>
            </Button>
            <Button className="rounded-full bg-primary">شروع کنید</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background border-t",
        isOpen ? "max-h-screen py-4" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#bots" 
            className="py-2 text-foreground font-medium"
            onClick={() => setIsOpen(false)}
          >
            ربات‌های ما
          </a>
          <a 
            href="#features" 
            className="py-2 text-foreground font-medium"
            onClick={() => setIsOpen(false)}
          >
            ویژگی‌ها
          </a>
          <a 
            href="#pricing" 
            className="py-2 text-foreground font-medium"
            onClick={() => setIsOpen(false)}
          >
            قیمت‌ها
          </a>
          <a 
            href="#contact" 
            className="py-2 text-foreground font-medium"
            onClick={() => setIsOpen(false)}
          >
            تماس با ما
          </a>
          <div className="flex flex-col space-y-3 pt-2">
            <Button variant="outline" size="sm" className="justify-start">
              <ShoppingCart className="h-4 w-4 ml-2" />
              <span>سبد خرید (۰)</span>
            </Button>
            <Button className="bg-primary">شروع کنید</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
