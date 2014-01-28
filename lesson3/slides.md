![General Assembly](../assets/images/ga.png)
# FEWD LESSON 3

## FEWD - Advanced CSS

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* Review
  * Git made easy with Sublime  
  * Foundational HTML + CSS
  * Absolute and Relative links
* Box Model
* HTML Template
* Classes & Ids
* Nested Selectors
* Homework



## Getting help in GitHub

[Example](https://github.com/cindyyen/FEWD_HK_3/commit/6d12cdf9a541f250deadf8684e4b1d9dacb15b25)

* Use @references to call `tijptjik` or `ykyuen` to the scene!



## GIT made EASY with SUBLIME



### Getting latest course files from Instructors
<aside class="notes">Mart ~ 5 Minutes</aside>

1. Before each command, open up the Command Pall`ete
> `CMD + SHIFT + P'
1. Now to pull from our `ga-students` upstream repo
> `git custom command`
  > `pull upstream gh-pages`
1. Now we want to push to our own `origin` repository
> `git push`

That should be all! Check GH to check whether it worked



### Staging your changes for commit
<aside class="notes">Mart ~ 5 Minutes</aside>
1. Check that there is nothing unexpected in the _staging area_
> git diff staging

1. If unwanted files are in staging you should open them in sublime and
> git unstage (current file)

1. Check that you are adding the correct code changes
> git diff all

1. If correct, then you need to _add your changed files to the staging area_
> git add [current file/all/add...]

You've now put those changes _on stage_. You'v put a spotlight on them for the 'commit` command to see them.You can continue to code and make changes, adding them as you go along, but usually you'll want to now commit those changes.Instructors



### Your staged changes are now ready to be commited, shared with the world
<aside class="notes">Mart ~ 5 Minutes</aside>
1.  As you instruct to sublime to commit to git ...
> git commit

1. ... a message prompt at the bottom asking for a short summary of the changes
> `<enter message>`

1. You've now made a commit, so feel free to push your changes and continue!
> git push

That should be all! Check GH to check whether it worked



### If sublime complains about authentication or such priviledge, try checking which protocol you are using and changing it to GIT if it is HTTPS
<aside class="noted"></aside>

1. Check your remote:
> git custom command

> remote show origin

1. If the result includes `https://` then enter the following command, replacing USERNAME with your own

> git custom command

> remote set-url origin git@github.com:USERNAME/FEWD_HK_4.git 

> remote set-url upstream git@github.com:ga-students/FEWD_HK_4.git 



## Foundational HTML + CSS
<aside class="notes">Mart ~ 5 Minutes</aside>

### Seperation of concerns.



## Box Model
<aside class="notes">Mart ~ 30 min : @FEWD_HK_4/lesson3/labs/codepen-demo</aside>

### Every element in web design is a box
![GeneralAssemb.ly](../assets/images/icons/code_along.png)

* In the HTML, all elements follow the box model.



## Box Model
<aside class="notes"></aside>

![](http://www.mandalatv.net/itp/drivebys/css/lib/img/box_model.gif)



##Box Model

<aside class="notes"> : @FEWD_HK_4/lesson3/labs/box-model</aside>

**Width** = content width + padding-left + padding-right + border-left + border-right

**Height** = content height + padding-top + padding-bottom + border-top + border-bottom



## HTML Template
<aside class="notes"> Kit ~ 20 min : @FEWD_HK_4/lesson3/labs/template</aside>

```
<!doctype html>
<html lang="en">
  <head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="author" content="<your name>">
    <meta name="keywords" content="<comma>, <separated>, <keywords>">
    <meta name="description" content="<A short description about this page>">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```



## Classes & Ids
<aside class="notes">Kit ~ 10 mins</aside>

### With classes and ids we can target specific elements on a page, so we can manipulate it uniquely.
```
h1 { color: red; } /* Apply to all <h1> tags */

h1.tagline { color: blue; } /* Only apply to the <h1> tag which has class = tagline */
```

* **ID** must be unique in within the same .html.
* The same **class** could be applied to more than 1 tag.



## Classes & Ids
<aside class="notes">Kit ~ 10 mins</aside>

How to __select__ classes in CSS?

```
.className { color: red; }

#idName { color: blue; }
```



## Classes & Ids
<aside class="notes">Mart ~ 5 mins</aside>

### When should i use them? id or class?



## Nested Selectors
<aside class="notes">Kit ~ 30 min : @FEWD_HK_4/lesson3/labs/nested-selectors</aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)

* Sometimes you need to be specific on the CSS selector



## Homework
<aside class="notes">Both</aside>

### How to get started with a project?

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

**[Preview](http://ga-students.github.io/FEWD_HK_4/lesson3/labs/fashion_blog_part1/Fashion_Blog.png)** : Fashion Blog