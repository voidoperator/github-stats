import axios from 'axios';
import getRandomToken from './getRandomToken';

export interface User {
  name: string;
  login: string;
  avatarUrl: string;
  email: string;
  repositories: Repositories;
  contributionsCollection: ContributionsCollection;
}

export interface Repositories {
  totalCount: number;
}

export interface Followers {
  totalCount: number;
}

export interface Following {
  totalCount: number;
}

export interface ContributionsCollection {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
  total_contributions: number;
  totalPullRequestContributions: number;
  totalRepositoryContributions: number;
  totalRepositoriesWithContributedPullRequests: number;
  totalRepositoriesWithContributedCommits: number;
}

export interface OpenedIssues {
  totalCount: number;
}

export interface ClosedIssues {
  totalCount: number;
}

export default async function basicFetch(username: string): Promise<User> {
  let data = await axios({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: {
      Authorization: getRandomToken(true),
    },
    data: {
      query: `query userInfo($username: String!) {
        user(login: $username) {
          name
          login
          avatarUrl
          repositories {
            totalCount
          }
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
            totalPullRequestContributions
            totalRepositoryContributions
            totalRepositoriesWithContributedPullRequests
            totalRepositoriesWithContributedCommits
          }
        }
      }`,
      variables: {
        username,
      },
    },
  });

  if (data.data.errors?.length > 0)
    throw new Error(data.data.errors[0].message);

  return data.data.data.user;
}
