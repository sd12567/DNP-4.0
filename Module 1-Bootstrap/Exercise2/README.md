# Exercise 2 - Bootstrap Structure and Files

## Exercise 2.1 - Bootstrap Directory Structure

The Bootstrap directory structure consists of several important folders and files:

### CSS Folder
- `bootstrap.css` - Unminified CSS file with source maps
- `bootstrap.min.css` - Minified production CSS
- `bootstrap.rtl.css` - Right-to-left support CSS
- `bootstrap.rtl.min.css` - Minified RTL CSS

### JS Folder
- `bootstrap.bundle.js` - Unminified JS with Popper.js included
- `bootstrap.bundle.min.js` - Minified production JS bundle
- `bootstrap.js` - Core JavaScript without Popper.js
- `bootstrap.min.js` - Minified core JavaScript

### SCSS Folder (Source Files)
- `_variables.scss` - Customizable variables
- `_mixins.scss` - Reusable mixins
- `_functions.scss` - Utility functions
- Component-specific SCSS files

### Icons Folder (Bootstrap Icons - Separate Package)
- SVG icons in multiple formats
- Icon fonts
- Icon utilities and classes

## Exercise 2.2 - JavaScript Plugins

Bootstrap's JavaScript plugins provide interactive functionality:
- Alerts
- Buttons
- Carousel
- Collapse
- Dropdowns
- Modal
- Popovers
- Scrollspy
- Tabs
- Toasts
- Tooltips

The `bootstrap.bundle.min.js` file includes all these plugins plus Popper.js for positioning dropdowns, popovers, and tooltips. 