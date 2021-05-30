# MinimalReproRepo
Minimal reproduction repository for Umbraco 9 javascript package dev environment

Issues I'm having stem from my package setup - I use JS Modules in my source, so run everything through Browserify to make it work in the browser (because I don't control how the JS is rendered, I can't use `type=module`). The Gulp pipeline also takes care of transpiling
and polyfills and so on, so that I can write the JS I want to write, and be confident it will be well supported. 

This is a trivial example, but it seems to work (slightly) better than my full-fledged Plumber project - file changes are shown on refresh, compared to Plumber where the umbraco-backoffice-extensions-js.js file tends to 
disappear, or not stay up to date.

Bigger issue is how source mapping is working (or not working). First image is the current state of play in V8, using the same Gulp setup, and the same project structure. Gulp does it's thing
and copies the compiled JS file to /app_plugins/plumber/backoffice, in the test site in the Plumber solution.

Source mapping in V8 gives me links back to the source files, I can debug against the source and have clear, understandable mappings back to the original code.

![plumber-src](https://user-images.githubusercontent.com/3248070/120121698-463e6600-c1e8-11eb-8776-b9f4e390e8dd.png)

In V9 however, I don't get this glorious development aide. Instead, I get only a reference to the compiled file, which isn't a huge issue in this trivial example, but considering the compiled
Plumber source runs to several thousand lines, it makes debugging really difficult, particularly as the line pointers in any console errors don't point to the correct locations, and debugger statements
don't seem to do anything.

![demo-src](https://user-images.githubusercontent.com/3248070/120121699-476f9300-c1e8-11eb-828c-7b013d9f9657.png)

Hopefully this is just a config issue, not an indication of the new normal. Given the approach for the new UI, which also uses JS Modules I'd expect developers could hit similar issues when building their own
components for inclusion in packages.

## Run it
There's a single Gulp entry point: `gulp dev`

This will clean the destination folder, copy the package into the test site and establish file watchers on the javascript and html files in the package source.
