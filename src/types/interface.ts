export interface Bookings {
    id: number
    date: string
    doctor: string
    location: string
    status:boolean
}

export interface Dentists {
    id: number
    name: string
    content: string
}

export interface Pharmacies {
    id: number
    name: string
    address: string
}