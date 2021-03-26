import { getLocaleDateFormat } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'searchCountry' 
})

export class SearchCountry implements PipeTransform {

  transform(trips: any[], searchText: string): any[] {
  if (!trips)
    return [];
  if (!searchText)
    return trips;
  searchText = searchText.toLowerCase();
  return trips.filter(course => {
    console.log(course.name);
    return course.country.toLowerCase().includes(searchText);
});
}
}

@Pipe({ 
  name: 'searchPrice' 
})

export class SearchPrice implements PipeTransform {

  transform(trips: any[], minPrice: number, maxPrice: number): any[] {
  if (!trips)
    return [];
  if (!minPrice && !maxPrice)
    return trips;
  if(!minPrice)
    minPrice=0;
  if(!maxPrice)
    maxPrice=9999999;
  
  return trips.filter(course => {
    return course.price >minPrice && course.price  < maxPrice;
});
}
}

@Pipe({ 
  name: 'searchDate' 
})

export class SearchDate implements PipeTransform {

  transform(trips: any[], startDate: Date, endDate: Date): any[] {
  if (!trips)
    return [];
  if (!startDate && !endDate)
    return trips;
  if(!startDate)
  startDate=new Date (2000, 1,1);
  if(!endDate)
  endDate= new Date (2100, 1,1);
  
  return trips.filter(course => {
    return course.start.getDate()>startDate.getDate() && course.end.getDate() < endDate.getTime();
});
}
}

@Pipe({ 
  name: 'searchReview' 
})

export class SearchReview implements PipeTransform {

  transform(trips: any[], minStars: number, maxStars: number): any[] {
  if (!trips)
    return [];
  if (!minStars && !maxStars)
    return trips;
  if(!minStars)
  minStars= -1;
  if(!maxStars)
  maxStars= 6;
  
  return trips.filter(course => {
    return course.stars>minStars && course.stars< maxStars;
});
}
}
