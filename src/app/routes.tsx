import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";

// 1. Original Pages
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Shop } from "./pages/Shop";
import { Mishti } from "./pages/Mishti";
import { MishtiNew } from "./pages/MishtiNew";
import { Journal } from "./pages/Journal";
import { JournalArticle } from "./pages/JournalArticle";
import { Dashboard } from "./pages/Dashboard";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import { ProductDetail } from "./pages/ProductDetail";
import { ServiceDetail } from "./pages/ServiceDetail";
import { DestinationPortal } from "./pages/DestinationPortal";
import { BookingReview } from "./pages/BookingReview";
import { BookingConfirmation } from "./pages/BookingConfirmation";
import { Partner } from "./pages/Partner";

// 2. New Pages
import { Mirror } from "../pages/Mirror";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home }, // <-- RESTORED: Luxury Spa is back as the homepage!
      { path: "services", Component: Services },
      { path: "shop", Component: Shop },
      { path: "mishti", Component: Mishti }, // <-- RESTORED: AI Scanner is back to the Mishti tab!
      { path: "mishti-new", Component: MishtiNew },
      { path: "journal", Component: Journal },
      { path: "journal/:id", Component: JournalArticle },
      { path: "dashboard", Component: Dashboard },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "order-confirmation", Component: OrderConfirmation },
      { path: "product/:id", Component: ProductDetail },
      { path: "service/:id", Component: ServiceDetail },
      { path: "destination/:id", Component: DestinationPortal },
      { path: "booking-review", Component: BookingReview },
      { path: "booking-confirmation", Component: BookingConfirmation },
      { path: "partner", Component: Partner },
      
      // New Routes
      { path: "the-mirror", Component: Mirror },
      { path: "about", Component: About },
    ],
  },
]);
