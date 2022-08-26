# How to make a responsive menu
We made it really easy to setup responsible menus that don't require anything of you. Except of course for setting something simple up.  
We set up an example to explain how our hamburger menus work.  
![computer navigation bar](/docs/assets/menu_1.png)  
![mobile navigation bar](/docs/assets/menu_1_mobile.png)  
The code to make this happen is really easy:
```html
<div class="burger-wrapper palette-red space-open font-big style-modern">
    <div class="burger-menu">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </div>
</div>
```
This is all that's needed for setting up a navigation bar.  
Now lets break it down.
```html
<div class="burger-wrapper palette-red space-open font-big style-modern"></div>
```
This div element is required to have the class `burger-wrapper` and (optionally) allows you to set custom styling to this element and it's children. However you can choose to provide no specific styles. That means that the first parent element with styles will get their custom classes applied.  
In this example we applied the following styles:
- [A red palette](/docs/palettes/red.md).
- [Open spacing](/docs/spacing/open.md).
- [Big font and text](/docs/font/big.md).
- [Modern overall style](/docs/style/modern.md).

Next of all we declared another `<div>` element.
```html
<div class="burger-menu"></div>
```
This is another required element which no styles can be applied. All the alements you put inside this element will show up on the navigation bar.  
For our example we used three `<a>` elements. All linking to other pages on the site.