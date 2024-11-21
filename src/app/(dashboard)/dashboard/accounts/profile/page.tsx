import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";

const ProfilePage = () => {
  const data: {
    name: string;
    profileUrl: string;
    userId: string;
    mobileNumber: string;
    email: string;
    info: { label: string; value: string; url?: string }[];
  } = {
    name: "M/S Masnun Plastic Gallery. [TEL Furniture]",
    email: "exemple@email.com",
    userId: "834384",
    mobileNumber: "0186513262",
    profileUrl: "#",

    info: [
      {
        label: "Master ID",
        value: "Update your Master NID, Contact with Help Line",
        url: "/update-master-id",
      },
      {
        label: "NID",
        value: "Update your NID, Contact with Help Line",
        url: "/update-nid",
      },
      { label: "Type", value: "Distributor" },
      { label: "Class", value: "Retailing Sales" },
      { label: "Group", value: "TEL Furniture" },
      { label: "Zone", value: "M.Bazar" },
      { label: "Base", value: "Madhabpur" },
      { label: "TSM", value: "01844601104" },
      { label: "Owner", value: "Md.Monir Ahmed Chowdhury" },
      { label: "Mobile", value: "01716685540" },
      { label: "Address", value: "Korora Bazer, Noeapara" },
    ],
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full">
        <Card className="max-w-2xl mx-auto shadow-lg ">
          <CardHeader className="flex flex-col items-center space-y-4 pb-2 ">
            <div className="relative w-24 h-24">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="Logo"
                layout="fill"
                className="rounded-full border-4 border-primary"
              />
              <Badge className="absolute bottom-0 right-0" variant="secondary">
                WD
              </Badge>
            </div>
            <div className="text-center">
              <CardTitle className="md:text-2xl lg:text-3xl text-xl font-bold">
                {data?.userId}
              </CardTitle>
              <CardDescription className="md:text-sm lg:text-lg mt-1 text-xs  ">
                {data?.name}
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <LinkButton
                href={`tel:${data?.mobileNumber}`}
                variant={"outline"}
                size={"sm"}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </LinkButton>
              <LinkButton
                href={`mailto:${data?.email}`}
                variant="outline"
                size="sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </LinkButton>
            </div>
          </CardHeader>
          <CardContent>
            <Separator className="my-4" />
            <div className="grid gap-4">
              {data?.info?.map((item, index) => (
                <InfoItem
                  key={index}
                  label={item.label}
                  value={item.value}
                  url={item.url}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
function InfoItem({
  label,
  value,
  url,
}: {
  label: string;
  value: string;
  url?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium text-muted-foreground text-sm grow-[1] md:text-base">
        {label}
      </span>
      {url ? (
        <Link
          href={url}
          className="text-primary hover:underline flex items-center text-xs text-end md:text-base"
        >
          {value}
          <ExternalLink className="w-4 h-4 ml-1 hidden md:inline" />
        </Link>
      ) : (
        <span className="font-semibold text-sm text-end md:text-base">
          {value}
        </span>
      )}
    </div>
  );
}
