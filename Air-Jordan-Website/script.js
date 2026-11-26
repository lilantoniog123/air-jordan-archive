const jordanModels = [
    {
        number: 1,
        name: "AIR JORDAN I",
        releaseDate: "April 1985",
        price: "$65 USD",
        designer: "Peter Moore",
        image: "images/aj1.png",
        description: "The Air Jordan I launched alongside Michael Jordan's rookie season in 1985. Its red-and-black colour scheme became connected to the famous NBA uniform controversy, helping create one of the earliest stories behind the Jordan brand."
    },
    {
        number: 2,
        name: "AIR JORDAN II",
        releaseDate: "November 1986",
        price: "$100 USD",
        designer: "Peter Moore & Bruce Kilgore",
        image: "images/aj2.png",
        description: "The Air Jordan II introduced a more luxurious direction for the collection. Made in Italy with premium materials and a lizard-inspired texture, it was the first model released at $100 and notably removed the traditional Nike Swoosh."
    },
    {
        number: 3,
        name: "AIR JORDAN III",
        releaseDate: "January 1988",
        price: "$100 USD",
        designer: "Tinker Hatfield",
        image: "images/aj3.png",
        description: "Designed by Tinker Hatfield, the Air Jordan III introduced the Jumpman logo and became closely associated with Jordan's remarkable 1988 season. Its design helped establish a new visual identity for the growing franchise."
    },
    {
        number: 4,
        name: "AIR JORDAN IV",
        releaseDate: "February 1989",
        price: "$110 USD",
        designer: "Tinker Hatfield",
        image: "images/aj4.png",
        description: "The Air Jordan IV expanded the collection's popularity beyond basketball. It was the first model released globally and featured a distinctive lacing system that allowed wearers to experiment with different ways of tying the shoe."
    },
    {
        number: 5,
        name: "AIR JORDAN V",
        releaseDate: "February 1990",
        price: "$125 USD",
        designer: "Tinker Hatfield",
        image: "images/aj5.png",
        description: "Inspired by World War II fighter aircraft, the Air Jordan V featured sharp details along its midsole that reflected Jordan's aggressive playing style. It also introduced a translucent rubber outsole, giving the model a futuristic appearance."
    },
    {
        number: 6,
        name: "AIR JORDAN VI",
        releaseDate: "1991",
        price: "$125 USD",
        designer: "Tinker Hatfield",
        image: "images/aj6.png",
        description: "The Air Jordan VI became part of basketball history when Michael Jordan won his first NBA championship wearing the model. Inspired by his German sports car, the shoe introduced a reinforced toe and a heel tab designed to make it easier to put on."
    },
    {
        number: 7,
        name: "AIR JORDAN VII",
        releaseDate: "1992",
        price: "$125 USD",
        designer: "Tinker Hatfield",
        image: "images/aj7.png",
        description: "The Air Jordan VII accompanied Jordan during the 1992 Barcelona Olympics, where he won gold with the United States Dream Team. Its design drew inspiration from African art and patterns, giving the sneaker a distinctive appearance."
    },
    {
        number: 8,
        name: "AIR JORDAN VIII",
        releaseDate: "1993",
        price: "$125 USD",
        designer: "Tinker Hatfield",
        image: "images/aj8.png",
        description: "Released during the Chicago Bulls' third consecutive championship season, the Air Jordan VIII featured a unique cross-strap design over its laces. Its chenille Jumpman logo on the tongue further distinguished it from earlier models."
    },
    {
        number: 9,
        name: "AIR JORDAN IX",
        releaseDate: "1993",
        price: "$125 USD",
        designer: "Tinker Hatfield",
        image: "images/aj9.png",
        description: "Released after Jordan's first retirement from basketball, the Air Jordan IX represented his growing international influence. Its outsole included words describing Jordan's qualities translated into multiple languages."
    },
    {
        number: 10,
        name: "AIR JORDAN X",
        releaseDate: "1994–1995",
        price: "$125 USD",
        designer: "Tinker Hatfield",
        image: "images/aj10.png",
        description: "The Air Jordan X celebrated Jordan's achievements through a series of details along its outsole. Although he had temporarily moved on from basketball to baseball, Jordan returned to the NBA in 1995 wearing this model."
    },
    {
        number: 11,
        name: "AIR JORDAN XI",
        releaseDate: "1995",
        price: "$125 USD",
        designer: "Tinker Hatfield",
        image: "images/aj11.png",
        description: "The Air Jordan XI introduced patent leather to a basketball sneaker, creating one of the franchise's most recognizable designs. Jordan wore the model during his return to championship success, and it also appeared in the film Space Jam."
    },
    {
        number: 12,
        name: "AIR JORDAN XII",
        releaseDate: "November 1996",
        price: "$135 USD",
        designer: "Tinker Hatfield",
        image: "images/aj12.png",
        description: "Known for its durability, the Air Jordan XII became famous after Jordan wore it during the 1997 Flu Game. Its stitching was inspired by the Japanese Rising Sun flag, creating a design that stood apart from previous models."
    },
    {
        number: 13,
        name: "AIR JORDAN XIII",
        releaseDate: "November 1997",
        price: "$150 USD",
        designer: "Tinker Hatfield",
        image: "images/aj13.png",
        description: "The Air Jordan XIII took inspiration from Jordan's nickname, Black Cat, reflecting the agility and stealth of a panther. Jordan wore the model throughout the 1997–98 season, which ended with his sixth NBA championship."
    },
    {
        number: 14,
        name: "AIR JORDAN XIV",
        releaseDate: "October 1998",
        price: "$150 USD",
        designer: "Tinker Hatfield",
        image: "images/aj14.png",
        description: "Inspired by Jordan's Ferrari, the Air Jordan XIV featured sleek styling and several small Jumpman logos. Jordan famously wore a prototype during the 1998 Finals, including the shoe he had on when he made his championship-winning Last Shot."
    },
    {
        number: 15,
        name: "AIR JORDAN XV",
        releaseDate: "December 1999",
        price: "$150 USD",
        designer: "Tinker Hatfield",
        image: "images/aj15.png",
        description: "The Air Jordan XV was the first mainline model released after Jordan's second retirement. Its unusual shape was inspired by the X-15 experimental aircraft, with a woven upper and a distinctive extended tongue."
    },
    {
        number: 16,
        name: "AIR JORDAN XVI",
        releaseDate: "February 2001",
        price: "$160 USD",
        designer: "Wilson Smith III",
        image: "images/aj16.png",
        description: "Designed by Wilson Smith III, the Air Jordan XVI introduced a removable magnetic cover that changed the shoe's appearance. Its design drew inspiration from formal boots and reflected Jordan's move from playing basketball into a management role."
    },
    {
        number: 17,
        name: "AIR JORDAN XVII",
        releaseDate: "February 2002",
        price: "$200 USD",
        designer: "Wilson Smith III",
        image: "images/aj17.png",
        description: "The Air Jordan XVII marked Jordan's return to the NBA and incorporated details inspired by his personal interests. Its design referenced his Aston Martin, favourite golf course, and love of jazz music. It was also sold in a distinctive metal briefcase."
    },
    {
        number: 18,
        name: "AIR JORDAN XVIII",
        releaseDate: "February 2003",
        price: "$175 USD",
        designer: "Tate Kuerbis",
        image: "images/aj18.png",
        description: "The Air Jordan XVIII was the final model Jordan wore during his professional basketball career. Designer Tate Kuerbis combined luxury craftsmanship with motorsport influences, including stitching inspired by Italian dress shoes and a racing-inspired heel."
    },
    {
        number: 19,
        name: "AIR JORDAN XIX",
        releaseDate: "March 2004",
        price: "$165 USD",
        designer: "Tate Kuerbis",
        image: "images/aj19.png",
        description: "Inspired by the African black mamba snake, the Air Jordan XIX introduced Tech-Flex technology. Its woven upper was designed to move with the wearer's foot while creating a scale-like appearance."
    },
    {
        number: 20,
        name: "AIR JORDAN XX",
        releaseDate: "February 2005",
        price: "$175 USD",
        designer: "Tinker Hatfield & Mark Smith",
        image: "images/aj20.png",
        description: "Created to celebrate the franchise's twentieth model, the Air Jordan XX featured more than 200 laser-etched details inspired by Jordan's life. These included references to his family, hobbies, and achievements throughout his career."
    },
    {
        number: 21,
        name: "AIR JORDAN XXI",
        releaseDate: "January 2006",
        price: "$175 USD",
        designer: "D'Wayne Edwards",
        image: "images/aj21.png",
        description: "The Air Jordan XXI introduced designer D'Wayne Edwards to the mainline collection. Its understated appearance emphasized premium materials, detailed stitching, and a design influenced by luxury sports cars."
    },
    {
        number: 22,
        name: "AIR JORDAN XX2",
        releaseDate: "January 2007",
        price: "$175 USD",
        designer: "D'Wayne Edwards",
        image: "images/aj22.png",
        description: "Inspired by the F-22 Raptor fighter jet, the Air Jordan XX2 featured a military-influenced design with camouflage details. It also introduced a titanium support plate, connecting the shoe's construction to its twenty-second model number."
    },
    {
        number: 23,
        name: "AIR JORDAN XX3",
        releaseDate: "February 2008",
        price: "$185 USD",
        designer: "Tinker Hatfield & Mark Smith",
        image: "images/aj23.png",
        description: "The Air Jordan XX3 celebrated Michael Jordan's jersey number through personal design details, including his signature, thumbprint, and stitching inspired by DNA. It was also promoted as a more sustainable basketball shoe."
    },
    {
        number: 24,
        name: "AIR JORDAN 2009",
        releaseDate: "January 2009",
        price: "$190 USD",
        designer: "Jason Mayden",
        image: "images/aj24.png",
        description: "Following the twenty-third model, the franchise temporarily moved away from Roman numerals and named its sneakers after their release years. The Air Jordan 2009 highlighted Jordan's defensive abilities and introduced Articulate Propulsion Technology."
    },
    {
        number: 25,
        name: "AIR JORDAN 2010",
        releaseDate: "February 2010",
        price: "$170 USD",
        designer: "Tinker Hatfield",
        image: "images/aj25.png",
        description: "Celebrating the franchise's twenty-fifth anniversary, the Air Jordan 2010 featured transparent panels along its sides. These details represented Jordan's ability to anticipate opponents, while its low-profile construction focused on speed and responsiveness."
    },
    {
        number: 26,
        name: "AIR JORDAN 2011",
        releaseDate: "February 2011",
        price: "$170 USD",
        designer: "Tinker Hatfield & Tom Luedecke",
        image: "images/aj26.png",
        description: "The Air Jordan 2011 introduced interchangeable midsoles that allowed players to choose between different performance setups. It also featured an elephant-print-inspired outsole and became the first Air Jordan model available for customization through NIKEiD."
    },
    {
        number: 27,
        name: "AIR JORDAN 2012",
        releaseDate: "February 2012",
        price: "$180 USD",
        designer: "Tinker Hatfield",
        image: "images/aj27.png",
        description: "The Air Jordan 2012 expanded on the previous model's customization concept with a modular system called One Shoe, Three Flights. Players could combine different inner boots and midsoles to suit their playing styles."
    },
    {
        number: 28,
        name: "AIR JORDAN XX8",
        releaseDate: "February 2013",
        price: "$250 USD",
        designer: "Tinker Hatfield & Josh Heard",
        image: "images/aj28.png",
        description: "The Air Jordan XX8 introduced one of the most unusual silhouettes in the franchise. Its tall zippered outer covering concealed a colourful inner shoe, while its Flight Plate technology focused on improving responsiveness during play."
    },
    {
        number: 29,
        name: "AIR JORDAN XX9",
        releaseDate: "September 2014",
        price: "$225 USD",
        designer: "Tinker Hatfield",
        image: "images/aj29.png",
        description: "The Air Jordan XX9 introduced a fully woven upper, making it the first basketball shoe of its kind. Inspired by Italian tailoring, its construction used different weaving patterns to provide support where players needed it most."
    },
    {
        number: 30,
        name: "AIR JORDAN XXX",
        releaseDate: "February 2016",
        price: "$185 USD",
        designer: "Tinker Hatfield & Mark Smith",
        image: "images/aj30.png",
        description: "The Air Jordan XXX marked the franchise's thirtieth model with a futuristic design inspired by Jordan's athletic ability. Roman numeral branding appeared throughout the shoe, alongside geographic references to Africa and North America."
    },
    {
        number: 31,
        name: "AIR JORDAN XXXI",
        releaseDate: "August 2016",
        price: "$185 USD",
        designer: "Tate Kuerbis",
        image: "images/aj31.png",
        description: "The Air Jordan XXXI looked back to the original Air Jordan I for inspiration. It brought together the Wings emblem, Nike Swoosh, and Jumpman logo on one shoe, while its lightweight Flyweave upper introduced updated materials."
    },
    {
        number: 32,
        name: "AIR JORDAN XXXII",
        releaseDate: "October 2017",
        price: "$185 USD",
        designer: "Tate Kuerbis",
        image: "images/aj32.png",
        description: "Inspired by the Air Jordan II, the Air Jordan XXXII combined Italian-inspired design details with modern performance technology. It also made franchise history by launching in both high-top and low-top versions at the same time."
    },
    {
        number: 33,
        name: "AIR JORDAN XXXIII",
        releaseDate: "September 2018",
        price: "$175 USD",
        designer: "Tate Kuerbis",
        image: "images/aj33.png",
        description: "The Air Jordan XXXIII drew inspiration from the Air Jordan III, including its prominent Jumpman branding. It also introduced Nike FastFit technology, a tightening system designed to secure the foot without traditional laces."
    },
    {
        number: 34,
        name: "AIR JORDAN XXXIV",
        releaseDate: "September 2019",
        price: "$180 USD",
        designer: "Tate Kuerbis",
        image: "images/aj34.png",
        description: "The Air Jordan XXXIV focused on reducing unnecessary weight while maintaining support for basketball players. Its hollowed-out Eclipse Plate was designed to improve movement and provide explosive energy during jumps."
    },
    {
        number: 35,
        name: "AIR JORDAN XXXV",
        releaseDate: "September 2020",
        price: "$180 USD",
        designer: "Tate Kuerbis",
        image: "images/aj35.png",
        description: "Building on the previous model, the Air Jordan XXXV updated the Eclipse Plate to improve stability during side-to-side movement. Its launch colourways also celebrated several international Jordan Brand athletes."
    },
    {
        number: 36,
        name: "AIR JORDAN XXXVI",
        releaseDate: "August 2021",
        price: "$185 USD",
        designer: "Tate Kuerbis",
        image: "images/aj36.png",
        description: "The Air Jordan XXXVI was designed with the goal of creating one of the lightest performance shoes in the franchise. Its breathable woven upper and Zoom Air cushioning focused on flexibility, comfort, and responsiveness."
    },
    {
        number: 37,
        name: "AIR JORDAN XXXVII",
        releaseDate: "September 2022",
        price: "$185 USD",
        designer: "Tate Kuerbis",
        image: "images/aj37.png",
        description: "The Air Jordan XXXVII was engineered around the three stages of jumping: landing, loading, and takeoff. Its cushioning and support systems were designed to assist players through each stage, while its woven upper incorporated patterns inspired by African basket weaving."
    },
    {
        number: 38,
        name: "AIR JORDAN XXXVIII",
        releaseDate: "August 2023",
        price: "$200 USD",
        designer: "Nike Design Team",
        image: "images/aj38.png",
        description: "The Air Jordan XXXVIII included visual references to the Chicago Bulls' first championship three-peat. Details such as the collar stitching and side diamonds represented statistics connected to Jordan's historic 1993 season. It also incorporated recycled materials."
    },
    {
        number: 39,
        name: "AIR JORDAN XXXIX",
        releaseDate: "July 2024",
        price: "$200 USD",
        designer: "Joël Greenspan",
        image: "images/aj39.png",
        description: "The Air Jordan XXXIX combined design influences from earlier models, particularly the Air Jordan IX and XXIX. Its embroidered upper was developed using observations of how Jordan moved during signature basketball actions."
    },
    {
        number: 40,
        name: "AIR JORDAN XL",
        releaseDate: "July 2025",
        price: "$205 USD",
        designer: "Jason Mayden",
        image: "images/aj40.png",
        description: "Celebrating forty years of the franchise, the Air Jordan XL introduced a new combination of ZoomX foam and full-length Zoom Strobel cushioning. Its design also included subtle references to the anniversary through details built around forty-degree angles."
    }
];


