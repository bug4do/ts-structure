module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@config': './config/config.json',
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@views': './src/views'
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }
  