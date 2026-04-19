import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: MapPin,
      title: t('features.courts.title'),
      description: t('features.courts.desc'),
    },
    {
      icon: Clock,
      title: t('features.flexible.title'),
      description: t('features.flexible.desc'),
    },
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-900">
        {/* Orange gradient overlay */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-orange-500/[0.08] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="font-space text-xs font-semibold tracking-[0.15em] uppercase text-orange-500">
                  {t('hero.badge', "Shanghai's Premier Pickleball Venue")}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                <span className="font-bold text-white">{t('hero.titleLine1')}</span>
                <br />
                <span className="font-bold text-orange-500">{t('hero.titleLine2')}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-400 mb-8 font-normal"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-all hover:scale-105"
                >
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 card-shadow hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
