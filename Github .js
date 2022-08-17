// Push Single file to git
// You have modified some files in git but you don’t want to push all files to git, 
// you want to push the only one file to git. Normally we commit to git, 
// all files are going to git but in your scenario push only single file git. For this, 
// you have to run specific command to push the only single file to git.

// Please run command to push only single file push to git

	
$ git commit -m "Message goes here" filename


// Example to push to single file to git

1 .$ git commit -m "Pushing Only Single file to git" config/local.js 
// Above all commands are related to push the only single file to git but sometimes we want to push only two files to git in a single commit.

// How can we push only two files to git?
// Let’s take look how to push one or two or three files to git in a single commit.

// By using below we can do that but this command mainly uses for push two or three files only.

2 .$ git commit -m "Message goes here" file1 file2

// Example to push to two files to git

3 .$ git commit -m "Pushing Only two files to git" config/local.js  config/gulp.js

// Push all modified or untracked files to git
// Below commands are used to push all modified or untracked files to git at time in single commit


1. $ git add --all
2.$ git commit -m "Pushing all files to git";
3.$ git push
