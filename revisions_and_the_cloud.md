# Reading Notes: Revisions and the Cloud

##What is Git?
* git is a version control system, takes napshot of code at any given time.
* Allows multiple devs to work on same code.
* History to changes made, also compare copies in history.
* All kept in same repo

## Centralized Version Control (CVCS):
* Allows mulitple people to work on same project remotely. Stored on one server.

## Distributed Version Control (DVCS):
* Backup for CVCS in casse server goes down (crash or hacker), people can still find the code backed up.
* Not all data is lost in event of crash.
* Git is a DVCS

## A(dd) C(ommit) P(ush)
* Commit a file: $ git commit -m “made change x,y,z”
* Commit all changes: $ git commit -a
* Push changes $ git push origin master

* To make changes but not commit use, hide changes: git stash 
* When ready for them to show again use: git stash apply


### Random Notes:
* git config --list
* To start tracking these repository files, perform an initial commit by typing the following:
* $ git add *.c
* $ git add LICENSE
* $ git commit -m “any message here”
* Clonning from repo URL $ git clone https://github.com/test
* Cloning from command format $ git clone https://github.com/test mydirectory
* By running the git remote command, you can view the short names, such as “origin,” of all specified remote handles.
* By using git remote -v, you can view all the remote URLs next to their corresponding short names.
