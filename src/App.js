import React, { useEffect } from "react";

function App() {
	useEffect(() => {
		fetch("https://slate.admissions.arizona.edu/manage/query/run?id=e792c47b-49af-4813-aa61-b4ae74a20928&cmd=service&output=json")
		.then((response) => response.json())
		.then((data) => console.log(data))
	}, [])
  return (
    <div className="App">
			<h1>Fetching Slate</h1>
    </div>
  );
}

export default App;
