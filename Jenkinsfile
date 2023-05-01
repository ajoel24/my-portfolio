@Library("valaikanini-cicd@feature/load-build-props") _

applicationPipeline(
    gitUrl: "git@github.com:ajoel24/my-portfolio.git",
    imageRepository: "ajoel24/my-portfolio",
    projectType: "svelte-kit",
    ftpDeployment: [
        folder: 'build-static',
        clearRemote: true
    ]
)
