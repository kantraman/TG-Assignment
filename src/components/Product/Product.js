import React from 'react';
import Banner from './productbanner.jpg';
import Awards from './eenoo-page-awards.png';
import Bottle from './eeno-product.jpg';
import './Product.css'
import ProductInfo from './productinfo.json';
import OtherProducts from './products.json';

const Product = () => {
    return (
        <>
            <img className="img-fluid col-12" src={Banner} alt="Eeno Jin" />
            <div className="container eenoo-body">
                <div className="row justify-content-md-center mb-3">
                    <div className="col-sm-12 col-lg-9">
                        <h3 className="text-muted fw-bold mb-3">
                            eeNoo, From the old Scots tongue; eenoo – just now, at the present time, in a
                            short time, at once.
                        </h3>
                        <p className="lead fw-bold mb-3">
                            Scottish gin is at the forefront of a recent gin renaissance and so we thought
                            eeNoo a fine and fitting name for our gin, as the present time is the heyday of
                            gin production in Scotland.
                        </p>
                        <p>
                            When we crafted our gin, eeNoo, we wanted to create a flavour profile that encompassed
                            the essence of a traditional gin whilst embracing flavours of the Scottish Highlands.
                        </p>
                        <p>
                            eeNoo is distilled with Royal Deeside honey. The flavour profile of our honey is
                            unique to the local area and is made up of heather, willow herb and clover pollen.
                            To complement the honey we add heather flowers and other local botanicals. We forage a
                            percentage of our brambleberries, raspberries and rosehip from the Deeside area and
                            source the remainder from berry farms in Aberdeenshire and Angus. As Scottish juniper
                            is in a critical state of decline, we source the finest juniper from the Italian
                            highlands. We then add coriander seeds, angelica root, liquorice root, orange and
                            lemon peel to give our gin a traditional yet smooth fruity profile.
                        </p>
                        <p>
                            Water from an ancient spring in the Cairngorms National Park is added to the mix.
                            The water is some of the purest in the world and spends 50 years being gently filtered
                            through layers of underground rocks and crevices before becoming part of our gin.
                        </p>
                        <br />
                        <p>eeNoo – always time for gin</p>
                    </div>
                    <div className="col-sm-12 col-lg-3">
                        <div className="row">
                            <img src={Bottle} alt="Eeno Jin" className="img-fluid" />
                            <div className="price col-12">eenoo - Scottish Gin <br /> &#163; 35.00</div>
                        </div>
                        <div className="row">
                            <img src={Awards} alt="Eeno Jin" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row col-lg-9 table-responsive mb-3">
                    <table className="table ">
                        <thead className="table-dark">
                            <tr>
                                <th>Product ID </th>
                                <th>Batch</th>
                                <th>Distiller's Name</th>
                                <th>Bottling Time</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            {
                                ProductInfo.map(item => {
                                    return <ProductList productInfo={item} key={item.productId} />;
                                })
                            }
                        </tbody>
                    </table>
                    <h3 className="otherProductTitle">Our other products</h3>
                    <hr />
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {
                        OtherProducts.map(item=> {
                            return <OtherProduct productInfo={item} key={item.id} />;
                        })
                    }
                </div>
            </div>
            <footer className="bg-dark d-flex">
                <p className="align-self-center mx-auto text-white text-center">
                    Lost Loch Spirits Ltd. <br />
                    Unit 7, Deeside Activity Park, <br />
                    Dess, Aboyne AB34 5BD <br />
                    <small>Copyright&copy; 2021</small>
                </p>
                
            </footer>
        </>
    );
};

const ProductList = (props) => {
    const productInfo = props.productInfo;
    return (<>
        <tr>
            <td>{productInfo.productId}</td>
            <td>{productInfo.batchId}</td>
            <td>{productInfo.distillerName}</td>
            <td>{new Date (parseFloat(productInfo.bottlingTime)).toString().substring(0,24)}</td>
        </tr>
        </>
    );
};

const OtherProduct = (props) => {
    const product = props.productInfo
    return (
        <div className="col d-md-flex  mb-3">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title otherProductTitle">{product.pName}</h4>
                </div>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        {product.descr}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product;