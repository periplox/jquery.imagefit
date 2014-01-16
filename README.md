jQuery ImageFit 1.0.0
=====================

A simple, lightweight plugin to make images fit anywhere and anyway.

##Demo: [right here](http://periplox.github.io/jquery.imagefit/)

##Usage

Fist include the required files.
``` html
<script src='//code.jquery.com/jquery-1.10.2.min.js'></script>
<script src='jquery.imagefit.js'></script>
```

Then identify the elements you want to be affected. Let's say...
``` html
<div class="im"><img src="images/01.jpg" alt=""></div>
<div class="im"><img src="images/02.jpg" alt=""></div>
<div class="im"><img src="images/03.jpg" alt=""></div>
<div class="im"><img src="images/04.jpg" alt=""></div>
<div class="im"><img src="images/05.jpg" alt=""></div>
<div class="im"><img src="images/06.jpg" alt=""></div>
```

Finally set the ImageFit in the 'window load' event. If you detect visual flips or white margins then try doing it in both, the 'document ready' and the 'window load' events. There might be more accurate methods depending on how you apply the plugin.
``` javascript
$(window).load(function() {
	$('div.im').imagefit();
});
```
And that would be it.

##Reference

<table>

 <tr>
    <th>Option</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
 </tr>

 <tr>
    <td>mode</td>
    <td>string</td>
    <td>'inside'</td>
    <td>It determines how images will be fitted inside the element: 'inside' or 'outside'.</td>
 </tr>
  
 <tr>
    <td>halign</td>
    <td>string</td>
    <td>'center'</td>
    <td>Horizontal alignment of the images relative to the container element: 'left', 'center' or 'right'.</td>
 </tr>
 
 <tr>
    <td>valign</td>
    <td>string</td>
    <td>'middle'</td>
    <td>Vertical alignment of the images relative to the container element: 'top', 'middle' or 'bottom'.</td>
 </tr>

 <tr>
    <td>force</td>
    <td>bolean</td>
    <td>true</td>
    <td>Force resizing, even when image real size is smaller than container's.</td>
 </tr>

</table>
