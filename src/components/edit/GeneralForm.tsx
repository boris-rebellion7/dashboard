import React from "react";
import MDEditor from '@uiw/react-md-editor';

type Props = {
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>;
};

const GeneralForm: React.FC<Props> = ({ data, setData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleMarkdownChange = (value?: string) => {
        setData(prev => ({ ...prev, description: value || '' }));
    };

    return (
        <section className="section-spacing bg-white">
            <h2 className="text-18 font-lexendBold mb-6">General</h2>

            <div className="mb-7">
                <label className="block font-lexendBold mb-2">
                    Product Name <span className="text-red">*</span>
                </label>
                <input
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    className=""
                />
                <span className="text-12 text-gray mt-1 block">
                    A product name is required and recommended to be unique.
                </span>
            </div>

            <div className="mb-7">
                <label className="block font-lexendBold mb-2">Description</label>
                <div data-color-mode="light">
                    <MDEditor
                        value={data.description}
                        onChange={handleMarkdownChange}
                        height={230}
                        preview="edit"
                        hideToolbar={false}
                        enableScroll={true}
                    />
                </div>
                <span className="text-12 text-gray mt-1 block">
                    Set a description to the product for better visibility.
                </span>
            </div>

            <div className="mb-7">
                <label className="block font-lexendBold mb-2">
                    Product Brand
                </label>

                <input
                    name="brand"
                    value={data.brand}
                    onChange={handleChange}
                    className=""
                />
            </div>

            <div className="flex gap-8 mb-7">
                <div className="w-1/2">
                    <label className="block font-lexendBold mb-2">
                        SKU
                    </label>

                    <input
                        name="sku"
                        value={data.sku}
                        onChange={handleChange}
                        className=""
                    />
                </div>

                <div className="w-1/2">
                    <label className="block font-lexendBold mb-2">
                        Stock
                    </label>

                    <input
                        name="stock"
                        value={data.stock}
                        onChange={handleChange}
                        className=""
                    />
                </div>
            </div>

            <div className="flex gap-8 mb-7">
                <div className="w-1/2">
                    <label className="block font-lexendBold mb-2">
                        Width
                    </label>

                    <input
                        name="width"
                        value={data.dimensions.width}
                        onChange={handleChange}
                        className=""
                    />
                </div>

                <div className="w-1/2">
                    <label className="block font-lexendBold mb-2">
                        Height
                    </label>

                    <input
                        name="height"
                        value={data.dimensions.height}
                        onChange={handleChange}
                        className=""
                    />
                </div>
            </div>

            <div className="flex gap-8">
                <div className="w-1/2">
                    <label className="block font-lexendBold mb-2">
                        Warranty
                    </label>

                    <input
                        name="warranty"
                        value={data.warrantyInformation}
                        onChange={handleChange}
                        className=""
                    />
                </div>

                <div className="w-1/2">
                    <label className="block font-lexendBold mb-2">
                        Shipping
                    </label>

                    <input
                        name="shipping"
                        value={data.shippingInformation}
                        onChange={handleChange}
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};

export default GeneralForm;
