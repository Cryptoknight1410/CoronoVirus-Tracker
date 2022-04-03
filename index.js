function updateMap(){
    console.log("Updating map with real time data");
    fetch("data.json") //returns a promise
    .then(response=>response.json()) //returns a promise thats y one more then
    .then(rsp=>{
        console.log(rsp.data)
        // console.log(data.values())
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;
            cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }
            //Have to mark theseonmap
            new mapboxgl.Marker({
                draggable:false,
                color:color
            }).setLngLat([longitude,latitude])
               .addTo(map);
        });
    })
    

}
let interval = 2;
setInterval( updateMap, interval); 