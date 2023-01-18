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
<!-- TODO -->

# After releasing IxPlayer

- Update the player on imgix.com
- Update the player on imgix.com
- Post in #sdk to let product team know
