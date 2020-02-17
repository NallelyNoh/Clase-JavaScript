
const array = [

{
    Name: "Nallely",
    Tel: "11111111",
    Gender: "F",
    Location: "Guadalajara",
}, 
{
    Name: "Alan",
    Tel: "5555555",
    Gender: "M",
    Location: "CddeMexico",
},
{
    Name: "Paola",
    Tel: "4444444",
    Gender: "F",
    Location: "StateofMexico",
},
{
    Name: "Lirio",
    Tel: "9999999",
    Gender: "F",
    Location: "Campeche",
},
{
    Name: "Libia",
    Tel: "33333333",
    Gender: "F",
    Location: "Cancun"
},
];


//Sorting
const sorting = data => {
   data.sort((a, b) => {
     return a.Name > b.Name ? 1 : a.Name < b.Name ? -1 : 0;    
   });
};

//Filtering
const filtering = (data, prop, value) => {
   return data.filter((x) => x[prop] === value)
};

//Grouping
const grouping = (data, prop) => {
   return data.reduce((current, x) =>   {
      if (!current[x[prop]]) {
          current[x[prop]] =[];
        }
        current[x[prop]].push(x);
        return current;                   
      },   {});
};

//Mapping
const mappingColors = (data) => {
     return data.map(x => {
         return {...x, color: x.Gender === "Male" ? "Red" : "Orange"} 
     });
};

//
// console.log(array);

sorting(array);
// console.log(array);

// const filteredArray = filtering(array, "Name", "Paola");
// console.log(filteredArray);

// const groupedArray = grouping(array, "Location");
// console.log(groupedArray);


const finalArray = grouping(
    mappingColors(filtering(array, "Location", "Cancun")),
    "Gender");

console.log(finalArray);
