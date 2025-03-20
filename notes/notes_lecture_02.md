


## 1.Markdown language examples


```bash
    # add some file:
    git add .\notes\links.md

    git checkout some_branch_name

    git checkout some_commit_id

    # delete not merged branch
    git branch -D branch-name
    git branch -D branch_demo
```

Merge branches:
```bash
    git checkout branch_name_A
    git merge branch_name_B
```

Merge conflict:
```bash
    git checkout branch_name_A
    git merge branch_name_B
    # fix files where require keep relevant code.
    git commit -m "Resolve merge conflict ..."
```




