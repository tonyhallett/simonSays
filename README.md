# What it is

Html to copy from simonsaysmin.html and paste inside a blogger HTML/Javascript gadget.  The core functionality is provided by the simonSays function which will dynamically load jQuery and Snap if the global variables are not defined.

## How it works

Firstly, this has been copied from a codepen and altered to allow for dynamic loading of dependencies.  The original code works fine but is in need of refactoring ( or a complete re-write !).

There are two parts to this.  The first part is specific to my needs.  The html required by the simonSays function is contained within a hidden container.  The only thing visible on the screen initially will be

```html
<div>Bored?</div>
```

This will blink to attract attention and when clicked will hided the bored div and call simonSays passing loaded callback function.  When loaded the container will be displayed which contains a close div and will be centered on the screen.

Closing will set the widget back to the initial state.

## To use for yourself

Keep the style element and use the html element with id ss-shell.  Call the simonSays function and provide the loaded callback and show the html when loaded.