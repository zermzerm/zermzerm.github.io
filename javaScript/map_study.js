const days=["Mon","Tue", "Wed", "Thurs", "Fri"];

// 여기서 함수를 따도 지정하고 싶으면
//const addSmile = (qustn)=>`♬ ${qustn}`
//const smilingDays = days.map(addSmile); 하면 된다

const smilingDays = days.map((qustn, index) => `#${index} ♬${qustn}`);



console.log(smilingDays); //하면 5개의 값이 있는 배열이 나오지만 값은 undefined로 나온다 -> map에서 return값이 없기 때문에
