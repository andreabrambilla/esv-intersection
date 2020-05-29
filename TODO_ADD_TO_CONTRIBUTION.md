Version control branching
-------------------------

There are 2 active branches on this repo, plus branches for each major version (see below):
- The `master` branch is the main branch of the repository, the one that is used for active development
  - Every time this branch is modified (typically when merging a PR), a Storybook is automatically deployed (on _Radix_, `master` environment). It can be found [here](TODO: add link)
  - Every time this branch is modified, an updated package is deployed to [npm](TODO: add link)
- The `latest` branch always points at the the most recent version released
  - The branch has to be updated manually, whenever a new release is created
  - Every time this branch is updated, the Storybook is automatically deployed (on _Radix_, `latest` environment). It can be found [here](TODO: add link)

This repository relies on [Semantic Versioning](https://semver.org/).
 
In order to create a release for a new major version, the first step is to create a new branch named `version_X` in the repo (where `X` has to be replaced with an incremental number). Then, a new _Release_ is created from that branch here on Github, named `vX.0.0`. Remember to update the `latest` branch to the new release.

Development continues on the `master` branch. In order to create a new minor version, the desired changes have to be moved to the `version_X` branch (either by merging, rebasing, cherry-picking, …). After proper testing, a new _Release_ can be created here on Github, named `vX.Y.0`. Remember to update the `latest` branch to the new release.

If a hotfix has to be applied to a released version, the fix has to be added on top of `version_X`. Then a new _Release_ can be created here on Github, named `vX.Y.Z`. Remember to update the `latest` branch to the new release. If the fix is relevant also for `master`, make sure the fix is ported on top of `master` as well.

When you want to contribute to the repo, always **fork the repo** or **make a new branch** for your work, no matter how small. This makes it easy for others to take just that one set of changes from your repository, in case you have multiple unrelated changes floating around.

    * A corollary: **don't submit unrelated changes in the same branch/pull request**!

* **Base your new branch off of the appropriate branch** on the main repository:

    * **Bug fixes** should be based either on `master` or on `latest` branches. Contribution to an older `version_X` branch (i.e., any version branch that does not correspond with `latest`) will be **rejected** (there can be exceptions, but that would require very compelling arguments). 

        * Bug fixes requiring large changes to the code or which have a chance
          of being otherwise disruptive, may need to based on top of **master**.
          This is a judgement call -- ask the devs!

    * **New features** should branch off of the `master` branch

        * Note that depending on how long it takes for the dev team to merge
          your patch, the copy of ``master`` you worked off of may get out of
          date! If you find yourself 'bumping' a pull request that's been
          sidelined for a while, **make sure you rebase or merge to latest
          master** to ensure a speedier resolution.

