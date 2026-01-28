import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import type { PersonalInfo, ContactLink, Skill } from '../../types';

interface ProfileHeaderProps {
  profile: PersonalInfo;
  contacts: ContactLink[];
  skills?: Skill[];
}

const getContactIcon = (type: ContactLink['type']) => {
  const icons: Record<ContactLink['type'], string> = {
    email: 'mdi:email',
    github: 'mdi:github',
    linkedin: 'mdi:linkedin',
    twitter: 'mdi:twitter',
    website: 'mdi:web',
    wechat: 'mdi:wechat',
    blog: 'mdi:article',
    csdn: 'mdi:web'
  };
  return icons[type];
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, contacts, skills }) => {
  const visibleContacts = contacts
    .filter(contact => contact.visible)
    .sort((a, b) => a.order - b.order);

  const handleEmailClick = (e: React.MouseEvent, url: string) => {
    if (url.startsWith('mailto:')) {
      navigator.clipboard.writeText(url.replace('mailto:', ''));
      e.preventDefault();
      alert('邮箱地址已复制到剪贴板！');
    }
  };

  return (
    <section className="relative min-h-[60vh] py-20 px-4 md:px-8 lg:px-12 diagonal-stripes">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:w-2/5 flex flex-col justify-center p-8 brutal-card"
          >
            <div className="relative mb-8">
              <div className="border-4 border-border p-2 inline-block bg-white">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full max-w-[300px] border-4 border-border"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary border-4 border-border flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Hi!</span>
              </div>
            </div>

            {profile.title && (
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {profile.title}
                </h2>
              </div>
            )}

            {profile.location && (
              <div className="flex items-center gap-2 mb-6 text-text">
                <Icon icon="mdi:map-marker" className="w-6 h-6" />
                <span className="text-lg font-medium">{profile.location}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {visibleContacts.map((contact) => (
                <a
                  key={contact.type}
                  href={contact.url}
                  target={contact.type === 'email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={(e) => contact.type === 'email' ? handleEmailClick(e, contact.url) : undefined}
                  className="group p-4 bg-surface border-3 border-border shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all duration-200"
                  title={contact.label}
                >
                  <Icon
                    icon={getContactIcon(contact.type)}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:w-3/5 flex flex-col justify-center p-8 lg:p-16"
          >
            <h1 className="brutal-title text-6xl md:text-7xl lg:text-8xl mb-8 text-text leading-none">
              {profile.name}
            </h1>

            {profile.bio && (
              <div className="mb-10 brutal-card p-8">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                  关于我
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed text-text">
                  {profile.bio}
                </p>
              </div>
            )}

            {skills && skills.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
                  技能栈
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-5 py-2 bg-primary text-white text-lg font-bold border-3 border-border shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {profile.languages && profile.languages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-6">
                  语言
                </h3>
                <div className="flex flex-wrap gap-3">
                  {profile.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-5 py-2 bg-cta text-white text-lg font-bold border-3 border-border shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all duration-200"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
