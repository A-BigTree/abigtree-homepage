import React from 'react';
import type { PersonalInfo } from '../../types';
import './ProfileHeader.css';

interface ProfileHeaderProps {
  profile: PersonalInfo;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <header className="profile-header">
      <div className="profile-avatar">
        <img 
          src={profile.avatar} 
          alt={profile.name}
          loading="lazy"
        />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{profile.name}</h1>
        {profile.title && (
          <p className="profile-title">{profile.title}</p>
        )}
        {profile.location && (
          <p className="profile-location">
            <span className="icon">📍</span> {profile.location}
          </p>
        )}
        {profile.bio && (
          <p className="profile-bio">{profile.bio}</p>
        )}
        {profile.languages && profile.languages.length > 0 && (
          <div className="profile-languages">
            {profile.languages.map((language, index) => (
              <span key={index} className="language-tag">
                {language}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
