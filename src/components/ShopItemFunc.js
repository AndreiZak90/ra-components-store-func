export default function ShopItemFunc(item) {
  return (
    <div class="main-content">
      <h2>{item.item.brand}</h2>
      <h1>{item.item.title}</h1>
      <h3>{item.item.description}</h3>
      <div class="description">{item.item.descriptionFull}</div>
      <div class="highlight-window mobile">
        <div class="highlight-overlay"></div>
      </div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">
          {item.item.currency}
          {item.item.price}.00
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
