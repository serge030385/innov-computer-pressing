import { useEffect, useMemo, useState } from "react";
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import CheckoutForm from "./components/CheckoutForm";
import Confirmation from "./components/Confirmation";
import Hero from "./components/Hero";
import products from "./data/products.json";
import { useCart } from "./hooks/useCart";
import {
  DEFAULT_LANGUAGE,
  getDictionary,
  LANGUAGE_STORAGE_KEY,
  translations,
} from "./i18n/translations";

function getInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return translations[storedLanguage] ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function normalize(value, locale) {
  return value
    .toLocaleLowerCase(locale)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function localize(value, language) {
  if (!value || typeof value !== "object") {
    return value || "";
  }

  return value[language] || value[DEFAULT_LANGUAGE] || "";
}

function localizeProduct(product, language, t) {
  return {
    ...product,
    displayName: localize(product.name, language),
    displayDescription: localize(product.description, language),
    categoryLabel: t.categories[product.category],
    stockLabel: t.stock[product.stock],
  };
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [order, setOrder] = useState(null);
  const cart = useCart(products);
  const t = getDictionary(language);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const localizedProducts = useMemo(
    () => products.map((product) => localizeProduct(product, language, t)),
    [language, t]
  );

  const localizedCartItems = useMemo(
    () => cart.items.map((item) => localizeProduct(item, language, t)),
    [cart.items, language, t]
  );

  const filteredProducts = useMemo(() => {
    const query = normalize(search.trim(), t.locale);

    return localizedProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const searchableText = normalize(
        `${product.displayName} ${product.displayDescription} ${product.categoryLabel}`,
        t.locale
      );

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, localizedProducts, search, t.locale]);

  function handleAddToCart(product) {
    const added = cart.addToCart(product);

    if (added) {
      setOrder(null);
      window.setTimeout(() => {
        document
          .getElementById("panier")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }

  function handleCheckout() {
    setShowCheckout(true);
    window.setTimeout(() => {
      document
        .getElementById("commande")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function handleSubmitOrder(form) {
    const nextOrder = {
      ...form,
      language,
      items: localizedCartItems.map((item) => ({
        id: item.id,
        image: item.image,
        name: item.displayName,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.subtotal,
      })),
      total: cart.total,
    };

    setOrder(nextOrder);
    window.setTimeout(() => {
      document
        .getElementById("confirmation")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function handleNewOrder() {
    cart.clearCart();
    setOrder(null);
    setShowCheckout(false);
    window.setTimeout(() => {
      document
        .getElementById("catalogue")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <main className="min-h-screen bg-white">
      <Hero
        cartCount={cart.itemCount}
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />
      <Catalog
        activeCategory={activeCategory}
        filteredProducts={filteredProducts}
        language={language}
        onAddToCart={handleAddToCart}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearch}
        search={search}
        t={t}
      />
      <Cart
        items={localizedCartItems}
        language={language}
        onCheckout={handleCheckout}
        onRemove={cart.removeFromCart}
        onUpdateQuantity={cart.updateQuantity}
        t={t}
        total={cart.total}
      />
      {showCheckout && (
        <CheckoutForm
          items={localizedCartItems}
          language={language}
          onSubmit={handleSubmitOrder}
          t={t}
          total={cart.total}
        />
      )}
      <Confirmation
        language={language}
        onNewOrder={handleNewOrder}
        order={order}
        t={t}
      />
    </main>
  );
}
