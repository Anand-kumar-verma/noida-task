import bag from "../assets/bag.png";
import tote from "../assets/tote.png";
import laptop from "../assets/laptop.png";
import vanity from "../assets/vanity.png";
import duffle from "../assets/duffle.png";
import messenger from "../assets/messanger.png";
import sling from "../assets/slings.png";
import handle from "../assets/handle.png";

export const subcategories = [
    {
      label: "All Bags",
      icon: (
        <img
          src={bag}
          alt={"All Bags"}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Vanity Pouch",
      icon: (
        <img
          src={vanity}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Tote Bag",
      icon: (
        <img
          src={tote}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Duffle Bag",
      icon: (
        <img
          src={duffle}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Laptop Sleeve",
      icon: (
        <img
          src={laptop}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Messanger Bag",
      icon: (
        <img
          src={messenger}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Sling Bgs",
      icon: (
        <img
          src={sling}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Handbags",
      icon: (
        <img
          src={handle}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "All Bags",
      icon: (
        <img
          src={bag}
          alt={"All Bags"}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Vanity Pouch",
      icon: (
        <img
          src={vanity}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      label: "Tote Bag",
      icon: (
        <img
          src={tote}
          alt="Vanity Pouch"
          className="w-full h-full object-contain"
        />
      ),
    },
  ];
   export const subCategorySettings = {
      infinite: true,
      speed: 5000,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };