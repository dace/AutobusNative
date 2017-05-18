export const normalizeStopData = stopList => {
  const normalizedStops = stopList.map(stop => {
    
    let newStopsObj = {
      stopCode: stop.code,
      crossStreets: stop.name,
      routes: [],
    };

    stop.routes.forEach(route => {
      newStopsObj.routes.push({
        color: route.color,
        id: route.id,
        description: route.description,
        longName: route.longName,
        busName: route.shortName,
        schedule: route.url,
      })
    });
    return newStopsObj;
  });
 
  return normalizedStops;
};
