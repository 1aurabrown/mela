# mela
Custom fork of [estrattonbailey/mela](https://github.com/estrattonbailey/mela).
Tiny utility to trigger animations on scroll. **800 bytes gzipped.**

## Usage
`mela` works by applying an `mela-is-visible` class to any '`.mela-animate` element when it enters the
viewport. This fork assumes a single css transition will be used globally. [estrattonbailey/mela](https://github.com/estrattonbailey/mela) allows for further customization using a data attribute.

### Config
Define your transition in CSS.

### Styles
Use a class to define the transition values:
```css
.mela-animate {
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  transition-property: opacity, transform;

  &.mela-is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### JavaScript
Create an instance:
```javascript
import mela from 'mela'

const animations = mela()
```

Then call that instance to bind elements and check position:
```javascript
animations()
```

When the DOM changes, like after a page load, you'll need to rebind. Simply call
the instance again:
```javascript
animations()
```

### Options
By default `mela` only animates in once. To repeat the animation each time the
element enters the viewport, pass `reset` to your `data-animate` attribute:
```html
<h1 data-animate='slide-up fast ease delay reset'>I will slide in every time!</h1>
```

`mela` users [vsbl](https://github.com/estrattonbailey/vsbl) internally, so to
adjust how soon/late the animation occurs, use `data-threshold`:
```html
<h1 data-animate='slide-up fast ease delay reset' data-threshold='0.25'>I will slide in every time!</h1>
```

If you want to apply a `threshold` value to all animations, or ensure all
animations reset, you can pass these options to the constructor:
```javascript
const animations = mela({
  threshold: 0.25,
  reset: true
})
```

Finally, if you'd rather use something other than `.mela-animate`:
```javascript
const animations = mela({
  class: 'anim'
})
```

## License

MIT License © [Laura Brown](https://laurabrown.xyz)

Forked from:
[estrattonbailey/mela](https://github.com/estrattonbailey/mela)
MIT License © [Eric Bailey](https://estrattonbailey.com)
