import { useState } from "react";
import People from "./components/People";
import Planets from "./components/Planets";
import Nav from "./components/Nav";
function App() {
	const [page, setPage] = useState("Planets");
	return (
		<div className='app'>
			<Nav setPage={setPage} />
			this is a page : {page}
			{page === "Planets" ? <Planets /> : <People />}
		</div>
	);
}

export default App;
