import {create} from 'zustand';

export const TaxStore = create((set)=>({
    taxYear: 2025,
    taxRate:[10,12,22,24,32,35,37],
    singleBracket:[11925,48475,103350,197300,250525,626350],
    marriedBracket:[23850,96950,206700,394600,501050,751600],
    headBracket:[17000,64850,103350,197300,250500,626350],

    singleDeducetion:15000,
    marriedDeduction:30000,
    headDeduction:22500,
    })
);