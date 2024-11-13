import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const OrderForm = () => {
  return (
    <form className="w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Label htmlFor="doType" className="text-sm font-medium">
            Do Type<span className="text-red-500">*</span>
          </Label>
          <Select required>
            <SelectTrigger id="doType" className="w-full">
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="type1">Type 1</SelectItem>
              <SelectItem value="type2">Type 2</SelectItem>
              <SelectItem value="type3">Type 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="code" className="text-sm font-medium">
            Code / Name<span className="text-red-500">*</span>
          </Label>
          <Input
            id="code"
            placeholder="Item Code / Name"
            required
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="qty" className="text-sm font-medium">
            Qty<span className="text-red-500">*</span>
          </Label>
          <Input
            id="qty"
            placeholder="Order Qty"
            type="number"
            required
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="noteType" className="text-sm font-medium">
            Note Type<span className="text-red-500">*</span>
          </Label>
          <Select required>
            <SelectTrigger id="noteType" className="w-full">
              <SelectValue placeholder="Select Note Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="note1">Note Type 1</SelectItem>
              <SelectItem value="note2">Note Type 2</SelectItem>
              <SelectItem value="note3">Note Type 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" className="my-5">
        Submit
      </Button>
    </form>
  );
};

export default OrderForm;
