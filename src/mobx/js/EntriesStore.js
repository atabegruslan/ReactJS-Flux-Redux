import { observable } from "mobx"
import { autorun } from "mobx" // debugging

class EntriesStore {
	@observable entries = ["buy milk", "buy eggs"]
	@observable filter = ""
}

const entriesStore = new EntriesStore;
window.entriesStore = entriesStore; // debugging

export default entriesStore;

 // debugging
autorun(() => {
	console.log(entriesStore.entries[0]);
	console.log(entriesStore.filter);
})
