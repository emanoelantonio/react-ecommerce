import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { productData } from '../../dummyData';
import Chart from '../../components/chart/Chart';

import './product.css';

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://cdn.pixabay.com/photo/2021/02/13/03/30/airpods-6010254_960_720.jpg" alt="Apple AirPods" className="productInfoImg" />
                        <span className="productName">Apple AirPods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKye">id:</span>
                            <span className="productInfoValue">001</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKye">sales:</span>
                            <span className="productInfoValue">4002</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKye">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKye">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple AirPod' />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://cdn.pixabay.com/photo/2021/02/13/03/30/airpods-6010254_960_720.jpg" alt="" className="productUploadImg" />
                            <label fom="file">
                                <Publish/>
                            </label>
                            <input type="file" id='file' style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
