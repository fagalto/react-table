import React from "react";
const HeadField = ({name,handleSort}) => (
<th onClick ={() => handleSort(name)}  >
{name}
</th>
);


export default HeadField