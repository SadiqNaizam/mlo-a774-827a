import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * The main entry page for the application, which renders the login interface.
 * This page component composes the overall layout and the central login card.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
