"use client";

import { Button } from "@/components/ui/button";
import { useGeltAllProductsQuery } from "@/redux/api/productApi/productApi";
import TrForm from "@/components/Form/TrForm";
import TrSelect from "@/components/Form/inputs/TrSelect";
import TrInput from "@/components/Form/inputs/TrInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddProductInOrderMutation } from "@/redux/api/orderApi/orderApi";

import { globalErrorHandler } from "@/utils/globalErrorHandler";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const submitProductSchema = z.object({
  doType: z.string({ message: "Do Type is required" }),
  productCode: z.string({ message: "Product  is required" }).min(6),
  orderId: z.string({ message: "Order id is required" }),
  quantity: z
    .string({ message: "Quantity is required" })
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value > 0, {
      message: "Quantity must be a positive number.",
    }),
});

const OrderForm = ({ orderId }: { orderId: string }) => {
  console.log(orderId)
  const { data: allProductsData } = useGeltAllProductsQuery(undefined);

  const [addProduct, { isLoading: addingProduct }] =
    useAddProductInOrderMutation();
  type dataType = z.infer<typeof submitProductSchema>;

  const orderItemOption = allProductsData?.data?.map((item) => {
    return { value: item?.productCode, label: item?.name };
  });

  const dotype = [
    { value: "confirm", label: "Confirm Do" },
    { value: "draft", label: "Draft" },
  ];

  const handleSubmit = async (data: dataType) => {
    console.log(data)
    try {
      const res = await addProduct(data).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      globalErrorHandler(error);
    }
  };

  const defaultValue = {
    orderId: orderId,
    dotype: "confirm",
  };

  return (
    <TrForm
      className="w-full mb-3"
      onSubmit={handleSubmit}
      resolver={zodResolver(submitProductSchema)}
      defaultValues={defaultValue}
    >
      <div className="sm:flex items-start gap-2 w-full">
        <div className="sm:grid w-full grid-cols-3 gap-3">
          <div>
            <TrSelect
              name="doType"
              label="Do Type"
              isMulti={false}
              placeholder="Select Do Type"
              className="w-full"
              options={dotype}
              selectClass="w-full"
            />
          </div>
          <div>
            <TrSelect
              name="productCode"
              label="Item name"
              isMulti={false}
              placeholder="Select Item"
              className="w-full"
              options={orderItemOption || []}
              selectClass="w-full"
            />
          </div>

          <div>
            <TrInput
              name="quantity"
              label="Qty"
              placeholder="Order qty"
              type="number"
            />
          </div>
          <div className="hidden">
            <TrInput
              name="orderId"
              label="Order Id"
              placeholder="Order Id"
              type="text"
            />
          </div>
        </div>
        <Button disabled={addingProduct} type="submit">
          {addingProduct && <Loader2 className="animate-spin" />}Submit
        </Button>
      </div>
    </TrForm>
  );
};

export default OrderForm;
