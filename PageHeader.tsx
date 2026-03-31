import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const PageHeader = ({ subtitle, title, description, backgroundImage }: PageHeaderProps) => (
  <section className="relative pt-20 overflow-hidden">
    {backgroundImage && (
      <>
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay" />
      </>
    )}
    <div
      className={`relative z-10 section-padding text-center ${
        backgroundImage ? "py-32 md:py-44" : "py-16 md:py-24 bg-muted/50"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 max-w-3xl mx-auto"
      >
        <p className={`text-xs tracking-[0.3em] uppercase font-body ${backgroundImage ? "text-royal-light" : "text-primary"}`}>
          {subtitle}
        </p>
        <h1 className={`font-display text-4xl md:text-6xl font-medium ${backgroundImage ? "text-white" : ""}`}>
          {title}
        </h1>
        <div className="line-decoration mx-auto" />
        {description && (
          <p className={`text-sm md:text-base font-body leading-relaxed max-w-xl mx-auto ${backgroundImage ? "text-white/70" : "text-muted-foreground"}`}>
            {description}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
