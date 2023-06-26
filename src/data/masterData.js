import Abamune from "../images/products/abamune.gif";
import GenericLidoderm from "../images/products/GenericLidoderm.gif";
import GenericOraqixGel from "../images/products/GenericOraqixGel.gif";
import GenericCopegus from "../images/products/GenericCopegus.gif";
import GenericSymmetrel from "../images/products/GenericSymmetrel.gif";
import Duovir from "../images/products/duovir.gif";
import genericEpivir from "../images/products/genericepivir.gif";
import genericRetrovir from "../images/products/genericRetrovir.gif";
import genericSustiva from "../images/products/genericSustiva.gif";
import Lopimune from "../images/products/Lopimune.gif";
import Tenvir from "../images/products/Tenvir.gif";
import Viraday from "../images/products/Viraday.gif";
import genericAllopurinol from "../images/products/genericAllopurinol.gif";
import genericCytotec from "../images/products/genericCytotec.gif";
import genericNexium from "../images/products/genericNexium.gif";
import genericPepcid from "../images/products/genericPepcid.gif";
import genericPrilosec from "../images/products/genericPrilosec.gif";
import genericProtonix from "../images/products/genericProtonix.gif";
import genericReglan from "../images/products/genericReglan.gif";
import genericZantac from "../images/products/genericZantac.gif";
import genericZyloprim from "../images/products/genericZyloprim.gif";
import adapenGel from "../images/products/adapenGel.gif";

