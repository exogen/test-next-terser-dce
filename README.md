# test-next-terser-dce

Install and build:

```console
$ yarn
$ yarn build
```

Note in the client bundle analysis that the set of modules includes things like:

- `readable-stream`
- `buffer`
- `stream-http`
- `https-browserify`
- etc.

This is due to the `require('https').Agent` in [pages/index.js](./pages/index.js).
However, that call is successfully removed by Terser’s dead code elimination.
The `removedFunction` call is behind a `process.browser` check which is
statically defined by Next’s webpack config. Terser knows the function is no
longer referenced and removes the definition entirely. Search for `test-xxx-https`
in the output bundles to confirm this.

So, why are the unnecessary dependencies (from an expected server-only import)
included?
