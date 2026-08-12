import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import posthog from 'posthog-js';
import { PostHogProvider } from '@posthog/react';

posthog.init('phc_BOc0SrrBsUTp69xKWe4hGoM3KIEfU2htMh7mK9PXa3', {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2026-01-30',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
