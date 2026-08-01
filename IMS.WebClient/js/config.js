window.IMS_API = {
  BASE_URL: (() => {
    const fromMeta = document.querySelector('meta[name="ims-api-base"]')?.getAttribute('content');
    const fromQuery = new URLSearchParams(window.location.search).get('api');
    const fromEnv = window.__IMS_API_BASE__;
    return fromMeta || fromQuery || fromEnv || '/api';
  })(),
  TOKEN_KEY: 'ims_token',
  EMAIL_KEY: 'ims_email',
  ROLE_KEY: 'ims_role'
};
