const COMMIT_TYPES = {
  feat: {
    description: 'Introducing new features',
    emoji: '✨',
    value: 'feat',
  },
  fix: {
    description: 'Fixing a bug',
    emoji: '🐛',
    value: 'fix',
  },
  refactor: {
    description: 'Refactoring code',
    emoji: '♻️',
    value: 'refactor',
  },
  remove: {
    description: 'Removing code or files',
    emoji: '🔥',
    value: 'remove',
  },
  test: {
    description: 'Creating or updating tests',
    emoji: '✅',
    value: 'test',
  },
  config: {
    description: 'Changing configuration files',
    emoji: '🔧',
    value: 'config',
  },
  packages: {
    description: 'Managing dependencies',
    emoji: '📦',
    value: 'packages',
  },
  analytics: {
    description: 'Adding analytics or tracking code',
    emoji: '📈',
    value: 'analytics',
  },
  conflicts: {
    description: 'Resolving merge conflicts',
    emoji: '❗',
    value: 'conflicts',
  },
  docs: {
    description: 'Writing docs',
    emoji: '📝',
    value: 'docs',
  },
  ci: {
    description: 'CI related changes',
    emoji: '👷',
    value: 'ci',
  },
};

export const commitizenConfig: {
  list: string[];
  maxMessageLength: number;
  minMessageLength: number;
  questions: string[];
  scopes: string[];
  types: any;
} = {
  list: Object.keys(COMMIT_TYPES),
  maxMessageLength: 100,
  minMessageLength: 0,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: COMMIT_TYPES,
};
