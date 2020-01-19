const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  webpack(config, options) {
    // Fiddle with webpack settings here to attempt to fix/debug this...
    return config;
  }
});
