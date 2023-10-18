# Local Development

To run this repo locally, run `yarn` to install and link dependencies.

For dev testing, run `yarn dev`. By default, this only runs the packages.
To run examples, you'll want to run run a `yarn dev` in the example folder of your choice or modify the `dev` script in the [top level package.json](./package.json).
Examples:

- To run all examples
  - include `--scope 'demo-*'` in the dev script
  - Run `npx lerna run dev --scope 'demo-*'` locally after running `yarn dev`
- To only run `vanilla-ts-esm` demo
  - include `--scope '*-esm'` in the dev script
  - Run `npx lerna run dev --scope '*-esm'` locally after running `yarn dev`

# Media Chrome Canaries

It's helpful to point at Media Chrome canaries for developing PRs and having all the live examples work; however, we should not merge any PRs that point at a Media Chrome Canary release.

# Releasing

> In future, we'll use bash script to automate this process.

Each package needs to be individually released. The following steps should be followed for each package.

1. Update the changelog to include the new version.
2. Stage the changes and commit them.
3. Run `yarn build` in the either the top level or the package directory.
4. Tag the commit with the new version, `git tag 1.0.0`
5. Push the changes and tags, `git push && git push origin 1.0.0`
6. Run `npm pack` to generate a tarball of the package, check log output to see that all dist files are included.
7. Add the tarball to the release on GitHub.
8. Run `npm publish` to publish the package to npm.
9. Update the version in any dependent packages, e.g. `@imgix/ix-player-react` depends on `@imgix/ix-player`.
10. Repeat steps 1-8 for each package that needs to be released with the new version.

# After releasing IxPlayer

- Update the player on imgix.com
- Update the player on blog
- Post in #sdk to let product team know