export const masterData = [
  {
    productId: 0,
    name: "Abamune",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Abacavir",
    rating: 120,
    star: 5,
    price: "97.36",
    type: "bottle",
    typeName: "Tab",
    ManufacturedBy: "Cipla",
    image: Abamune,
    productCount: 30,
    productVariants: [
      {
        mg: 300,
        unit: "mg",
        bottle: [
          { count: 1, price: 104.81, pricePerBottle: 104.81 },
          { count: 2, price: 210.11, pricePerBottle: 100.56 },
          { count: 4, price: 393.7, pricePerBottle: 98.43 },
          { count: 8, price: 778.89, pricePerBottle: 97.36 },
        ],
      },
    ],
    prescription:
      "The combination of abacavir, dolutegravir, and lamivudine is used alone or along with other medications to treat HIV infection. Abacavir and lamivudine are in a class of medications called nucleoside analogue reverse transcriptase inhibitors (NRTIs) and dolutegravir is in a class of medications called integrase strand transfer inhibitors (INSTIs). They work by decreasing the amount of HIV in your blood and increasing the number of immune cells that help fight infections in your body. Although abacavir, dolutegravir, and lamivudine will not cure HIV, these medications may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of getting or transmitting the HIV virus to other people.",
    howToUse:
      "The combination of abacavir, dolutegravir, and lamivudine comes as a tablet to take by mouth. It is usually taken once daily with or without food. Take abacavir, dolutegravir, and lamivudine at around the same time every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take abacavir, dolutegravir, and lamivudine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Abacavir, dolutegravir, and lamivudine help to control HIV infection but do not cure it. Continue to take abacavir, dolutegravir, and lamivudine even if you feel well. Do not stop taking abacavir, dolutegravir, and lamivudine without talking to your doctor.",
  },
  {
    productId: 1,
    name: "Abamune L",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Abacavir + Lamivudine",
    rating: 140,
    star: 5,
    price: "186.30",
    type: "bottle",
    typeName: "Tab",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 30,
    productVariants: [
      {
        mg: 300,
        unit: "mg",
        bottle: [
          { count: 1, price: 104.81, pricePerBottle: 104.81 },
          { count: 2, price: 210.11, pricePerBottle: 100.56 },
          { count: 4, price: 393.7, pricePerBottle: 98.43 },
        ],
      },
      {
        mg: 600,
        unit: "mg",
        bottle: [
          { count: 1, price: 192.68, pricePerBottle: 192.68 },
          { count: 2, price: 376.85, pricePerBottle: 188.43 },
          { count: 4, price: 745.19, pricePerBottle: 186.3 },
        ],
      },
    ],
    prescription:
      "The combination of abacavir, lamivudine and zidovudine is used alone or along with other medications to treat human immunodeficiency virus (HIV) infection. Abacavir, lamivudine and zidovudine are in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). They work by decreasing the amount of HIV in the blood. Although the combination of abacavir, lamivudine and zidovudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "The combination of abacavir, lamivudine, and zidovudine comes as a tablet to take by mouth. It is usually taken with or without food two times a day. Take abacavir, lamivudine, and zidovudine at around the same times every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take abacavir, lamivudine, and zidovudine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Abacavir, lamivudine, and zidovudine helps to control HIV infection but does not cure it. Continue to take abacavir, lamivudine, and zidovudine even if you feel well. Do not stop taking abacavir, lamivudine, and zidovudine without talking to your doctor. If you stop taking abacavir, lamivudine, and zidovudine or skip doses, your condition may become more difficult to treat or you could have an allergic reaction when restarting the medication (See Important Warning section).",
  },
  {
    productId: 2,
    name: "Atazor",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Atazanavir",
    rating: 98,
    star: 5,
    price: "156.26",
    type: "tube",
    typeName: "Caps",
    ManufacturedBy: "Emcure Pharmaceuticals Ltd.",
    image: "",
    productCount: 30,
    productVariants: [
      {
        mg: 300,
        unit: "mg",
        bottle: [
          { count: 1, price: 162.64, pricePerBottle: 162.64 },
          { count: 2, price: 316.77, pricePerBottle: 158.39 },
          { count: 4, price: 625.02, pricePerBottle: 156.26 },
        ],
      },
    ],
    prescription:
      "Atazanavir is used along with other medications, such as ritonavir (Norvir), to treat human immunodeficiency virus (HIV) infection in adults and children who are at least 3 months of age and weigh at least 22 lb (10 kg). Atazanavir is in a class of medications called protease inhibitors. It works by decreasing the amount of HIV in the blood. Although atazanavir does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting the HIV virus to other people.",
    howToUse:
      "Atazanavir comes as a capsule and as a powder to take by mouth. The capsule and powder are usually taken once a day with a meal or snack. Take atazanavir at around the same time every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take atazanavir exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.  You will take other medications for HIV while you are taking atazanavir. Your doctor will tell you whether these medications should be taken at the same time as atazanavir, or several hours before or after you take atazanavir. Follow this schedule carefully, and ask your doctor or pharmacist if you have questions about the times you should take your medications.       Atazanavir powder must be taken with ritonavir (Norvir). Do not take atazanavir powder without ritonavir (Norvir). Swallow the capsules whole; do not split, chew, or open them. If you are unable to swallow the capsules, tell your doctor or pharmacist.",
    additionalDetials:
      "Atazanavir powder may be added to foods such as applesauce or yogurt, or liquids such as water, milk, or infant formula. Mix well, and take all of the mixture right away in order to take the full dose. If mixed with water, eat a snack or meal right away after taking the powder mixture. For infants (older than 3 months of age) unable to drink from a cup, the powder can be mixed with infant formula and given with an oral dosing syringe; do not give the mixture to the infant in a baby bottle. If the mixture is not taken immediately it must be stored at room temperature and taken within 1 hour. Carefully read the manufacturer's instructions that describe how to mix and take a dose of atazanavir. Be sure to ask your pharmacist or doctor if you have any questions about how to mix or take this medication.Talk to the doctor about what to do if your baby vomits, spits up, or only takes part of the dose of atazanavir.      Atazanavir helps to control HIV infection, but it does not cure it. Continue to take atazanavir even if you feel well. Do not stop taking atazanavir without talking to your doctor. When your supply of atazanavir starts to run low, get more from your doctor or pharmacist. If you stop taking atazanavir or skip doses, your condition may become more difficult to treat. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient. Read this information carefully and ask your doctor or pharmacist if you have any questions",
  },
  {
    productId: 3,
    name: "Dinex - EC",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Didanosine",
    rating: 74,
    star: 4,
    price: "203.41",
    type: "bottle",
    typeName: "Caps",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: 400,
        unit: "mg",
        bottle: [
          { count: 1, price: 209.79, pricePerBottle: 209.79 },
          { count: 2, price: 411.06, pricePerBottle: 205.53 },
          { count: 4, price: 813.62, pricePerBottle: 203.41 },
        ],
      },
    ],
    prescription:
      "Didanosine is used along with other medications to treat human immunodeficiency virus (HIV) infection. Didanosine is in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). It works by decreasing the amount of HIV in the blood. Although didanosine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "Didanosine comes as extended-release (long-acting) capsules and as an oral solution (liquid) to take by mouth. The oral solution is usually taken once or twice a day 30 minutes before or 2 hours after eating. The extended-release capsules are usually taken once a day on an empty stomach. Take didanosine around the same time(s) every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take didanosine exactly as directed. Do not take more or less of it, or take it more often than prescribed by your doctor.",
    additionalDetials:
      "If you are using the extended-release capsules, swallow them whole; do not split, chew, crush, break, or dissolve them. Tell your doctor if you are unable to swallow the extended-release capsules whole.  If you are taking the oral solution, you should shake it well before each use to mix the medication evenly. Use a dose-measuring spoon or cup to measure the correct amount of liquid for each dose, not a regular household spoon.Didanosine controls HIV infection but does not cure it. Continue to take didanosine even if you feel well. Do not stop taking didanosine without talking to your doctor. If you miss doses or stop taking didanosine, your condition may become more difficult to treat.",
  },
  {
    productId: 4,
    name: "Duovir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lamivudine + Zidovudine",
    rating: 82,
    star: 4,
    price: "143.75",
    type: "bottle",
    typeName: "Caps",
    ManufacturedBy: "Cipla",
    image: Duovir,
    productCount: 100,
    productVariants: [
      {
        mg: "150mg / 300",
        unit: "mg",
        bottle: [
          { count: 1, price: 153.63, pricePerBottle: 153.63 },
          { count: 2, price: 292.44, pricePerBottle: 146.22 },
          { count: 3, price: 431.26, pricePerBottle: 143.75 },
        ],
      },
    ],
    prescription:
      "The combination of lamivudine and zidovudine is used along with other medications to treat human immunodeficiency virus (HIV) infection. Lamivudine and zidovudine are in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). They work by decreasing the amount of HIV in the blood. Although the combination of lamivudine and zidovudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "The combination of lamivudine and zidovudine comes as a tablet to take by mouth. It is usually taken twice a day with or without food. Take lamivudine and zidovudine at around the same times every day. Follow the directions on your prescription label carefully and ask your doctor or pharmacist to explain any part you do not understand. Take this medication exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine and zidovudine controls HIV infection but does not cure it. Continue to take lamivudine and zidovudine even if you feel well. Do not stop taking lamivudine and zidovudine without talking to your doctor. When your supply of lamivudine and zidovudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine and zidovudine, your condition may become more difficult to treat.",
  },
  {
    productId: 5,
    name: "Duovir N",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lamivudine + Zidovudine + Nevirapine",
    rating: 104,
    star: 5,
    price: "75.19",
    type: "bottle",
    typeName: "Caps",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "150mg / 300mg / 200",
        unit: "mg",
        bottle: [
          { count: 1, price: 88.15, pricePerBottle: 88.15 },
          { count: 2, price: 161.48, pricePerBottle: 80.74 },
          { count: 4, price: 308.15, pricePerBottle: 77.04 },
          { count: 8, price: 601.48, pricePerBottle: 75.19 },
        ],
      },
    ],
    prescription:
      "The combination of lamivudine and zidovudine is used along with other medications to treat human immunodeficiency virus (HIV) infection. Lamivudine and zidovudine are in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). They work by decreasing the amount of HIV in the blood. Although the combination of lamivudine and zidovudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "The combination of lamivudine and zidovudine comes as a tablet to take by mouth. It is usually taken twice a day with or without food. Take lamivudine and zidovudine at around the same times every day. Follow the directions on your prescription label carefully and ask your doctor or pharmacist to explain any part you do not understand. Take this medication exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine and zidovudine controls HIV infection but does not cure it. Continue to take lamivudine and zidovudine even if you feel well. Do not stop taking lamivudine and zidovudine without talking to your doctor. When your supply of lamivudine and zidovudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine and zidovudine, your condition may become more difficult to treat.",
  },
  {
    productId: 6,
    name: "Efavir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Efavirenz",
    rating: 150,
    star: 4,
    price: "49.85",
    type: "bottle",
    typeName: "Caps",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "600",
        unit: "mg",
        bottle: [
          { count: 1, price: 143.66, pricePerBottle: 143.66 },
          { count: 2, price: 278.81, pricePerBottle: 139.41 },
          { count: 4, price: 549.11, pricePerBottle: 137.28 },
        ],
      },
      {
        mg: "200",
        unit: "mg",
        bottle: [
          { count: 1, price: 57.83, pricePerBottle: 57.83 },
          { count: 2, price: 107.15, pricePerBottle: 53.58 },
          { count: 4, price: 205.79, pricePerBottle: 51.45 },
          { count: 8, price: 403.06, pricePerBottle: 50.38 },
          { count: 16, price: 797.62, pricePerBottle: 49.85 },
        ],
      },
    ],
    prescription:
      "The combination of lamivudine and zidovudine is used along with other medications to treat human immunodeficiency virus (HIV) infection. Lamivudine and zidovudine are in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). They work by decreasing the amount of HIV in the blood. Although the combination of lamivudine and zidovudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "The combination of lamivudine and zidovudine comes as a tablet to take by mouth. It is usually taken twice a day with or without food. Take lamivudine and zidovudine at around the same times every day. Follow the directions on your prescription label carefully and ask your doctor or pharmacist to explain any part you do not understand. Take this medication exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine and zidovudine controls HIV infection but does not cure it. Continue to take lamivudine and zidovudine even if you feel well. Do not stop taking lamivudine and zidovudine without talking to your doctor. When your supply of lamivudine and zidovudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine and zidovudine, your condition may become more difficult to treat.",
  },
  {
    productId: 7,
    name: "Generic Combivir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lamivudine + Zidovudine",
    rating: 196,
    star: 5,
    price: "1.99",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "150 mg / 300",
        unit: "mg",
        bottle: [
          { count: 30, price: 67.23, pricePerBottle: 2.24 },
          { count: 60, price: 125.96, pricePerBottle: 2.1 },
          { count: 120, price: 243.4, pricePerBottle: 2.03 },
          { count: 240, price: 478.3, pricePerBottle: 1.99 },
          { count: 300, price: 595.74, pricePerBottle: 1.99 },
        ],
      },
    ],
    prescription:
      "The combination of lamivudine and zidovudine is used along with other medications to treat human immunodeficiency virus (HIV) infection. Lamivudine and zidovudine are in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). They work by decreasing the amount of HIV in the blood. Although the combination of lamivudine and zidovudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "The combination of lamivudine and zidovudine comes as a tablet to take by mouth. It is usually taken twice a day with or without food. Take lamivudine and zidovudine at around the same times every day. Follow the directions on your prescription label carefully and ask your doctor or pharmacist to explain any part you do not understand. Take this medication exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine and zidovudine controls HIV infection but does not cure it. Continue to take lamivudine and zidovudine even if you feel well. Do not stop taking lamivudine and zidovudine without talking to your doctor. When your supply of lamivudine and zidovudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine and zidovudine, your condition may become more difficult to treat.",
  },
  {
    productId: 8,
    name: "Generic Epivir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lamivudine",
    rating: 144,
    star: 5,
    price: "1.90",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacturer",
    image: genericEpivir,
    productCount: 100,
    productVariants: [
      {
        mg: "150",
        unit: "mg",
        bottle: [
          { count: 30, price: 70.37, pricePerBottle: 2.35 },
          { count: 60, price: 125.93, pricePerBottle: 2.1 },
          { count: 120, price: 237.04, pricePerBottle: 1.98 },
          { count: 240, price: 459.26, pricePerBottle: 1.91 },
          { count: 300, price: 570.37, pricePerBottle: 1.9 },
        ],
      },
    ],
    prescription:
      "Lamivudine (Epivir) is used along with other medications to treat human immunodeficiency virus (HIV) infection in adults and children 3 months of age and older. Lamivudine (Epivir-HBV) is used to treat hepatitis B infection. Lamivudine is in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). It works by decreasing the amount of HIV and hepatitis B in the blood. Although lamivudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of transmitting (spreading) the HIV or hepatitis B virus to other people.",
    howToUse:
      "Lamivudine comes as a tablet and oral solution (liquid) to take by mouth. Lamivudine (Epivir) is usually taken once or twice a day with or without food. Lamivudine (Epivir-HBV) is usually taken once a day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take lamivudine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine controls HIV and hepatitis B infection and but does not cure them. Continue to take lamivudine even if you feel well. Do not stop taking lamivudine without talking to your doctor. When your supply of lamivudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine, your condition may become more difficult to treat.",
  },
  {
    productId: 9,
    name: "Generic Retrovir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Zidovudine",
    rating: 49,
    star: 4,
    price: "2.72",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacturer",
    image: genericRetrovir,
    productCount: 100,
    productVariants: [
      {
        mg: "300",
        unit: "mg",
        bottle: [
          { count: 30, price: 101.62, pricePerBottle: 3.39 },
          { count: 60, price: 192.43, pricePerBottle: 3.21 },
          { count: 120, price: 374.05, pricePerBottle: 3.12 },
          { count: 240, price: 737.3, pricePerBottle: 3.07 },
        ],
      },
      {
        mg: "300",
        unit: "mg",
        bottle: [
          { count: 30, price: 101.62, pricePerBottle: 3.39 },
          { count: 60, price: 192.43, pricePerBottle: 3.21 },
          { count: 120, price: 374.05, pricePerBottle: 3.12 },
          { count: 240, price: 737.3, pricePerBottle: 3.07 },
        ],
      },
    ],
    prescription:
      "Lamivudine (Epivir) is used along with other medications to treat human immunodeficiency virus (HIV) infection in adults and children 3 months of age and older. Lamivudine (Epivir-HBV) is used to treat hepatitis B infection. Lamivudine is in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). It works by decreasing the amount of HIV and hepatitis B in the blood. Although lamivudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of transmitting (spreading) the HIV or hepatitis B virus to other people.",
    howToUse:
      "Lamivudine comes as a tablet and oral solution (liquid) to take by mouth. Lamivudine (Epivir) is usually taken once or twice a day with or without food. Lamivudine (Epivir-HBV) is usually taken once a day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take lamivudine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine controls HIV and hepatitis B infection and but does not cure them. Continue to take lamivudine even if you feel well. Do not stop taking lamivudine without talking to your doctor. When your supply of lamivudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine, your condition may become more difficult to treat.",
  },
  {
    productId: 10,
    name: "Generic Sustiva",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Efavirenz",
    rating: 72,
    star: 4,
    price: "3.67",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacturer",
    image: genericSustiva,
    productCount: 100,
    productVariants: [
      {
        mg: "200",
        unit: "mg",
        bottle: [
          { count: 30, price: 121.29, pricePerBottle: 4.04 },
          { count: 60, price: 229.68, pricePerBottle: 3.83 },
          { count: 120, price: 880.0, pricePerBottle: 3.67 },
          { count: 240, price: 737.3, pricePerBottle: 3.07 },
        ],
      },
      {
        mg: "600",
        unit: "mg",
        bottle: [
          { count: 30, price: 234.81, pricePerBottle: 7.83 },
          { count: 60, price: 454.81, pricePerBottle: 7.58 },
          { count: 120, price: 894.81, pricePerBottle: 7.46 },
        ],
      },
    ],
    prescription:
      "The combination of efavirenz, emtricitabine, and tenofovir is used is used alone or along with other medications to treat human immunodeficiency virus (HIV) infection in adults and children 12 years of age or older. Efavirenz is in a class of medications non-nucleoside reverse transcriptase inhibitors (NNRTIs). Emtricitabine and tenofovir are in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). They work by decreasing the amount of HIV in the body. Although efavirenz, emtricitabine, and tenofovir will not cure HIV, these medications may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of getting or transmitting the HIV virus to other people.",
    howToUse:
      "The combination of efavirenz, emtricitabine, and tenofovir comes as a tablet to take by mouth. It is usually taken once a day with water on an empty stomach (at least 1 hour before or 2 hours after a meal). Take efavirenz, emtricitabine, and tenofovir at around the same time every day. Taking efavirenz emtricitabine, and tenofovir at bedtime may make certain side effects less bothersome. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take efavirenz, emtricitabine, and tenofovir exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Continue to take efavirenz, emtricitabine, and tenofovir even if you feel well. Do not stop taking efavirenz, emtricitabine, and tenofovir without talking to your doctor. If you stop taking efavirenz, emtricitabine, and tenofovir even for a short time, or skip doses, the virus may become resistant to medications and may be harder to treat.   Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 11,
    name: "Isentress",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Raltegravir",
    rating: 145,
    star: 4,
    price: "640.43",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "MSD",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "400",
        unit: "mg",
        bottle: [{ count: 60, price: 640.43, pricePerBottle: 640.43 }],
      },
    ],
    prescription:
      "Raltegravir is used along with other medications to treat human immunodeficiency virus (HIV) infection. Raltegravir is in a class of medications called HIV integrase inhibitors. It works by decreasing the amount of HIV in the blood. Although raltegravir does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "Raltegravir comes as a tablet, a chewable tablet, and as an oral suspension to take by mouth. Raltegravir (Isentress®) tablets, chewable tablets, and oral suspension are usually taken with or without food twice a day. Raltegravir (Isentress® HD) tablets are usually taken with or without food once a day. Take raltegravir at the same time(s) every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take raltegravir exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Swallow the tablets whole; do not split, chew, or crush them. If you are taking the chewable tablets, you may chew or swallow them whole. Before you take raltegravir oral suspension for the first time, read the written instructions that come with it that describe how to prepare the medication. Use the dosing syringe provided to measure the amount of medication that your doctor has prescribed. Use the mixture within 30 minutes of preparation and discard any remaining suspension.",
    additionalDetials:
      "Continue to take raltegravir even if you feel well. Do not stop taking raltegravir or your other anti-HIV medications without talking to your doctor. If you stop taking raltegravir or skip doses, your condition may become worse and the virus may become resistant to treatment. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 12,
    name: "Lamivir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lamivudine",
    rating: 102,
    star: 5,
    price: "1.38",
    type: "tab",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: genericEpivir,
    productCount: 100,
    productVariants: [
      {
        mg: "150",
        unit: "mg",
        bottle: [
          { count: 30, price: 54.81, pricePerBottle: 1.83 },
          { count: 60, price: 94.81, pricePerBottle: 1.58 },
          { count: 120, price: 174.81, pricePerBottle: 1.46 },
          { count: 240, price: 334.81, pricePerBottle: 1.4 },
          { count: 300, price: 414.81, pricePerBottle: 1.38 },
        ],
      },
    ],
    prescription:
      "Lamivudine (Epivir) is used along with other medications to treat human immunodeficiency virus (HIV) infection in adults and children 3 months of age and older. Lamivudine (Epivir-HBV) is used to treat hepatitis B infection. Lamivudine is in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). It works by decreasing the amount of HIV and hepatitis B in the blood. Although lamivudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of transmitting (spreading) the HIV or hepatitis B virus to other people.",
    howToUse:
      "Lamivudine comes as a tablet and oral solution (liquid) to take by mouth. Lamivudine (Epivir) is usually taken once or twice a day with or without food. Lamivudine (Epivir-HBV) is usually taken once a day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take lamivudine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine controls HIV and hepatitis B infection and but does not cure them. Continue to take lamivudine even if you feel well. Do not stop taking lamivudine without talking to your doctor. When your supply of lamivudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine, your condition may become more difficult to treat.",
  },
  {
    productId: 13,
    name: "Lamivir HBV",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lamivudine",
    rating: 105,
    star: 5,
    price: "1.53",
    type: "tab",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "100",
        unit: "mg",
        bottle: [
          { count: 30, price: 59.26, pricePerBottle: 1.98 },
          { count: 60, price: 103.7, pricePerBottle: 1.73 },
          { count: 120, price: 192.59, pricePerBottle: 1.6 },
          { count: 240, price: 370.37, pricePerBottle: 1.54 },
          { count: 300, price: 459.26, pricePerBottle: 1.53 },
        ],
      },
    ],
    prescription:
      "Lamivudine (Epivir) is used along with other medications to treat human immunodeficiency virus (HIV) infection in adults and children 3 months of age and older. Lamivudine (Epivir-HBV) is used to treat hepatitis B infection. Lamivudine is in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). It works by decreasing the amount of HIV and hepatitis B in the blood. Although lamivudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of transmitting (spreading) the HIV or hepatitis B virus to other people.",
    howToUse:
      "Lamivudine comes as a tablet and oral solution (liquid) to take by mouth. Lamivudine (Epivir) is usually taken once or twice a day with or without food. Lamivudine (Epivir-HBV) is usually taken once a day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take lamivudine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Lamivudine controls HIV and hepatitis B infection and but does not cure them. Continue to take lamivudine even if you feel well. Do not stop taking lamivudine without talking to your doctor. When your supply of lamivudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking lamivudine, your condition may become more difficult to treat.",
  },
  {
    productId: 14,
    name: "Lopimune",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lopinavir + Ritonavir",
    rating: 189,
    star: 5,
    price: "189.90",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: Lopimune,
    productCount: 100,
    productVariants: [
      {
        mg: "60 tabs / bottle 200mg/ 50",
        unit: "mg",
        bottle: [
          { count: 1, price: 195.57, pricePerBottle: 195.57 },
          { count: 2, price: 382.64, pricePerBottle: 191.32 },
          { count: 3, price: 569.7, pricePerBottle: 189.9 },
        ],
      },
    ],
    prescription:
      "The combination of lopinavir and ritonavir is used with other medications to treat human immunodeficiency virus (HIV) infection. Lopinavir and ritonavir are in a class of medications called protease inhibitors. They work by decreasing the amount of HIV in the blood. When lopinavir and ritonavir are taken together, ritonavir also helps to increase the amount of lopinavir in the body so that the medication will have a greater effect. Although lopinavir and ritonavir will not cure HIV, these medications may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting the HIV virus to other people.",
    howToUse:
      "The combination of lopinavir and ritonavir comes as a tablet and a solution (liquid) to take by mouth. It is usually taken twice a day, but may be taken once a day by certain adults. The solution must be taken with food. The tablets may be taken with or without food. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take lopinavir and ritonavir exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Swallow the tablets whole; do not split, chew, or crush them.",
    additionalDetials:
      "If you are using the solution, shake it well before each use to mix the medication evenly. Use a dose-measuring spoon or cup to measure the correct amount of liquid for each dose, not a regular household spoon. Continue to take lopinavir and ritonavir even if you feel well. Do not stop taking lopinavir and ritonavir without talking to your doctor. If you miss doses, take less than the prescribed amount, or stop taking lopinavir and ritonavir, your condition may become more difficult to treat.",
  },
  {
    productId: 15,
    name: "Nevimune",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Nevirapine",
    rating: 162,
    star: 5,
    price: "17.22",
    type: "pack",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "200",
        unit: "mg",
        bottle: [
          { count: 1, price: 31.11, pricePerBottle: 31.11 },
          { count: 2, price: 47.41, pricePerBottle: 23.71 },
          { count: 4, price: 80.0, pricePerBottle: 20.0 },
          { count: 8, price: 145.19, pricePerBottle: 18.15 },
          { count: 16, price: 275.56, pricePerBottle: 17.22 },
        ],
      },
    ],
    prescription:
      "Nevirapine is used along with other medications to treat human immunodeficiency virus (HIV) infection in adults and children 15 days of age and older. Nevirapine should not be used to treat healthcare workers or other individuals exposed to HIV infection after contact with HIV-contaminated blood, tissues, or other body fluids. Nevirapine is in a class of medications called non-nucleoside reverse transcriptase inhibitors (NNRTIs). It works by decreasing the amount of HIV in the blood. Although nevirapine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "Nevirapine comes as a tablet, an extended-release tablet, and a suspension (liquid) to take by mouth with or without food. The tablet and suspension are usually taken once a day for 2 weeks and then twice a day after the first 2 weeks. The extended-release tablet is usually taken once a day, following at least two weeks of treatment with regular nevirapine tablets or suspension. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take nevirapine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Swallow nevirapine with liquids such as water, milk, or soda. Swallow the extended-release tablets whole; do not split, chew, or crush them. Shake the liquid gently before each use to mix the medication evenly. Use an oral dosing cup or dosing syringe to measure your dose. It is best to use a syringe, especially if your dose is less than 5 mL (1 teaspoon). If you use a dosing cup, first drink all of the medication that you measured in the dosing cup. Then fill the dosing cup with water and drink the water to be sure that you get your full dose",
    additionalDetials:
      "Nevirapine may control HIV but will not cure it. Continue to take nevirapine even if you feel well. Do not stop taking nevirapine or any of the other medications that you are taking to treat HIV or AIDS without talking to your doctor. Your doctor will probably tell you to stop taking your medications in a certain order. If you miss doses or stop taking nevirapine, your condition may become more difficult to treat. If you do not take nevirapine for 7 days or longer, do not start taking it again without talking to your doctor. Your doctor will start you on a low dose of nevirapine, and increase your dose after 2 weeks.",
  },
  {
    productId: 16,
    name: "Ritomune",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Ritonavir",
    rating: 164,
    star: 5,
    price: "127.60",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "100",
        unit: "mg",
        bottle: [
          { count: 1, price: 133.28, pricePerBottle: 133.28 },
          { count: 2, price: 258.04, pricePerBottle: 129.02 },
          { count: 3, price: 382.81, pricePerBottle: 127.6 },
        ],
      },
    ],
    prescription:
      "The combination of ombitasvir, paritaprevir, ritonavir, and dasabuvir is used alone or in combination with ribavirin (Copegus, Rebetol) to treat chronic (long-term) hepatitis C infection (swelling of the liver caused by a virus). Ombitasvir is a hepatitis C virus (HCV) NS5A inhibitor. It works by stopping the virus that causes hepatitis C from spreading inside the body. Paritaprevir is a protease inhibitor. It works by decreasing the amount of HCV in the body. Ritonavir is a protease inhibitor. It helps to increase the amount of paritaprevir in the body so that the medication will have a greater effect. Dasabuvir is a non-nucleoside NS5B polymerase inhibitor. It works by decreasing the amount of HCV in the body. It is not known if ombitasvir, paritaprevir, ritonavir, or dasabuvir prevent the spread of hepatitis C to other people.",
    howToUse:
      "The combination of ombitasvir, paritaprevir, ritonavir, and dasabuvir comes as tablets to take by mouth. This medication comes in a package with 28 days of medication. Each daily dose package has different types of tablets, two containing the combination of ombitasvir, paritaprevir, and ritonavir and two others containing dasabuvir. Take ombitasvir, paritaprevir, and ritonavir (2 tablets) and dasabuvir (1 tablet) every morning with food, then take dasabuvir (1 tablet) every evening with food. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take ombitasvir, paritaprevir, ritonavir, and dasabuvir at around the same time(s) every day. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "The combination of ombitasvir, paritaprevir, ritonavir, and dasabuvir controls HCV but does not cure it. Continue to take ombitasvir, paritaprevir, ritonavir, and dasabuvir even if you feel well. The length of your treatment (12 to 24 weeks) depends on your condition, how well you respond to the medication, and whether you experience severe side effects. Do not stop taking ombitasvir, paritaprevir, ritonavir, and dasabuvir without talking to your doctor. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 17,
    name: "Synthivan",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Atazanavir + Ritonavir",
    rating: 145,
    star: 5,
    price: "350.97",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "60 tabs / bottle 200mg/ 50",
        unit: "mg",
        bottle: [
          { count: 1, price: 358.37, pricePerBottle: 358.37 },
          { count: 2, price: 701.93, pricePerBottle: 350.97 },
        ],
      },
    ],
    prescription: "",
    howToUse: "",
    additionalDetials: "",
  },
  {
    productId: 18,
    name: "Tenvir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Tenofovir disoproxil fumarate",
    rating: 125,
    star: 4,
    price: "172.92",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: Tenvir,
    productCount: 100,
    productVariants: [
      {
        mg: "300",
        unit: "mg",
        bottle: [
          { count: 1, price: 184.07, pricePerBottle: 184.07 },
          { count: 2, price: 353.33, pricePerBottle: 176.67 },
          { count: 4, price: 691.85, pricePerBottle: 172.69 },
        ],
      },
    ],
    prescription: "",
    howToUse: "",
    additionalDetials: "",
  },
  {
    productId: 19,
    name: "Tenvir-EM",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Tenofovir Disoproxil Fumerate + Emtricitabine",
    rating: 71,
    star: 5,
    price: "166.67",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: Tenvir,
    productCount: 100,
    productVariants: [
      {
        mg: "200",
        unit: "mg",
        bottle: [
          { count: 1, price: 177.78, pricePerBottle: 177.78 },
          { count: 2, price: 340.74, pricePerBottle: 170.37 },
          { count: 4, price: 666.67, pricePerBottle: 166.67 },
        ],
      },
    ],
    prescription: "",
    howToUse: "",
    additionalDetials: "",
  },
  {
    productId: 20,
    name: "Trioday",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Tenofovir + Lamivudine + Efavirenz",
    rating: 123,
    star: 5,
    price: "293.48",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "600",
        unit: "mg",
        bottle: [
          { count: 1, price: 300.89, pricePerBottle: 300.89 },
          { count: 2, price: 586.96, pricePerBottle: 293.48 },
        ],
      },
    ],
    prescription:
      "The combination of efavirenz, lamivudine, and tenofovir is used to treat HIV in adults and children. Efavirenz is in a class of medications called non-nucleoside reverse transcriptase inhibitors (NNRTIs). Lamivudine and tenofovir are in a class of medications called nucleoside and nucleotide reverse transcriptase inhibitors (NRTIs). They work by decreasing the amount of HIV in the body. Although efavirenz, lamivudine and tenofovir will not cure HIV, these medications may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other lifestyle changes may decrease the risk of getting or transmitting the HIV virus to other people.",
    howToUse:
      "The combination of efavirenz, lamivudine, and tenofovir comes as a tablet to take by mouth. It is usually taken once a day on an empty stomach (at least 1 hour before or 2 hours after a meal). Take efavirenz, lamivudine, and tenofovir at around the same time every day. Taking efavirenz, lamivudine, and tenofovir at bedtime may make certain side effects less bothersome. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take efavirenz, lamivudine, and tenofovir exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Continue to take efavirenz, lamivudine, and tenofovir even if you feel well. Do not stop taking efavirenz, lamivudine, and tenofovir without talking to your doctor. If you stop taking efavirenz, lamivudine, and tenofovir even for a short time, or skip doses, the virus may become resistant to medications and may be harder to treat.",
    additionalDetials:
      "The combination of efavirenz, lamivudine, and tenofovir is available with brand names of Symfi and Symfi Lo. These two brands contain different amounts of the same medication, and cannot be substituted for each other. Be sure that you receive only the brand of efavirenz, lamivudine, and tenofovir that was prescribed for you by your doctor. Ask your pharmacist if you have any questions about the type of efavirenz, lamivudine, and tenofovir you were given. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 21,
    name: "Triomune",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Lamivudine + Stavudine + Nevirapine",
    rating: 152,
    star: 5,
    price: "76.67",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "40",
        unit: "mg",
        bottle: [
          { count: 1, price: 95.7, pricePerBottle: 95.7 },
          { count: 2, price: 176.59, pricePerBottle: 88.3 },
          { count: 4, price: 338.37, pricePerBottle: 84.59 },
          { count: 8, price: 661.93, pricePerBottle: 82.74 },
        ],
      },
      {
        mg: "30",
        unit: "mg",
        bottle: [
          { count: 1, price: 89.63, pricePerBottle: 89.63 },
          { count: 2, price: 164.44, pricePerBottle: 82.22 },
          { count: 4, price: 314.07, pricePerBottle: 78.52 },
          { count: 8, price: 613.33, pricePerBottle: 76.67 },
        ],
      },
    ],
    prescription: "",
    howToUse: "",
    additionalDetials: "",
  },
  {
    productId: 22,
    name: "Viraday",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient:
      "Efavirenz + Emtricitabine + Tenofovir disoproxil fumarate",
    rating: 65,
    star: 5,
    price: "315.78",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: Viraday,
    productCount: 100,
    productVariants: [
      {
        unit: "mg",
        mg: "60 tabs / bottle 200mg/ 50",
        bottle: [
          { count: 1, price: 323.66, pricePerBottle: 323.66 },
          { count: 2, price: 637.56, pricePerBottle: 318.78 },
        ],
      },
    ],
    prescription: "",
    howToUse: "",
    additionalDetials: "",
  },
  {
    productId: 23,
    name: "Zepdon",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Raltegravir",
    rating: 163,
    star: 5,
    price: "605.32",
    type: "bottle",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 100,
    productVariants: [
      {
        mg: "400",
        unit: "mg",
        bottle: [{ count: 1, price: 605.32, pricePerBottle: 605.32 }],
      },
    ],
    prescription:
      "Raltegravir is used along with other medications to treat human immunodeficiency virus (HIV) infection. Raltegravir is in a class of medications called HIV integrase inhibitors. It works by decreasing the amount of HIV in the blood. Although raltegravir does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "Raltegravir comes as a tablet, a chewable tablet, and as an oral suspension to take by mouth. Raltegravir (Isentress®) tablets, chewable tablets, and oral suspension are usually taken with or without food twice a day. Raltegravir (Isentress® HD) tablets are usually taken with or without food once a day. Take raltegravir at the same time(s) every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take raltegravir exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Swallow the tablets whole; do not split, chew, or crush them. If you are taking the chewable tablets, you may chew or swallow them whole.Before you take raltegravir oral suspension for the first time, read the written instructions that come with it that describe how to prepare the medication. Use the dosing syringe provided to measure the amount of medication that your doctor has prescribed. Use the mixture within 30 minutes of preparation and discard any remaining suspension",
    additionalDetials:
      "Continue to take raltegravir even if you feel well. Do not stop taking raltegravir or your other anti-HIV medications without talking to your doctor. If you stop taking raltegravir or skip doses, your condition may become worse and the virus may become resistant to treatment. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 24,
    name: "Zidovir",
    categoryName: "AIDS OR HIV TREATMENT",
    activeIngredient: "Zidovudine",
    rating: 62,
    star: 4,
    price: "2.05",
    type: "tabs",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: genericRetrovir,
    productCount: 100,
    productVariants: [
      {
        mg: "300",
        unit: "mg",
        bottle: [
          { count: 30, price: 74.81, pricePerBottle: 2.49 },
          { count: 60, price: 134.81, pricePerBottle: 2.25 },
          { count: 120, price: 254.81, pricePerBottle: 2.12 },
          { count: 240, price: 494.81, pricePerBottle: 2.06 },
          { count: 300, price: 614.81, pricePerBottle: 2.05 },
        ],
      },
    ],
    prescription:
      "Zidovudine is used along with other medications to treat human immunodeficiency virus (HIV) infection. Zidovudine is given to HIV-positive pregnant women to reduce the chance of passing the infection to the baby. Zidovudine is in a class of medications called nucleoside reverse transcriptase inhibitors (NRTIs). It works by decreasing the amount of HIV in the blood. Although zidovudine does not cure HIV, it may decrease your chance of developing acquired immunodeficiency syndrome (AIDS) and HIV-related illnesses such as serious infections or cancer. Taking these medications along with practicing safer sex and making other life-style changes may decrease the risk of transmitting (spreading) the HIV virus to other people.",
    howToUse:
      "Zidovudine comes as a capsule, tablet, and syrup to take by mouth. It is usually taken twice a day by adults and two to three times a day by infants and children. Infants 6 weeks of age and younger may take zidovudine every 6 hours. When zidovudine is taken by pregnant women, it may be taken 5 times a day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take zidovudine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Your doctor may temporarily stop your treatment if you experience serious side effects.",
    additionalDetials:
      "Zidovudine controls HIV infection but does not cure it. Continue to take zidovudine even if you feel well. Do not stop taking zidovudine without talking to your doctor. When your supply of zidovudine starts to run low, get more from your doctor or pharmacist. If you miss doses or stop taking zidovudine, your condition may become more difficult to treat.",
  },
  {
    productId: 25,
    name: "Generic Lidoderm",
    categoryName: "ANESTHETICS",
    activeIngredient: "Lidocaine hydrochloride",
    rating: 136,
    star: 4,
    price: "17.44",
    type: "Tube",
    typeName: "tube",
    ManufacturedBy: "Emcure Pharmaceuticals Ltd.",
    image: GenericLidoderm,
    productCount: 30,
    productVariants: [
      {
        mg: "5% 30",
        unit: "mg",
        bottle: [
          { count: 1, price: 33.74, pricePerBottle: 33.74 },
          { count: 2, price: 50.09, pricePerBottle: 25.05 },
          { count: 4, price: 82.78, pricePerBottle: 20.7 },
          { count: 8, price: 148.17, pricePerBottle: 18.52 },
          { count: 16, price: 278.96, pricePerBottle: 17.44 },
        ],
      },
    ],
    prescription:
      "Lidocaine patches are used to relieve the pain of post-herpetic neuralgia (PHN; the burning, stabbing pains, or aches that may last for months or years after a shingles infection). Lidocaine is in a class of medications called local anesthetics. It works by stopping nerves from sending pain signals.",
    howToUse:
      "Lidocaine comes as a patch to apply to the skin. It is applied only once a day as needed for pain. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Use lidocaine patches exactly as directed. Your doctor will tell you how many lidocaine patches you may use at one time and the length of time you may wear the patches. Never apply more than three patches at one time, and never wear patches for more than 12 hours per day. Using too many patches or leaving patches on for too long may cause serious side effects.",
    additionalDetials:
      "Look at the skin that that you plan to cover with a lidocaine patch. If the skin is broken or blistered, do not apply a patch to that area. Use scissors to remove the outer seal from the package. Then pull apart the zipper seal.Remove up to three patches from the package and press the zipper seal tightly together. The remaining patches may dry out if the zipper seal is not tightly closed.  Cut patch(es) to the size and shape that will cover your most painful area. Peel the transparent liner off the back of the patch(es). Press the patch(es) firmly onto your skin. If you are applying a patch to your face, be careful not to let it touch your eyes. If you do get lidocaine in your eye, wash it with plenty of water or saline solution. Wash your hands after handling lidocaine patches. Do not reuse lidocaine patches. After you are finished using a patch, remove it and dispose of it out of reach of children and pets. Used patches contain enough medication to seriously harm a child or pet.",
  },
  {
    productId: 26,
    name: "Generic Oraqix Gel",
    categoryName: "ANESTHETICS",
    activeIngredient: "Lidocaine, Prilocaine",
    rating: 102,
    star: 4,
    price: "20.19",
    type: "Tube",
    typeName: "tube",
    ManufacturedBy: "Any on stock available manufacture.",
    image: GenericOraqixGel,
    productCount: 30,
    productVariants: [
      {
        mg: "2.5% / 2.5% 5",
        unit: "mg",
        bottle: [
          { count: 1, price: 34.07, pricePerBottle: 34.07 },
          { count: 2, price: 53.33, pricePerBottle: 26.67 },
          { count: 4, price: 91.85, pricePerBottle: 22.67 },
          { count: 8, price: 168.89, pricePerBottle: 21.11 },
          { count: 16, price: 322.96, pricePerBottle: 20.19 },
        ],
      },
      {
        mg: "2.5% / 2.5% 30",
        unit: "mg",
        bottle: [
          { count: 1, price: 88.22, pricePerBottle: 88.22 },
          { count: 2, price: 161.63, pricePerBottle: 80.82 },
          { count: 4, price: 308.44, pricePerBottle: 77.11 },
          { count: 8, price: 602.07, pricePerBottle: 75.26 },
        ],
      },
    ],
    prescription:
      "Ertapenem injection is used to treat certain serious infections, including pneumonia and urinary tract, skin, diabetic foot, gynecological, pelvic, and abdominal (stomach area) infections, that are caused by bacteria. It is also used for the prevention of infections following colorectal surgery. Ertapenem is in a class of medications called carbapenem antibiotics. It works by killing bacteria. Antibiotics such as ertapenem injection will not work for colds, flu, or other viral infections. Taking antibiotics when they are not needed increases your risk of getting an infection later that resists antibiotic treatment.",
    howToUse:
      "Ertapenem injection comes as a powder to be mixed with liquid to be injected intravenously (into a vein) or intramuscularly (into a muscle). It is infused (injected slowly) intravenously over a period of at least 30 minutes once or twice a day for up to 14 days. It is also may be given once or twice a day intramuscularly for up to 7 days. The length of treatment depends on the type of infection being treated. Your doctor will tell you how long to use ertapenem injection. After your condition improves, your doctor may switch you to another antibiotic that you can take by mouth to complete your treatment. You may receive ertapenem injection in a hospital, or you may use the medication at home. If you will be using ertapenem injection at home, use it at around the same time(s) every day. Follow the directions on your prescription label carefully, and ask your doctor or other healthcare provider to explain any part you do not understand. Use ertapenem injection exactly as directed. Do not use more or less of it or use it more often than prescribed by your doctor.",
    additionalDetials:
      "If you will be using ertapenem injection at home, your health care provider will show you how to use the medication. Be sure that you understand these directions, and ask your healthcare provider if you have any questions. Ask your healthcare provider what to do if you have any problems infusing ertapenem injection. You should begin to feel better during the first few days of treatment with ertapenem injection. If your symptoms do not improve or if they get worse, call your doctor.Use ertapenem injection until you finish the prescription, even if you feel better. If you stop using ertapenem injection too soon or if you skip doses, your infection may not be completely treated and the bacteria may become resistant to antibiotics.Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 27,
    name: "Generic Copegus",
    categoryName: "ANTI VIRAL",
    activeIngredient: "Ribavirin",
    rating: 119,
    star: 4,
    price: "8.47",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: GenericCopegus,
    productCount: 30,
    productVariants: [
      {
        mg: "200",
        unit: "mg",
        bottle: [
          { count: 10, price: 91.49, pricePerBottle: 9.15 },
          { count: 20, price: 174.47, pricePerBottle: 8.72 },
          { count: 30, price: 257.45, pricePerBottle: 8.58 },
          { count: 40, price: 340.43, pricePerBottle: 8.51 },
          { count: 50, price: 423.4, pricePerBottle: 8.47 },
        ],
      },
    ],
    prescription:
      "Ribavirin is used with an interferon medication such as peginterferon alfa-2a [Pegasys] or peginterferon alpha-2b [PEG-Intron]) to treat hepatitis C in people who have not been treated with an interferon before. Ribavirin is in a class of antiviral medications called nucleoside analogues. It works by stopping the virus that causes hepatitis C from spreading inside the body. It is not known if treatment that includes ribavirin and another medication cures hepatitis C infection, prevents liver damage that may be caused by hepatitis C, or prevents the spread of hepatitis C to other people.",
    howToUse:
      "Ribavirin comes as a tablet, a capsule and an oral solution (liquid) to take by mouth. It is usually taken with food twice a day, in the morning and the evening, for 24 to 48 weeks or longer. Take ribavirin at around the same times every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take ribavirin exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Swallow the capsules whole; do not split, chew, or crush them. Shake the liquid well before each use to mix the medication evenly. Be sure to wash the measuring spoon or cup after use each time you measure the liquid.",
    additionalDetials:
      "Your doctor may decrease your dose or tell you to stop taking ribavirin if you develop side effects of the medication or if certain laboratory tests show that your condition has not improved. Call your doctor if you are bothered by side effects of ribavirin. Do not decrease your dose or stop taking ribavirin unless your doctor tells you that you should.",
  },
  {
    productId: 28,
    name: "Generic Symmetrel",
    categoryName: "ANTI VIRAL",
    activeIngredient: "Amantadine",
    rating: 176,
    star: 4,
    price: "0.85",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: GenericSymmetrel,
    productCount: 30,
    productVariants: [
      {
        mg: "100",
        unit: "mg",
        bottle: [
          { count: 30, price: 35.14, pricePerBottle: 1.17 },
          { count: 60, price: 59.46, pricePerBottle: 0.99 },
          { count: 120, price: 108.11, pricePerBottle: 0.9 },
          { count: 240, price: 205.41, pricePerBottle: 0.86 },
          { count: 300, price: 254.05, pricePerBottle: 0.85 },
        ],
      },
    ],
    prescription:
      "Amantadine is used to treat the symptoms of Parkinson's disease (PD; a disorder of the nervous system that causes difficulties with movement, muscle control, and balance) and other similar conditions. It is also used to control movement problems that are a side effect of certain medications used to treat Parkinson's disease. It also is used to prevent symptoms of influenza A virus infection and for treatment of respiratory infections caused by influenza A virus. Amantadine is in a class of medications called adamantanes. It is thought to work to control movement problems by increasing the amount of dopamine in certain parts of the body. It works against influenza A virus by stopping the spread of the virus in the body.",
    howToUse:
      "Amantadine comes as a capsule, extended-release capsule (Gocovri), tablet, and liquid to take by mouth. The capsules, tablets, and liquid medications are usually taken once or twice a day. The extended-release capsules are taken once a day at bedtime. Take amantadine at around the same time(s) every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take amantadine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Swallow the extended-release capsules whole; do not split, chew, or crush them. If you have difficulty swallowing, you may open the extended-release capsule and sprinkle the entire contents on a teaspoonful of soft food, like applesauce. Eat the mixture right away and swallow without chewing. If you are taking amantadine for Parkinson's disease, your doctor may start you on a low dose of amantadine and gradually increase your dose.",
    additionalDetials:
      "Do not stop taking amantadine without talking to your doctor. If you suddenly stop taking amantadine, you may experience fever, confusion, changes in mental state, or severe muscle stiffness. Your doctor will probably decrease your dose gradually. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 29,
    name: "Generic Allopurinol",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Allopurinol",
    rating: 174,
    star: 4,
    price: "0.58",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacturer",
    image: genericAllopurinol,
    productCount: 100,
    productVariants: [
      {
        mg: "100",
        unit: "mg",
        bottle: [
          { count: 30, price: 33.04, pricePerBottle: 1.1 },
          { count: 60, price: 48.7, pricePerBottle: 0.81 },
          { count: 120, price: 80.0, pricePerBottle: 0.67 },
          { count: 240, price: 142.61, pricePerBottle: 0.59 },
          { count: 300, price: 173.91, pricePerBottle: 0.58 },
        ],
      },
      {
        mg: "300",
        unit: "mg",
        bottle: [
          { count: 30, price: 37.04, pricePerBottle: 1.23 },
          { count: 60, price: 59.26, pricePerBottle: 0.99 },
          { count: 120, price: 103.7, pricePerBottle: 0.86 },
          { count: 240, price: 192.59, pricePerBottle: 0.8 },
          { count: 300, price: 237.04, pricePerBottle: 0.79 },
        ],
      },
    ],
    prescription:
      "Allopurinol is used to treat gout, high levels of uric acid in the body caused by certain cancer medications, and kidney stones. Allopurinol is in a class of medications called xanthine oxidase inhibitors. It works by reducing the production of uric acid in the body. High levels of uric acid may cause gout attacks or kidney stones. Allopurinol is used to prevent gout attacks, not to treat them once they occur.",
    howToUse:
      "Allopurinol comes as a tablet to take by mouth. It is usually taken once or twice a day, preferably after a meal. To help you remember to take allopurinol, take it around the same time every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take allopurinol exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor. Your doctor will probably start you on a low dose of allopurinol and gradually increase your dose, not more than once a week.",
    additionalDetials:
      "It may take several months or longer before you feel the full benefit of allopurinol. Allopurinol may increase the number of gout attacks during the first few months that you take it, although it will eventually prevent attacks. Your doctor may prescribe another medication such as colchicine to prevent gout attacks for the first few months you take allopurinol. Continue to take allopurinol even if you feel well. Do not stop taking allopurinol without talking to your doctor.",
  },
  {
    productId: 30,
    name: "Generic Cytotec",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Misoprostol",
    rating: 127,
    star: 4,
    price: "2.45",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacturer",
    image: genericCytotec,
    productCount: 100,
    productVariants: [
      {
        mg: "100",
        unit: "mcg",
        bottle: [
          { count: 30, price: 81.28, pricePerBottle: 2.71 },
          { count: 60, price: 154.04, pricePerBottle: 2.57 },
          { count: 120, price: 299.57, pricePerBottle: 2.5 },
          { count: 240, price: 590.64, pricePerBottle: 2.46 },
          { count: 300, price: 736.17, pricePerBottle: 2.45 },
        ],
      },
    ],
    prescription:
      "The combination of diclofenac and misoprostol is used to relieve the pain, tenderness, swelling, and stiffness caused by osteoarthritis (arthritis caused by a breakdown of the lining of the joints) and rheumatoid arthritis (arthritis caused by swelling of the lining of the joints) in patients who have a high risk of developing stomach ulcers. Diclofenac is in a class of medications called NSAIDs. It works by stopping the body's production of a substance that causes pain and inflammation. Misoprostol is in a class of medications called prostaglandins. It prevents ulcers caused by diclofenac by protecting the stomach lining and decreasing stomach acid production.",
    howToUse:
      "The combination of diclofenac and misoprostol comes as a tablet to take by mouth. It is usually taken with food two to four times a day. To help you remember to take diclofenac and misoprostol, take it at around the same times every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take diclofenac and misoprostol combination exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Swallow the tablets whole; do not split, chew, or crush them. Do not take tablets that are broken or damaged.",
  },
  {
    productId: 31,
    name: "Generic Nexium",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Esomeprazole",
    rating: 200,
    star: 4,
    price: "0.25",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacturer",
    image: genericNexium,
    productCount: 100,
    productVariants: [
      {
        mg: "20",
        unit: "mg",
        bottle: [
          { count: 60, price: 37.04, pricePerBottle: 0.62 },
          { count: 120, price: 59.26, pricePerBottle: 0.49 },
          { count: 240, price: 103.7, pricePerBottle: 0.43 },
          { count: 300, price: 125.93, pricePerBottle: 0.42 },
        ],
      },
      {
        mg: "40",
        unit: "mg",
        bottle: [
          { count: 30, price: 36.84, pricePerBottle: 1.23 },
          { count: 60, price: 52.63, pricePerBottle: 0.88 },
          { count: 120, price: 84.21, pricePerBottle: 0.7 },
          { count: 240, price: 147.37, pricePerBottle: 0.61 },
          { count: 300, price: 178.95, pricePerBottle: 0.6 },
        ],
      },
    ],
    prescription:
      "Prescription omeprazole is used alone or with other medications to treat gastroesophageal reflux disease (GERD), a condition in which backward flow of acid from the stomach causes heartburn and possible injury of the esophagus (the tube between the throat and stomach). Prescription omeprazole is used to treat the symptoms of GERD, allow the esophagus to heal, and prevent further damage to the esophagus. Prescription omeprazole is also used to treat conditions in which the stomach produces too much acid such as Zollinger-Ellison syndrome. Prescription omeprazole is also used to treat ulcers (sores in the lining of the stomach or intestine) and it is also used with other medications to treat and prevent the return of ulcers caused by a certain type of bacteria (H. pylori). Nonprescription (over-the-counter) omeprazole is used to treat frequent heartburn (heartburn that occurs at least 2 or more days a week). Omeprazole is in a class of medications called proton-pump inhibitors. It works by decreasing the amount of acid made in the stomach.",
    howToUse:
      "Prescription omeprazole comes as a delayed-release (releases the medication in the intestine to prevent break-down of the medication by stomach acids) capsule, and packets of delayed-release (releases the medication in the intestine to prevent break-down of the medication by stomach acids) granules for suspension (to be mixed with liquid) to take by mouth. Nonprescription (over-the-counter) omeprazole comes as a delayed-release capsule or tablet to take by mouth. The delayed-release capsules and the granules should be taken at least 1 hour before a meal. They are usually taken once a day before a meal but may be taken twice a day when used with other medications to eliminate H. pylori, or up to three times a day when used to treat conditions in which the stomach produces too much acid. The nonprescription delayed-release tablets or capsules are usually taken once a day in the morning at least 1 hour before eating for 14 days in a row. Additional 14-day treatments may be repeated once every 4 months if needed. To help you remember to take omeprazole, take it at around the same time(s) every day. Follow the directions on your prescription label or the package label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take omeprazole exactly as directed. Do not take more or less of it or take it more often or for a longer period of time than prescribed by your doctor or stated on the package. Tell your doctor if you have taken nonprescription omeprazole for a longer period of time than stated on the package. If you are taking the delayed-release tablets, swallow them whole with a full glass of water. Do not split, chew, or crush them or crush and mix them into food. Swallow the delayed-release capsules whole. If you have difficulty swallowing the delayed-release capsules, place one tablespoon of soft, cool applesauce in an empty bowl. Open the delayed-release capsule and carefully empty all the granules inside the capsule onto the applesauce. Mix the granules with the applesauce and swallow the mixture immediately with a glass of cool water. Do not chew or crush the granules. Do not store the applesauce/granule mixture for future use.If you are taking the powder for oral suspension, you will need to mix it with water before use. If you are using the 2.5-mg packet, place 1 teaspoonful (5 mL) of water in a container. If you are using the 10-mg packet, place 1 tablespoonful (15 mL) of water in a container. Add the contents of the powder packet and stir. Wait 2 to 3 minutes to allow the mixture to thicken, and stir the mixture again. Drink the entire mixture within 30 minutes. If any of the mixture is stuck to the container, pour more water into the container, stir and drink all the mixture immediately.",
    additionalDetials:
      "The powder and the contents of the prescription delayed-release capsules can both be given through a feeding tube. If you have a feeding tube, ask your doctor how you should take the medication. Follow the directions carefully. Do not take nonprescription omeprazole for immediate relief of heartburn symptoms. It may take 1 to 4 days for you to feel the full benefit of the medication. Call your doctor if your symptoms get worse or do not improve after 14 days or if your symptoms return sooner than 4 months after you finish your treatment. Do not take nonprescription omeprazole for longer than 14 days or treat yourself with omeprazole more often than once every 4 months without talking to your doctor. Continue to take omeprazole even if you feel well. Do not stop taking prescription omeprazole without talking to your doctor. If your condition does not improve or gets worse, call your doctor. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient",
  },
  {
    productId: 32,
    name: "Generic Pepcid",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Famotidine",
    rating: 73,
    star: 5,
    price: "0.43",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: genericPepcid,
    productCount: 30,
    productVariants: [
      {
        mg: "2.5",
        unit: "mg",
        bottle: [
          { count: 30, price: 43.7, pricePerBottle: 1.46 },
          { count: 60, price: 72.59, pricePerBottle: 1.21 },
          { count: 120, price: 130.37, pricePerBottle: 1.09 },
          { count: 240, price: 245.93, pricePerBottle: 1.02 },
          { count: 300, price: 303.7, pricePerBottle: 1.01 },
        ],
      },
      {
        mg: "20",
        unit: "mg",
        bottle: [
          { count: 30, price: 34.12, pricePerBottle: 1.14 },
          { count: 60, price: 44.71, pricePerBottle: 0.75 },
          { count: 120, price: 65.88, pricePerBottle: 0.55 },
          { count: 240, price: 108.24, pricePerBottle: 0.45 },
          { count: 300, price: 129.41, pricePerBottle: 0.43 },
        ],
      },
      {
        mg: "40",
        unit: "mg",
        bottle: [
          { count: 30, price: 44.62, pricePerBottle: 1.49 },
          { count: 60, price: 58.46, pricePerBottle: 0.97 },
          { count: 120, price: 86.15, pricePerBottle: 0.72 },
          { count: 240, price: 141.54, pricePerBottle: 0.59 },
          { count: 300, price: 169.23, pricePerBottle: 0.56 },
        ],
      },
    ],
    prescription:
      "Prescription famotidine is used to treat ulcers (sores on the lining of the stomach or small intestine); gastroesophageal reflux disease (GERD, a condition in which backward flow of acid from the stomach causes heartburn and injury of the esophagus [tube that connects the mouth and stomach]); and conditions where the stomach produces too much acid, such as Zollinger-Ellison syndrome (tumors in the pancreas or small intestine that cause increased production of stomach acid). Over-the-counter famotidine is used to prevent and treat heartburn due to acid indigestion and sour stomach caused by eating or drinking certain foods or drinks. Famotidine is in a class of medications called H2 blockers. It works by decreasing the amount of acid made in the stomach.",
    howToUse:
      "Prescription famotidine comes as a tablet and a suspension (liquid) to take by mouth. It is usually taken once daily at bedtime or two to four times a day. Over-the-counter famotidine comes as a tablet, a chewable tablet, and a capsule to take by mouth. It is usually taken once or twice a day. To prevent symptoms, it is taken 15 to 60 minutes before eating foods or drinking drinks that may cause heartburn. Follow the directions on your prescription or the package label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take famotidine exactly as directed. Do not take more or less of it or take it more often or for a longer time than prescribed by your doctor. Shake the liquid well for 5 to 10 seconds before each use to mix the medicine evenly.Swallow the tablets and capsules with a full glass of water. Thoroughly chew the chewable tablets before swallowing them. Swallow the chewed tablet with a full glass of water.",
    additionalDetials:
      "Do not take more than two tablets, capsules, or chewable tablets of over-the-counter famotidine in 24 hours and do not take over-the-counter famotidine for longer than 2 weeks unless your doctor tells you that you should. If symptoms of heartburn, acid indigestion, or sour stomach last longer than 2 weeks, stop taking over-the-counter famotidine and call your doctor.",
  },
  {
    productId: 33,
    name: "Generic Prilosec",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Omeprazole",
    rating: 91,
    star: 4,
    price: "0.63",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: genericPrilosec,
    productCount: 30,
    productVariants: [
      {
        mg: "10",
        unit: "mg",
        bottle: [
          { count: 30, price: 36.19, pricePerBottle: 1.21 },
          { count: 60, price: 53.33, pricePerBottle: 0.89 },
          { count: 120, price: 87.62, pricePerBottle: 0.73 },
          { count: 240, price: 156.19, pricePerBottle: 0.65 },
          { count: 300, price: 190.48, pricePerBottle: 0.63 },
        ],
      },
      {
        mg: "20",
        unit: "mg",
        bottle: [
          { count: 30, price: 41.18, pricePerBottle: 1.37 },
          { count: 60, price: 58.82, pricePerBottle: 0.98 },
          { count: 120, price: 94.12, pricePerBottle: 0.78 },
          { count: 240, price: 164.71, pricePerBottle: 0.69 },
          { count: 300, price: 200.0, pricePerBottle: 0.67 },
        ],
      },
      {
        mg: "40",
        unit: "mg",
        bottle: [
          { count: 30, price: 54.81, pricePerBottle: 1.83 },
          { count: 60, price: 94.81, pricePerBottle: 1.58 },
          { count: 120, price: 174.81, pricePerBottle: 1.46 },
          { count: 240, price: 334.81, pricePerBottle: 1.4 },
          { count: 300, price: 414.81, pricePerBottle: 1.38 },
        ],
      },
    ],
    prescription:
      "Prescription omeprazole is used alone or with other medications to treat gastroesophageal reflux disease (GERD), a condition in which backward flow of acid from the stomach causes heartburn and possible injury of the esophagus (the tube between the throat and stomach). Prescription omeprazole is used to treat the symptoms of GERD, allow the esophagus to heal, and prevent further damage to the esophagus. Prescription omeprazole is also used to treat conditions in which the stomach produces too much acid such as Zollinger-Ellison syndrome. Prescription omeprazole is also used to treat ulcers (sores in the lining of the stomach or intestine) and it is also used with other medications to treat and prevent the return of ulcers caused by a certain type of bacteria (H. pylori). Nonprescription (over-the-counter) omeprazole is used to treat frequent heartburn (heartburn that occurs at least 2 or more days a week). Omeprazole is in a class of medications called proton-pump inhibitors. It works by decreasing the amount of acid made in the stomach.",
    howToUse:
      "Prescription omeprazole comes as a delayed-release (releases the medication in the intestine to prevent break-down of the medication by stomach acids) capsule, and packets of delayed-release (releases the medication in the intestine to prevent break-down of the medication by stomach acids) granules for suspension (to be mixed with liquid) to take by mouth. Nonprescription (over-the-counter) omeprazole comes as a delayed-release capsule or tablet to take by mouth. The delayed-release capsules and the granules should be taken at least 1 hour before a meal. They are usually taken once a day before a meal but may be taken twice a day when used with other medications to eliminate H. pylori, or up to three times a day when used to treat conditions in which the stomach produces too much acid. The nonprescription delayed-release tablets or capsules are usually taken once a day in the morning at least 1 hour before eating for 14 days in a row. Additional 14-day treatments may be repeated once every 4 months if needed. To help you remember to take omeprazole, take it at around the same time(s) every day. Follow the directions on your prescription label or the package label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take omeprazole exactly as directed. Do not take more or less of it or take it more often or for a longer period of time than prescribed by your doctor or stated on the package. Tell your doctor if you have taken nonprescription omeprazole for a longer period of time than stated on the package. If you are taking the delayed-release tablets, swallow them whole with a full glass of water. Do not split, chew, or crush them or crush and mix them into food.Swallow the delayed-release capsules whole. If you have difficulty swallowing the delayed-release capsules, place one tablespoon of soft, cool applesauce in an empty bowl. Open the delayed-release capsule and carefully empty all the granules inside the capsule onto the applesauce. Mix the granules with the applesauce and swallow the mixture immediately with a glass of cool water. Do not chew or crush the granules. Do not store the applesauce/granule mixture for future use.If you are taking the powder for oral suspension, you will need to mix it with water before use. If you are using the 2.5-mg packet, place 1 teaspoonful (5 mL) of water in a container. If you are using the 10-mg packet, place 1 tablespoonful (15 mL) of water in a container. Add the contents of the powder packet and stir. Wait 2 to 3 minutes to allow the mixture to thicken, and stir the mixture again. Drink the entire mixture within 30 minutes. If any of the mixture is stuck to the container, pour more water into the container, stir and drink all the mixture immediately.",
    additionalDetials:
      "The powder and the contents of the prescription delayed-release capsules can both be given through a feeding tube. If you have a feeding tube, ask your doctor how you should take the medication. Follow the directions carefully.Do not take nonprescription omeprazole for immediate relief of heartburn symptoms. It may take 1 to 4 days for you to feel the full benefit of the medication. Call your doctor if your symptoms get worse or do not improve after 14 days or if your symptoms return sooner than 4 months after you finish your treatment. Do not take nonprescription omeprazole for longer than 14 days or treat yourself with omeprazole more often than once every 4 months without talking to your doctor.Continue to take omeprazole even if you feel well. Do not stop taking prescription omeprazole without talking to your doctor. If your condition does not improve or gets worse, call your doctor.Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 34,
    name: "Generic Protonix",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Pantoprazole",
    rating: 43,
    star: 4,
    price: "0.56",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: genericProtonix,
    productCount: 30,
    productVariants: [
      {
        mg: "20",
        unit: "mg",
        bottle: [
          { count: 60, price: 43.87, pricePerBottle: 0.73 },
          { count: 120, price: 74.84, pricePerBottle: 0.62 },
          { count: 240, price: 136.77, pricePerBottle: 0.57 },
          { count: 300, price: 167.74, pricePerBottle: 0.56 },
        ],
      },
      {
        mg: "40",
        unit: "mg",
        bottle: [
          { count: 30, price: 33.04, pricePerBottle: 1.1 },
          { count: 60, price: 48.7, pricePerBottle: 0.81 },
          { count: 120, price: 80.0, pricePerBottle: 0.67 },
          { count: 240, price: 142.61, pricePerBottle: 0.59 },
          { count: 300, price: 173.91, pricePerBottle: 0.58 },
        ],
      },
    ],
    prescription:
      "Pantoprazole is used to treat gastroesophageal reflux disease (GERD), a condition in which backward flow of acid from the stomach causes heartburn and possible injury of the esophagus (the tube between the throat and stomach). Pantoprazole is used to treat the symptoms of GERD, allow the esophagus to heal, and prevent further damage to the esophagus. It is also used to treat conditions where the stomach produces too much acid, such as Zollinger-Ellison syndrome. Pantoprazole is in a class of medications called proton-pump inhibitors. It works by decreasing the amount of acid made in the stomach.",
    howToUse:
      "Pantoprazole comes as a delayed-release (releases the medication in the intestine to prevent break-down of the medication by stomach acids) tablet and as delayed-release granules to take by mouth. The packets of delayed-release granules must be mixed with applesauce or apple juice and taken by mouth or given through a feeding tube. For the treatment and maintenance of GERD, pantoprazole is usually taken once a day. For the treatment of conditions where the stomach produces too much acid, pantoprazole is usually taken twice a day. The delayed-release tablets are usually taken with or without food, and the granules are usually taken 30 minutes before a meal. Take pantoprazole at around the same time(s) every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take pantoprazole exactly as directed. Do not take more or less of it or take it more often or for a longer period of time than prescribed by your doctor. Swallow the tablets whole; do not split, chew, or crush them. If your doctor has prescribed the 40 mg tablet and it is too big for you to swallow, ask your doctor to prescribe two of the 20 mg tablets instead.",
    additionalDetials:
      "To take the granules, open the packet and either sprinkle the granules onto one teaspoonful of applesauce or into a cup containing one teaspoonful of apple juice. Do not mix the granules with water, other liquids, or other foods. Use all of the granules in the packet; do not divide the granules into smaller doses. If you sprinkle the granules into apple juice, stir the mixture for 5 seconds. Swallow the mixture of applesauce or apple juice and medication right away (within 10 minutes) without chewing or crushing the granules. If you sprinkled the granules on applesauce, take several sips of water to wash the granules down to your stomach. If you sprinkled the granules into apple juice, rinse the cup once or twice with apple juice and drink the apple juice right away to be sure you swallow any leftover granules. Pantoprazole granules mixed with apple juice may be given through a feeding tube. If you have a feeding tube, ask your doctor how you should take pantoprazole.Continue to take pantoprazole even if you feel well. Do not stop taking pantoprazole without talking to your doctor. If your condition does not improve or gets worse, call your doctor.",
  },
  {
    productId: 35,
    name: "Generic Reglan",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Metoclopramide",
    rating: 169,
    star: 5,
    price: "0.54",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: genericReglan,
    productCount: 30,
    productVariants: [
      {
        mg: "10",
        unit: "mg",
        bottle: [
          { count: 30, price: 33.33, pricePerBottle: 1.11 },
          { count: 60, price: 47.62, pricePerBottle: 0.79 },
          { count: 120, price: 76.19, pricePerBottle: 0.63 },
          { count: 240, price: 133.33, pricePerBottle: 0.56 },
          { count: 300, price: 161.9, pricePerBottle: 0.54 },
        ],
      },
    ],
    prescription:
      "Metoclopramide injection is used to relieve symptoms caused by slow stomach emptying in people who have diabetes. These symptoms include nausea, vomiting, heartburn, loss of appetite, and feeling of fullness that lasts long after meals. Metoclopramide injection is also used to prevent nausea and vomiting caused by chemotherapy or that may occur after surgery. Metoclopramide injection is also sometimes used to empty the intestines during certain medical procedures. Metoclopramide injection is in a class of medications called prokinetic agents. It works by speeding the movement of food through the stomach and intestines.",
    howToUse:
      "Metoclopramide injection comes as a liquid to be injected into a muscle or into a vein. When metoclopramide injection is used to treat slowed stomach emptying due to diabetes, it may be given up to four times a day. When metoclopramide injection is used to prevent nausea and vomiting due to chemotherapy, it is usually given 30 minutes before the chemotherapy, then once every 2 hours for two doses, then once every 3 hours for three doses. Metoclopramide injection is also sometimes given during surgery. If you are injecting metoclopramide injection at home, inject it at around the same times every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Use metoclopramide injection exactly as directed. Do not inject more or less of it or inject it more often than prescribed by your doctor.",
    additionalDetials: "",
  },
  {
    productId: 36,
    name: "Generic Zantac",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Ranitidine",
    rating: 133,
    star: 5,
    price: "0.24",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: genericZantac,
    productCount: 30,
    productVariants: [
      {
        mg: "150",
        unit: "mg",
        bottle: [
          { count: 120, price: 36.13, pricePerBottle: 0.3 },
          { count: 240, price: 59.35, pricePerBottle: 0.25 },
          { count: 300, price: 70.97, pricePerBottle: 0.24 },
        ],
      },
      {
        mg: "300",
        unit: "mg",
        bottle: [
          { count: 60, price: 41.48, pricePerBottle: 0.69 },
          { count: 120, price: 68.15, pricePerBottle: 0.57 },
          { count: 240, price: 121.48, pricePerBottle: 0.51 },
          { count: 300, price: 148.15, pricePerBottle: 0.49 },
        ],
      },
    ],
    prescription:
      "Ranitidine is used to treat ulcers; gastroesophageal reflux disease (GERD), a condition in which backward flow of acid from the stomach causes heartburn and injury of the food pipe (esophagus); and conditions where the stomach produces too much acid, such as Zollinger-Ellison syndrome. Over-the-counter ranitidine is used to prevent and treat symptoms of heartburn associated with acid indigestion and sour stomach. Ranitidine is in a class of medications called H2 blockers. It decreases the amount of acid made in the stomach.",
    howToUse:
      "Ranitidine comes as a tablet, an effervescent tablet, effervescent granules, and a syrup to take by mouth. It is usually taken once a day at bedtime or two to four times a day. Over-the-counter ranitidine comes as a tablet to take by mouth. It is usually taken once or twice a day. To prevent symptoms, it is taken 30 to 60 minutes before eating or drinking foods that cause heartburn. Follow the directions on your prescription or the package label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take ranitidine exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Dissolve ranitidine effervescent tablets and granules in a full glass (6 to 8 ounces [180 to 240 milliliters]) of water before drinking.Do not take over-the-counter ranitidine for longer than 2 weeks unless your doctor tells you to. If symptoms of heartburn, acid indigestion, or sour stomach last longer than 2 weeks, stop taking ranitidine and call your doctor.",
  },
  {
    productId: 37,
    name: "Generic Zyloprim",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Allopurinol",
    rating: 50,
    star: 5,
    price: "0.58",
    type: "pill",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: genericZyloprim,
    productCount: 30,
    productVariants: [
      {
        mg: "300",
        unit: "mg",
        bottle: [
          { count: 60, price: 43.24, pricePerBottle: 0.72 },
          { count: 120, price: 75.68, pricePerBottle: 0.63 },
          { count: 240, price: 140.54, pricePerBottle: 0.59 },
          { count: 300, price: 172.97, pricePerBottle: 0.58 },
        ],
      },
    ],
    prescription:
      "Allopurinol is used to treat gout, high levels of uric acid in the body caused by certain cancer medications, and kidney stones. Allopurinol is in a class of medications called xanthine oxidase inhibitors. It works by reducing the production of uric acid in the body. High levels of uric acid may cause gout attacks or kidney stones. Allopurinol is used to prevent gout attacks, not to treat them once they occur.",
    howToUse:
      "Allopurinol comes as a tablet to take by mouth. It is usually taken once or twice a day, preferably after a meal. To help you remember to take allopurinol, take it around the same time every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take allopurinol exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Your doctor will probably start you on a low dose of allopurinol and gradually increase your dose, not more than once a week.It may take several months or longer before you feel the full benefit of allopurinol. Allopurinol may increase the number of gout attacks during the first few months that you take it, although it will eventually prevent attacks. Your doctor may prescribe another medication such as colchicine to prevent gout attacks for the first few months you take allopurinol. Continue to take allopurinol even if you feel well. Do not stop taking allopurinol without talking to your doctor.",
  },
  {
    productId: 38,
    name: "Misoprost",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Misoprostol",
    rating: 160,
    star: 5,
    price: "1.69",
    type: "tab",
    typeName: "pill",
    ManufacturedBy: "Cipla",
    image: "",
    productCount: 30,
    productVariants: [
      {
        mg: "200",
        unit: "mcg",
        bottle: [
          { count: 30, price: 58.3, pricePerBottle: 1.94 },
          { count: 60, price: 108.09, pricePerBottle: 1.8 },
          { count: 120, price: 207.66, pricePerBottle: 1.73 },
          { count: 240, price: 406.81, pricePerBottle: 1.7 },
          { count: 300, price: 506.38, pricePerBottle: 1.69 },
        ],
      },
    ],
    prescription:
      "The combination of diclofenac and misoprostol is used to relieve the pain, tenderness, swelling, and stiffness caused by osteoarthritis (arthritis caused by a breakdown of the lining of the joints) and rheumatoid arthritis (arthritis caused by swelling of the lining of the joints) in patients who have a high risk of developing stomach ulcers. Diclofenac is in a class of medications called NSAIDs. It works by stopping the body's production of a substance that causes pain and inflammation. Misoprostol is in a class of medications called prostaglandins. It prevents ulcers caused by diclofenac by protecting the stomach lining and decreasing stomach acid production.",
    howToUse:
      "The combination of diclofenac and misoprostol comes as a tablet to take by mouth. It is usually taken with food two to four times a day. To help you remember to take diclofenac and misoprostol, take it at around the same times every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take diclofenac and misoprostol combination exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
    additionalDetials:
      "Swallow the tablets whole; do not split, chew, or crush them. Do not take tablets that are broken or damaged.",
  },
  {
    productId: 39,
    name: "Nexium",
    categoryName: "ANTI ACIDITY",
    activeIngredient: "Esomeprazole ",
    rating: 156,
    star: 4,
    price: "41.07",
    type: "pack",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: genericNexium,
    productCount: 30,
    productVariants: [
      {
        mg: "20",
        unit: "mg",
        bottle: [
          { count: 1, price: 54.96, pricePerBottle: 54.96 },
          { count: 2, price: 95.11, pricePerBottle: 47.56 },
          { count: 4, price: 175.41, pricePerBottle: 43.85 },
          { count: 8, price: 336.0, pricePerBottle: 42 },
          { count: 16, price: 657.19, pricePerBottle: 41.07 },
        ],
      },
    ],
    prescription:
      "Prescription omeprazole is used alone or with other medications to treat gastroesophageal reflux disease (GERD), a condition in which backward flow of acid from the stomach causes heartburn and possible injury of the esophagus (the tube between the throat and stomach). Prescription omeprazole is used to treat the symptoms of GERD, allow the esophagus to heal, and prevent further damage to the esophagus. Prescription omeprazole is also used to treat conditions in which the stomach produces too much acid such as Zollinger-Ellison syndrome. Prescription omeprazole is also used to treat ulcers (sores in the lining of the stomach or intestine) and it is also used with other medications to treat and prevent the return of ulcers caused by a certain type of bacteria (H. pylori). Nonprescription (over-the-counter) omeprazole is used to treat frequent heartburn (heartburn that occurs at least 2 or more days a week). Omeprazole is in a class of medications called proton-pump inhibitors. It works by decreasing the amount of acid made in the stomach.",
    howToUse:
      "Prescription omeprazole comes as a delayed-release (releases the medication in the intestine to prevent break-down of the medication by stomach acids) capsule, and packets of delayed-release (releases the medication in the intestine to prevent break-down of the medication by stomach acids) granules for suspension (to be mixed with liquid) to take by mouth. Nonprescription (over-the-counter) omeprazole comes as a delayed-release capsule or tablet to take by mouth. The delayed-release capsules and the granules should be taken at least 1 hour before a meal. They are usually taken once a day before a meal but may be taken twice a day when used with other medications to eliminate H. pylori, or up to three times a day when used to treat conditions in which the stomach produces too much acid. The nonprescription delayed-release tablets or capsules are usually taken once a day in the morning at least 1 hour before eating for 14 days in a row. Additional 14-day treatments may be repeated once every 4 months if needed. To help you remember to take omeprazole, take it at around the same time(s) every day. Follow the directions on your prescription label or the package label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take omeprazole exactly as directed. Do not take more or less of it or take it more often or for a longer period of time than prescribed by your doctor or stated on the package. Tell your doctor if you have taken nonprescription omeprazole for a longer period of time than stated on the package. If you are taking the delayed-release tablets, swallow them whole with a full glass of water. Do not split, chew, or crush them or crush and mix them into food. Swallow the delayed-release capsules whole. If you have difficulty swallowing the delayed-release capsules, place one tablespoon of soft, cool applesauce in an empty bowl. Open the delayed-release capsule and carefully empty all the granules inside the capsule onto the applesauce. Mix the granules with the applesauce and swallow the mixture immediately with a glass of cool water. Do not chew or crush the granules. Do not store the applesauce/granule mixture for future use.If you are taking the powder for oral suspension, you will need to mix it with water before use. If you are using the 2.5-mg packet, place 1 teaspoonful (5 mL) of water in a container. If you are using the 10-mg packet, place 1 tablespoonful (15 mL) of water in a container. Add the contents of the powder packet and stir. Wait 2 to 3 minutes to allow the mixture to thicken, and stir the mixture again. Drink the entire mixture within 30 minutes. If any of the mixture is stuck to the container, pour more water into the container, stir and drink all the mixture immediately.",
    additionalDetials:
      "The powder and the contents of the prescription delayed-release capsules can both be given through a feeding tube. If you have a feeding tube, ask your doctor how you should take the medication. Follow the directions carefully.Do not take nonprescription omeprazole for immediate relief of heartburn symptoms. It may take 1 to 4 days for you to feel the full benefit of the medication. Call your doctor if your symptoms get worse or do not improve after 14 days or if your symptoms return sooner than 4 months after you finish your treatment. Do not take nonprescription omeprazole for longer than 14 days or treat yourself with omeprazole more often than once every 4 months without talking to your doctor. Continue to take omeprazole even if you feel well. Do not stop taking prescription omeprazole without talking to your doctor. If your condition does not improve or gets worse, call your doctor. Ask your pharmacist or doctor for a copy of the manufacturer's information for the patient.",
  },
  {
    productId: 40,
    name: "Adapen gel",
    categoryName: "ANTI ACNE",
    activeIngredient: "Adapalene ",
    rating: 47,
    star: 4,
    price: "16.48",
    type: "tube",
    typeName: "pill",
    ManufacturedBy: "Any on stock available manufacture.",
    image: adapenGel,
    productCount: 30,
    productVariants: [
      {
        mg: "0.1% w/w 15",
        unit: "g",
        bottle: [
          { count: 1, price: 30.37, pricePerBottle: 30.37 },
          { count: 2, price: 45.93, pricePerBottle: 22.97 },
          { count: 4, price: 77.04, pricePerBottle: 19.26 },
          { count: 8, price: 139.26, pricePerBottle: 17.41 },
          { count: 16, price: 263.7, pricePerBottle: 16.48 },
        ],
      },
    ],
    prescription:
      "Adapalene is used to treat acne. Adapalene is in a class of medications called retinoid-like compounds. It works by stopping pimples from forming under the surface of the skin.",
    howToUse:
      "Prescription adapalene comes as a gel, a solution (liquid), and a cream to apply to the skin. The solution comes in a glass bottle with an applicator and as individual pledgets (medicated wipes for one time use). Nonprescription (over the counter) adapalene comes as a gel to apply to the skin. Adapalene is usually applied once a day at bedtime. Follow the directions on your prescription label or the package label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Apply adapalene exactly as directed. Do not apply more or less of it or apply it more often than prescribed by your doctor or stated on the package. Applying more adapalene or applying adaplene more often than recommended will not speed up or improve results, but it may irritate your skin. Adapalene controls acne but does not cure it. Your acne may get worse during the first few weeks of treatment, and it may take 8 to 12 weeks or longer before you feel the full benefit of adapalene. Pimples can take 6 to 8 weeks to form under the skin, and during the first weeks of your treatment, adapalene may bring these pimples to the skin surface. Continue to use adapalene even if your acne worsens or you do not see much improvement at first. Do not apply adapalene to skin that is sunburned, broken, or covered with eczema (a skin disease). If you have any of these conditions, do not apply adapalene until your skin has healed. Be careful not to get adapalene in your eyes, nose, or mouth. If you do get adapalene in your eyes, wash them with plenty of water and call your doctor. Your eyes may become irritated, swollen, or infected.",
    additionalDetials:
      "Gently wash the affected skin with a mild soap or soapless cleanser and pat dry with a soft towel. Do not use harsh or abrasive cleansers, and do not scrub your skin vigorously. Ask your doctor or pharmacist to recommend a gentle cleanser. If you are using the gel or cream, use your fingers to spread a thin film of medication over the affected area. If you are using a pledget, remove it from the foil pouch and gently wipe the affected area. If you are using the glass bottle of solution, apply a thin layer to the affected area using the applicator provided. Adapalene should be applied to the entire affected area, not only to a single pimple or spot. You may feel a slight warmth or stinging in the place where you applied adapalene. This feeling is normal and should go away by itself in a short time. If you used a pledget, discard it after use. Do not save it to use again.",
  },
];

