import "./products.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { products, IProduct, Carts } from "../../data/data";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";


const Products = (): JSX.Element => {
  const count:Carts[] = useSelector((state:any) => state.cart)
  

  const dispatch: Dispatch<any> = useDispatch()
  return (
    <section className="productGroup">
      {products.map((item: IProduct) => {
        let needProductCart = count.find((element:Carts) => element.id === item.id)
        return (
          <figure key={item.id} className="products">
            <img src={item.img} alt="" />
            <figcaption className="productsInfo">
              <span  className="productsName">{item.name}</span>
              <div className="productsDesc">
                <p>
                  {item.description}
                </p>
                <div className="productsAction">
                  <span className="productsPrice">{item.price}</span>
                  <div className="productsAdd">
                    <IoIosArrowBack 
                    onClick={() => {
                      dispatch({type: "REMOVE_CART", payload: item})
                    }}
                    className="iconProductsAdd" />
                    {needProductCart ? <span>{needProductCart?.quantity}</span> : <span>0</span>}
                    
                    <IoIosArrowForward 
                    onClick={() => {
                      dispatch({type: "ADD_CART", payload: item})
                    }}
                    
                      className="iconProductsAdd" />
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export default Products;
