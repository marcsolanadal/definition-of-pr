Definition of PR
================

The aim of this package is to create a post-push helper to avoid
committing mistakes in my PR's.

This helper will be called `pr-publish` or a similar name in the future.

### Needed:

- Execute actions for each question in case we haven't done it
- Add list of possible impacts and generate comment with it
- Create commit template

### Would be nice:

- Automatic rebase of all branch commits into a single commit
- Automated PR creation and assignation (that should be a separate tool)

### JIRA automation

- Using pupeteteer with headless Chrome is the more reasonable option
- I could try to use JSDOM directly but there're issues with websockets
- Nightmare.js is also a good option but I would provably have problems with installing the package

TODO: Need to check out how to install a node package without NPM. Provably directly cloning the repo
and doing a `npm install -g`.


$ jira pr --reviewers=ma,anabel,bartosz,mar,preetam --comment "asefesfs asfef afef"
$ jira state indev


Create PR steps:

- open pr page
- select branch
- select parent (by default develop)
- click button
- go to textbox
- remove all reviewers
- add reviewers
- add comment
- click "create RP" button