export const category = [
  "AIDS or HIV Treatment",
  "ANESTHETICS",
  "ANTI VIRAL",
  "ANTI-ACIDITY",
  "ANTI-ACNE",
  "ANTI-ALLERGIC OR ASTHMA",
  "ANTI-DEPRESSANT",
  "ANTI-DIABETIC",
  "ANTI-FUNGUS",
  "ANTI-HAIR LOSS",
  "ANTI-HERPES",
  "ANTI-MUSCULAR DYSTROPHY",
  "ANTIBIOTICS",
  "ANTIOXIDANT",
  "BLOOD PRESSURE",
  "CHOLESTEROL",
  "ERECTILE DYSFUNCTION",
  "EYE CARE",
  "GASTROINTESTINAL",
  "GENERAL HEALTH",
  "HEALTHY BONES",
  "HEPATITIS B",
  "MEN`S HEALTH",
  "PAIN RELIEF",
  "PREMATURE EJACULATION",
  "SKIN CARE",
  "SLEEPING AID",
  "VITAMINS",
  "WEIGHT LOSS",
  "WOMEN'S HEALTH",
];

// ANESTHETICS
// ANTI VIRAL
// ANTI-ACIDITY
// ANTI-ACNE
// ANTI-ALLERGIC OR ASTHMA
// ANTI-DEPRESSANT
// ANTI-DIABETIC
// ANTI-FUNGUS
// ANTI-HAIR LOSS
// ANTI-HERPES
// ANTI-MUSCULAR DYSTROPHY
// ANTIBIOTICS
// ANTIOXIDANT
// BLOOD PRESSURE
// CHOLESTEROL
// ERECTILE DYSFUNCTION
// EYE CARE
// GASTROINTESTINAL
// GENERAL HEALTH
// HEALTHY BONES
// HEPATITIS B
// MEN`S HEALTH
// PAIN RELIEF
// PREMATURE EJACULATION
// SKIN CARE
// SLEEPING AID
// VITAMINS
// WEIGHT LOSS
// WOMEN'S HEALTH
// Refund and Shipping policy
