<script>
    import Ad2 from "$lib/images/ad2.png"

	import axios from 'axios';
	import { onMount } from 'svelte';

	let newsData = [];

	function processNewsDetails(details) {
		const withoutTags = details.replace(/<[^>]*>/g, ''); 
		const lines = withoutTags.split('\n'); 
		return lines.slice(0, 2).join('\n'); 
	}

	onMount(async () => {
		try {
			const response = await axios.get('https://unb.com.bd/api/bn/sports'); 
			newsData = response.data;
			console.log(newsData);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<div class="container mx-auto">
    <div class="flex flex-col lg:flex-row justify-between pt-14 mt-6 px-4">
        <div class="w-auto lg:max-w-3xl">
            <div class="mb-3">
                <h1 class="font-bold text-lg md:text-[36px]">Read more from other districts</h1>
            </div>
            {#each newsData as category}
                {#each category.items.slice(1, 5) as newsItem}
                    <div class="flex flex-col lg:flex-row lg:gap-2 mb-4">
                        <div class="min-w-full lg:min-w-[295px] max-w-[324px]">
                            {#if newsItem.pic}
                                <div class="image-container">
                                    <img class=" rounded-t-lg lg:rounded-lg" src={newsItem.pic} alt="" />
                                </div>
                            {/if}
                        </div>
                        <div class="border-[1px] rounded-b-lg lg:rounded-xl hover:shadow-md">
                            <h1 class="font-bold text-2xl px-8 py-[30px] hover:text-[#FF00A5] news-title">
                                <a href={newsItem.source_url}>
                                    {newsItem.title}
                                </a>
                            </h1>
                        </div>
                    </div>
                {/each}
            {/each}
        </div>
        <div class="lg:ml-4">
            <img class="max-h-" src={Ad2} alt="">
        </div>
    </div>
    <hr>
</div>