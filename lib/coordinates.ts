//
// @todo: iOS app in React Native to persist coordinates
// from phone locations services, once data store configured.
//

type Cities =
  | 'bogota'
  | 'london'
  | 'medellin'
  | 'summerdale'
  | 'dc'
  | 'sanandres'
  | 'santamarta'
  | 'cartagena'
  | 'cdmx'
  | 'cabo'

export interface ICoord {
  lat: number
  lng: number
}

export type ICoordinates = { [key in Cities]: ICoord }

export const coordinates: ICoordinates = {
  bogota: {
    lat: 4.711,
    lng: -74.072,
  },
  london: {
    lat: 51.489,
    lng: -0.144,
  },
  medellin: {
    lat: 6.244,
    lng: -75.581,
  },
  summerdale: {
    lat: 30.4877,
    lng: -87.6997,
  },
  dc: {
    lat: 38.9,
    lng: -77.03,
  },
  sanandres: {
    lat: 12.57,
    lng: -81.7,
  },
  santamarta: {
    lat: 11.24,
    lng: -74.21,
  },
  cartagena: {
    lat: 10.39,
    lng: -75.48,
  },
  cdmx: {
    lat: 19.43,
    lng: -99.13,
  },
  cabo: {
    lat: 22.89,
    lng: -109.91,
  },
}

const CURRENT_CITY = process.env.CURRENT_CITY as Cities

export const current = coordinates[CURRENT_CITY] || coordinates.london

export default coordinates
