module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    /**
    * * Lint Docs
    * ~ eslint: https://eslint.org/docs/rules/
    * ~ react-eslint: https://github.com/jsx-eslint/eslint-plugin-react
    *
    */
    // # OFF
    'arrow-parens': 'off',
    'prefer-const': 'off',
    'no-undef': 'off', // Compatibility
    'no-fallthrough': 'off',
    'no-extra-boolean-cast': 'off',
    'no-useless-catch': 'off',
    'no-irregular-whitespace': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    'no-unused-vars': ['off', {
      'vars': 'local',
      'args': 'none',
      'ignoreRestSiblings': true
    }],
    'no-async-promise-executor': 'off',

    // # Default
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'ObjectExpression': 1,
      'MemberExpression': 1,
      'ImportDeclaration': 1,
      'VariableDeclarator': 1,
      // 'ignoredNodes': [
      //   'CallExpression > FunctionExpression.callee > BlockStatement.body'
      // ],
      'ignoreComments': true
    }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'no-tabs': ['error', {
      'allowIndentationTabs': true
    }],
    'no-empty': ['error', {
      'allowEmptyCatch': true
    }],
    'no-use-before-define': ['error', {
      'functions': false,
      'variables': false
    }],
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true,
      'ignoreComments': true
    }],
    'no-spaced-func': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-unexpected-multiline': 'error',
    'no-control-regex': 'off',
    'space-in-parens': ['error', 'never', {
      'exceptions': []
    }],
    'space-infix-ops': ['error', {
      'int32Hint': false
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'ignore',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'object-property-newline': ['error', {
      'allowMultiplePropertiesPerLine': true
    }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-spacing': [2, {
      'when': 'never',
      'allowMultiline': false
    }],

    // # Build
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
