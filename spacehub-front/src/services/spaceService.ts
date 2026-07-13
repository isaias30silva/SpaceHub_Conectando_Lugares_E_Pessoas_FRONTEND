/**
GET /spaces

GET /spaces/:id

POST /spaces

PUT /spaces/:id

DELETE /spaces/:id
 */

import { Space } from "@/types/space";


export async function getSpaces()
: Promise<Space[]> {


  // Futuramente:
  //
  // const response =
  // await api.get("/spaces")


  return [

    {
      id:"1",
      title:"Sala moderna",
      location:"São Paulo",
      pricePerNight:150,
      rating:4.8,
    },


    {
      id:"2",
      title:"Apartamento completo",
      location:"Campinas",
      pricePerNight:220,
      rating:4.9,
    }

  ];

}