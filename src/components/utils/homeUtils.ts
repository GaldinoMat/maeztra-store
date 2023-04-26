import HeroBanner from "../../assets/HeroBanner.svg";

import WorldLogo from "../../assets/World.svg";
import HouseLogo from "../../assets/House.svg";
import RefundLogo from "../../assets/Refund.svg";
import DiscountLogo from "../../assets/Discount.svg";
import ShippingLogo from "../../assets/Shipping.svg";

import Comma from "../../assets/comma.svg";
import Melissa from "../../assets/melissa.svg";
import Forever21 from "../../assets/forever21.svg";
import Zara from "../../assets/zara.svg";
import AnnTaylor from "../../assets/anntaylor.svg";

import Dress1 from "../../assets/dress1.svg";
import Dress2 from "../../assets/dress2.svg";

import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Instagram from "../../assets/Instagram.svg";
import youtube from "../../assets/youtube.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import visa2 from "../../assets/visa2.svg";
import mastercard2 from "../../assets/mastercard2.svg";

export const HeroArray = [
  {
    Text: "Confiras os melhores looks para combinar com você nesse Outono",
    TitleText: "Promoções de Outono",
    imageSRC: HeroBanner,
    AnchorLink: "/",
    AnchorText: "Conferir",
  },
  {
    Text: "Confiras os melhores looks para combinar com você nesse Outono",
    TitleText: "Promoções de Verão",
    imageSRC: HeroBanner,
    AnchorLink: "/",
    AnchorText: "Conferir",
  },
  {
    Text: "Confiras os melhores looks para combinar com você nesse Outono",
    TitleText: "Promoções de Inverno",
    imageSRC: HeroBanner,
    AnchorLink: "/",
    AnchorText: "Conferir",
  },
];

export const AttractionArray = [
  {
    imgSRC: WorldLogo,
    AttractionTitle: "Produtos importados",
    AttractionText: "Produto de Alta Qualidade",
    isFirst: true,
  },
  {
    imgSRC: HouseLogo,
    AttractionTitle: "Estoque no Brazil",
    AttractionText: "Produtos mais perto de você!",
  },
  {
    imgSRC: RefundLogo,
    AttractionTitle: "Trocas Garantidas",
    AttractionText: "Trocas em até 48 horas, vejas as regras",
  },
  {
    imgSRC: DiscountLogo,
    AttractionTitle: "Ganhe 5% off",
    AttractionText: "Pagando à vista no Cartão",
  },
  {
    imgSRC: ShippingLogo,
    AttractionTitle: "Frete Grátis",
    AttractionText: "Em compras acima de R$ 499,00",
    isLast: true,
  },
];

export const iconsArr = [
  Facebook,
  Linkedin,
  Instagram,
  youtube,
  visa,
  mastercard,
  visa2,
  mastercard2,
];

export const brandsArray = [
  { src: Comma, isFirst: true },
  { src: Melissa },
  { src: Forever21 },
  { src: Zara },
  { src: AnnTaylor, isLast: true },
];

export const productArray = [
  {
    productSRC: Dress1,
    productAlt: "A white blouse matching with a brown buttoned skirt",
    productPrice: 500,
    productTitle: "Faux Suede Mini Skirt",
    isFirst: true,
    productSKUs: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
    productDesc:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
  },
  {
    productSRC: Dress2,
    productAlt: "A white blouse matching with a black floral skirt",
    productPrice: 320,
    productTitle: "Ruched Rose Print Mini Skirt",
    productSKUs: ["#353535", "#D84E4B", "#CFC9B0", "#EAE9E5"],
    productDesc:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
  },
  {
    productSRC: Dress1,
    productAlt: "A white blouse matching with a brown buttoned skirt",
    productPrice: 501,
    productTitle: "Faux Suede Mini Skirt",
    productSKUs: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
    productDesc:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
  },
  {
    productSRC: Dress2,
    productAlt: "A white blouse matching with a black floral skirt",
    productPrice: 321,
    productTitle: "Ruched Rose Print Mini Skirt",
    productSKUs: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
    productDesc:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
  },
  {
    productSRC: Dress1,
    productAlt: "A white blouse matching with a brown buttoned skirt",
    productPrice: 502,
    productTitle: "Faux Suede Mini Skirt",
    productSKUs: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
    productDesc:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
  },
  {
    productSRC: Dress2,
    productAlt: "A white blouse matching with a black floral skirt",
    productPrice: 322,
    isLast: true,
    productTitle: "Ruched Rose Print Mini Skirt",
    productSKUs: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
    productDesc:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
  },
];
