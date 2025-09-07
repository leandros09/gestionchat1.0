// ecosystem.config.js - VERSÃO FINAL COM CAMINHOS ABSOLUTOS
module.exports = {
  apps: [
    {
      // --- BACKEND ---
      name: `${process.env.INSTANCE_NAME || 'default'}-backend`,
      // CORREÇÃO: Usando caminho absoluto para o script
      script: '/home/deploy/empresa01/backend/dist/server.js',
      // CORREÇÃO: Usando caminho absoluto para o diretório de trabalho
      cwd: '/home/deploy/empresa01/backend',
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      // --- FRONTEND ---
      name: `${process.env.INSTANCE_NAME || 'default'}-frontend`,
      // CORREÇÃO: Usando caminho absoluto para o script
      script: '/home/deploy/empresa01/frontend/server.js',
      // CORREÇÃO: Usando caminho absoluto para o diretório de trabalho
      cwd: '/home/deploy/empresa01/frontend',
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};