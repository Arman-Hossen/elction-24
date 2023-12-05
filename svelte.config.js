import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // ... other kit options ...

    prerender: {
      // ... other prerender options ...
      handleMissingId: 'ignore' // or provide a custom function if needed
    },

    adapter: adapter({
      // default options are shown. You can customize these as needed.
      pages: 'build',
      assets: 'build',
      fallback: null // or specify your custom 404 page if needed
    }),

    // ... other kit options ...
  },
};
