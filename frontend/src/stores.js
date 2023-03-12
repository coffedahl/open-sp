import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Store for the storenumber
const localStore = (browser && JSON.parse(localStorage.getItem('store')))
export const storeNumber = writable(localStore)
storeNumber.subscribe((val)=>{
	if(browser){
		localStorage.store = JSON.stringify(val)
	}
})

// Store for shipment correcion tied to localstorage
const localShipment = (browser && JSON.parse(localStorage.getItem('content'))) || [];
export const shipmentData = writable(localShipment);
shipmentData.subscribe((val) => {
	if (browser) {
		localStorage.content = JSON.stringify(val);
	}
});
