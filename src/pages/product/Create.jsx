import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllProduct } from "../../features/product/productSlice";
import Select from "react-select";
import { useFormField } from "../../hooks/useFormField";
import "./Create.css";

const Create = () => {
  const [productType, setProductType] = useState("simple product");
  const { message, error, tag, loader, category, brand } =
    useSelector(getAllProduct);

  const [catSelected, setCatSelected] = useState([]);

  const { handleInputChange, input, formReset } = useFormField({
    name: "",
    productType: "",
    brand: "",
    shortDesc: "",
    longDesc: "",
    regularPrice: "",
    salePrice: "",
    stock: "",
    link: "",
  });

  console.log(input);

  const handleProductType = (e) => {
    setProductType(e.target.value);
  };

  const [tags, setTags] = useState(null);
  console.log(tags);
  let tagOptions = [];
  tag?.forEach((item) => {
    tagOptions.push({ value: item._id, label: item.name });
  });

  const handleCat = (e) => {
    const selected = [...catSelected];
    if (catSelected.includes(e.target.value)) {
      selected.splice(selected.indexOf(e.target.value), 1);
    } else {
      selected.push(e.target.value);
    }

    setCatSelected(selected);
  };

  console.log(catSelected);
  return (
    <>
      <PageHeader title="Create Product" />

      <div className="row">
        <div className="col-md-12">
          <Link className="btn btn-primary mb-2" to="/product">
            All Products
          </Link>
          <br />
          <div class="row">
            <div class="col-xl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h4 class="card-title">Basic Form</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Product Name
                      </label>
                      <div class="col-lg-9">
                        <input
                          type="text"
                          name="name"
                          value={input.name}
                          onChange={handleInputChange}
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Product Type
                      </label>
                      <div class="col-lg-9">
                        <select
                          name=""
                          className="form-control"
                          id=""
                          onChange={(e) => handleProductType(e)}
                        >
                          <option value="simple product">Simple Product</option>
                          <option value="variable product">
                            Variable Product
                          </option>
                          <option value="group product">Group Product</option>
                          <option value="external product">
                            External Product
                          </option>
                        </select>
                      </div>
                    </div>
                    {/* start action with product type  */}
                    {productType === "simple product" && (
                      <div className="bg-secondary p-5 text-white mb-3">
                        <div class="form-group row">
                          <label class="col-lg-3 col-form-label">
                            Regular Price
                          </label>
                          <div class="col-lg-9">
                            <input
                              type="text"
                              class="form-control"
                              name="regularPrice"
                              value={input.regularPrice}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-lg-3 col-form-label">
                            Sale Price
                          </label>
                          <div class="col-lg-9">
                            <input
                              type="text"
                              class="form-control"
                              name="salePrice"
                              value={input.salePrice}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-lg-3 col-form-label">Stock</label>
                          <div class="col-lg-9">
                            <input
                              type="text"
                              class="form-control"
                              name="stock"
                              value={input.stock}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {productType === "variable product" && (
                      <>
                        <h1>Variable product</h1>
                      </>
                    )}
                    {productType === "group product" && (
                      <>
                        <h1>Group product</h1>
                      </>
                    )}
                    {productType === "external product" && (
                      <div className="bg-success p-5 text-white mb-5">
                        <div class="form-group row">
                          <label class="col-lg-3 col-form-label">
                            Regular Price
                          </label>
                          <div class="col-lg-9">
                            <input
                              type="text"
                              class="form-control"
                              name="regularPrice"
                              value={input.regularPrice}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-lg-3 col-form-label">
                            Sale Price
                          </label>
                          <div class="col-lg-9">
                            <input
                              type="text"
                              class="form-control"
                              name="salePrice"
                              value={input.salePrice}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-lg-3 col-form-label">Stock</label>
                          <div class="col-lg-9">
                            <input
                              type="text"
                              class="form-control"
                              name="stock"
                              value={input.stock}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-lg-3 col-form-label">
                            Product Link
                          </label>
                          <div class="col-lg-9">
                            <input
                              type="text"
                              class="form-control"
                              name="link"
                              value={input.link}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {/* end action with product type  */}
                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Short Description
                      </label>
                      <div class="col-lg-9">
                        <textarea
                          className="form-control"
                          name="shortDesc"
                          value={input.shortDesc}
                          onChange={handleInputChange}
                          id=""
                          rows="2"
                        ></textarea>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Long Description
                      </label>
                      <div class="col-lg-9">
                        <textarea
                          className="form-control"
                          name="longDesc"
                          value={input.longDesc}
                          onChange={handleInputChange}
                          id=""
                          rows="5"
                        ></textarea>
                      </div>
                    </div>

                    <div class="text-right">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-xl-6 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h4 class="card-title">Product Data</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Product Photos
                      </label>
                      <div class="col-lg-9">
                        <div className="product_photos d-flex">
                          <div className="product_phots_item ">
                            <button>
                              <i className="fa fa-trash"></i>
                            </button>
                            <img
                              style={{
                                width: "100%",
                                height: "200px",
                                borderRadius: "5px",
                                marginBottom: "5px",
                              }}
                              src="https://www.treehugger.com/thmb/F5G8zaALRp7rvgWqDVT13t9pKY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-scarlet-macaw-flying-in-mid-air-634869043-f360b379b8c44a28a052b41d99adc2a7.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product_phots_item  ">
                            <button>
                              <i className="fa fa-trash"></i>
                            </button>
                            <img
                              style={{
                                width: "100%",
                                height: "200px",
                                borderRadius: "5px",
                                marginBottom: "5px",
                              }}
                              src="https://www.treehugger.com/thmb/F5G8zaALRp7rvgWqDVT13t9pKY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-scarlet-macaw-flying-in-mid-air-634869043-f360b379b8c44a28a052b41d99adc2a7.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product_phots_item ">
                            <button>
                              <i className="fa fa-trash"></i>
                            </button>
                            <img
                              style={{
                                width: "100%",
                                height: "200px",
                                borderRadius: "5px",
                                marginBottom: "5px",
                              }}
                              src="https://www.treehugger.com/thmb/F5G8zaALRp7rvgWqDVT13t9pKY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-scarlet-macaw-flying-in-mid-air-634869043-f360b379b8c44a28a052b41d99adc2a7.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <input type="file" multiple class="form-control" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Product Categories
                      </label>
                      <div class="col-lg-9">
                        {category?.map((item, index) => (
                          <label key={index} className="d-block">
                            <input
                              type="checkbox"
                              value={item._id}
                              onChange={(e) => handleCat(e)}
                              checked={
                                catSelected.includes(item._id) ? true : false
                              }
                            />{" "}
                            {item.name}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Product Brands
                      </label>
                      <div class="col-lg-9">
                        <select
                          name="brand"
                          onChange={handleInputChange}
                          id=""
                          className="form-control"
                        >
                          <option value="">--Select--</option>
                          {brand?.map((item, index) => (
                            <option key={index} value={item._id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-lg-3 col-form-label">
                        Product Tags
                      </label>
                      <div class="col-lg-9">
                        <Select
                          value={tags}
                          onChange={(tags) => setTags(tags)}
                          options={tagOptions}
                          isMulti
                        />
                      </div>
                    </div>

                    <div class="text-right">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
