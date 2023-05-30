

const card = [
    { 
        id: 1,  
        url: 'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-camera.jpg',
        title: "Re-engineered Nightography camera",
        descrp: "We've packed Galaxy's biggest sensor, light-absorbing pixels and video stabilization technology into one Pro-grade Camera, all resulting in the ultimate question: 'Can you send me that?'"
    },
    {
        id:2,
        url:'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-spen.jpg',
        title: "Renowned S Pen",
        descrp: "S Pen keeps the legacy of Note alive. Plus, it helps you ditch the dependency on notebooks, making sketches and memos effortless and eco-friendly."
    },
    { 
        id: 3,
        url:'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-display.jpg',
        title: " Revolutionary gaming processor",
        descrp: "Maximize your free time with the most powerful chip on a Galaxy smartphone. Improved features across the board means everything from gaming to streaming is optimized and seamless — without draining the battery."
    }
]

const speclist = 
    { 
        Name: "Samsung Galaxy S23 Ultra",
        Price: "Rs 120999",
        CodeName: "s23 Ultra",
        Dimensions: "163.4 x 78.1 x 8.9 mm (6.43 x 3.07 x 0.35 in)",
        Weight:"234 g (8.25 oz)",
        Build: "Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass Victus 2), aluminum frame",
        DisplayType: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1200 nits (HBM), 1750 nits (peak)",
        ScreenSize : "6.8 inches, 114.7 cm2 (~89.9% screen-to-body ratio)" ,
        Resolution: "1440 x 3088 pixels, 19.3:9 ratio (~500 ppi density)",
        Protection : "Corning Gorilla Glass Victus 2",
        OS: "Android 13, One UI 5.1",
        Chipset: "Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)",
        MainCameras: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
       <br/> 10 MP, f/4.9, 230mm (periscope telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 10x optical zoom
       <br/> 10 MP, f/2.4, 70mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
        <br/>12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
        SelfieCamera: `12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF`,
        Battery : `12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF`,
    }

const specName = Object.keys(speclist)
const specDescp = Object.values(speclist)
const specsS23 = []
for (let i = 0; i <specDescp.length; i++){
    specsS23.push({[specName[i]]:specDescp[i]})
}

export default card ;
export {specsS23};