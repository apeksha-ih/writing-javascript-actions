const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    const octokit = new github.getOctokit(token);
    const context = github.context.repo;
    const newIssue = await octokit.rest.issues.create({
      repo: context.repo,
      owner: context.owner,
      title: issueTitle,
      body: jokeBody
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();