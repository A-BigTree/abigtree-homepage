import React from 'react';
import type { ContactLink } from '../../types';
import './ContactSection.css';

interface ContactSectionProps {
  contacts: ContactLink[];
  layout?: 'grid' | 'list' | 'inline';
}

const ContactSection: React.FC<ContactSectionProps> = ({
  contacts,
  layout = 'grid'
}) => {
  const visibleContacts = contacts.filter(contact => contact.visible);
  const sortedContacts = [...visibleContacts].sort((a, b) => a.order - b.order);

  const handleEmailClick = (e: React.MouseEvent, url: string) => {
    if (url.startsWith('mailto:')) {
      navigator.clipboard.writeText(url.replace('mailto:', ''));
      e.preventDefault();
      alert('邮箱地址已复制到剪贴板！');
    }
  };

  return (
    <section className={`contact-section layout-${layout}`}>
      <h2 className="section-title">联系方式</h2>
      <div className={`contact-container contact-${layout}`}>
        {sortedContacts.map((contact) => (
          <a
            key={contact.type}
            href={contact.url}
            target={contact.type === 'email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="contact-link"
            onClick={(e) => contact.type === 'email' ? handleEmailClick(e, contact.url) : undefined}
            aria-label={`联系我通过 ${contact.label}`}
          >
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-info">
              <span className="contact-label">{contact.label}</span>
              <span className="contact-url">
                {contact.type === 'email' 
                  ? contact.url.replace('mailto:', '')
                  : contact.url.replace(/^(https?:\/\/)?(www\.)?/, '')
                }
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
