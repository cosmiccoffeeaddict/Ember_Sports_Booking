import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, CreditCard, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t('features.community.title'),
      description: t('features.community.desc'),
      tags: t('features.community.tags', { returnObjects: true }) as string[],
    },
    {
      icon: CreditCard,
      title: t('features.payment.title'),
      description: t('features.payment.desc'),
      tags: t('features.payment.tags', { returnObjects: true }) as string[],
    },
    {
      icon: Wifi,
      title: t('features.facilities.title'),
      description: t('features.facilities.desc'),
      tags: t('features.facilities.tags', { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-900">
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

      <section className="py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 block">{t('features.label')}</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              {t('features.title')}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 hover:translate-y-[-2px] transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-base text-gray-400 mb-4 flex-grow">{feature.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {feature.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
