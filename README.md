#gulpscript-material-design-icons-svg-to-png

This is an opinionated gulpscript which takes a folder of svg files and

1. Change the colors of the icons. If you're not happy with the default full black color.
2. Save the icons as pngs in multiple sizes (Such as iOS's normal, @2x and @3x, and Android's mdpi, hdpi, xhdpi, xxhdpi and xxxhdpi)

It's made for handling the [Material Design Icons](https://github.com/google/material-design-icons) by Google but could be used for handling other svg files as well

## Installation

Put the `gulpscript.js` somehwere nice (such as the root of your project). 

Run `npm install` to install dependencies.

Edit the `gulpscript.js`. These are the settings:

```
var iconColor = '#bb11aa';
var destinationPath = './build';
var svgPath = './*/svg/production/*_24px.svg';
```

Run `gulp` to start creating png files.

### Footnote
This is not [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) at all. Please make it so if you know how to iterate over a settings object in Gulp, because I don't...