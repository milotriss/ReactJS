import "./products.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Products = (): JSX.Element => {
  return (
    <section className="productGroup">
      <figure className="products">
        <img src="../../../asset/img/Bread & Olives.jpeg" alt="" />
        <figcaption className="productsInfo">
          <span className="productsName">Products Name</span>
          <div className="productsDesc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              esse numquam ipsa voluptas alias ullam fugiat aut nisi, soluta
              suscipit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              esse numquam ipsa voluptas alias ullam fugiat aut nisi, soluta
              suscipit.
            </p>
            <div className="productsAction">
              <span className="productsPrice">300000 VND</span>
              <div className="productsAdd">
                <IoIosArrowBack className="iconProductsAdd"/>
                <span>0</span>
                <IoIosArrowForward className="iconProductsAdd"/>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="products">
        <img src="../../../asset/img/969cd1b6-7315-4be3-9544-2e4092aa9f35.jpeg" alt="" />
        <figcaption className="productsInfo">
          <span className="productsName">Products Name</span>
          <div className="productsDesc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              esse numquam ipsa voluptas alias ullam fugiat aut nisi, soluta
              suscipit.
            </p>
            <div className="productsAction">
              <span className="productsPrice">Price</span>
              <div className="productsAdd">
                <IoIosArrowBack />
                <span>Quantity</span>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="products">
        <img src="../../../asset/img/chocolate crossiant 巧克力可颂.jpeg" alt="" />
        <figcaption className="productsInfo">
          <span className="productsName">Products Name</span>
          <div className="productsDesc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              esse numquam ipsa voluptas alias ullam fugiat aut nisi, soluta
              suscipit.
            </p>
            <div className="productsAction">
              <span className="productsPrice">Price</span>
              <div className="productsAdd">
                <IoIosArrowBack />
                <span>Quantity</span>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="products">
        <img src="../../../asset/img/Rezept von Nima Hemmat-Azad_ Croissant _ Kochbücher & ihre besten Rezepte.jpeg" alt="" />
        <figcaption className="productsInfo">
          <span className="productsName">Products Name</span>
          <div className="productsDesc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              esse numquam ipsa voluptas alias ullam fugiat aut nisi, soluta
              suscipit.
            </p>
            <div className="productsAction">
              <span className="productsPrice">Price</span>
              <div className="productsAdd">
                <IoIosArrowBack />
                <span>Quantity</span>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Products;
