import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Globe, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Users,
      title: t('about.valueCommunity'),
      description: t('about.valueCommunityDesc'),
    },
    {
      icon: Sparkles,
      title: t('about.valueInnovation'),
      description: t('about.valueInnovationDesc'),
    },
    {
      icon: Globe,
      title: t('about.valueInclusive'),
      description: t('about.valueInclusiveDesc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-gray-900">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1920&q=80')`
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="font-space text-xs font-semibold tracking-[0.15em] uppercase text-orange-500">
              Ember Sports
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="font-bold text-white">{t('about.heroTitle')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 font-normal max-w-2xl mx-auto"
          >
            {t('about.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
          >
            {t('about.storyTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
          >
            {t('about.storyP1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            {t('about.storyP2')}
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 block">{t('about.valuesLabel')}</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            >
              {t('about.valuesTitle')}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 border-t-2 border-t-orange-500 card-shadow hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-base text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shanghai Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
          >
            {t('about.shanghaiTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            {t('about.shanghaiDesc')}
          </motion.p>
          <p className="text-sm text-gray-500 mt-4">
            📍 {t('about.shanghaiAddress')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
