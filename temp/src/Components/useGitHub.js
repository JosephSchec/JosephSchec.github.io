import { useState, useEffect } from 'react'
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();
export default function useGitHub(repository) {

    const [readMe, setReadme] = useState('');
    const owner = 'JosephSchec';
    const repo = repository
    useEffect(() => (async () => {
        const myReadMes = atob(await (await octokit.rest.repos.getReadme({ owner, repo })).data.content)
        setReadme(myReadMes.split('##')[1].replaceAll('*', ' / '))
    })(), [repo])

    return readMe
}