import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  const { repoUrl } = req.query;

  if (!repoUrl) {
    return res.status(400).json({ error: "Repo URL is required" });
  }

  const githubToken = process.env.GITHUB_TOKEN;

  try {
    const response = await fetch(`https://api.github.com/repos/${repoUrl}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from GitHub");
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
