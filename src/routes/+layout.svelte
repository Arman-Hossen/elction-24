<script>
	import '../app.css';
	import Map from '../lib/components/Map.svelte';
	import FeaturedVideos from '../lib/components/FeaturedVideos.svelte';
	import Title from '../lib/components/Title.svelte';
	import MoreNews from '../lib/components/MoreNews.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div>
	<Title />
	<Map />
	<MoreNews/>
	<FeaturedVideos/>
	<Footer/>
</div>

<slot />
