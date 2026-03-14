import React, { useEffect } from 'react';
import yaml from 'yaml';

const Admin = () => {
  useEffect(() => {
    // Load Decap CMS script if not already loaded
    if (!window.CMS) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Load and parse the config after the script loads
        fetch('/admin/config.yml')
          .then(response => response.text())
          .then(configText => {
            try {
              const config = yaml.parse(configText);
              if (window.CMS) {
                window.CMS.init({ config });
              }
            } catch (error) {
              console.error('Failed to parse CMS config:', error);
            }
          })
          .catch(error => {
            console.error('Failed to load CMS config:', error);
          });
      };
    }
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div id="nc-cms" />
    </div>
  );
};

export default Admin;