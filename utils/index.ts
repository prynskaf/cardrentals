
export async function fetchCars() {
    const headers = {
      'X-RapidAPI-Key': '7cbcfff6b5msh1b499bb9ca716c1p1e4837jsn26c4e88132e8',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    // Perform the actual API request here using the headers
    const response = fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers});
    const result = (await response).json()
    return result;
  }
  

  export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };