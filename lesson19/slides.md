![General Assembly](../assets/images/ga.png)
# FEWD LESSON 19

## FEWD - Animation

### Instructors
Kit Yuen & Mart van de Ven



## Agenda
<aside class="notes"></aside>

* CSS3 Animation
* jQuery Animation
* CSS3 or jQuery?
* Transition
* Animations
* Animation/Transition Event endings
* Egg drop
* Some jQuery plugins



## CSS3 Animation
<aside class="notes"></aside>

The __transition__ property

```
<div id="box"></div>
<button id="btn">move</button>
<!-- jQuery lib here -->
```

```
#box {
  width: 40px; height: 40px; background-color: red;
  transition: all 1s;
}
.moved {
  margin-left: 100px;
}
```

```
$("#btn").click(function(){
  $("#box").toggleClass("moved");
});
```



## jQuery Animation
<aside class="notes"></aside>

We can also do it without the _.moved_ CSS.

```
$("#btn").click(function(){
  if ($("#box").hasClass("moved")) {
    $("#box").animate(
      {
        marginLeft: "0px"
      },
      1000
    );
  } else {
    $("#box").animate(
      {
        marginLeft: "100px"
      },
      1000
    );
  }
  $("#box").toggleClass("moved");
});
```



## CSS3 or jQuery?
<aside class="notes"></aside>

For simple animation and you don't care about IE, use CSS3 whenever possible.

* Faster and smoother
* Simpler to read



## Transition
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## Animations
<aside class="notes"></aside>

[CSS3 @keyframes Rule](http://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)

![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## Animation/Transition Event endings
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## Egg drop
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)



## Some jQuery plugins
<aside class="notes"></aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)



## Some jQuery plugins
<aside class="notes"></aside>

* [jQuery Cycle](http://jquery.malsup.com/cycle/)
* [jQuery Parallax](http://www.ianlunn.co.uk/plugins/jquery-parallax/)
* [Superscrollorama](http://johnpolacek.github.io/superscrollorama/)
* [jQuery Scroll Path](http://joelb.me/scrollpath/) 