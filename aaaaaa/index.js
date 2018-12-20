const GitHub = require('github-api');
const githubToken = '4090a11b57ddb7cf99cca3ea36bc708a8df4903c';

const gh = new GitHub({
    // username: '809225074@qq.com',
    token: githubToken
});

// const treeSHA = 'a72885adfaa9bc0869d33dd2a4d7cc3ec625ee4b', commitSHA = '8d717cce75d7d5d688932fb0ac1eaac848a920d5';
// console.log(gh.getUser());
// gh.getUser().createRepo({
//     name: 'github-api-create-repo-test',
//     description: 'test github-api'
// }).then(result => {
//     console.log(result.data)
// }).catch(e => {
//     console.error(e);
// })

// gh.getRateLimit().getRateLimit().then(res => {
//     console.log(res.data);
// }).catch(e => {
//     console.error(e);
// })

// const repo = gh.getRepo('PTGuan', 'test_git_repo');

// console.log(repo);

// 目前通过 listCommits 获取到 commit 和 tree 的 SHA

// ok
// repo.listCommits().then(result => {
//     console.log(result.data[0].sha);
//     console.log(result.data[0].commit);
//     console.log(result.data[0].committer);
// }).catch(e => {
//     console.error(e);
// })

// ok
// repo.getCommit(commitSHA).then(result => {
//     console.log(result.data);
// }).catch(e => {
//     console.error(e);
// })

// ok
// repo.getTree(treeSHA).then(result => {
//     console.log(result.data);
// }).catch(e => {
//     console.error(e);
// })

// 404
// repo.commit(commitSHA, treeSHA, 'code commit message').then(result => {
//     console.log(result.data);
// }).catch(e => {
//     console.error(e);
// });

// ok
// repo.listProjects().then(result => {
//     console.log(result);
// }).catch(e => {
//     console.error(e);
// });

// writeFile ok
// repo.writeFile('develop', 'test2.js', `console.log('github api, hello world');`, 'writeFile by github-api', {
//     author: {
//         name: 'PTGuan',
//         email: '809225074@qq.com'
//     },
//     committer: {
//         name: 'PTGuan',
//         email: '809225074@qq.com'
//     }
// }).then(result => {
//     console.log(result.data);
// }).catch(e => {
//     console.error(e);
// })


// download file ok
// repo.getContents('develop', 'test2.js', false).then(result => {
//     console.log(result.data);
// }).catch(e => {
//     console.error(e);
// })



// repo.createBlob('test createBlob').then(res => {
//     console.log(res)
// }).catch(e => {
//     console.error(e);
// })


// repo.getBranch('develop').then(result => {
//     console.log(result.data);
// }).catch(e => {
//     console.error(e);
// });


// repo.createBranch('develop', 'upload').then(result => {
//     console.log(result.data);
// }).catch(e => {
//     console.error(e);
// })


const Request = require('request');

// 上传文件
function uploadFile(owner, repoName, fileName, gitToken, message, content, branch) {
    const option = {
        url: `https://api.github.com/repos/${owner}/${repoName}/contents/${fileName}`,
        method: 'PUT',
        headers: {
            'Authorization': `token ${gitToken}`,
            'User-Agent': `${owner}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        json: {
            message: message,
            content: content,
            branch: branch
        }
    };

    Request(option, (err, response, body) => {
        if (err) throw err;
        console.log(body);
    });
}


uploadFile('PTGuan', 'github-api-create-repo-test', 'aaa/index.js', githubToken, 'commit message', 'dGhpcyBpcyBhIGV4YW1wbGU=', 'master');


// 获取分支
// Request({
//     url: `https://api.github.com/repos/PTGuan/test_git_repo/contents/?ref=develop`,
//     method: 'GET',
//     headers: {
//         'Authorization': `token ${githubToken}`,
//         'User-Agent': `PTGuan`,
//         'Accept': 'application/vnd.github.v3+json',
//         'Content-Type': 'application/json'
//     },
// }, (err, response, body) => {
//     if (err) throw err;
//     console.log(body);
// })

// Request({
//     url: 'https://api.github.com/users/809225074@qq.com',
//     method: 'GET',
//     headers: {
//         'User-Agent': 'sth',
//         'Accept': 'application/vnd.github.v3+json',
//     }
// })