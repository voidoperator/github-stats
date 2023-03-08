import millify from 'millify';
import basicFetch from './basicFetch';
import repositoryFetch from './repositoryFetch';
const base64ImageFetcher = require('node-base64-image');

export type GetData = {
  username: string;
  name: string;
  pic: string | Buffer;
  public_repos: string | number;
  total_contributions: string | number;
  total_pull_requests: string | number;
  total_repos_contributed: string | number;
  total_repos_collaborations: string | number;
};

async function getData(username: string): Promise<GetData> {
  let user = await basicFetch(username);
  let totalRepoPages = Math.ceil(user.repositories.totalCount / 100);
  let userRepositories = await repositoryFetch(username, totalRepoPages);

  if (!user.name) user.name = user.login;

  let output = {
    username: user.login,
    name: user.name,
    pic: await base64ImageFetcher.encode(`${user.avatarUrl}&s=200`, {
      string: true,
    }),
    public_repos: millify(
      user.repositories.totalCount + userRepositories.forks
    ),
    total_contributions: millify(
      user.contributionsCollection.totalCommitContributions +
        user.contributionsCollection.restrictedContributionsCount +
        user.contributionsCollection.totalPullRequestContributions +
        user.contributionsCollection.totalRepositoryContributions +
        user.contributionsCollection
          .totalRepositoriesWithContributedPullRequests +
        user.contributionsCollection.totalRepositoriesWithContributedCommits
    ),
    total_pull_requests:
      user.contributionsCollection.totalPullRequestContributions,
    total_repos_contributed:
      user.contributionsCollection.totalRepositoriesWithContributedPullRequests,
    total_repos_collaborations:
      user.contributionsCollection.totalRepositoriesWithContributedCommits,
  };
  return output;
}

export default getData;
