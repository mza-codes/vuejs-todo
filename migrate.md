# Migrating VueJS V2 application to VueJS V3

<h2> Steps </h2>
<h4>1. In Terminal Run </h4>

```bash
vue upgrade
```

<h4>2. We should modify `package.json`</h4>
<p>We need to remove the old version `vue@2.x.x` rom our package.json and install latest version. You can do it by manually removing `vue@2.x.x` line from from package.json file and install latest version.</p>

```bash
pnpm i vue @vue/compat
pnpm i -D @vue/compiler-sfc
```

```json
"dependencies": {
    // Other Dependencies
    "@vue/compat": "^3.3.4",
    "vue": "^3.3.4",

    // "vue": "^2.x.x", UNINSTALLED and Updated to Latest
},
 "devDependencies": {
    // Other Dependencies
    "@vue/compiler-sfc": "^3.3.4",

    // "vue-template-compiler": "^2.6.11" Keep it UNINSTALLED
}
```

<h4>3. We need to modify main.js file in `/src` directory.</h4>
<p>As Below</p>

```js
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
// Other Imports

const app = createApp(App);
app.mount("#app");
```

<h4>4. Ater that run</h4>

```bash
pnpm serve
```

<p>And it should work as expected! <br> 
In case it's not workin refer here.</p>

@reference: https://www.bacancytechnology.com/blog/migrate-from-vue-2-to-vue-3
