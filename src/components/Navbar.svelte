<script lang="ts">
    interface Link {
        name: string;
        url: string;
    }

    const links: Link[] = [
        {
            name: "Devlog",
            url: "/devlog",
        },
        {
            name: "Labs",
            url: "/labs",
        },
        {
            name: "Contact",
            url: "/contact",
        },
        {
            name: "About",
            url: "/about",
        },
    ];
</script>

<nav class="text-slate-200 select-none border-b-2 border-gray-400/60 py-4">
    <div class="px-4">
        <div class="flex justify-between">
            <!-- desktop navigation -->
            <div class="flex justify-between items-center w-full">
                <div class="flex items-center w-9 h-9">
                    <a href="/" class="hover:text-slate-100 transition-colors">
                        /
                    </a>
                </div>
                <ul class="hidden md:flex items-center space-x-8">
                    {#each links as link}
                        <li>
                            <a
                                href={link.url}
                                rel="prefetch"
                                class="hover:text-neutral-100 transition-colors"
                                >{link.name}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>
            <!-- nav btn -->
            <button
                class="md:hidden"
                type="button"
                on:click={() => {
                    document
                        .getElementById("mobile-menu")
                        .classList.toggle("hidden");
                }}
            >
                <svg
                    class="w-5 h-5 fill-slate-200 hover:fill-neutral-100 transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    /></svg
                >
            </button>
        </div>
        <!-- mobile nav -->
        <ul class="hidden md:hidden space-y-2 pt-2" id="mobile-menu">
            {#each links as link}
                <li
                    class="hover:text-neutral-100 transition-colors select-none"
                >
                    <a href={link.url} rel="prefetch" class="block w-full"
                        >{link.name}</a
                    >
                </li>
            {/each}
        </ul>
    </div>
</nav>
