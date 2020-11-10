import React, { FC } from 'react';
import Avatar from 'assets/images/user-avatar.png';

import {
    AppHeader,
    SidebarHead,
    AuthorAvatar,
    AuthorName,
    AuthorProfile,
    ProfileWrapper,
} from './header.styled';

const Header: FC = () => {
    return (
        <AppHeader className="app-header">
            <SidebarHead className="sidebar-head">
                <AuthorAvatar className="author-avatar">
                    <img src={Avatar} alt="User Profile Avatar" />
                </AuthorAvatar>
                <div className="author-name-wrapper">
                    <AuthorName className="author-name">
                        Jimmy Hendrix
                    </AuthorName>
                </div>

                <ProfileWrapper className="author-profile-wrapper">
                    <AuthorProfile href="#" className="author-profile">
                        View Profile
                    </AuthorProfile>
                </ProfileWrapper>
            </SidebarHead>
        </AppHeader>
    );
};

export default Header;