// CONNECT HTML ELEMENTS

const shoeName = document.getElementById("shoeName");
const shoeCanvas = document.getElementById("shoeCanvas");
const imagePlaceholder = document.getElementById("imagePlaceholder");

const releaseDate = document.getElementById("releaseDate");
const shoePrice = document.getElementById("shoePrice");
const shoeDesigner = document.getElementById("shoeDesigner");
const shoeDescription = document.getElementById("shoeDescription");

const modelSlider = document.getElementById("modelSlider");
const selectedYear = document.getElementById("selectedYear");
const currentModelNumber = document.getElementById("currentModelNumber");
const timelineModelNumber = document.getElementById("timelineModelNumber");

const shoeContext = shoeCanvas.getContext("2d", {
    willReadFrequently: true
});


// FIXED CANVAS SIZE FOR ALL 40 SHOES

shoeCanvas.width = 1200;
shoeCanvas.height = 900;


// AUTOMATICALLY DETECT AND SIZE THE VISIBLE SHOE

function drawShoeToCanvas(model) {

    const image = new Image();

    image.onload = function () {

        // Create a temporary canvas to inspect the PNG.
        const scanCanvas = document.createElement("canvas");

        scanCanvas.width = image.naturalWidth;
        scanCanvas.height = image.naturalHeight;

        const scanContext = scanCanvas.getContext("2d", {
            willReadFrequently: true
        });

        scanContext.drawImage(image, 0, 0);

        let pixels;

        try {

            pixels = scanContext.getImageData(
                0,
                0,
                scanCanvas.width,
                scanCanvas.height
            ).data;

        } catch (error) {

            // Fallback if the browser cannot inspect the image.
            shoeContext.clearRect(
                0,
                0,
                shoeCanvas.width,
                shoeCanvas.height
            );

            shoeContext.drawImage(
                image,
                0,
                0,
                shoeCanvas.width,
                shoeCanvas.height
            );

            shoeCanvas.style.display = "block";
            imagePlaceholder.style.display = "none";

            return;
        }


        // Find the visible edges of the shoe.

        let minX = scanCanvas.width;
        let minY = scanCanvas.height;
        let maxX = -1;
        let maxY = -1;

        for (let y = 0; y < scanCanvas.height; y++) {

            for (let x = 0; x < scanCanvas.width; x++) {

                const alpha =
                    pixels[(y * scanCanvas.width + x) * 4 + 3];

                if (alpha > 18) {

                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);

                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);

                }
            }
        }


        // If there is no transparency, use the entire image.

        if (maxX < minX || maxY < minY) {

            minX = 0;
            minY = 0;

            maxX = image.naturalWidth - 1;
            maxY = image.naturalHeight - 1;

        }


        // Calculate the visible shoe dimensions.

        const visibleWidth = maxX - minX + 1;
        const visibleHeight = maxY - minY + 1;


        // Add a little breathing room around the shoe.

        const padX = visibleWidth * 0.045;
        const padY = visibleHeight * 0.045;

        const cropX = Math.max(0, minX - padX);
        const cropY = Math.max(0, minY - padY);

        const cropRight = Math.min(
            image.naturalWidth,
            maxX + 1 + padX
        );

        const cropBottom = Math.min(
            image.naturalHeight,
            maxY + 1 + padY
        );

        const cropWidth = cropRight - cropX;
        const cropHeight = cropBottom - cropY;


        // Scale each visible shoe to the same available area.

        const availableWidth = shoeCanvas.width * 0.88;
        const availableHeight = shoeCanvas.height * 0.84;

        const scale = Math.min(
            availableWidth / cropWidth,
            availableHeight / cropHeight
        );

        const drawWidth = cropWidth * scale;
        const drawHeight = cropHeight * scale;

        const drawX = (shoeCanvas.width - drawWidth) / 2;
        const drawY = (shoeCanvas.height - drawHeight) / 2;


        // Clear the canvas and draw the correctly sized shoe.

        shoeContext.clearRect(
            0,
            0,
            shoeCanvas.width,
            shoeCanvas.height
        );

        shoeContext.drawImage(
            image,
            cropX,
            cropY,
            cropWidth,
            cropHeight,
            drawX,
            drawY,
            drawWidth,
            drawHeight
        );

        shoeCanvas.setAttribute("aria-label", model.name);

        shoeCanvas.style.display = "block";
        imagePlaceholder.style.display = "none";

    };


    // SHOW AN ERROR IF AN IMAGE CANNOT BE FOUND.

    image.onerror = function () {

        shoeCanvas.style.display = "none";

        imagePlaceholder.textContent =
            "Image not found: " + model.image;

        imagePlaceholder.style.display = "flex";

        console.error("Could not load image:", model.image);

    };

    image.src = model.image;

}


