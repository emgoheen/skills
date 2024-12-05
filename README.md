# Skills

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ A CV application that demonstrates the latest patterns and practices in Angular and Nx ✨.

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve skills
```

To create a production bundle:

```sh
npx nx build skills
```

To see all available targets to run for a project, run:

```sh
npx nx show project skills
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Formatting code files

Currently, there are no Husky pre-commit or pre-push hooks which enforce code formatting. However, prettier is configured so that format:check can be run manually when needed:

```sh
npx nx format:check
```
