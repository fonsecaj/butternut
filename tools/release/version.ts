import { releaseVersion, releaseChangelog, releasePublish } from 'nx/release';

(async () => {
  // Updates the version of packages in /dist/{packageName}
  const { workspaceVersion, projectsVersionData} = await releaseVersion({
    gitCommit: false,
    gitTag: false,
    gitPush: false,
  });

  // Generates changelogs, creates GitHub release and commits changes
  const { projectChangelogs, workspaceChangelog } = await releaseChangelog({
    version: workspaceVersion,
    versionData: projectsVersionData,
  });

  // Publish packages to npm
  const publishResult = await releasePublish({
    registry: 'https://registry.npmjs.org/',
    access: 'public',
  })

  process.exit(
    Object.values(publishResult).every((result) => result.code === 0) ? 0 : 1
  );
})();
