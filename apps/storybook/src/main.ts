import type { StorybookConfig } from '@storybook/angular';
import { workspaceRoot } from '@nx/devkit';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

function extractVersionFromChangelog() {
  try {
    const content = readFileSync(join(workspaceRoot, 'CHANGELOG.md'), 'utf8');

    const versionMatch = content.match(/#?##? [v]?(\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?)/);

    if (versionMatch && versionMatch[1]) {
      return `@${versionMatch[1]}`;
    }

    return '';
  } catch (error) {
    return '';
  }
}

const config: StorybookConfig = {
  stories: [
    '../../../packages/**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  env: {
    VERSION: extractVersionFromChangelog(),
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
