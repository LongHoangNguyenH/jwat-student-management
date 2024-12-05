module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat', // add a new feature.
          'fix', // Fix bug for system and error in source code.
          'refactor', // Fix code but not fix bug or add feature or sometimes bug was fixed by refactor.
          'docs', // add/edit document.
          'chore', // Minor changes not related to the code.
          'style', // Changes that do not change the meaning of the code like css/ui changes for example.
          'perf', // Improved code in terms of processing performance.
          'vendor', // Update versions for dependencies and packages.
          'test', // Add or fix test cases in system.
          'ci', // Changes related to configuring CI.
          'build', // Changes related to system or other lib outside (affect to process build)
          'BREAKING CHANGE', // Large changes affect the source code (exp: change type data, get data, ...)
          'typo', // Typo
        ],
      ],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'scope-empty': [2, 'never'],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'header-max-length': [2, 'always', 100],
      'footer-empty': [2, 'always'],
    },
  };