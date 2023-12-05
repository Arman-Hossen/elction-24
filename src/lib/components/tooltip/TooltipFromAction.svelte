<script>
	import Tooltip from './Tooltip.svelte';
	import { tooltip } from './tooltip';
	import { tooltip as tooltipv1 } from './tooltip.v1';
</script>

<h1 title="this is a greeting from action" use:tooltip>Hello world from action!</h1>

<h1 title="this is a greeting from action v1" use:tooltipv1>Hello world from action v1!</h1>

<Tooltip title="this is a greeting from component">
	<h1>
		Hello world from component!
	</h1>
</Tooltip>