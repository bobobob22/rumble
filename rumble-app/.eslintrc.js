const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "react-app",
    "plugin:@typescript-eslint/recommended",

  ],
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "arrow-parens": [
      "error",
      "always"
    ],
    "max-len": [
      "error",
      120
    ],
    "arrow-body-style": [
      1,
      "as-needed"
    ],
    "class-methods-use-this": 0,
    "import/order": [
      "warn",
      {
        "groups": [["external", "builtin"], ["internal"], ["sibling", "parent", "index"]],
        "newlines-between": "always-and-inside-groups"
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/newline-after-import": [
      "error",
      {
        "count": 1
      }
    ],
    "no-mixed-operators": "off",
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/label-has-for": [ 2, {
        "components": [ "Label" ],
        "required": {
            "some": [ "nesting", "id" ]
        },
        "allowChildren": false
    }],
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "hrefLeft",
          "hrefRight"
        ],
        "aspects": [
          "invalidHref"
        ]
      }
    ],
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-use-before-define": 0,
    "prefer-template": 2,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/prop-types": 0,
    "react/sort-comp": [
      1,
      {
        "order": [
          "static-methods",
          "instance-variables",
          "lifecycle",
          "/^on.+$/",
          "everything-else",
          "render"
        ]
      }
    ],
    "require-yield": 0,
    "no-param-reassign": ["error", { "props": false }],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "global-require": 0,

    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor":  "off",
    "react/static-property-placement": ["warn", "static public field"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  overrides: [
    {
      "files": ["**/__tests__/*.test.{ts,tsx}", "**/__stories__/*.stories.tsx"],
      "rules": {
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ],
  'settings': {
    "import/resolver": {
      "node": {
        paths: [path.resolve(__dirname, 'src')],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
