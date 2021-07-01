import React, { useEffect, useState } from "react";

function App() {
	const [schools, setSchools] = useState([])

	useEffect(() => {
		fetch("https://slate.admissions.arizona.edu/manage/query/run?id=e792c47b-49af-4813-aa61-b4ae74a20928&h=209d43a5-c416-62ca-e071-db74493f54f2&cmd=service&output=json")
		.then((response) => response.json())
		.then((data) => {
			setSchools(data.row)
		})
	}, [])
  return (
    <div className="App">
			<h1>Fetching Slate</h1>
			{schools.map((school) => (
				console.log(school.Name)
			))}
    </div>
  );
}

export default App;
