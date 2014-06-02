## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Adds files to the the index so that Git knows to track their changes.  Also adds changes to the staging area.

#### branch
List, create or delete branches.  A branch is defined as a timeline of commits, changes and file additions.  This is used primarily in collaborating with other programmers.

#### checkout
Checkout a branch or paths to the working tree.

#### clone
Clone a repository into a new directory.

#### commit
Record (or commit) changes (the added files) to the repository.  It is a snapshot of a repository at a point in time giving you a point where you can restore a project to at any time.  Add an '-a' flag to commit all changes to all tracked files.  With the '-m' flag, you can specify a commit message directly from the command line.

#### fetch
Download objects and refs from another repository without integrating them immediately.  Use this in place of pull to review remote changes to a repository.

#### log
Display commit logs.

#### merge
Join two or more development histories together.  Used with fetch.

#### pull
Fetch from and integrate with another repository or a local branch.  In practice, if you want the latest version from GitHub you "pull" the changes with this command.

#### push
Update remote refs along with associated objects.  Again in practice, if you want your latest commits visible online, you "push" them to GitHub.

#### reset
Reset current HEAD to the specified state.

#### rm
Remove files from the working tree and from the index.

#### status
Show current status of the git repository, including if there are any uncommited changes and whether or not any of our changes have been put in the staging area.  Also see which branch you are currently working in.

## Release 4: Git Workflow

- Push files to a remote repository
1) The git command to push your local work to your GitHub repository is simply "git push".
2) Create a repository on GitHub.  It helps to use the same file name you will use locally for clarity.
3) From the command line navigate to your home directory using "cd ~".  Create a folder that will contain your local repository.  Use "mkdir <folder name>".
4) Navigate to your new directory and run "git init".  You should get a message saying "Initialized empty Git repository in <Directory path>."
4) You can now create and use this repository and everything in it will be watched by git.  When you are ready to add new files use "git add <filename>".  This will stage your changes for committing.
5) When you are ready to commit, use "git commit -m "<Add your commit message here>".  Git has now taken a snapshot of your repository locally that you can return to if you need to later.
6) To push these changes to your GitHub repository, you will first need to establish the link to your remote repository you created in step 2.  Use "git remote add origin https://github.com/"username"/"repository name"".  Run "git remote -v" to see the connection between the origin and the remote.  You should see two connections, one labelled "fetch" and the other "push".
7) All that's left is to push your local repository.  Use "git push".  You should see a few lines saying "Writing objects: 100%...to https://github.com...".  Congratulations!  Note:  Be aware that if there have been any changes to the remote that precede the changes to your local directory, Git is going to want you to pull those changes first.  See Release 5 below.

- Fetch changes
1) First realize the difference between pull and fetch.  Fetch imports all of the commits from a remote repository without integrating them.  They show up as remote branches.  You are able to review all changes before integrating them.  Pull immediately fetches and then integrates the changes.
2) Use "git fetch" to retrieve the changes from the remote repository.
3) Review any changes and use "git merge" to sync your local repository with the changes.

- Commit locally
1) Use "git add <filename>" to stage a file for commit.
2) Use "git commit -m "<Add your commit message here>"" to commit the change.
3) Alternately, you can commit all changes in a repository using "git commit -a -m <message>".

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

1) After creating a new repository on GitHub and locally, I attempted to push to the remote.  I got a [rejected] master -> master (fetch first) message.  This contained a very detailed hint message instructing me to use git pull first and then attempt pushing again.  
2) I made sure I was on the correct branch pulled and pushed solving the problem.  
3) According to the hint the cause was that the remote contained work that I did not have locally.  Looking at GitHub I realized that I had created the new repository with a Readme.md, this caused the conflict.

## Release 6: Reflection
Git and GitHub are pretty exciting to me.  As someone who used to work in a pretty crazy team environment with strict deadlines and a lot of e-mail, share drives and even Sharepoint collaboration, I know how quickly version control can get out of hand.  I've been wondering how a tool like git would have changed my experience on that team.  For now though, I still have a lot of questions about how to roll back to previous versions of a repository and how to resolve conflicts when collaborating though I'm not worried.  I expect there will be PLENTY of opportunities to practice this skill in the coming months.