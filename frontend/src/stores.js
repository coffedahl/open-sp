import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const store = (browser && JSON.parse(localStorage.getItem('content'))) || [];
export const shipmentData = writable(store);
shipmentData.subscribe((val) => {
	if (browser) {
		localStorage.content = JSON.stringify(val);
	}
});
