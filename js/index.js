//Function that executes when the page loads 
window.onload = pageReady;
function pageReady() {
//On click event handlers for the form fields
    $('#skinconcern').on("click", function () {
        $('#ddSkinConcern').show(1000);
    });

    $('#skintype').on("click", function () {
        $('#ddSkinType').show(1000);
    });

    //DOM  elements 
    var inputsection = document.getElementById("input");
    var output = document.getElementById("customRoutine");
    var button = document.getElementById("submit");
    var notesection = document.getElementById("note");
    //buttons
    var printbutton = document.getElementById("print");
    var backbutton = document.getElementById("back");
    var pdfbutton = document.getElementById("pdf");
//--------------------Form submission event handler------------------------------------------------
    button.onclick = processForm;
    function processForm() {
        console.log("formsubmitted");

        // DOM ELEMENTS FROM A FORM
        var formHandler = document.forms.myForm;
        var skinconcern = formHandler.skinconcerns;
        var skintype = formHandler.skintypes;
        var skinconcerndata = skinconcern.value;
        var skintypedata = skintype.value;
        //console.log for the confirmation if the form data was succesfully fetched
        console.log(skinconcerndata);
        console.log(skintypedata);

        // Client side Validation
        if (skinconcerndata == "") {
            $('#skinconcern').find('#skinconcernError').html("Please select the Skin Concern");
            return false;
        }
        if (skintypedata == "0") {
            $('#skintype').find('#skintypeError').html("Please select the Skin Type");
            return false;
        }
//Logic to change the page content without refreshing the page
        $('.headerp').hide();
        //Hides the form part
        inputsection.style.display = "none";
        //displays the customized routine section
        output.style.display = "block";
        notesection.style.display = "block";
        $('body').addClass('bodystyles');

//---------------Code handling ---Possible combinations of user inputs---------------------------------
//Here is the summary of the below possible  combination of  the user input
//  If  skin concern is  ACNE  - skin  type is OILY
//                             - skin type is DRY
//                             - skin type is  NORMAL

//  If  skin concern is CLOGGED PORES  - skin  type is OILY
//                                     - skin type is DRY
//                                     - skin type is  NORMAL

//  If  skin concern is  WRINKLES - skin  type is OILY
//                                - skin type is DRY
//                                - skin type is  NORMAL

// So there sre 9 possible combinations
//Also , mainly the cleansers, toners, moiturizers and sunscreens are going to remain same for all days of the week. Treatment part is going to vary depending on the day of the week.

        //If skinconcern is ACNE
        if (skinconcerndata == "acne") {
            //If skin type is oily
            if (skintypedata == "oily") {
                console.log("skin- acne and oily");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span>Salicylic acid based cleansers: <a href="https://www.muradskincare.ca/product/clarifying-acne-cleanser/">Murad Clarifying Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://www.drjart.com/product/28261/90160/toners-essences/teatreement-toner-for-oily-skin">Dr. Jart+ teatreement Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.kiehls.ca/en/skincare/view-all-skincare/ultra-facial-cream-with-4.5--squalane/622.html">Kielhs</a> or <a href="https://ca.skinfix.com/collections/moisturizers/products/lipid-peptide-cream">Skinbarrier+</a> </span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://beautyofjoseon.com/products/relief-sun-rice-probiotics">Beauty ofJoson</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.peterthomasroth.com/goodbye-acne-complete-acne-treatment-gel-1801069.html">Retinol acne gel</a>'));
                $('#monday,#tuesday,#thursday,#friday,#saturday').find('.evening').find('.treatment').find('span').html($('<span> Recovery day</span>'));
            }
             //If skin type is dry
            else if (skintypedata == "dry") {
                console.log("skin- acne and dry");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://www.kiehls.ca/en/ultra-facial/ultra-facial-cleanser/714.html">Kiehls Ultra Facial Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://www.kiehls.ca/en/skincare/view-all-skincare/calendula-herbal-extract-toner/254.html">Calendula Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.kiehls.ca/en/skincare/view-all-skincare/ultra-facial-cream-with-4.5--squalane/622.html">Kielhs</a> or <a href="https://ca.skinfix.com/collections/moisturizers/products/lipid-peptide-cream">Skinbarrier+</a> </span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://skin1004.com/products/hyalu-cica-water-fit-sun-serum-spf50-pa">Skin 1004</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.muradskincare.ca/product/clarifying-acne-cleanser/">Retinol</a>'));
                $('#tuesday,#saturday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.sephora.com/ca/en/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502">Salicyclic Acid</a>'));
                $('#monday,#thursday,#friday').find('.evening').find('.treatment').find('span').html($('<span> Recovery day</span>'));
            }
             //If skin type is  normal
            else if (skintypedata == "normal") {
                console.log("skin- acne and normal");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://www.cerave.com/skincare/cleansers/foaming-facial-cleanser">CeraVe Foaming Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://anua.us/products/heartleaf-77-soothing-toner">Anua HeartLeaf Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.kiehls.ca/en/skincare/view-all-skincare/ultra-facial-cream-with-4.5--squalane/622.html">Kielhs</a> or <a href="https://puritoen.com/product/oat-in-calming-gel-cream/82/category/25/display/1/">Purito Oat gel </a> </span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://skin1004.com/products/hyalu-cica-water-fit-sun-serum-spf50-pa">Skin 1004</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.muradskincare.ca/product/clarifying-acne-cleanser/">Retinol</a>'));
                $('#tuesday,#saturday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.sephora.com/ca/en/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502">Salicyclic Acid</a>'));
                $('#monday,#thursday,#friday').find('.evening').find('.treatment').find('span').html($('<span> Recovery day</span>'));
            }


        }// end of outer if statement

        //If skinconcern is PORES
        if (skinconcerndata == "pores") {
             //If skin type is oily
            if (skintypedata == "oily") {
                console.log("skin- pores and oily");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://ca.theinkeylist.com/products/salicylic-acid-cleanser">InkeyList SA Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://www.paulaschoice.com/skin-balancing-pore-reducing-toner/135.html">Pore Reducing Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.kiehls.com/skincare/face-moisturizers/ultra-facial-oil-free-refillable-moisturizer/10003.html">Kielhs Oil-Free Moisturizer</a> </span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://www.paulaschoice.com/resist-youth-extending-daily-hydrating-fluid-spf-50/780.html">Pauls Choice Light SPF</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.sephora.com/ca/en/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502">Salicyclic Acid</a>'));
                $('#monday,#tuesday,#thursday,#friday,#saturday').find('.evening').find('.treatment').find('span').html($('<a href="https://anua.us/products/heartleaf-77-toner-pad-160ml">Anua Toner Pads</a>'));
            }
            //If skin type is dry
            else if (skintypedata == "dry") {
                console.log("skin- pores and dry");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://www.youthtothepeople.com/skincare/superfood-cleanser/YTTP-10100.html">Kale Superfood Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://www.glowrecipe.com/products/watermelon-glow-pha-bha-pore-tight-toner">Glow Recipe PHA-BHA Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.biossance.com/p/squalane-and-omega-repair-cream/12766625/">BioEssance</a> or <a href="https://ca.skinfix.com/collections/moisturizers/products/lipid-peptide-cream">Skinbarrier+</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://www.paulaschoice.com/resist-youth-extending-daily-hydrating-fluid-spf-50/780.html">Pauls Choice Light SPF</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://anua.us/products/bha-2-gentle-exfoliating-toner">Anua 2% BHA Gentle Toner</a>'));
                $('#monday,#tuesday,#thursday,#friday,#saturday').find('.evening').find('.treatment').find('span').html($('<span> Recovery day</span>'));
            }
            //If skin type is  normal
            else if (skintypedata == "normal") {
                console.log("skin- pores and normal");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://www.tatcha.com/product/deep-cleanse-exfoliating-cleanser/CC02012T.html">Tatcha Deep Exfoliating Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://www.tatcha.com/product/texture-tonic-liquid-exfoliant/CE02010T.html">Tatcha Exfoliating Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.kiehls.ca/en/skincare/view-all-skincare/ultra-facial-cream-with-4.5--squalane/622.html">Kielhs</span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://skin1004.com/products/hyalu-cica-water-fit-sun-serum-spf50-pa">Skin 1004</a></span>'));
                //treatment suggestion
                $('#tuesday,#saturday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.sephora.com/ca/en/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502">Salicyclic Acid</a>'));
                $('#monday,#wednesday,#thursday,#friday,#sunday').find('.morning,.evening').find('.treatment').find('span').html($('<span> Recovery day</span>'));
            }

        }// end of outer if statement

        //If skinconcern is WRINKLES
        if (skinconcerndata == "wrinkles") {
             //If skin type is oily
            if (skintypedata == "oily") {
                console.log("skin- wrinkles and oily");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://www.kiehls.ca/en/skincare/cleansers-face-scrubs/calendula-deep-cleansing-foaming-face-wash/512.html">Calendula Deep Cleansing Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://www.kiehls.ca/en/skincare/view-all-skincare/calendula-herbal-extract-toner/254.html">Calendula Herbal Extract Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.tatcha.com/product/water-cream/CA05110T.html">Tatcha Oil-Free Moisturizer</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://beautyofjoseon.com/products/relief-sun-rice-probiotics">Beauty ofJoson</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.paulaschoice.com/clinical-1pct-retinol-treatment/801.html">Paulas Choice 1% Retinol</a>'));
                $('#tuesday,#saturday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.paulaschoice.com/skin-perfecting-2pct-bha-liquid-exfoliant/201-2010.html">Paulas Choice BHA </a>'));
                $('#monday,#thursday,#friday').find('.morning,.evening').find('.treatment').find('span').html($('<a href="https://www.paulaschoice.com/pro-collagen-multi-peptide-booster/3020.html">Collage Booster</a>'));
            }
            //If skin type is dry
            else if (skintypedata == "dry") {
                console.log("skin- wrinkles and dry");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://www.tatcha.com/product/rice-wash-creamy-rice-powder-cleanser/CC03011T.html">Tatcha Rice Wash</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://bambeau.ca/products/im-from-rice-toner">Rice Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.tatcha.com/product/dewy-skin-cream-replenishing-and-plumping-moisturizer/CA06110T.html">Tatcha Dewy Skin Cream</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://us.innisfree.com/products/daily-uv-defense-mineral-sunscreen">Innisfree Mineral SPF</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.paulaschoice.com/clinical-1pct-retinol-treatment/801.html">Paulas Choice 1% Retinol</a>'));
                $('#tuesday,#saturday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.sephora.com/ca/en/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502">Salicyclic Acid</a>'));
                $('#monday,#thursday,#friday').find('.morning,.evening').find('.treatment').find('span').html($('<a href="https://www.paulaschoice.com/pro-collagen-multi-peptide-booster/3020.html">Collage Booster</a>'));
            }
             //If skin type is  normal
            else if (skintypedata == "normal") {
                console.log("skin-  wrinkles and normal");
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.cleanser').append($('<span><a href="https://www.cerave.ca/en-ca/skincare/cleansers/hydrating-cream-to-foam-cleanser">CeraVe Hydrating Cleanser</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').append($('<span><a href="https://anua.us/products/heartleaf-77-soothing-toner">Anua HeartLeaf Toner</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').append($('<span><a href="https://www.drunkelephant.com/collections/moisturizers/bora-barrier%E2%84%A2-repair-cream-194249405518.html">Drunk Elephant Barrier Repair</a></span>'));
                $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning').find('.sunscreen').append($('<span><a href="https://www.tatcha.com/product/the-silk-sunscreen-spf-50/CK02011T.html">Tatcha Weightless SPF</a></span>'));
                //treatment suggestion
                $('#wednesday,#sunday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.paulaschoice.com/clinical-1pct-retinol-treatment/801.html">Paulas Choice 1% Retinol</a>'));
                $('#tuesday,#saturday').find('.evening').find('.treatment').find('span').html($('<a href="https://www.sephora.com/ca/en/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502">Salicyclic Acid</a>'));
                $('#monday,#thursday,#friday').find('.morning,.evening').find('.treatment').find('span').html($('<a href="https://www.paulaschoice.com/pro-collagen-multi-peptide-booster/3020.html">Collage Booster</a>'));
            }
        }// end of outer if statement

        return false;
    }

    //-----------------------------------Printing of the Content-----------------------------------------------------
    printbutton.onclick = printContent;
    function printContent() {
        //get the element from the html having id days
        var data = document.getElementById("days");
        //opens up a new window where first parameter ,means the url of the page which is none so it opens up the 
        // blank page and the second parameter specifies that the new window will open in a new tab 
        var printWindow = window.open('', '_blank');
        printWindow.document.write('<strong>Your Customized Routine</strong>');
        //This will write html content of the 'data' element  to this new window openning in new tab
        printWindow.document.write(data.innerHTML);
        //cloes the document writing stream of the new window
        printWindow.document.close();
        //triggers the print dialog of the new window, allowing the user to print the content which is 'data' element's content
        printWindow.print();
    }// end of printContent 

    //-------------------------------- Back Button Logic-----------------------------------------------------------
    backbutton.onclick = backPage;
    function backPage() {
    //Shows the content of the Form page and hides the content of the  customized routine section
        $('.headerp').show();
        inputsection.style.display = "block";
        output.style.display = "none";
        notesection.style.display = "none";
        $('body').removeClass('bodystyles');
//This logic prevents the same data from getting appended into span tags that were generated after each Form submission 
//when user moves back and forth between the two sections of the page - Form section and Customized Routine section
        $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday')
            .find('.morning,.evening').find('.cleanser').find('span').remove();

        $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.moisturize').find('span').remove();

        $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday').find('.morning,.evening').find('.toner').find('span').remove();

        $('#monday,#tuesday,#wednesday,#thursday,#friday,#saturday,#sunday')
            .find('.morning').find('.sunscreen').find('span').remove();

       
    }
     //-------------------------------- Download PDF Button Logic-----------------------------------------------------------
    //For this fucntion to work a new script tag with CDN link to jsPDF library has been added to the index.html
     pdfbutton.onclick = downloadpdf;
    function downloadpdf() {
        // Create a new jsPDF instance
        const doc = new jsPDF();
        //data that need to be added in the pdf -> customized routine  from the days html element
        var data = document.getElementById("days");
        // Add the current html element to the PDF with margin-left and margin-top= 15px;
        doc.fromHTML(data, 15, 15);
        // Save the PDF 
        doc.save('Customized SkinRoutine.pdf');
    };

}//End pageReady function
































