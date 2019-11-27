const COMMIT_TYPES = {
  feat: {
    description: 'A new feature',
    emoji: '🎸',
    value: 'feat',
  },
  fix: {
    description: 'A bug fix',
    emoji: '🐛',
    value: 'fix',
  },
  refactor: {
    description: 'A code change that neither fixes a bug or adds a feature',
    emoji: '♻️',
    value: 'refactor',
  },
  test: {
    description: 'Adding application tests',
    emoji: '💊',
    value: 'test',
  },
  format: {
    description: 'Code formatting',
    emoji: '💅',
    value: 'format',
  },
  conflicts: {
    description: 'Resolving conflicts',
    emoji: '⚠️',
    value: 'conflicts',
  },
  remove: {
    description: 'Removing unnecessary files',
    emoji: '❌',
    value: 'remove',
  },
  docs: {
    description: 'Documentation only changes',
    emoji: '📚',
    value: 'docs',
  },
  config: {
    description: "Changing project's configuration",
    emoji: '🔧',
    value: 'config',
  },
  security: {
    description: 'A security fix',
    emoji: '🔒',
    value: 'security',
  },
  ci: {
    description: 'CI related changes',
    emoji: '🎡',
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
