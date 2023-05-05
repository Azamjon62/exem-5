

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__section">
          <div className="checkout__section__title">
            <p>Оформление заказа</p>
          </div>
          <div className="checkout__section__flex">
            <div className="checkout__section__flex__courierDelivery">
              <div>
                <p>Доставка курьером</p>
                <span> 499 ₸</span>
              </div>
            </div>
            <div className="checkout__section__flex__yourOrder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
