# Obsidian-plugins

Small plugins for [Obsidian](https://obsidian.md) note taking tool. These plugins require using [Volcano](https://github.com/kognise/volcano) plugin for now as the official plugin interface is not finished. I'll rewrite the relevant pieces to the official one after it is released. 

A small warning that I don't take any responsibility if these mess your notes in some silly way as they're not that thoroughly tested at this point. Especially the path fixer might be a bit hazardous.

## Fullscreen mode

`fullscreen.js` adds a command to obsidians command palette, that allows you to expand the current document to full screen focus mode for more distraction free and easier reading. Pressing `Esc` should return obsidian back to the previous layout.

## Windows paths to  markdown links

`windowspaths.js` adds a command to reformat windows paths to working markdown links for example `[licence](windir("C:\Program Files\dotnet\LICENSE.txt"))`) will be formatted to `[licence](file:///C:/Program%20Files/dotnet/LICENSE.txt)` and the link will be clickable in preview mode. This is especially helpful, if you often use the 'Copy as path' Windows feature from file explorer as now your memos can have links to any type of object that is opened by the default application when you click on it.