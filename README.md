:package: Your Project Name
---

:sparkles: Feature
---
* [live-server](https://github.com/tapio/live-server#readme)
  * [pug-cli](https://github.com/pugjs/pug-cli#readme)
  * [stylus](https://github.com/stylus/stylus#readme)
    * [autoprefixer-stylus](https://github.com/jescalan/autoprefixer-stylus#readme)
    * [kouto-swiss](https://github.com/leny/kouto-swiss#readme)
    * [sanitize.styl](https://github.com/59naga/sanitize.styl#readme)
    * [typographic](https://github.com/corysimmons/typographic#readme)
    * [rupture](https://github.com/jescalan/rupture#readme)
    * [jeet](https://github.com/mojotech/jeet/tree/master/stylus#readme)

  * [width-adjuster](https://github.com/59naga/width-adjuster#readme)

:wrench: Development
---
Requirement global
* NodeJS **v6.2.1** [See](http://node.green/)
* Npm v3.9.3 (or [pnpm](https://github.com/rstacruz/pnpm))

```bash
git clone https://github.com/59naga/your-module-name
cd your-module-name
npm install

npm start
```

:wind_chime: Available npm-scripts
---
* `npm start`
  ship `src` to `release` for each `pug`,`styl`. live compiling(ignore add file) and live-reload.
* `npm run build`
  ship `src` to `release`. without live, with compression.

<br><br>
<p align="right">
  <a href="http://59naga.mit-license.org/">
    MIT License :clipboard:
  </a>
</p>
