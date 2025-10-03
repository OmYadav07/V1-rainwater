import { ArrowRight, Droplets, Sprout, BarChart3, IndianRupee, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { scrollToSection, type CalculationType } from "@/lib/navigation";

interface HeroSectionProps {
  onSelectPath: (path: CalculationType) => void;
}

export default function HeroSection({ onSelectPath }: HeroSectionProps) {
  const handlePathSelect = (path: CalculationType) => {
    console.log(`Selected path: ${path}`);
    onSelectPath(path);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Enhanced Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-chart-1/10 to-chart-2/15 -z-10" />
      <div className="absolute inset-0 opacity-20 bg-pattern -z-10" />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Enhanced Hero Content */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent leading-tight">
            Smart Rainwater Harvesting for Every Indian Home
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground mb-12 leading-relaxed font-medium">
            Government-compliant, data-driven, and simple to use.
          </p>
          
          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={() => scrollToSection('calculator')}
            >
              Start Calculator
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Path Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate cursor-pointer group transition-all duration-300" onClick={() => handlePathSelect('rainwater')} data-testid="card-rainwater">
            <div className="text-center">
              <div className="w-16 h-16 bg-chart-1 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Rainwater Harvesting</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Calculate rainwater collection potential, storage tank sizing, and cost analysis for your rooftop area.
              </p>
              <Button className="w-full group-hover:bg-chart-1" size="lg" data-testid="button-rainwater">
                Start Rainwater Analysis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover-elevate cursor-pointer group transition-all duration-300" onClick={() => handlePathSelect('recharge')} data-testid="card-recharge">
            <div className="text-center">
              <div className="w-16 h-16 bg-chart-2 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Artificial Recharge</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Design groundwater recharge systems with pit dimensions, infiltration rates, and feasibility analysis.
              </p>
              <Button className="w-full group-hover:bg-chart-2" size="lg" data-testid="button-recharge">
                Start Recharge Analysis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Product Info Section */}
        <div id="calculator" className="mt-16 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Solutions for Water Conservation</h2>
            <p className="text-lg text-muted-foreground">Comprehensive tools for modern rainwater management</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 text-center hover-elevate transition-all duration-300 group">
              <div className="w-16 h-16 bg-chart-1 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">📊 Rainwater Potential</h3>
              <p className="text-muted-foreground">Know how much rainwater you can capture annually with precise calculations based on your location and roof specifications.</p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate transition-all duration-300 group">
              <div className="w-16 h-16 bg-chart-2 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">💧 Artificial Recharge</h3>
              <p className="text-muted-foreground">Design recharge pits and evaluate feasibility with scientific methodology and soil-specific infiltration rates.</p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <IndianRupee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">💰 Cost & Savings</h3>
              <p className="text-muted-foreground">Get budget options with detailed ROI analysis and payback period calculations for informed decision making.</p>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Calculations based on CGWB guidelines and Indian rainfall data</p>
          <div className="flex justify-center items-center gap-8 text-xs text-muted-foreground">
            <span>✓ Government compliant</span>
            <span>✓ Scientific methodology</span>
            <span>✓ Location-specific data</span>
          </div>
        </div>
      </div>
    </section>
  );
}