// UPDATE THE ARCHIVE WHEN A MODEL IS SELECTED.

function updateTimeline() {

    const selectedNumber = Number(modelSlider.value);

    const model = jordanModels.find(
        item => item.number === selectedNumber
    );

    if (!model) return;


    // UPDATE MODEL INFORMATION.

    shoeName.textContent = model.name;

    releaseDate.textContent = model.releaseDate;

    shoePrice.textContent = model.price;

    shoeDesigner.textContent = model.designer;

    shoeDescription.textContent = model.description;


    // DISPLAY THE RELEASE YEAR ABOVE THE SLIDER.

    const year = model.releaseDate.match(/\d{4}/);

    selectedYear.textContent = year ? year[0] : "Unknown";


    // UPDATE THE MODEL COUNTERS.

    currentModelNumber.textContent =
        String(model.number).padStart(2, "0");

    timelineModelNumber.textContent =
        String(model.number).padStart(2, "0");


    // LOAD AND AUTOMATICALLY SIZE THE CORRECT SHOE.

    drawShoeToCanvas(model);

    modelSlider.setAttribute(
        "aria-label",
        "Select Air Jordan model " + model.number + " of 40"
    );

}


// LISTEN FOR SLIDER MOVEMENT.

modelSlider.addEventListener("input", updateTimeline);


// LOAD THE FIRST MODEL WHEN THE WEBSITE OPENS.

updateTimeline();