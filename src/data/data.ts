
import { Dentists } from "../types/interface"
import { Pharmacies } from "../types/interface"

export const dentist:Dentists[] = [
    {
        id:1,
        name: "Nhu Phuc",
        content:"Phuc moi cat toc",
    },
    {
        id:2,
        name: "Nhat Tien",
        content:"Dau dau qua di",
        
    },
    {
        id:3,
        name: "Huu Dong",
        content:"Giam can thay oi",
        
    },
    {
        id:4,
        name: "Duy Hieu",
        content:"Cat mulet di",
        
    },
    {
        id:5,
        name: "Van Hieu",
        content:"Tap ta o dau vay???",
        
    },
    {
        id:6,
        name: "Thanh Binh",
        content:"Rua ban phim moi di",
        
    },
    {
        id:7,
        name: "Anh Duong",
        content:"Di nhau toan ko thay",
    
    },
    {
        id:8,
        name: "Quang Tuan",
        content:"Di sai gon roi",
    
    },
    {
        id:9,
        name: "Anh Vien",
        content:"Thanh vien moi",
    
    }
]

export const pharmacy:Pharmacies[] = [
    {
        id:1,
        name:"Pharmacy A",
        address:"363 Nguyen Huu Tho"
    },
    {
        id:2,
        name:"Pharmacy B",
        address:"364 Nguyen Huu Tho"
    },
    {
        id:3,
        name:"Pharmacy C",
        address:"365 Nguyen Huu Tho"
    },
    {
        id:4,
        name:"Pharmacy D",
        address:"366 Nguyen Huu Tho"
    },
    {
        id:1,
        name:"Pharmacy E",
        address:"367 Nguyen Huu Tho"
    },
]


export let dateNow = new Date().getTime()