module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: 'commonjs',
      },
    ],
    '@babel/react',
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-class-properties',
  ],
};
