@Library("valaikanini-cicd@v1.0.0") _

applicationPipeline(
    gitUrl: "git@github.com:ajoel24/my-portfolio.git",
    imageRepository: "ajoel24/my-portfolio",
    snykProjectName: "my-portfolio",
    projectType: "svelte-kit",
    ftpDeployment: [
        folder: 'build-static',
        clearRemote: true
    ]
)
