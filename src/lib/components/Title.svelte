<script>
	import EleLogo from '$lib/images/EleLogo.png';
	import Ad from '$lib/images/ad1.png';
	import Logo from '$lib/images/unb-logo.png';
	import { onMount, onDestroy } from 'svelte';
    import { selectedDistrict } from './districtStore.js';
  
  
let district = 'Bangladesh';

const unsubscribe = selectedDistrict.subscribe(value => {
  district = value;
  console.log('Selected District in Title:', district);
});

onDestroy(() => {
  unsubscribe(); // unsubscribe when the component is destroyed
});

</script>

<header>
	<div>
    <div class="py-[14px] bg-gradient-to-b from-red-900 to-red-700">
      <div class="container mx-auto py-5 flex items-center justify-around">
        <div class="flex gap-4 items-center justify-center">
          <img class="w-[60px] md:w-[80px]" src={EleLogo} alt="Election Logo" />
          <h1 class="text-slate-200 text-[15px] md:text-[22px] font-bold">Road to Election <br /> 2024  { district} </h1>
        </div>
    
        <div class="hidden md:block">
          <img src={Ad} alt="Ad" />
        </div>
    
        <div>
          <img class="w-28 md:w-40" src={Logo} alt="Company Logo" />
        </div>
      </div>
    </div>
  </div>
</header>
