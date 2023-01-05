export type Tool = {
    name: string;
    icon: string;
    url: string;
};

const html: Tool = {
    name: "HTML",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
};

const react: Tool = {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    url: "https://reactjs.org/",
};

const vue: Tool = {
    name: "Vue",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLFpJypmWo8-_qvR9u6NHZoWQ7XN3lyp6HLguGFLCe19OsShRSqadPl-aPeFPjali6kg&usqp=CAU",
    url: "https://vuejs.org/",
};

const preact: Tool = {
    name: "Preact",
    icon: "https://static-00.iconduck.com/assets.00/preact-icon-444x512-m1irt006.png",
    url: "https://preactjs.com/",
};

const solidjs: Tool = {
    name: "SolidJS",
    icon: "https://www.solidjs.com/img/logo/without-wordmark/logo.png",
    url: "https://www.solidjs.com/",
};

const svelte: Tool = {
    name: "Svelte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
    url: "https://svelte.dev/",
};

const vite: Tool = {
    name: "Vite",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png",
    url: "https://vitejs.dev/",
};

const astro: Tool = {
    name: "Astro",
    icon: "https://astro.build/assets/press/logomark-light.png",
    url: "https://astro.build/",
};

const eleventy: Tool = {
    name: "Eleventy",
    icon: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fsimplejournal.chriscollins.me%2F/small/1:1/",
    url: "https://www.11ty.dev/",
};

const hugo: Tool = {
    name: "Hugo",
    icon: "https://d33wubrfki0l68.cloudfront.net/c38c7334cc3f23585738e40334284fddcaf03d5e/2e17c/images/hugo-logo-wide.svg",
    url: "https://gohugo.io/",
};

const nextjs: Tool = {
    name: "NextJS",
    icon: "data:image/png;base64,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",
    url: "https://nextjs.org/",
};

const nuxtjs: Tool = {
    name: "NuxtJS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1280px-Nuxt_logo.svg.png",
    url: "https://nuxtjs.org/",
};

const redwoodjs: Tool = {
    name: "RedwoodJS",
    icon: "data:image/png;base64,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",
    url: "https://redwoodjs.com/",
};

const remix: Tool = {
    name: "Remix",
    icon: "https://seeklogo.com/images/R/remix-logo-862D8B1019-seeklogo.com.png",
    url: "https://remix.run/",
};

const solidstart: Tool = {
    name: "SolidStart",
    icon: solidjs.icon,
    url: "https://start.solidjs.com/getting-started/what-is-solidstart",
};

const sveltekit: Tool = {
    name: "SvelteKit",
    icon: "https://kit.svelte.dev/_app/immutable/assets/svelte-kit-machine-3af040cb.png",
    url: "https://kit.svelte.dev/",
};

const createt3app: Tool = {
    name: "Create T3 App",
    icon: "https://user-images.githubusercontent.com/95541290/184307358-ebf8be63-e434-49d9-8181-90269ad79599.png",
    url: "https://create.t3.gg/",
};

export const tools = {
    html,
    react,
    vue,
    preact,
    solidjs,
    svelte,
    vite,
    astro,
    eleventy,
    hugo,
    nextjs,
    nuxtjs,
    redwoodjs,
    remix,
    solidstart,
    sveltekit,
    createt3app,
} as const;
