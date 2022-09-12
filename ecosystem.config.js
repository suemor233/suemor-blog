module.exports = {
  apps: [
    {
      name: 'suemor-blog',
      script: 'npx next start -p 3344',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '180M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
