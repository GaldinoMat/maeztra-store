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

export const brandsArray = [
  { src: Comma, isFirst: true },
  { src: Melissa },
  { src: Forever21 },
  { src: Zara },
  { src: AnnTaylor, isLast: true },
];
